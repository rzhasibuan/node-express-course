const express = require('express');
const app = express();

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

app.listen(8000,function(){
    console.log("server is listening")
})


