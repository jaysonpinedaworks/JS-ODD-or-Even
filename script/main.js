let enterNumber = document.querySelector("#enterNumber");
let display = document.querySelector("#display");
let oddNum = document.querySelector("#oddNum");
let evenNum = document.querySelector("#evenNum");


function checkNumber() {
    if (enterNumber.value % 2 == 0 && enterNumber.value > 0 ){ // if no >0 .. blank will be (Even) and if its >= 
        // console.log("the number is even")
        display.innerHTML = "The Number is EVEN"
        document.querySelector("#evenNum").style.color= "red";
        document.querySelector("#oddNum").style.color= "black";

    }
    else if (enterNumber.value.includes(".") ){
        // console.log("invalid")
        display.innerHTML = "The Number is Invalid "
        document.querySelector("#evenNum").style.color= "black";
        document.querySelector("#oddNum").style.color= "black";

    }
    else if (enterNumber.value == "" ){
        display.innerHTML = "Please enter a Number";
        console.log("no")
        document.querySelector("#evenNum").style.color= "black";
        document.querySelector("#oddNum").style.color= "black";
    }
   else if (enterNumber.value == 0){ // if there is no condition here -- blank is not working
        display.innerHTML = "The Number is EVEN"
        document.querySelector("#evenNum").style.color= "red";
        document.querySelector("#oddNum").style.color= "black";

    }
    else {
        // console.log("the number is odd.")
        display.innerHTML = "The Number is ODD"
        document.querySelector("#oddNum").style.color= "red";
        document.querySelector("#evenNum").style.color= "black";

    }
}

function pleaseReset() {
    display.innerHTML = "";
    document.querySelector("#oddNum").style.color= "black";
        document.querySelector("#evenNum").style.color= "black";
}