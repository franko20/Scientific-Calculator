//Displaying value

function dis(val)
{
    document.getElementById("input").value += val;
    
    if(val == "+" || val == "-" || val == "*" || val == "/" || val == "**(" || val == "Math.LN")
    {
        document.getElementById("result").value = " ";
    }
    else if(val == "!")
    {
        size = document.getElementById("input").value.length;
        n = Number(document.getElementById("input").value.substring(0, size-1));
        f = 1;
                  
            for(i = 2; i <= n; i++)
            f = f*i;
            document.getElementById("result").value = f;
    }
    else if(val == "%")
    {
        size = document.getElementById("input").value.length;
        n = Number(document.getElementById("input").value.substring(0, size-1));
        document.getElementById("result").value = n/100;
    }
    else{
        let x = document.getElementById("input").value;
        document.getElementById("result").value = eval(x);
    }
}

//code for sin, cos, tan

function sin()
{
    let x = document.getElementById("input").value;
    document.getElementById("result").value = Math.sin(x * (Math.PI / 180));
}

//display the answer as input

function solve()
{
    let x = document.getElementById("input").value;
    document.getElementById("input").value = eval(x);
    document.getElementById("result").value = eval(x);

    if(x == 0)
    {
        document.getElementById("input").value = "";
        document.getElementById("result").value = "";
    }
}

//clear the last value

function bs()
{
    size = document.getElementById("input").value.length;
    let x = document.getElementById("input").value = document.getElementById("input").value.substring(0, size - 1);
    y = ["+","-","*","/","**"];

    if(x == 0)
    {
        document.getElementById("result").value = "";
    }
    else if(y.indexOf(x)){
        document.getElementById("result").value = " ";
        document.getElementById("result").value = eval(x);
    }
    else{
        document.getElementById("result").value = eval(x);
    }
}

//clear the display

function clr()
{
   document.getElementById("input").value = "";
   document.getElementById("result").value = "";
}