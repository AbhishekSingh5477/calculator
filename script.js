let screen=document.getElementById("inp");
let buttons=document.querySelectorAll("button");
let screenvalue='';
let Del="";
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
         if(buttonText=="=") {
            screenvalue=eval(screenvalue);
            screen.value=screenvalue;
        }
        else if(buttonText=="C"){
            screenvalue="";
            screen.value=screenvalue;
        }
        else if(buttonText=="Del"){
             screenvalue=screenvalue.substring(0,screenvalue.length-1);
             screen.value=screenvalue;
        }
        else{
            Del=buttonText;
         screenvalue+=buttonText;
         screen.value=screenvalue;
        }
    })
}