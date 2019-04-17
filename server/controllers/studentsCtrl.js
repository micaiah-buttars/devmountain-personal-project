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
    // updateStudent: async (req, res) => {
    //     const db = req.app.get('db')
    //     const {student_id, student_name, reminder_interval, on_task, on_task_desc, discouraged, discouraged_desc, replacement, replacement_desc} = req.body

    //     const result = await db.check_student_id(student_id)
    //     if(result[0]){

    //     }
    //     else if(!result[0]){
    //         db.create_student([student_name, reminder_interval, on_task, on_task_desc, discouraged, discouraged_desc, replacement, replacement_desc])
    //     }


    // }
    addStudent: async (req, res) => {
        const db = req.app.get('db')
        const {student_id, student_name, reminder_interval} = req.body
        console.log('req.body', req.body)

        const result = await db.view_student(student_id)
        console.log('result', result)
        if(result[0]){
            return res.status(200).send({message: 'Student already exists'})
        }
        const newStudent = await db.add_student([student_name, +reminder_interval])
        console.log('student', newStudent)
        res.status(200).send(newStudent)
    }
}