// responseMiddleware.js

const responseMiddleware = (req, res, next) => {
    res.sendResponse = (status, data, message) => {
        res.status(status).json({
            status: status < 400 ? 'success' : 'error',
            message,
            data,
        });
    };

    next();
};

module.exports = responseMiddleware;
