//--------------------------
//---Global Variables------



let userReturnArray = [];
let result = document.getElementById("result");



window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) { robogerTransciber(e);});
})






//Buisness Logic-------------------
//----------------------------------


function robogerTransciber(e){
    e.preventDefault();

    let userNumberInput = document.querySelector("input[type='number']").value;
    userReturnArray = [];
    result.innerHTML = [0];

    for (let i = 0; i <=userNumberInput; i++){
      let numberToString = i.toString();
      
      if (numberToString === "13" || numberToString === "23") {
        userReturnArray.push("Won't you be my neighbor?");
      }
      else if (numberToString === "12" || numberToString === "21"){
        userReturnArray.push("Boop!");
      }
      else if (numberToString.includes('1')) {
        userReturnArray.push("Beep!");
      }else if (numberToString.includes('2')) {
        userReturnArray.push("Boop!");
      }  else if (numberToString.includes("3")){
        userReturnArray.push("Won't you be my neighbor?")
      }  else {
      userReturnArray.push(i);
    }



    } return result.innerHTML = userReturnArray;
    
  }

















  //     if  (NumberToString.includes('2') && NumberToString.includes('1')){
  //       userReturnArray.push("Beep!");
  //     }else if (NumberToString.includes('2') && NumberToString.includes('3')){
  //       userReturnArray.push("Won't you be my neighbor?");
  //     }else if (NumberToString.includes('2')){
  //       userReturnArray.push("Boop!");
  //     }
      
      
      
  //     else if  (NumberToString.includes('1') && NumberToString.includes('2')){
  //       userReturnArray.push("Boop!"); 
  //     }else if(NumberToString.includes('1') && NumberToString.includes('3')){
  //       userReturnArray.push("Won't you be my neighbor?");
  //     }else if (NumberToString.includes('1')){
  //       userReturnArray.push("Beep!");
  //     }
      
  //     else if (NumberToString.includes("3")){
  //       userReturnArray.push("Won't you be my neighbor?");
  //     }else {
  //       userReturnArray.push(i);
  //     }
  //   } return result.innerHTML = userReturnArray;

    
  // }

  


  // User Interface Logic--------
  //-----------------------------------
  
