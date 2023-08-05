const Usuario = require("../models/libroModel");

exports.getAllUsers = (async (req,res)=>{
    try{
    const allUsers = await Usuario.find();
        res.status(200).json({allUsers});
    }
    catch(error){
        res.status(500).json({Error: "Error al conseguir a los usuarios"});
    }
});

exports.getAllUsersById = (async (req,res)=>{
    try{
    const allUsers = await Usuario.findById(req.params.id);
        res.status(200).json({allUsers});
    }
    catch(error){
        res.status(500).json({Error: "Error al conseguir al usuario"});
    }
});

exports.postAUser = (async (req,res) =>{
    const userToPost= {
        userName : req.body.userName,
        edad : req.body.edad
    }
    try{
    await Usuario.create(userToPost);
    res.status(200).json(userToPost);

    
    }
    catch(error){
        res.status(500).json("Hubo un error creando el usuario");
    }
});

exports.deleteAUser = (async (req,res)=>{
    try{
        await Usuario.findByIdAndRemove(req.body.id);
        res.status(200).json("Usuario borrado con éxito");
    }
    catch(error){
        res.status(500).json("Hubo un error borrando al usuario");
    }
})
exports.updateAUser = (async (req,res)=>{
    const userToPost= {
        userName : req.body.userName,
        edad : req.body.edad
    }
    try{
        await Usuario.findByIdAndUpdate(req.params.id, userToPost);
        res.status(200).json(userToPost);
    
        
        }
        catch(error){
            res.status(500).json("Hubo un error actualizando el usuario");
        }
})