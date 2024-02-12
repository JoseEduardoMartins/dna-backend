import { checkDNA } from '../utils/dna.utils';

export class Dna {
    id;
    sequence;
    type;

    constructor(dna) {
        this.id = dna.id;
        this.sequence = dna.sequence;
        this.type = dna.type || !checkDNA(dna.sequence) ? 'human' : 'sigman';
    }

    getNonNullFields() {
        return {
            ...(this.id !== undefined && { id: this.id }),
            ...(this.sequence !== undefined && { sequence: this.sequence }),
            ...(this.type !== undefined && { type: this.type }),
        };
    }
}

export default { Dna };
