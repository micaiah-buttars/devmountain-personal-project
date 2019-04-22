module.exports = {
    viewAllStudents: (req, res) => {
        const db = req.app.get('db')

        db.view_all()
        .then(students => {
            res.status(200).send(students)
        })

    },

    viewStudent: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        const studentData = await db.view_student(id)
        const behaviorData = await db.view_behaviors(id)
        
        const behaviors = behaviorData.map(behavior => {
            let {behavior_id, behavior_name, behavior_desc, assoc_student_id, behavior_type_id} = behavior
            return {
                behavior_id,
                behavior_name,
                behavior_desc,
                assoc_student_id,
                behavior_type_id
            }
        })
        const {student_id, student_name, reminder_interval} = studentData[0]

        const student = {
            student_id,
            student_name,
            reminder_interval,
            behaviors
        }
        res.status(200).send([student])
    
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
    },
    getTimeSlots: (req, res) => {
        const db = req.app.get('db')

        db.get_time_slots()
        .then(times => {
            res.status(200).send(times)
        })

    },
    addLog: (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {student_id, behavior_id, teacher_id, time_slot_id, log_comment, log_date} = req.body

        db.add_log([student_id, behavior_id, teacher_id, time_slot_id, log_comment, log_date])
        .then(log => {
            res.status(200).send(log)
        })

    }

}