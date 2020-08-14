const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password, profile_pic } = req.body;
        const existingUser = await db.check_user(username);
        if(existingUser[0]){
            res.status(500).send('Username already exists')
        } 

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.create_user([username, profile_pic, hash ]);
        req.session.user = {
            userId: newUser.user_id,
            username: newUser.username,
            profile_pic: newUser.profile_pic
        }
        res.status(200).send(req.session.user)
    },
}