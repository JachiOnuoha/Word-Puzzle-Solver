class WordPuzzleSolver {
    constructor() {
        this.wordPuzzle = [['C', 'B', 'T'], ['A', 'R', 'M'], ['T', 'A', 'V'], ['j', 'm', 'j']];
        this.wordsList = ["CAT", "ARM", "ART"];
        this.letterMap = this.initializeLetterMap();
        this.populateLetterMapFor(this.wordPuzzle);
    }
    ;
    initializeLetterMap() {
        let resultLetterMap = {};
        let tempArr = Array.from(Array(26));
        let letterArr = [...tempArr.keys()].map((_, i) => String.fromCharCode(i + 65));
        console.log(`This is the letterArr with ASCII: ${letterArr}`);
        for (const letter of letterArr) {
            resultLetterMap[letter] = [];
        }
        // this.printOutLetterMap(resultLetterMap);
        return resultLetterMap;
    }
    printOutLetterMap(letterMap) {
        for (const [key, val] of Object.entries(letterMap)) {
            let valueArrayString = "";
            for (const element of val) {
                // console.log(element.row.toString())
                valueArrayString + `{${element.row.toString()}, ${element.col.toString()}}, `;
            }
            console.log(`${key}: [${valueArrayString}]`);
        }
    }
    updateLetterCountInLetterMap(letter, letterMap) {
        let letterToUpper = letter.toUpperCase();
        let coord = { row: 0, col: 0 };
        letterMap[letterToUpper].push(coord);
    }
    populateLetterMapFor(puzzle) {
        let resultMap = this.letterMap;
        for (const row of puzzle) {
            for (const letter of row) {
                this.updateLetterCountInLetterMap(letter, resultMap);
            }
            ;
        }
        ;
        this.printOutLetterMap(resultMap);
    }
    ;
}
;
let myClass = new WordPuzzleSolver();
