require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const students = require('./controllers/studentsCtrl')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}`)
    })

})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/login')



app.get('/students-data', students.viewAllStudents)
app.get('/times', students.getTimeSlots)
app.get('/student-data/:id', students.viewStudent)

app.post('/students-data', students.addStudent)
app.post('/students-log', students.addLog)

