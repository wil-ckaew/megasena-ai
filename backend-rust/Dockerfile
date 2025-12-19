FROM rust:1.89
WORKDIR /app
COPY Cargo.toml .
COPY src ./src
RUN cargo build --release
EXPOSE 8080
CMD ["./target/release/backend-rust"]
