import { body } from 'express-validator';

const sequence = () =>
    body('sequence')
        .isArray()
        .withMessage('SEQUENCE must be list')
        .exists()
        .withMessage("SEQUENCE can't be undefined")
        .notEmpty()
        .withMessage("SEQUENCE can't be null")
        .toArray()
        .customSanitizer((sequence) => sequence.join(', '))
        .toUpperCase()
        .custom((sequence) => (/^[ATCG, ]+$/.test(sequence) ? Promise.resolve() : Promise.reject()));

const POST = {
    sequence,
};

export const validators = { POST };

export const requireValidators = ['sequence'];

export default { validators, requireValidators };
