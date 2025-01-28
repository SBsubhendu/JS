function validate(e){
    e.preventDefault();

    let p=document.querySelector("#pass").value;
    let pss=/(?=.*[])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*]){8,16}$/;
    if(p.match(pss)){
        console.log("success");
    }
    else{
        console.log("nt");
    }
    
}