let Temp;
let Result = 0;
let Op;
let Memory;


const operArr = ["+","-","*","/","=","C","Del", "iM","oM"];
     
const output = document.querySelector(`#output-result`);

const  calcIn = document.querySelector(`.input`);

calcIn.addEventListener("click", function(event){
    if(!event.target.classList.contains('Btn')) return;
    let value = event.target.innerText;

    if (operArr.includes(value)){
        console.log(value);
        switch (value) {
            case 'C':
                output.innerText = "";
                Result = 0;
                break;            
            case 'iM':
                Memory = output.innerText;
                output.innerText = "";
                break;
            case 'oM':
                output.innerText = "";
                output.innerText = Memory; 
                break;
            case 'Del':
                output.innerText = output.innerText.slice(0,-1);
                break;
            case '+':
                Temp = output.innerText;
                Result =  Number(Temp);
                output.innerText = "";
                op = '+';
                break;
            case '-':
                Temp = output.innerText;
                Result =  Number(Temp);
                output.innerText = "";
                op = '-';
                break;
            case '*':
                Temp = output.innerText;
                Result = Number(Temp);
                output.innerText = "";
                op = '*';
                break;
            case '/':
                Temp = output.innerText;
                Result =  Number(Temp);
                output.innerText = "";
                op = '/';
                break;
            case '=':
                Temp = output.innerText;
                switch (op) {
                    case '+':
                    Result = Result + Number(Temp);
                    break;
                    case '-':
                    Result = Result - Number(Temp);
                    break;
                    case '*':
                    Result = Result * Number(Temp);
                    break;                    
                    case '/':
                    Result = Result / Number(Temp);
                    break;  
                }                  
                output.innerText = Result;
                Temp = 0;
                break;
        }       
    } else {
        output.innerText = output.innerText.concat(value);
    }


})
 

