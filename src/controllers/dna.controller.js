import repository from '../repositories/dna.repository';

export const save = async (req, res) => {
    try {
        const { sequence } = req.body;

        const filters = {
            sequence,
        };
        const [dna] = await repository.select({ filters });
        if (dna) return res.status(201).json(dna);

        const response = await repository.insert({ sequence });

        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default {
    save,
};
