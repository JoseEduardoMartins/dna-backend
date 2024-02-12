import { Dna } from '../models/dna.model';
import { runQuery } from '../config/database';
import { getQueryFilters } from '../utils/sql/queries';
import { dnaParameters } from '../utils/sql/dna.query';

export const select = async ({ filters = {} }) => {
    try {
        const query = `
            SELECT *
            FROM dna
            ${getQueryFilters(filters, dnaParameters)}
        `;

        const response = await runQuery(query);

        const dnas = response.map((contact) => new Dna(contact));
        return dnas;
    } catch (error) {
        throw error;
    }
};

export const insert = async (dna) => {
    try {
        const newDna = new Dna(dna);

        const query = ` INSERT INTO dna SET ?`;

        const response = await runQuery(query, newDna.getNonNullFields());

        return { ...newDna, id: response.insertId };
    } catch (error) {
        throw error;
    }
};

export default {
    select,
    insert,
};
