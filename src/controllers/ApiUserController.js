const knex = require('../database');
const ApiUserController = {
    async create(req, res, next){
        try{
            const { email, password } = req.body;
            
            await knex('users').insert({
                email,
                password
            });

            return res.status(200).send();

        }catch(error){
            return res.send(error);
        }

    },

    async read(req, res, next){
        try{
            const users = await knex('users');
            return res.json(users);
        }catch(error){
            return res.send(error);
        }
    }
};

module.exports = ApiUserController;