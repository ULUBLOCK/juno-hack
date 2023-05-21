use cosmwasm_schema::cw_serde;

use cosmwasm_std::{Addr, Uint128};
use cw_storage_plus::{Item};

#[cw_serde]
pub struct State {
    pub creator: Addr,
    pub hackatons: Vec<Hackathon>,
    pub counter: u32,
}

#[cw_serde]
pub struct Hackathon{
    pub id: u32,
    pub owner:Addr,
    pub description: String,
    pub name: String,
    pub balance: Uint128,
    pub jury_1: Addr,
    pub jury_2: Addr,
    pub jury_3: Addr,
    pub teams: Vec<Team>,
    pub deadline: u64,
    pub team_counter: u32
}

#[cw_serde]
pub struct Team{
    pub id: u32,
    pub owner: Addr,
    pub project_score: u8,
    pub name: String,
    pub project_goal: String,
    pub project_desc: String,
    pub image: String,
    pub project_name: String,
    pub video_link: String,
    pub github_link: String,
}

#[cw_serde]
pub enum Category{
    DeFi,
    SocialFi,
    GameFi,
}

pub const CONFIG_KEY: &str = "config";
pub const CONFIG: Item<State> = Item::new(CONFIG_KEY);