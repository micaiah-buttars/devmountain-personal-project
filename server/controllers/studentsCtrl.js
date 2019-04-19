module.exports = {
    viewAllStudents: (req, res) => {
        const db = req.app.get('db')

        db.view_all()
        .then(students => {
            res.status(200).send(students)
        })

    },

    viewStudent: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.view_student(id)
        .then(student => {
            res.status(200).send(student)
        })
    },
    addStudent: async (req, res) => {
        const db = req.app.get('db')
        const {student_id, student_name, reminder_interval} = req.body
        console.log(req.body)

        if(!student_id){
            db.add_student([student_name, reminder_interval])
                .then(student => {
                    res.status(200).send(student)
                }).catch(err => console.log('error', err))
        } else {
            db.update_student([student_name, reminder_interval, student_id])
                .then(student => {
                    res.status(200).send(student)
                }).catch(err => console.log('error', err))
        }
    } 

}