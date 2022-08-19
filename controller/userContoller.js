const User = require('../models/userSchema')

exports.userSignup = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email } = req.body
        const user = new User({userName:name,email})
        const result=user.save()
        res.send(result)
    } catch (error) {

    }
}