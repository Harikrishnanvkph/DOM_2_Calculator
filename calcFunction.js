var temp2 = "";
var opt = "";
let dotOn = false;
let opOn = false;
let input = textArea.value;
let current = "input";

function foo(val){
    var getId = document.getElementById(val);
    var idVal =  getId.getAttribute('name');
    if(idVal === "number"){
        if(opOn){
            temp2 += textInputNumber(val);
        }else{
            input += textInputNumber(val);
        }
    }else if(idVal === "operator" && !opOn){
        opt = textInputOperator(val);
        textArea.innerHTML =  input +opt+ temp2;
        dotOn = false;
        current="dd";
        opOn = true;
        return;
    }else if(idVal === "loader"){
        switch(val){
            case "Clear":
                opt = ""
                temp2 = "";
                input = "";
                opOn = false;
                dotOn = false;
                current="input";
                Clear();
                return;
            case "equal":
                input = triggerOperation(input, temp2, opt);
                textArea.innerHTML =  input;
                temp2 = "";
                opt = "";
                opOn = false;
                current=="input"
                return;
            case "dot":
                if(dotOn){
                    return;
                }
                if(current=="input"){
                    input += ".";
                }else{
                    temp2 += ".";
                }
                dotOn = true;
                break;
        }
    }
    console.log(input);
    console.log(temp2)
    textArea.innerHTML =  input +opt+ temp2;
}

function textInputNumber(value){
    switch(value){
        case "one": return "1";
        case "two": return "2";
        case "three": return "3";
        case "four": return "4";
        case "five": return "5";
        case "six": return "6";
        case "seven": return "7";
        case "eight": return "8";
        case "nine": return "9";
        case "zero": return "0";
        case "dZero": return "00";
    }
}

function textInputOperator(value){
    switch(value){
        case "multiply": return "X";
        case "divide": return "/";
        case "minus": return "-";
        case "add": return "+";
    }
}

function Clear(){
    textArea.innerText = "";
}

function triggerOperation(input, temp2, opt){
    let num1 = parseFloat(input);
    let num2 = parseFloat(temp2);
    let result = 0;
    switch(opt){
        case "X":
            result = (num1*num2).toFixed(2);
            break;
        case "/": 
            result = (num1/num2).toFixed(2);
            break;
        case "-": 
            result = (num1-num2).toFixed(2);
            break;
        case "+": 
            result = (num1+num2).toFixed(2);
            break;
    }
    if(((result * 10)%10) === 0){
        return parseInt(result).toFixed(0);
    }else{
        return result;
    }
}
