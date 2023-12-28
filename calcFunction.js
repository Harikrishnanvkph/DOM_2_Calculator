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
                if(temp2===""){
                    return;
                }
                input = triggerOperation(input, temp2, opt);
                textArea.innerHTML =  input;
                if(checkFactor(input)){
                    dotOn = false;
                }else{
                    dotOn = true;
                }
                temp2 = "";
                opt = "";
                opOn = false;
                current="input"
                return;
            case "dot":
                if(dotOn){
                    return;
                }
                if(current==="input"){
                    input += ".";
                }else{
                    temp2 += ".";
                }
                dotOn = true;
                break;
            case "backspace":
                textArea.innerHTML =  splitString(textArea.innerHTML);
                return;
        }
    }
    console.log(input);
    console.log(temp2)
    textArea.innerHTML =  input +opt+ temp2;
}

function textInputNumber(value){
    var res = document.getElementById(value);
    return res.innerText;
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
    if(checkFactor(result)){
        return parseInt(result).toFixed(0);
    }else{
        return result;
    }
}

function checkFactor(val){
    if((val*10)%10 === 0){
        return true;
    }
    return false;
}

function splitString(val){
    let temp1 = "";
    let temp2 = "";
    let opt = "";
    let optT = false;
    let tempT = false;
    for(let i=0;i<val.length;i++){
        let ch = val.charAt(i);
        if(ch){
            dotOn = false;
        }
        if(ch === '+' || ch === '-' || ch === '/' || ch === 'X'){
            if(i===0){
                continue;
            }
            opt = ch + "";
            optT = true;
            opOn = false;
        }else if(optT === true){
            temp2 += ch;
            tempT = true;
        }else{
            temp1 += ch;
        }
    }
    if(!optT){
        temp1 = temp1.slice(0,temp1.length-1)
        input = temp1;
        current = "input";
    }else if(tempT){
        input=temp1;
        opt = opt;
        temp2 = temp2.slice(0,temp2.length-1);
        current = "temp";
    } else if(!tempT && optT){
        input=temp1;
        opt = "";
    }
    let sum = temp1+opt+temp2;
    return sum;
}