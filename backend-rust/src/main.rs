// backend-rust/src/main.rs
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use serde_json::Value;

#[derive(Deserialize)]
struct Query {
    modelo: String,
}

#[get("/api/jogos")]
async fn jogos(query: web::Query<Query>) -> impl Responder {
    let url = match query.modelo.as_str() {
        "a" => "http://ia:8000/gerar/estatistico",
        "b" => "http://ia:8000/gerar/ia",
        _ => "http://ia:8000/gerar/estatistico",
    };

    let res = reqwest::get(url).await;

    if let Err(err) = res {
        return HttpResponse::InternalServerError().json(
            serde_json::json!({ "error": err.to_string() })
        );
    }

    let res = res.unwrap();

    let json: Result<Value, _> = res.json().await;

    match json {
        Ok(data) => HttpResponse::Ok().json(data),
        Err(_) => HttpResponse::InternalServerError().json(
            serde_json::json!({ "error": "Resposta inválida da IA" })
        ),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(jogos)
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
