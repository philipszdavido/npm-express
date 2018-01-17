import Student from './../models/student'
import { Request, Response } from 'express'
import * as cloudinary from 'cloudinary'
import * as multipart from 'connect-multiparty'

const multipartWare = multipart()

export default {
    create(req, res, next) {
        cloudinary.uploader.upload(req.files.image.path, (result) => {
            (new Student({... { url: result.url }, ...req.body })).save((err, newStudent) => {
                const cloud_res = {
                    url: result.url
                }
                const newS = newStudent.toObject()
                console.log({... { url: result.url }, ...req.body })
                if (err)
                    res.send(err)
                else if (!newStudent)
                    res.send(400)
                else
                    res.send({...newS, ...cloud_res })
                next()
            })
        }, {
            resource_type: 'image',
            eager: [
                { effect: 'sepia' }
            ]
        })
    },
    findAll(req, res, next) {
        Student.find((eerr, data) => {
            if (eerr) {
                res.send(eerr)
            } else {
                res.send(data)
            }
            next()
        })
    },
    deleteStudent(req, res, next) {
        Student.findByIdAndRemove(req.params.id, (err) => {
            if (err)
                res.send(err)
            else
                res.send(204)
            next()
        })
    },
    updateStudent(req, res, next) {
        Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
            if (err)
                res.send(err)
            else if (!updatedStudent)
                res.send(400)
            else
                res.send(updatedStudent)
            next()
        })
    },
    getStudent(req, res, next) {
        Student.findById(req.params.id, (err, student) => {
            if (err)
                res.send(err)
            else if (!student)
                res.send(404)
            else
                res.send(student)
            next()
        })
    }
}