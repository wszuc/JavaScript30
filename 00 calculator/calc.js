const screen = document.querySelector(".screen");
let tempResult = "0", currentNumber = "0", buffer = "";

function updateScreen(number)
{
    screen.innerText = number;
}

function driver(number)
{
    //obsluga inputu - wysylanie odpowiednich przyciskow do odpowiednich buffferow
    if(isNaN(parseInt(number))) //NaN - not a number
    {
        handleSymbol(number);
    }else{
        handleNumber(number);
    }
}

function handleSymbol(number)
{
    if(number==="←")
    {
        buffer = buffer.slice(0, -1);
        updateScreen(buffer); 
        return 0;    
    }
    if(tempResult==="0")
    {
        tempResult = buffer;
        buffer = "";
        console.log("Wartosc tempResult: "+tempResult+"\nWartość currentNumber: "+currentNumber);
    }
    else{
        currentNumber=buffer;
        console.log("Wartosc tempResult: "+tempResult+"\nWartość currentNumber: "+currentNumber);
        tempResult=math(); //przekazuje wart w stringu!
        currentNumber = "0";
        buffer = "";
        console.log("PO MATH ------ Wartosc tempResult: "+tempResult+"\nWartość currentNumber: "+currentNumber);
    }
    if(number==="=")
    {
        console.log("Wartosc tempResult: "+tempResult+"\nWartość currentNumber: "+currentNumber);
        updateScreen(tempResult);
    }
    currentSymbol = number;
    console.log(currentSymbol);
}

function handleNumber(number)
{
    buffer+=number;
    updateScreen(buffer);
    console.log("Wartosc buffer: "+buffer);
}


function math(){
   if(currentSymbol === "+")
   {
       return parseInt(tempResult)+parseInt(currentNumber);
   }
   else if(currentSymbol === "-")
   {
       return parseInt(tempResult)-parseInt(currentNumber);
   }
   else if(currentSymbol==="x")
   {
       return parseInt(tempResult)*parseInt(currentNumber);
   }
   else if(currentSymbol==="÷")
   {
       return parseInt(tempResult)/parseInt(currentNumber);
   }
   else if(currentSymbol==="=")
   {
       return tempResult;
   }
    else
    {
        return "0";
    }
}

document.querySelector(".main-container").addEventListener("click", function(event){
    let value = event.target.innerText;
    driver(value);
});