let inputnumber=document.getElementById("inputnumber")
let number=document.getElementById("inputnumber");
let search = document.getElementById("searchbutton");
let numberfacetext=document.getElementById("numberfacetext");
let h3number=document.getElementById("h3number");
let smallnumber=document.getElementById("smallnumber");
function getdata() {
    smallnumber.innerText="checking...";

    fetch(`http://numbersapi.com/${number.value}?json`)
    .then(response => response.json())
    .then(function (data) {
        numberfacetext.innerText=data.text;
        smallnumber.innerText=data.number;

        console.log(data)
    }
         
    
    
    
    
    );
   
   

}
