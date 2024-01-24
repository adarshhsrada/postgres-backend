exports.commonMessages = {
    FETCH_SUCCESS: (item) => `${item} fetched successfully`,
    NOT_FOUND: (item) => `${item} not found`,
    SERVER_ERROR: "Server error..",
    IS_REQUIRED : (item) =>`${item} is required`
}

exports.statusCodes = {
    SERVER_ERROR: 500,
    BAD_REQ: 400,
    VALIDATION_ERR: 403,
    SUCCESS: 200,
    NOT_FOUND: 404
}