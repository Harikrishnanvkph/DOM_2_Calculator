var calBody = document.createElement("div");
calBody.id = "calc";
calBody.setAttribute("class","container d-flex flex-column justify-content-between");

//row1
var row1 = createRow();
var textArea = document.createElement("textarea");
textArea.setAttribute("class","col-12 textarea");
textArea.setAttribute("rows","2");
textArea.setAttribute("name","textarea");
textArea.setAttribute("placeholder","0");

row1.append(textArea);

//row2
var row2 = createRow();
var btnClear = createButton("Clear","C","col-3 px-0 bg-transparent border-0","loader");
var btnback = createButton("backspace", "<-","col-3 px-0 bg-transparent border-0","loader");
var btnDot = createButton("dot",".","col-3 px-0 bg-transparent border-0","loader");
var btnMultiply = createButton("multiply","X","col-3 px-0 bg-transparent border-0","operator");

row2.append(btnClear,btnback,btnDot,btnMultiply);

//row3
var row3 = createRow();
var btnSeven = createButton("seven","7","col-3 px-0 bg-transparent border-0","number");
var btnEight = createButton("eight", "8","col-3 px-0 bg-transparent border-0","number");
var btnNine = createButton("nine","9","col-3 px-0 bg-transparent border-0","number");
var btnDivide = createButton("divide","/","col-3 px-0 bg-transparent border-0","operator");

row3.append(btnSeven,btnEight,btnNine,btnDivide);

//row4
var row4 = createRow();
var btnFour = createButton("four","4","col-3 px-0 bg-transparent border-0","number");
var btnFive = createButton("five", "5","col-3 px-0 bg-transparent border-0","number");
var btnSix = createButton("six","6","col-3 px-0 bg-transparent border-0","number");
var btnMinus = createButton("minus","-","col-3 px-0 bg-transparent border-0","operator");

row4.append(btnFour,btnFive,btnSix,btnMinus);

//row5
var row5 = createRow();
var btnOne = createButton("one","1","col-3 px-0 bg-transparent border-0","number");
var btnTwo = createButton("two", "2","col-3 px-0 bg-transparent border-0","number");
var btnThree = createButton("three","3","col-3 px-0 bg-transparent border-0","number");
var btnAdd = createButton("add","+","col-3 px-0 bg-transparent border-0","operator");

row5.append(btnOne,btnTwo,btnThree,btnAdd);

//row6
var row6 = createRow();
var btnZero = createButton("zero","0","col-3 px-0 bg-transparent border-0","number");
var btnDZero = createButton("dZero", "00","col-3 px-0 bg-transparent border-0","number");
var btnEqual = createButton("equal","=","col-6 px-0 bg-primary border-0","loader");

row6.append(btnZero,btnDZero,btnEqual);

calBody.append(row1,row2,row3,row4,row5,row6);
document.body.append(calBody)


function createRow(){
    var row = document.createElement("div");
    row.setAttribute("class","row h-100 mx-2 my-1");
    return row;
}


function createButton(value,symbol,cls,func){
    var btn = document.createElement("button");
    btn.setAttribute("name",func);
    btn.setAttribute("value",value);
    btn.id = value;
    btn.setAttribute("class",cls);
    btn.setAttribute("onclick", `foo('${value}')`);
    btn.innerHTML = symbol;
    return btn;
}



