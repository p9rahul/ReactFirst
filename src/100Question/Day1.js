const findLongestWord =(str) =>{

    if(str.trim().length ==0){
        return false;
    }

    words = str.split(" ")
    words.sort((a,b) => a.length -b.length);
    // console.log(words);
    return words.at(-1);
}



console.log(
    findLongestWord("watch this technical javascript course on youtube")
)