//using eval that evaluates whole string like 3+34/3*4
//eval is danjerous read from mozilla




//getting inputs
const t=document.querySelectorAll(".digit");//input of digit
const y=document.querySelectorAll(".operChild");//input of operator


//calling same function for both operator and number
//then i am adding this to a string value_1 like 1*2+2 until user enter =(equal sign)
//then this string is beign evaluated using eval(value_1) to evaluate  
//this is actual working of this file

y.forEach(key=>key.addEventListener("click",get_value));
t.forEach(key=>key.addEventListener("click",get_value));


var value_1=" ";//actual string where user is entering data


//driver code
function get_value() {
    if(this.textContent!="=")
    {
        value_1+=this.textContent;
        console.log(value_1);
        document.querySelector(".screen").textContent=value_1;
    }
    else{
        //cheking if it is an invalid expression like *4/3
        try {
            console.log(eval(value_1));
            document.querySelector(".screen").textContent=eval(value_1);
            value_1="";
        }
        catch (e) {
            document.querySelector(".screen").textContent="invalid expression";
            value_1="";
        }
    }        
}


//clear funtion
const e=document.querySelectorAll(".clearChild");
e.forEach(key=>key.addEventListener("click",clear));
function clear()
{
    document.querySelector(".screen").textContent = "0";
    value_1=" ";
}
