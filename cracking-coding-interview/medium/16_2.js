function readBook (bookfile, word){
    let wordCount = 0,
        cursor = 0,
        indxNextLineChar = bookfile.indexOf('\n', cursor),
        par;
    while (indxNextLineChar >=0 ){
        par = bookfile.substring(cursor, indxNextLineChar);
        wordCount += countWord(par, word);
        
        cursor = indxNextLineChar + 1;
        indxNextLineChar = bookfile.indexOf('\n', cursor);
    }
    
    par = bookfile.substring(cursor);
    wordCount += countWord(par, word);
    
    return wordCount;
}

function countWord(par, word){
    let counter = 0;
    let helperArr = par.split(' ');
    helperArr.forEach((elm) =>{
        elm = elm.toLowerCase();
        elm = elm.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
        if (word === elm) counter++;
    });
    return counter;
}


readBook("dogs uuntywndywn  tniyftunoastn dnio tgod dogs dogs sntiasntsrtnoarisetn oirstnoire \n hello world \ndogs")