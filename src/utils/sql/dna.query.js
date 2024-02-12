import { typeValidators } from '../type.utils';

export const dnaParameters = {
    id: (value) => {
        if (!typeValidators(value, 'number')) throw new Error(`Filter { id:${value} } must be a number`);
        return `id = ${value}`;
    },
    sequence: (value) => {
        if (!typeValidators(value, 'string')) throw new Error(`Filter { sequence: '${value}' } must be a text`);
        return `sequence = '${value}'`;
    },
    type: (value) => {
        if (!typeValidators(value, 'string')) throw new Error(`Filter { type: ${value} } must be a text`);
        return `type = '${value}'`;
    },
};

export default { dnaParameters };
