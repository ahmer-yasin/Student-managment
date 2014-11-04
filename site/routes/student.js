/**
 * Created by pc on 11/4/14.
 */
var express = require('express');
var router = express.Router();
var students = require('admin.js');
var student = students.student;
var login = false
router.login('/login',function(req,res){
    if(req.body){
        for(var i = 0;i<student.lenght;i++){
            if(req.body.name == student[i].name && req.body.password == student[i].password){
                 login = true
                res.send({
                    user:student[i],
                    message:'student login'
                })
                return
            }
        }
    }

},function(err){
    res.send(err)
})
router.get('/logout',function(req,body){
    if(req){
       login= false;
       res.send('logout');
    }
},function(err){
    res.send(err)
});
