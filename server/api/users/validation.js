const { commonMessages, statusCodes } = require('../../helpers/constants');


exports.signupValidation = ( _req , _res , _next )=>{

    const { userName, email, password, confirmPassword } = _req.body

    if (!userName) {
        return _res.status(statusCodes['VALIDATION_ERR']).json({
            status: 'validation_error',
            message: commonMessages.IS_REQUIRED('userName')
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