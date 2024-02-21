import Joi from "joi";

const registerValidators = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base': 'First letter, then letters, digits or "_" min 2 - max 20 characters'
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
        .required().messages({
            'string.pattern.base': 'min 1 digit, min 1 lowercase,  min 1 uppercase, min 1 special symbols, total 8-30'
        }),
    re_password: Joi.any().equal(Joi.ref('password')).required().messages({
        'any.only': 'password does not much'
    })
})

export {
    registerValidators
}