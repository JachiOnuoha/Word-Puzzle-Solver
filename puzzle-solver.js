class WordPuzzleSolver {
    constructor() {
        this.boundaryCharacter = '@';
        this.paddedWordPuzzle = [];
        this.directionCombos = [[-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]];
        this.letterMap = this.initializeLetterMap();
    }
    ;
    // Creates a dictionary known as the letterMap which contains a key-value pair of each letter of the alphabet and the
    // coordinates where it can be found in the puzzle
    initializeLetterMap() {
        let resultLetterMap = {};
        let tempArr = Array.from(Array(26));
        let letterArr = [...tempArr.keys()].map((_, i) => String.fromCharCode(i + 65));
        console.log(`This is the letterArr with ASCII: ${letterArr}`);
        for (const letter of letterArr) {
            resultLetterMap[letter] = [];
        }
        return resultLetterMap;
    }
    // Prints out the letterMap
    printOutLetterMap() {
        for (const [key, val] of Object.entries(this.letterMap)) {
            let valueArrayString = "";
            for (const element of val) {
                valueArrayString = valueArrayString.concat(`{${element.row.toString()},${element.col.toString()}}`);
            }
            console.log(`${key}: [${valueArrayString}]`);
        }
    }
    printWordPuzzle() {
        let output = "";
        for (const row of this.paddedWordPuzzle) {
            output += `${row}\n`;
        }
        console.log(output);
    }
    printCoordArray(coordArr) {
        let valueString = "";
        for (const coord of coordArr) {
            valueString = valueString.concat(`{${coord.row}, ${coord.col}}`);
        }
        console.log(valueString);
    }
    // Updates the array containing the coordinates where each letter is found
    updateLetterCoordArrayInLetterMap(letter, row, col) {
        let letterToUpper = letter.toUpperCase();
        let coord = { row, col };
        this.letterMap[letterToUpper].push(coord);
    }
    // Adds the coordinates of where each letter is in the puzzle into the letterMap
    populateLetterMapWith(puzzle) {
        for (let row = 1; row < puzzle.length - 1; row++) {
            for (let col = 1; col < puzzle[row].length - 1; col++) {
                const letter = puzzle[row][col];
                this.updateLetterCoordArrayInLetterMap(letter, row, col);
            }
            ;
        }
        ;
    }
    ;
    /* Pads the puzzle matrix with a boundary character to eliminate the need for boundary checking */
    padPuzzleWithBoundaries(puzzle, boundaryCharacter) {
        let paddedPuzzle = puzzle;
        // Pad each row of the puzzle to create padded columns
        for (const row of paddedPuzzle) {
            row.push(boundaryCharacter);
            row.unshift(boundaryCharacter);
        }
        // Generate padding array
        const tempArr = Array.from(Array(puzzle[0].length));
        const paddingArr = [...tempArr.keys()].map((_, i) => boundaryCharacter);
        // Pad the first and last rows
        paddedPuzzle.push(paddingArr);
        paddedPuzzle.unshift(paddingArr);
        return paddedPuzzle;
    }
    isLastRow(rowIndex) {
        let nrows = this.paddedWordPuzzle.length;
        return rowIndex == nrows - 1;
    }
    ;
    isFirstRowOrCol(index) {
        return index == 0;
    }
    ;
    isLastCol(rowIndex) {
        let ncols = this.paddedWordPuzzle[0].length;
        return rowIndex == ncols - 1;
    }
    ;
    searchForWord(origin, word) {
        let wordPath = [];
        for (const combo of this.directionCombos) {
            // Move to a direction in the puzzle. Directions are one of the eight cardinal points
            let x = origin.row + combo[0];
            let y = origin.col + combo[1];
            // Check if the next letter of the word is at that position and append it to the word path if it is
            if (this.paddedWordPuzzle[x][y] === word[1] && this.paddedWordPuzzle[x][y] !== this.boundaryCharacter) {
                wordPath.push({ row: x, col: y });
                // Starting at the 3 letter of the word, keep moving in tha direction until you either find a the complete word,
                // hit an unexpected letter or hit the boundary character 
                let i = 2;
                while (i < word.length) {
                    if (this.paddedWordPuzzle[x + combo[0]][y + combo[1]] !== word[i]) {
                        break;
                    }
                    wordPath.push({
                        row: x + combo[0],
                        col: y + combo[1]
                    });
                    // Change the starting points to the coordinate of the last letter found
                    x = x + combo[0];
                    y = y + combo[1];
                    i++;
                }
            }
        }
        // Prepend origin to word path
        wordPath.unshift(origin);
        // If word is not found return an empty array
        if (wordPath.length !== word.length) {
            wordPath = [];
            return wordPath;
        }
        // wordPath.unshift(origin);
        return wordPath;
    }
    solve(puzzle, wordList) {
        this.paddedWordPuzzle = this.padPuzzleWithBoundaries(puzzle, this.boundaryCharacter);
        this.populateLetterMapWith(this.paddedWordPuzzle);
        for (const word of wordList) {
            let result;
            const startingPoints = this.letterMap[word[0]];
            console.log(word);
            for (const point of startingPoints) {
                result = this.searchForWord(point, word);
                if (result.length > 0) {
                    this.printCoordArray(result);
                }
            }
        }
        // this.printOutLetterMap();
        this.printWordPuzzle();
    }
}
;
const wordPuzzle = [['C', 'B', 'A'], ['A', 'R', 'M'], ['T', 'A', 'V'], ['A', 'M', 'J'], ['N', 'M', 'J'], ['J', 'M', 'J']];
const wordList = ['NATAC', 'ART', 'ARM', 'RBA'];
let myClass = new WordPuzzleSolver();
myClass.solve(wordPuzzle, wordList);
