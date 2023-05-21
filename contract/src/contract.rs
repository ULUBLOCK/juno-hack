use cosmwasm_std::{
    coins, entry_point, BankMsg, Binary, DepsMut, Env, MessageInfo, Response, Uint128, Addr,SubMsg, WasmMsg, StdResult, to_binary, Deps,
};
use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg, QueryMsg};
use crate::state::{State, CONFIG, Hackathon, Team};

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, ContractError>{
    let state: State = State{
        creator: info.sender,
        hackatons: Vec::new(),
        counter: 0,
    };
    CONFIG.save(deps.storage, &state)?;

    Ok(Response::default())
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::CreateHackathon { 
            name, 
            balance,
            description,
            jury1, 
            jury2, 
            jury3, 
            deadline} => 
            create_hackathon(deps, env, info, name, balance, jury1, jury2, jury3, description,deadline),
        ExecuteMsg::ListHackathon {} => list_hackathon(deps, env, info),
        ExecuteMsg::CreateTeam {
            hackathon_id, 
            team_name, 
            project_goal, 
            project_desc, 
            image, 
            project_name, 
            video_link, 
            github_link, 
            project_score} => 
            create_team(
                deps, 
                hackathon_id, 
                team_name, 
                project_goal, 
                project_desc, 
                image, 
                info, 
                project_name, 
                video_link, 
                github_link, 
                project_score),
        ExecuteMsg::GetHackathonDetails { hackathon_id } => get_hackathon_details(hackathon_id, deps, env),
        ExecuteMsg::GetTeamDetails {team_id, hackathon_id} => get_team_details(team_id, hackathon_id, deps, env),
        ExecuteMsg::Vote { jury_score, team_id, hackathon_id } => Vote(jury_score, team_id, hackathon_id, deps, env, info),
        ExecuteMsg::CloseHackathon {hackathon_id} => close_hackathon(deps, env, info, hackathon_id),
    };
    Ok(Response::default())
}

pub fn create_hackathon(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    name: String,
    balance: Uint128,
    jury1: Addr,
    jury2: Addr,
    jury3: Addr,
    description: String,
    deadline: u64,
) ->  Result<Response, ContractError>{
    let mut state = CONFIG.load(deps.storage)?;
    let hackathon: Hackathon = Hackathon { 
        id: state.counter, 
        owner: info.sender,
        description: description,
        name: name, 
        balance: balance,
        jury_1: jury1,
        jury_2: jury2,
        jury_3: jury3,
        teams: Vec::new(),
        deadline: deadline,
        team_counter: 0,
    };
    state.hackatons.push(hackathon);
    state.counter += 1;
    CONFIG.save(deps.storage, &state)?;
    
    Ok(Response::default())
}

pub fn list_hackathon(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
) ->  Result<Response, ContractError>{
    let state = CONFIG.load(deps.storage)?;
    let hackathons: Vec<Hackathon> = state.hackatons.clone();
    let mut response = Response::new();

    for (index, hackathon) in hackathons.iter().enumerate() {
        response = response
            .add_attribute(format!("team_{}_name", index), hackathon.name.clone())
            .add_attribute(format!("team_{}_project_goal", index), hackathon.owner.clone())
            .add_attribute(format!("team_{}_project_desc", index), hackathon.deadline.to_string());
    }
    Ok(response)
}

fn get_hackathon_details(
    hackathon_id: u32,
    deps: DepsMut,
    _env: Env,
) -> Result<Response, ContractError> {
    // Logic to retrieve hackathon details
    let state = CONFIG.load(deps.storage)?;
    let hackathons: Vec<Hackathon> = state.hackatons.clone();

    // Check if the provided hackathon_id is within the valid range
    if let Some(hackathon) = hackathons.get(hackathon_id as usize) {
        let mut response = Response::new()
            .add_attribute("hackathon_id", hackathon_id.to_string())
            .add_attribute("hackathon_title", hackathon.name.clone())
            .add_attribute("hackathon_prize", hackathon.balance.clone())
            .add_attribute("jury_addr_1", hackathon.jury_1.to_string())
            .add_attribute("jury_addr_2", hackathon.jury_2.to_string())
            .add_attribute("jury_addr_3", hackathon.jury_3.to_string())
            .add_attribute("deadline", hackathon.deadline.to_string());

        for (index, team) in hackathon.teams.iter().enumerate() {
            response = response.add_attribute(format!("team_{}_name", index), team.name.clone())
                .add_attribute(format!("team_{}_project_goal", index), team.project_goal.clone())
                .add_attribute(format!("team_{}_project_desc", index), team.project_desc.clone())
                .add_attribute(format!("team_{}_image", index), team.image.clone())
                .add_attribute(format!("team_{}_project_name", index), team.project_name.clone())
                .add_attribute(format!("team_{}_video_link", index), team.video_link.clone())
                .add_attribute(format!("team_{}_github_link", index), team.github_link.clone());
        }

        Ok(response)
    } else {
        Err(ContractError::Error {})
    }
}

pub fn close_hackathon(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    hackathon_id: u32,
) ->  Result<Response, ContractError>{
    let state = CONFIG.load(deps.storage)?;
    let hackathons: Vec<Hackathon> = state.hackatons.clone();
    if let Some(hackathon) = hackathons.get(hackathon_id as usize) {
        distribute_prize(hackathon_id, deps, info, get_winning_team(&hackathon.teams));
        Ok(Response::default())
    }else {
        Err(ContractError::Error {})
    }
}

pub fn create_team(
    deps: DepsMut,
    hackathon_id: u32,
    team_name: String,
    project_goal: String,
    project_desc: String,
    image: String,
    info: MessageInfo,
    project_name: String,
    video_link: String,
    github_link: String,
    project_score:u8
) -> Result<Response, ContractError>{
    // Logic to create a team for a specific hackathon
    let mut state = CONFIG.load(deps.storage)?;

    let mut hackathons:Vec<Hackathon> = state.hackatons.clone();

    let hackathon = &mut hackathons[hackathon_id as usize];
    hackathon.team_counter += 1;
    // Create the team
    let team: Team = Team {
        id: 0,
        owner: info.sender,
        name: team_name,
        project_goal: project_goal,
        project_desc: project_desc,
        image: image,
        project_name: project_name,
        video_link: video_link,
        github_link: github_link,
        project_score:project_score,
    };

    // Add the team to the hackathon
    hackathon.teams.push(team);
    state.hackatons = hackathons;

    // Update the hackathons list in storage
    CONFIG.save(deps.storage, &state)?;

    Ok(Response::default())
}
    


fn get_team_details(
    team_id: u32,
    hackathon_id: u32,
    deps: DepsMut,
    _env: Env,
) -> Result<Response, ContractError> {
    // Logic to retrieve team details
    let mut state = CONFIG.load(deps.storage)?;

    let mut hackathons:Vec<Hackathon> = state.hackatons.clone();

    let hackathon = &mut hackathons[hackathon_id as usize];

    let teams: Vec<Team> = hackathon.teams.clone();

    // Check if the provided team_id is within the valid range
    if let Some(team) = teams.get(team_id as usize) {
        Ok(Response::new()
            .add_attribute("team_id", team_id.to_string())
            .add_attribute("team_name", team.name.clone())
            .add_attribute("project_goal", team.project_goal.clone())
            .add_attribute("project_desc", team.project_desc.clone())
            .add_attribute("image", team.image.clone())
            .add_attribute("project_name", team.project_name.clone())
            .add_attribute("video_link", team.video_link.clone())
            .add_attribute("github_link", team.github_link.clone()))
    } else {
        Err(ContractError::Error {})
    }
}

fn Vote(
    jury_score: u8,
    team_id: u32,
    hackathon_id: u32,
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
) -> Result<Response, ContractError> {
    let mut state = CONFIG.load(deps.storage)?;

    let mut hackathons: Vec<Hackathon> = state.hackatons.clone();

    if let Some(hackathon) = hackathons.get_mut(hackathon_id as usize) {
        if info.sender == hackathon.jury_1 || info.sender == hackathon.jury_2 || info.sender == hackathon.jury_3{
        let teams: &mut Vec<Team> = &mut hackathon.teams;
            if let Some(team) = teams.get_mut(team_id as usize) {
                team.project_score += jury_score;
            }
        }
    }
    // Save the updated hackathons vector back to storage
    state.hackatons = hackathons;
    CONFIG.save(deps.storage, &state)?;

    Ok(Response::default())
}

fn find_winning_team(teams: &[Team]) -> Option<&Team> {
    teams.iter().max_by_key(|team| team.project_score)
}

fn get_winning_team(teams: &[Team]) -> Addr {
    if let Some(winning_team) = find_winning_team(teams) {
        winning_team.owner.clone()
    } else {
        // Return a default address or handle the case where no winning team exists
        // Here, I'm returning an empty address as an example
        Addr::unchecked("")
    }
}

fn distribute_prize(
    hackathon_id: u32,
    deps: DepsMut,
    info: MessageInfo,
    winner: Addr,
) -> Result<Response, ContractError> {
    // Retrieve the hackathon details
    let state = CONFIG.load(deps.storage)?;
    let hackathons: Vec<Hackathon> = state.hackatons.clone();

    // Check if the provided hackathon_id is within the valid range
    if let Some(hackathon) = hackathons.get(hackathon_id as usize) {
        // Retrieve the teams for the hackathon
        let teams: Vec<Team> = hackathon.teams.clone();

        // Find the winning team
        if let Some(winning_team) = find_winning_team(&teams) {
            // Transfer the prize to the winning team
            let prize_amount = hackathon.balance;
            // Perform the prize transfer operation based on your contract's logic

            // Construct the response
            let response = Response::new()
                .add_attribute("hackathon_id", hackathon_id.to_string())
                .add_attribute("winning_team", winning_team.name.clone())
                .add_attribute("prize_amount", prize_amount.to_string())
                .add_attribute("winner_address", winner.clone());
            
            return Ok(response);
        } else {
            // No winning team found
            return Ok(Response::default())
        }
    } else {
        // Invalid hackathon ID
        return Err(ContractError::Error {})
    }
}

pub fn transfer(
    hackathon_id: u32,
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
) -> Result<Response, ContractError> {
    // Retrieve the hackathon details
    let state = CONFIG.load(deps.storage)?;
    let hackathons = state.hackatons.clone();

    // Check if the provided hackathon_id is within the valid range
    if let Some(hackathon) = hackathons.get(hackathon_id as usize) {
        // Retrieve the teams for the hackathon
        let teams = hackathon.teams.clone();

        // Find the winning team
        if let Some(winning_team) = find_winning_team(&teams) {
            // Transfer the prize from hackathon creator to team creator
            let prize_amount = hackathon.balance;
            let hackathon_creator = hackathon.owner.clone();
            let team_creator = winning_team.owner.clone();

            // Create the transfer message to send the prize amount
            let transfer_msg = BankMsg::Send {
                to_address: winning_team.owner.to_string(),
                amount: coins(hackathon.balance.into(), "TOKEN_SYMBOL"),
            };

            // Create the response indicating the prize distribution
            let mut response = Response::new()
                .add_message(transfer_msg)
                .add_attribute("hackathon_id", hackathon_id.to_string())
                .add_attribute("winning_team", winning_team.name.clone())
                .add_attribute("prize_amount", prize_amount.to_string())
                .add_attribute("hackathon_creator", hackathon_creator)
                .add_attribute("team_creator", team_creator);

            Ok(response)
        } else {
            // No winning team found
            return Err(ContractError::Error {})
        }
    } else {
        // Invalid hackathon ID
        return Err(ContractError::Error {})
    }
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::Config {} => to_binary(&CONFIG.load(deps.storage)?),
    }
}