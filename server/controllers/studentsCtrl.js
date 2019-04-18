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

}