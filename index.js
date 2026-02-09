const btnE1=document.querySelector("#generate-btn");
const inputE1=document.querySelector("#input");
const copyE1=document.querySelector(".fa-copy");
const alertContainerE1=document.querySelector(".alert-container");

btnE1.addEventListener("click",()=>{
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    createpassword();
});

copyE1.addEventListener("click",()=>{
    if(inputE1.value){
        copyPassword();
        alertContainerE1.classList.remove("active");
        setTimeout(()=>{
        alertContainerE1.classList.add("active");
        },2000);
    }
    
});

function createpassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength=12;
    let password="";
    for(let i=0;i<passwordLength;i++){
        const randomNumber=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);


    }
    inputE1.value=password;
    alertContainerE1.innerText=password+" Copied !";
}

function copyPassword(){
    inputE1.select();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputE1.value);

    
    

}