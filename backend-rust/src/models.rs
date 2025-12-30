// backend-rust/src/models.rs
use serde::Deserialize;

#[derive(Deserialize)]
pub struct QueryParams {
    pub modelo: Option<String>,
}
