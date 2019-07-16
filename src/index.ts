const Path = require("path");
import fs from "fs";


export default class WordListCreator {



    public GetWordListPtBr(): Array<string> {
        let wordsString: string = fs.readFileSync(Path.resolve(__dirname, "src/files/words_ptbr.txt"), "utf8");
        let wordsArray: Array<string> = wordsString.split("\r\n");

        console.log("puro: " + wordsArray.length);

        //apenas palavras com len >=5  e <=8
        wordsArray = wordsArray.filter(w => {
            return w.length >= 5 && w.length <= 8
        });
        console.log("len >=5  e <=8: " + wordsArray.length);

        //remove special characters
        wordsArray = wordsArray.filter(w => {
            return !this.ContainsSpecialCharacter(w);
        });
        console.log("remove special characters: " + wordsArray.length);


        return null;
    }


    public ContainsSpecialCharacter(text: string): boolean {
        let normalizedtext = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return text.toLowerCase() != normalizedtext;
    }
}




let creator = new WordListCreator();
let wordlist = creator.GetWordListPtBr();