const routes = (router) => {
    router
        .route('/movies')
        .get(studentsController.findAll)

    router
        .route('/students')
        .post(multipartWare, studentsController.create)

    router
        .route('/students/:id')
        .put(studentsController.updateStudent)

    router
        .route('/students/:id')
        .delete(studentsController.deleteStudent)

    router
        .route('/students/:id')
        .get(studentsController.getStudent)
}

export default routes