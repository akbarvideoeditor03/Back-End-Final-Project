const {create, update} = require('./schema');

const userValidation = {
    validateCreatePayload: (payload) => {
        const validateResult = create.validate(payload);
        if (validateResult.error) {
            throw validateResult.error.message;
        }
    },

    validateUpdatePayload: (payload) => {
        const validationResult = update.validate(payload);
        if(validationResult.error) {
            throw validationResult.error.message;
        }
    }
}

module.exports = userValidation;