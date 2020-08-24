const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.create_user(username,  hash );
        req.session.user = {
            userId: newUser.user_id,
            username: newUser.username,
        }
        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        let foundUser = await db.check_user(username);
        foundUser = foundUser[0];
        if(foundUser) {
            const compareHash = foundUser.password
            const authenticated = bcrypt.compareSync(password, compareHash)
            if(authenticated) {
                delete foundUser.password;
                req.session.user = foundUser;
                res.status(202).send(foundUser);
            } else {
                res.status(401).send('Username/Password Incorrect')
            }
        } else {
            res.status(401).send('Username/Password Incorrect')
        }
    },
}