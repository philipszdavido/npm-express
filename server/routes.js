const movieController = require('./controller')

export default routes = (router) => {
    router
        .route('/movies')
        .get(movieController.findAll)

    router
        .route('/movies')
        .post(multipartWare, movieController.create)

    router
        .route('/movies/:id')
        .put(movieController.updatemovie)

    router
        .route('/movies/:id')
        .delete(movieController.deletemovie)

    router
        .route('/movies/:id')
        .get(movieController.getmovie)
}