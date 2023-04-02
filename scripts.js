


function robogerTransciber(userNumberInput){
  let userReturnArray = [];
  for (let i = 0; i <=userNumberInput; i++){
    let NumberToString = i.toString();
    if (NumberToString.includes('1') && NumberToString.includes('2')){
      userReturnArray.push("Boop!");
      
    }else if (NumberToString.includes('1')){
      userReturnArray.push("Beep!");
    }else if (NumberToString.includes('2')){
      userReturnArray.push("Boop!");
    }else if (NumberToString.includes("3")){
      userReturnArray.push("Won't you be my neighbor?");
    }
    else {
      userReturnArray.push(i);
    }
  } return userReturnArray;
}

