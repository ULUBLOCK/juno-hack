use crate::state::State;
use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Uint128, Addr};

#[cw_serde]
pub struct InstantiateMsg {
}

#[cw_serde]
pub enum ExecuteMsg {
    CreateHackathon{
        name:String,
        description: String,
        balance:Uint128,
        jury1: Addr,
        jury2: Addr,
        jury3: Addr,
        deadline: u64,
    },
    ListHackathon{},
    GetHackathonDetails{hackathon_id: u32},
    CloseHackathon{hackathon_id: u32},
    CreateTeam{
        hackathon_id: u32,
        team_name: String,
        project_goal: String,
        project_desc: String,
        image: String,
        project_name: String,
        video_link: String,
        github_link: String,
        project_score:u8
    },
    GetTeamDetails{
        team_id: u32,
        hackathon_id: u32,
    },
    Vote{
        jury_score: u8,
        team_id: u32,
        hackathon_id: u32
    },
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(ConfigResponse)]
    Config {},
}

// We define a custom struct for each query response
pub type ConfigResponse = State;