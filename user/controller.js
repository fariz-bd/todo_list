let model = require('./model');
let jwt = require('../token/jwt');
let bcrypt = require('bcrypt');


class Controller{
    static register(req, res){
        // res.json({message: req.file.destination})
        model.findAll({
            where: {
                email: req.body.email
            }
        }).then(data =>{
            if (!data.length){
                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(req.body.password, salt);
                model.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    foto: req.file.filename
                }).then(data=> {res.json({
                    message: `Register success!.`,
                    data: data
                }), console.log(data);}).catch(data => res.json({
                    message: data.message
                }));
            }else{
                res.json({
                    message: `Email already registered!.`,
                    data: data
                })
            }
        }).catch(data => res.json({
            message: data.message
        }))
        
    }
    static login(req, res){
        model.findAll({
            where: {
                email: req.body.email
            }
        }).then(data1 =>{ 
            if (data1.length){
                bcrypt.compare(req.body.password, data1[0].password, (err, data)=>{
                    if(data == false){
                        res.json({
                            message: `Password incorect!.`,
                            data: []
                        })
                    }else{
                        jwt.add(data1[0])
                        .then(datatoken => res.json({
                            message: `Login success!.`,
                            data: datatoken
                        })).catch(datatoken => res.json({
                            message: `Error add token!.`
                        }))
                    }
                })
            }else{
                res.json({
                    message: `Email not registered!.`,
                    data : []
                })
            }
        }).catch(data => res.json({
            message: data.message
        }))
    }
    static getUser(req, res){
        model.findAll({
            where: {
                id: req.id
            }
        }).then(data=> res.json({
            message: `Success!.`,
            data: data
        })).catch(data=> res.json({
            message: data.message
        }))
    }
}



module.exports = Controller