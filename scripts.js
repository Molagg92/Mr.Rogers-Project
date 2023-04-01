


function robogerTransciber(userNumberInput){
  let userReturnArray = [];
  for (let i = 0; i <=userNumberInput; i++){
    let NumberToString = i.toString();
    if (NumberToString.includes('1')){
      userReturnArray.push("Beep!");
    }else if (NumberToString.includes('2')){
      userReturnArray.push("Boop!")
    }
    else {
      userReturnArray.push(i)
    }
  } return userReturnArray;
}