const display = document.querySelector(".display");
const keys = document.querySelectorAll(".js-button");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const clickedKey = event.target;
    const keyValue = clickedKey.textContent;
    const displayValue = display.value;
    
//     Checking if the input is a number
    if(key.dataset.type === "number" || key.dataset.type === "operator"){
        if(displayValue === "0"){
          display.value = keyValue
        }
        else{
        display.value = displayValue + keyValue
      }
     
   }
    
//     When a user hits a number key after an operator key the previous display should be replaced with the new number.
      
      // Calculating function
      const action = key.dataset.action
      function calculate(firstNumber, operator, secondNumber){

        if(action === "plus"){
          console.log("plus")
        }
        if(action === "minus"){
          console.log("minus")
        }

        if(action === "multiply"){
          console.log("multiply")
        }

         if(action === "divide"){
          console.log("divide")
        }
        
        if(action === "calculate"){
          console.log("Equals")
        }
      }
    
    
    const previousKeyType =  key.dataset.previous
    if(
       action === "plus" ||
       action === "minus" || 
       action === "multiply" || 
       action === "divide"
    ){
      key.classList.add("is-pressed");
      key.dataset.previous = "operator"
    }
    
    if(!action){
      if(displayValue === "0" || previousKeyType === "operator"){
        display.value = keyValue
      }
      else{
        display.value = displayValue + keyValue
      }
    }
    
    
    calculate()
//     Checking if the input is an operator
    if(key.dataset.type === "operator"){
      
    }
  
  })
})



// Clearing display
document.querySelector(".js-clear").addEventListener("click", () => {
  display.value = "0"
})