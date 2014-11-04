var express = require('express');
var router = express.Router();



function isEmail(email){
    var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

var user = {
    name:'' ,
    lastName:'',
    email:'',
    password:''
}
var todo = [];
router.post('/signUp',function(req,res){
    if(!req.body.email || !req.body.password) return  res.status(400).json({msg: "Email and Password can't be blank"});
    if (!isEmail(req.body.email)) return res.status(400).json({msg: 'Email is invalid'});
    if (req.body.password.length < 4) return  res.status(400).json({msg: 'Password must be at least 4 characters long'});

    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    res.send({
        user:user,
        message:'you are succesfully registerd'
    });
},function(err){
    res.send(err);
})
router.post('/login',function(req,res){
    console.log(req.header);
    if(req.body.email == user.email && req.body.password == user.password){
        user.islogin = true;
        res.send({
            user: user,
            list: todo
        });
    }
},function(err){
    res.send(err);
})
router.get('/logout',function(req,res){
    if(req){
        user.islogin= false;
        res.send('logout');
    }
})
router.get('/todoList',function(req,res){
    if(user.islogin){
        res.send({
            list:todo
        })
    }


},function(err){
    console.log(err);
})
router.post('/todo',function(req,res){
    if(user.islogin){
        todo.push(req.body.item);
        res.send({
            list:todo,
            message:'item add'
        })
    }
},function(err){
    res.send(err);
})
router.post('/removeItem',function(req,res){
    if(user.islogin == true){
        todo.pop(req.body.item);
        res.send({
            list:todo,
            message:'item successfully remove'
        });
    }


},function(err){
    res.send(err)
})


module.exports = router;
