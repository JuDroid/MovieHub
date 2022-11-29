const express = require('express')
const path = require('path')
const app = express()

app.listen(3030, () => 
    console.log('Servidor local creado') //recuerda siempre antes de ver en el navegador si el servidor esta montado ejecutar el archivo de js donde se monta
)

app.get('/', (req, res) => {

    res.sendFile(path.resolve('./views/index.html'))
})