const express = require('express');
const app = express();

// app.listen(8000,function(){
//     console.log("server is running");
// })

const mockUserData = [
    {name: 'Reza'},
    {name: 'hasibuan'}
]

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'Successfully got Users. Nice',
        users: mockUserData,
    })
})

app.listen(8000,function(){
    console.log("server is listening")
})

