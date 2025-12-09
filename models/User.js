const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name']
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             'provide a valid mail'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6
    }
})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.getName = function() {
    return this.name;
}

UserSchema.methods.createJWT = function() {
    const claims = {
        sub: this._id, 
        uname: this.name,
        mail: this.email,
        role: 'user'
    };
    const key = process.env.SECRET;
    const life = process.env.JWT_LIFE;
    const options = {
        expiresIn: life,
        issuer: 'api-v1'
    };
    return jwt.sign(claims, key, options);
}

UserSchema.methods.comparePass = async function(candidatePass) {
    const isMatch = await bcrypt.compare(candidatePass, this.password);
    return isMatch;
}

module.exports = mongoose.model('User', UserSchema)