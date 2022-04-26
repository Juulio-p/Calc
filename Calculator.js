

function add(int1 , int2){ 

    return int1+int2;
}
function sub(int1, int2 ){
    return  int1 - int2;
}

function mult(int1, int2) {
    return int1*int2;
}
function division(int1 , int2){
    return int1 ,int2;
}

function operate(operator , int1 , int2){
    switch(operator.class){
        case "add" : add(int1 , int2);
        break

        case "sub" : sub(int1,int2);
        break

        case "mult" : mult(int1, int2);
        break

        case "division": division(int1, int2)
        break
    }
}

const body =document.body;

const gridContainer = document.createElement('div');
gridContainer.textContent = "Calculator 3200B"
gridContainer.style.color = "blue";
gridContainer.style.height = "100px"
gridContainer.style.width = "200px";
body.append(gridContainer);

const Calc = document.createElement("div");
Calc.style.height = "50px"
Calc.width = "100%";
Calc.style.backgroundColor = "grey";
Calc.append(gridContainer);


