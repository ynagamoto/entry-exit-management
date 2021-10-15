FROM golang:latest
RUN git clone https://github.com/munvei/entry-exit-management.git
WORKDIR entry-exit-management/gin/api
RUN go mod tidy
ENTRYPOINT go run main.go
