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
    
    for (let i = 0; i <=userNumberInput; i++){
      let NumberToString = i.toString();

      if  (NumberToString.includes('2') && NumberToString.includes('1')){
        userReturnArray.push("Beep!");
      }else if (NumberToString.includes('2') && NumberToString.includes('3')){
        userReturnArray.push("Won't you be my neighbor?");
      }else if (NumberToString.includes('2')){
        userReturnArray.push("Boop!");
      }
      
      
      
      else if  (NumberToString.includes('1') && NumberToString.includes('2')){
        userReturnArray.push("Boop!"); 
      }else if(NumberToString.includes('1') && NumberToString.includes('3')){
        userReturnArray.push("Won't you be my neighbor?");
      }else if (NumberToString.includes('1')){
        userReturnArray.push("Beep!");
      }
      
      else if (NumberToString.includes("3")){
        userReturnArray.push("Won't you be my neighbor?");
      }else {
        userReturnArray.push(i);
      }
    } return result.innerHTML = userReturnArray;

    
  }

  


  // User Interface Logic--------
  //-----------------------------------
  
