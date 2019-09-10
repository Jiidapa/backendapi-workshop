const User = require('../models/user')

exports.user = async (req, res, next) => {
    const user = await User.find();
    res.json({
        data: user
    })
}

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const existEmail = await User.findOne({ email: email })

        if (exiextEMail) {
            const error = new Error('exist email');
            error.statusCode = 403;
            throw error;
        }

        let user = new User
        user.name = name
        user.email = email
        user.password = await user.encryptPassword(password);
        await user.save()

        res.status(201).json({
            message: "add user success"
        })
    }
    catch (error) {
        next(error);
    }
}