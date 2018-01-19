//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Movie = require('./../server/movie');

//Require the dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../server/index');
let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Movies', () => {
    beforeEach((done) => { //Before each test we empty the database
        Movie.remove({}, (err) => {
            done();
        });
    });
    /*
     * Test the /GET route
     */
    describe('/GET /api/movies', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('/api/movies')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    /*
     * Test the /POST route
     */
    describe('/POST /api/movies', () => {
        /*it('it should not POST a movie without pages field', (done) => {
            let movie = {
                name: "The Lord of the Rings",
                description: "J.R.R. Tolkien",
                rating: '1.9',
                image: 'movieimage.jpg'
            }
            chai.request(server)
                .post('/api/movies')
                .send(movie)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('pages');
                    res.body.errors.pages.should.have.property('kind').eql('required');
                    done();
                });
        });*/
        it('it should POST a movie ', (done) => {
            let movie = {
                name: "Guardians of the Galaxy: Vol II",
                description: "intresting movie",
                rating: "9.0",
                image: "guardiansofthegalaxy.jpg"
            }
            chai.request(server)
                .post('/api/movies')
                .send(movie)
                .end((err, res) => {
                    //console.log(res.body.movie)
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    //res.body.should.have.property('message').eql('Book successfully added!');
                    res.body.should.have.property('name');
                    res.body.should.have.property('description');
                    //res.body.movie.should.have.property('rating');
                    //res.body.movie.should.have.property('image');
                    done();
                });
        });
    });
    /*
     * Test the /GET/:id route
     */
    describe('/GET/:id /api/movies', () => {
        it('it should GET a movie by the given id', (done) => {
            let movie = new Movie({ name: "Geek Charming", description: "romantic movie", rating: "6.0", image: "geekcharming.jpg" });
            movie.save((err, movie) => {
                chai.request(server)
                    .get('/api/movies/' + movie.id)
                    .send(movie)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('description');
                        res.body.should.have.property('rating');
                        res.body.should.have.property('image');
                        res.body.should.have.property('_id').eql(movie.id);
                        done();
                    });
            });

        });
    });
    /*
     * Test the /PUT/:id route
     */
    describe('/PUT/:id /api/movies', () => {
        it('it should UPDATE a movie given the id', (done) => {
            let movie = new Movie({ name: "The Chronicles of Narnia", description: "C.S. Lewis", rating: "1948", image: "778" })
            movie.save((err, movie) => {
                chai.request(server)
                    .put('/api/movies/' + movie.id)
                    .send({ name: "The Chronicles of Narnia", description: "C.S. Lewis", rating: "1950", image: "778" })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        //res.body.should.have.property('message').eql('Book updated!');
                        res.body.should.have.property('rating').eql("1950");
                        done();
                    });
            });
        });
    });
    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id /api/movies', () => {
        it('it should DELETE a movies given the id', (done) => {
            let movie = new Movie({ name: "The Chronicles of Narnia", description: "C.S. Lewis", rating: "1948", image: "778" })
            movie.save((err, movie) => {
                chai.request(server)
                    .delete('/api/movies/' + movie.id)
                    .end((err, res) => {
                        res.should.have.status(204);
                        res.body.should.be.a('object');
                        //res.body.should.have.property('message').eql('Book successfully deleted!');
                        //res.body.result.should.have.property('ok').eql(1);
                        //res.body.result.should.have.property('n').eql(1);
                        done();
                    });
            });
        });
    });
});