// aaabccddd
// baab
const stringReducer = stringToReduce => {
  if (stringToReduce.length > 1) {
    let strArr = stringToReduce.split("");
    if (strArr[0] === strArr[1]) {
      if (strArr.length > 2) {
        return stringReducer(strArr.slice(2, strArr.length).join(""));
      } else {
        return "";
      }
    } else {
      let extractedChar = strArr.shift();
      let formedString = stringReducer(strArr.join(""));
      return extractedChar + formedString;
    }
  } else {
    return stringToReduce;
  }
};

console.log(stringReducer("aaabccddd"));
console.log(stringReducer("baab"));

// https://medium.com/front-end-weekly/use-github-oauth-as-your-sso-seamlessly-with-react-3e2e3b358fa1
