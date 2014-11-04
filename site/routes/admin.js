/**
 * Created by pc on 11/4/14.
 */
var express = require('express');
var router = express.Router();

var admin = {
    name: 'admin',
    password : 'admin',
    student :[],
    class:[{name:'class1',list:[]},{name:'class2',list:[]},{name:'class3',list:[]},{name:'class4',list:[]},{name:'class5',list:[]}]
}
var subjects = ['math','physics','chemistry','Computer','electronics'];

    router.post('/login',function(req,res){
        if(req.body.name == admin.name && req.body.password == admin.password){
            res.send({
                user: admin,
             message: 'Admin is login'
            })
     }},function(err){
    res.send(err);
    });

    router.post('/addStudent',function(req,res){
        if (!req.body.name && !req.body.password) {
            res.send({
                message: 'please send student data'
            })
        }
            if(req.body.name && req.body.password){
                for(var j = 0;j<admin.class.length;j++){
                    if(admin.class[j].name == req.body.class){
                        if(admin.class[j].list.length < 10){
                            admin.class[j].list.push({name:req.body.name})
                        }else {
                            res.send({
                                message:'this class has already 10 student please manage anothoer class'
                            })
                        }
                    }
                }
                admin.student.push({name:req.body.name,password:req.body.password,lastName:req.body.lastName,Task:[],subject:subjects,class:req.body.class,rating:''});
                console.log(admin);
                res.send({
                    user:admin.student,
                    message:'student successfuly registerd'
                })
            }

    },function(err){
        res.send(err);
    });
    router.post('/addTask',function(req,res){
      if(req.body.name){
          for(var i = 0;i<admin.student.length;i++){
              if(req.body.name == admin.student[i].name){
                  admin.student[i].task = req.body.task;
                  res.send(admin);
                  return;
              }
          }

     }
    },function(err){
    res.send(err);
    });
    router.post('/editStudent',function(req,res){
        if(req.body){
            for(var g = 0;g<admin.student.length;g++){
                if(admin.student[g].password == req.body.password){
                    admin.student[g] = req.body;
                    res.send({
                        user:admin.student[g],
                        message:'updated'
                    })
                }
            }
        }


    },function(err){
        res.send(err);
    })
module.exports = [router,admin.student];

