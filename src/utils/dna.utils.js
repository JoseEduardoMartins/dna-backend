export const checkDNA = (dna) => {
    const rows = dna.length;
    const columns = dna[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= columns - 4; j++) {
            if (dna[i][j] === dna[i][j + 1] && dna[i][j] === dna[i][j + 2] && dna[i][j] === dna[i][j + 3]) {
                return true;
            }
        }
    }

    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < columns; j++) {
            if (dna[i][j] === dna[i + 1][j] && dna[i][j] === dna[i + 2][j] && dna[i][j] === dna[i + 3][j]) {
                return true;
            }
        }
    }

    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= columns - 4; j++) {
            if (dna[i][j] === dna[i + 1][j + 1] && dna[i][j] === dna[i + 2][j + 2] && dna[i][j] === dna[i + 3][j + 3]) {
                return true;
            }
        }
    }

    for (let i = 3; i < rows; i++) {
        for (let j = 0; j <= columns - 4; j++) {
            if (dna[i][j] === dna[i - 1][j + 1] && dna[i][j] === dna[i - 2][j + 2] && dna[i][j] === dna[i - 3][j + 3]) {
                return true;
            }
        }
    }

    return false;
};
