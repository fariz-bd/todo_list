let jwt = require('jsonwebtoken')

class Token{

    static add(data){
        let promise = new Promise((resolve, reject)=>{
            jwt.sign({ id: data.id, name: data.name },'fosan', (err, data)=>{
                if(err){
                    reject('Error create token!.')
                }else{
                    resolve(data)
                }
            });
        });
        return promise;
    }

    static verify(token){
        let promise = new Promise((resolve, reject)=>{
            jwt.verify(token, 'fosan', (err, data)=>{
                if(err){
                    reject(`Silahkan Login Untuk melanjutkan`);
                }else{
                    resolve(data);
                }
            });
        });
        return promise;
    }

}

module.exports = Token