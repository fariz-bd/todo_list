let jwt = require('../token/jwt')


class Aut{
    static cekUser(req, res, next){
        let header = req.header('Authorization')
        if (!header){
            res.json({
                message: `Please login`
            })
        }else{
            let tokens = header.split(' ')[1]
            jwt.verify(tokens)
            .then(data => {
                req.id = data.id,
                next()
            }).catch(data => res.json({
                message: `Please login!.`,
                data: []
            }))
        } 
    }
}

module.exports = Aut;