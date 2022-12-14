FROM rust:1.61.0 as builder
WORKDIR /usr/src

COPY . .

WORKDIR /usr/src/server

RUN cargo build --release

##################

FROM rust:1.61.0-slim

WORKDIR /usr/local/bin/hupe

COPY --from=builder /usr/src/server/target/release/ .
COPY --from=builder /usr/src/server/config.yaml .
COPY --from=builder /usr/src/server/log4rs.yaml .

RUN chmod 755 server
CMD ["./server"]
