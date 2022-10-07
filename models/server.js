const express = require('express');
const cors = require('cors');


class Server{
    
    
    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.routeUsers='/api/users';
        //middleware
        this.middleware();
        //rutas
        this.routes();
    }

    middleware(){
        
        //cors
        this.app.use(cors());
        //leer body de peticion
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
       this.app.use(this.routeUsers,require('../routes/user'))
    }
    listen(){
        this.app.listen(this.port);
    }

}

module.exports = Server;