const userModel = require('./model')
const { commonMessages, statusCodes } = require('../../helpers/constants');
const bcrypt = require('bcrypt');
exports.getUser = (req, res) => {
    console.log("req.query.userName==>>", req.query.userName);

    userModel.sequelize.query("SELECT * FROM users WHERE userName = :userName", {
        replacements: { userName: req.query.userName },
        type: userModel.sequelize.QueryTypes.SELECT // Add this line to ensure it's treated as a SELECT query
    })
        .then((response) => {
            console.log("response==>>", response);

            if (!response || response.length === 0) {
                return res.status(statusCodes['NOT_FOUND']).json({
                    status: 'error',
                    message: commonMessages.NOT_FOUND('User')
                });
            }

            return res.status(statusCodes['SUCCESS']).json({
                status: 'success',
                message: commonMessages.FETCH_SUCCESS('User'),
                data: response
            });
        })
        .catch((err) => {
            console.log("err==>>>", err);

            return res.status(statusCodes['SERVER_ERROR']).json({
                status: 'error',
                message: commonMessages.SERVER_ERROR
            });
        });
};
exports.signup = async (req, res) => {
    console.error("req.body==>>", req.body)
    const { userName, email, password } = req.body

    const hashedPass = await bcrypt.hash(password, 10);

    try {
        const savedData = await userModel.create({ userName, email, password: hashedPass, token: null })
        return res.status(statusCodes['SUCCESS']).json({
            status: 'success',
            message: 'User signup successfully',
            data: savedData
        });
    } catch (err) {
        console.error("err.message===>>", err)
        return res.status(statusCodes['SERVER_ERROR']).json({
            status: 'error',
            message: err.message || commonMessages.SERVER_ERROR,
        });
    }
}
