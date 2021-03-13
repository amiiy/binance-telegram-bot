const Database = require("better-sqlite3")

const db = new Database("./config/bot.db")

const getUser = function (userId, callback) {
  const resualt = db.prepare(`select * from users where id = ${userId}`).get()
  callback(resualt)
}

const setUser = function (user, callback) {}
