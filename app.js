const express=require('express'); //requiero express
const app=express();//ejecuto express
const port=3030;//declaro constante para el puerto
const path=require('path');//requiero path para sacar la ruta

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));//get para traer el home, sendFile y path.join para que vaya al home.html

app.use(express.static('public'));//indico que en public están los elementos estáticos,ej: imágenes

app.listen(port,()=>console.log('Servidor corriendo OK en puerto '+port));//levanto el puerto con .listen