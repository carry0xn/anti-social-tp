const { User } = require('../db/models')

//Mostrar todos los usuarios
const mostrarUsuarios = async (req,res)=>{
    const users = await User.findAll({
        attributes: ['username','email','password']
    })
    res.status(200).json(users)
}

//Mostrar un usuario 
const mostrarUsuario = async (req,res)=>{
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    if(user){
        res.status(200).json(producto)
    }else{
        res.status(404).json({message: 'Usuario no encontrado'})
    }
}

const agregarUsuario = async (req,res)=>{
    const {nombre, precio} = req.body
    const producto = await Producto.create({ nombre, precio})
    res.status(201).json(producto)
}

const modificarProducto = async (req,res)=>{
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        const { nombre, precio } = req.body
        if(nombre) producto.nombre = nombre
        if(precio) producto.precio = precio
        await producto.save()
        res.status(200).json(producto)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const actualizarProducto = async (req,res)=>{
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        const { nombre, precio } = req.body
        if(!nombre || !precio){
            res.status(400).json({message: "Faltan campos obligatorios"})
        }else{
            producto.nombre = nombre
            producto.precio = precio
            await producto.save()
            res.status(200).json(producto)
        }
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const eliminarProducto = async (req,res)=>{
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        await producto.destroy()
        res.status(200).json({message: "Producto eliminado"})
    }else{
        res.status(404).json({message: "Producto no encontrado"})
    }
}

module.exports = {
    mostrarUsuarios,
    mostrarUsuario,
    agregarProducto,
    modificarProducto,
    actualizarProducto,
    eliminarProducto
}