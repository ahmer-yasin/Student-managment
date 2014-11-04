/**
 * Created by pc on 11/4/14.
 */
var express = require('express');
var router = express.Router();

var admin = {
    name: 'admin',
    password : 'admin',
    student :[]
}

    router.post('/login',function(req,res){
        if(req.body.name == admin.name && req.body.password == admin.password){
            res.send({
                user: admin,
             message: 'Admin is login'
            })
     }},function(err){
    res.send(err);
    })

    router.post('/addStudent',function(req,res){
        if (!req.body.student && !req.body.password){
            res.send({
                message: 'please send student data'
            })
            if(req.body.student && req.body.password){
                admin.student.push({name:req.body.student,password:req.body.password})
                res.send({
                    user:admin,
                    message:'student successfuly registerd'
                })
            }
        }
    },function(err){
        res.send(err);
    })

module.exports.students = admin.student
module.exports = router;

