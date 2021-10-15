FROM golang:latest
RUN git clone https://github.com/munvei/entry-exit-management.git
WORKDIR entry-exit-management/api/gin
RUN go mod tidy
ENTRYPOINT go run main.go
