package module

import (
	"database/sql"
	// "fmt"
	// "time"
  "os"
	// "bytes"
	// "encoding/json"
	// "io/ioutil"
	// "net/http"
	// "strings"

	_ "github.com/go-sql-driver/mysql"
)

/*
type Log struct {
	Id   int       `json: id`
	Date time.Time `json: date`
	Msg  string    `json: msg`
}
*/

func DBConnect() (db *sql.DB) {
	// dbDriver := os.Getenv("DB_DRIVER")
  dbDriver := "mysql"
	dbUser := os.Getenv("DB_USER")
	dbPasswd := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	dbProtocol := os.Getenv("DB_PROTOCOL")
	dbOption := "?parseTime=true"
	db, err := sql.Open(dbDriver, dbUser+":"+dbPasswd+"@"+dbProtocol+"/"+dbName+dbOption)
	if err != nil {
		panic(err.Error())
	}
	return db
}
