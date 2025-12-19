use axum::extract::Query;
use crate::models::QueryParams;

pub async fn gerar_jogos(Query(params): Query<QueryParams>) -> String {
    let modelo = params.modelo.unwrap_or("a".into());
    let url = format!("http://ia:8000/gerar?modelo={}", modelo);

    reqwest::get(url)
        .await
        .unwrap()
        .text()
        .await
        .unwrap()
}
