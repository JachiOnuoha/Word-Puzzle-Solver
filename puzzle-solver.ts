type coordinate = {
    row: number
    col: number
};
type letterMap = { [key: string]: coordinate[] };

class WordPuzzleSolver {
    private wordPuzzle: string[][] = [['C','B','T'],['A','R','M'],['T','A','V'], ['j','m','j']];
    private wordsList: string[] = ["CAT","ARM","ART"]
    private letterMap: letterMap;

    constructor(){
        this.letterMap = this.initializeLetterMap();
        this.populateLetterMapFor(this.wordPuzzle);
    };

    private initializeLetterMap(): letterMap {
        let resultLetterMap: letterMap =  {};
        let tempArr = Array.from(Array(26))
        let letterArr: string[] = [...tempArr.keys()].map((_,i) => String.fromCharCode(i+65) )
        console.log(`This is the letterArr with ASCII: ${letterArr}`);
        for(const letter of letterArr){
            resultLetterMap[letter] = []
        }
        // this.printOutLetterMap(resultLetterMap);
        return resultLetterMap;
    }

    private printOutLetterMap(letterMap: letterMap) {
        for(const [key, val] of Object.entries(letterMap)){
            let valueArrayString = ""
            for(const element of val){ 
                valueArrayString = valueArrayString + `{${element.row.toString()},${element.col.toString()}},`
            }
            console.log(`${key}: [${valueArrayString}]`)
        }
    }

    private updateLetterCountInLetterMap(letter: string, letterMap: letterMap){
        let letterToUpper: string = letter.toUpperCase()
        let coord: coordinate = {row: 0, col: 0}
        letterMap[letterToUpper].push(coord);
    }

    private populateLetterMapFor(puzzle: string[][]) {
        let resultMap: letterMap = this.letterMap;
        for(const row of puzzle){
            for(const letter of row){
                this.updateLetterCountInLetterMap(letter, resultMap);
            };
        };
        this.printOutLetterMap(resultMap);
    };

};

let myClass = new WordPuzzleSolver();