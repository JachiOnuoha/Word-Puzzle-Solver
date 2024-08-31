interface Coordinate {
    row: number
    col: number
};
type LetterMap = { [key: string]: number };

class WordPuzzleSolver {
    private wordPuzzle: string[][] = [['C','B','T'],['A','R','M'],['T','A','V']];
    private wordsList: string[] = ["CAT","ARM","ART"]
    private letterMap: LetterMap;

    constructor(){
        this.letterMap = this.initializeLetterMap();
    };

    private initializeLetterMap(): LetterMap {
        let resultLetterMap: LetterMap =  {};
        let letterArr = [...Array(26)].map( i => String.fromCharCode(i+39) )
        console.log(`This is the letterArr with ASCII: ${letterArr}`);
        for(const letter in letterArr){
            resultLetterMap[letter] = 0
        }
        console.log(`This is the resultLetterMap: ${resultLetterMap}`)
        return resultLetterMap;
    }

    private populateLetterMapFor(puzzle: string[][]) {
        let resultMap: LetterMap;
        for(const row of puzzle){
            for(const letter of row){
                // Add the coord value of the letter to the appropriate key (the letter itself)
            };
        };
    };

};

let myClass = new WordPuzzleSolver();