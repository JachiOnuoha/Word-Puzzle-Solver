type coordinate = {
    row: number
    col: number
};
type letterMap = { [key: string]: coordinate[] };

class WordPuzzleSolver {
    private wordPuzzle: string[][] = [['C', 'B', 'T'], ['A', 'R', 'M'], ['T', 'A', 'V'], ['j', 'm', 'j']];
    private wordsList: string[] = ["CAT", "ARM", "ART"];
    private letterMap: letterMap;
    private boundaryCharacter: string = '@';


    constructor() {
        this.letterMap = this.initializeLetterMap();
        this.populateLetterMapWith(this.wordPuzzle);
    };

    // Creates a dictionary known as the letterMap which contains a key-value pair of each letter of the alphabet and the
    // coordinates where it can be found in the puzzle
    private initializeLetterMap(): letterMap {
        let resultLetterMap: letterMap = {};
        let tempArr = Array.from(Array(26))
        let letterArr: string[] = [...tempArr.keys()].map((_, i) => String.fromCharCode(i + 65))
        console.log(`This is the letterArr with ASCII: ${letterArr}`);
        for (const letter of letterArr) {
            resultLetterMap[letter] = []
        }
        return resultLetterMap;
    }

    // Prints out the letterMap
    private printOutLetterMap(letterMap: letterMap) {
        for (const [key, val] of Object.entries(letterMap)) {
            let valueArrayString = ""
            for (const element of val) {
                valueArrayString = valueArrayString + `{${element.row.toString()},${element.col.toString()}},`
            }
            console.log(`${key}: [${valueArrayString}]`)
        }
    }

    // Updates the array containing the coordinates where each letter is found
    private updateLetterCoordArrayInLetterMap(letter: string, row: number, col: number) {
        let letterToUpper: string = letter.toUpperCase()
        let coord: coordinate = { row, col }
        this.letterMap[letterToUpper].push(coord);
    }

    // Adds the coordinates of where each letter is in the puzzle into the letterMap
    private populateLetterMapWith(puzzle: string[][]) {
        for (let row = 0; row < puzzle.length; row++) {
            for (let col = 0; col < puzzle[row].length; col++) {
                const letter = puzzle[row][col];
                this.updateLetterCoordArrayInLetterMap(letter, row, col);
            };
        };
        this.printOutLetterMap(this.letterMap);
    };

    /* Pads the puzzle matrix with a boundary character to eliminate the need for boundary checking */
    private padPuzzleWithBoundaries (puzzle: string[][], boundaryCharacter: string): string[][] {
        let paddedPuzzle = puzzle;

        // Pad each row of the puzzle to create padded columns
        for(const row of paddedPuzzle){
            row.push(boundaryCharacter);
            row.unshift(boundaryCharacter);
        }

        // Generate padding array
        const tempArr = Array.from(Array(puzzle[0].length));
        const paddingArr = [...tempArr.keys()].map((_,i)=> boundaryCharacter);

        // Pad the first and last rows
        paddedPuzzle.push(paddingArr);
        paddedPuzzle.unshift(paddingArr);

        return paddedPuzzle;

    }

    private isLastRow(rowIndex: number) {
        let nrows = this.wordPuzzle.length
        return rowIndex == nrows - 1;
    };

    private isFirstRowOrCol(index: number) {
        return index == 0;
    };

    private isLastCol(rowIndex: number) {
        let ncols = this.wordPuzzle[0].length
        return rowIndex == ncols - 1;
    };

    // private findNeighborsfrom(origin: coordinate, target: string): coordinate[] {
    //     let neighbors: coordinate[] = [];

    //     // Find north and south neighbors
    //     for (let i = origin.col - 1; i < origin.col + 1; i++) {
    //         if (!this.isFirstRowOrCol(origin.row - 1)) {
    //             if (this.wordPuzzle[origin.row - 1][i] === target) {
    //                 neighbors.push({ row: origin.row - 1, col: i })
    //             }
    //         }
    //     }

    //     return neighbors;
    // }

};

let myClass = new WordPuzzleSolver();