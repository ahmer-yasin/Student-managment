/**
 * Created by pc on 11/4/14.
 */
var express = require('express');
var router = express.Router();
var students = require('./admin');
var student = students[1];
var login = false
router.post('/login',function(req,res){
    console.log(students);
    if(req.body){
        for(var i = 0;i<student.length;i++){
            if(req.body.name == student[i].name && req.body.password == student[i].password){
                 login = true
                res.send({
                    user:student[i],
                    message:'student login'
                })
            }
        }
    }

},function(err){
    res.send(err)
})
router.post('/comments',function(req,res){
    if(req.body.comment){
        for(var s = 0;s < student.length;s++){
            if(req.body.user.name ==  student[s].name){
                student[s].Task[req.body.index].comments.push(req.body.comment);
                res.send(student[s]);
            }
        }
    }
},function(err){
res.send(err)
})

 router.get('/logout',function(req,res){
    if(req){
       login= false;
       res.send('logout');
    }
 },function(err){
    res.send(err)
});
module.exports = router;
