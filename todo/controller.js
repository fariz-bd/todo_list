let model = require('./model');
let konek = require('../config');


class Controller{
    static add(req, res){
        model.create({
            kegiatan: req.body.kegiatan,
            userid: req.id
        }).then(data=> res.json({
            message: `Success add data kegiatan!.`,
            data: data
        }))
        .catch(data => res.json({
            message: data.message
        }))
    }

    static async list(req, res){
        await konek.query('SELECT * FROM todo')
        .then(data=> {res.json({data: data[0]})})
        // model.findAll()
        // .then(data=> res.json({
        //     message: `Success get all data!.`,
        //     data: data
        // }))
        .catch(data => res.json({
            message: `Error!.`,
            data: data.message
        }))
    }

    static tampilId(req, res){
        model.findAll({
            where: {
                id: req.params.id
            }
        }).then(data => {
            // res.json(data[0].userid)
            // console.log(data.userid);
            // console.log(req.id);
            if(data[0].userid == req.id){
                res.json({
                    message: `Success get data!.`,
                    data: data
                })
            }else{
                res.json({
                    message: `Can'n access this data!.`,
                })
            }
        }).catch(data => res.json({
            message: data.message
        }))   
    }

    static delete(req, res){
        model.findAll({
            where: {
                id: req.params.id
            }
        }).then(datas =>{
            if(datas[0].userid == req.id){
                model.destroy({
                    where: {
                        id: req.params.id
                    }
                }).then(data => res.json({
                    message: `Success delete data!.`,
                    data: data
                })).catch(data => res.json({
                    message: data.message
                }))
            }else{
                res.json({
                    message: `Can't access this data!.`
                })
            }
        }).catch(datas => res.json({
            message: datas.message
        }))
    }

    static editSave(req, res){
        model.findAll({
            where: {
                id: req.params.id
            }
        }).then(datas =>{
            if(datas[0].userid == req.id){
                model.update({
                    kegiatan: req.body.kegiatan,
                    status: req.body.status
                },{
                    where:{
                        id: req.params.id
                    }
                }).then(data => res.json({
                    message: `Success edit data!.`,
                    data: data
                })).catch(data => res.json({
                    message: data.message
                }))
            }else{
                res.json({
                    message: `Can't access this data!.`
                })
            }
        }).catch(datas => res.json({
            message: datas.message
        }))
    }
}


module.exports = Controller;