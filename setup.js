let db = require('./config');



db.query(`CREATE TABLE IF NOT EXISTS UserTodo (
    id SERIAL PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
    password CHAR (60) NOT NULL,
    email VARCHAR (30) NOT NULL
  )`, (err, res) => {
    if (err){
        console.log(err)
    } else {
        console.log('create table UserTodo')
        db.query(`CREATE TABLE IF NOT EXISTS Todo (
        id SERIAL PRIMARY KEY,
        kegiatan VARCHAR (60),
        status INT DEFAULT 0,
        userId INT NOT NULL,
        FOREIGN KEY (userId) REFERENCES UserTodo(id) ON DELETE CASCADE    
            )`, (err, res) => {
              if(err){
                console.log(err.stack)
              } else {
                console.log('berhasil create table Todo')
              }
        })
    }
})
