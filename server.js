const express = require('express');
const app = express();

// add body-parse library
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.listen(8000,function(){
//     console.log("server is running");
// })

// Get JSON data
const mockUserData = [
    {name: 'reza'},
    {name: 'hasibuan'}
]

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'Successfully got Users. Nice',
        users: mockUserData,
    })
})

// Use Variables in URL #5

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success : true,
        message : 'got one user',
        user : req.params.id  // call data from parameter
    });
});

// login with body parser 
app.post('/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "reza";
    const mockPassword = "password";

    if(username===mockUsername && password===mockPassword){
        res.json({
            success: true,
            message:'password and username match',
            token: 'encrypted token goes here'
        });

    }else{
        res.json({
            success:false,
            message:'password and username not match'
        })
    }

});

app.listen(8000,function(){
    console.log("server is listening")
})


