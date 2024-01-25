const { commonMessages, statusCodes } = require('../../helpers/constants');


exports.signupValidation = ( _req , _res , _next )=>{

    const { user_name, email, password, confirmPassword } = _req.body

    if (!user_name) {
        return _res.status(statusCodes['VALIDATION_ERR']).json({
            status: 'validation_error',
            message: commonMessages.IS_REQUIRED('user_name')
        });
    }
    if (!email) {
        return _res.status(statusCodes['VALIDATION_ERR']).json({
            status: 'validation_error',
            message: commonMessages.IS_REQUIRED('email')
        });
    }
    if (!password) {
        return _res.status(statusCodes['VALIDATION_ERR']).json({
            status: 'validation_error',
            message: commonMessages.IS_REQUIRED('password')
        });
    }

    if (!confirmPassword) {
        return _res.status(statusCodes['VALIDATION_ERR']).json({
            status: 'validation_error',
            message: commonMessages.IS_REQUIRED('confirmPassword')
        });
    }

    if (password !== confirmPassword) {
        return _res.status(statusCodes['VALIDATION_ERR']).json({
            status: 'validation_error',
            message: 'Passwords does not match'
        });
    }

    _next()
}