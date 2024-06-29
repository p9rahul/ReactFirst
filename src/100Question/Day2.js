
const generateHash = (str) => {

    if (str.trim().length == 0 || str.length > 280) {
        return false;
    }

    //1st convert this string to array -> perform operation -> convert back again
    str = str.split(" ");
    str = str.map((curele) =>
        curele.replace(curele[0], curele[0].toUpperCase())
    );
    console.log(str);
    str= `#${str.join("")}`;
    return str;
    //in JS everything is object like string , array
    }

console.log(generateHash("My name is rahul kumar"))