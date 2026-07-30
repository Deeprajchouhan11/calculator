const input = document.getElementById("number-input");
const result = document.getElementById("result");

const operators = ["+","-","/","*","%"];
function handleclickbutton(el)
{
    const lastChar = input.value.slice(-1);
    if (operators.includes(el.innerText) && operators.includes(lastChar))
    {
        input.value = input.value.slice(0 , input.value.length - 1) + el.innerText;
        return;
    }
      console.log(el);
      const exp = input.value + el.innerText;
      input.value = exp; 
    
      if(operators.includes(el.innerText)) return;
      result.value = eval(exp);
    
}

function reset()
{
    input.value = "";
    result.value = "";
}