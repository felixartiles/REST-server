const { response, request} = require('express');

const userGet = (req = request, res = response) =>{
    const query = req.query;
    res.json({
        msg:'success from controller'
    });
}
const userPost = (req = request, res = response) =>{
    const {nombre, edad} =  req.body;
    res.json({
        nombre
    });
}
const userPut = (req = request, res = response) =>{
    const id = req.params.id;
    res.json({
        id,
        msg:'success put from controller '
    });
}
const userPatch = (req = request, res = response) =>{
    
    res.json({
        msg:'success patch from controller'
    });
}
const userDelete = (req = request, res = response) =>{
   
    res.json({
        msg:'success delete from controller'
    });
}

module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut
}