function valid(event){
    let name=document.getElementById("#name").value;
    console.log(name);
    
    let dob=document.getElementById("#dob").value;
    let email=document.getElementById("#email").value;

    let mob=document.getElementById("#mob").value;
    let gender=document.getElementsByName("gender");
    let dept=document.getElementById("#dept").value;

    let error=false;
    let nerror=document.getElementById("#nerror");
    let doberror=document.getElementById("#doberror");
    let emailerror=document.getElementById("#emailerror");
    let moberror=document.getElementById("#moberror");
    let generror=document.getElementById("#generror");
    let depterror=document.getElementById("#depterror");
    let skillerror=document.getElementById("#skillerror");

    if(name==="" || name===null){
        nerror.innerHTML="name is required";
        error=true;
    }else{
        nerror.innerHTML="";
    }
    
    let Date=new Date();
    if(dob==="" || dob===null){
        doberror.innerHTML="date is required";
        error=true;
    }else{
        dob=new Date(dob);
        if(dob>=Date){
            doberror.innerHTML="please enter valid date of birth";
            error=true;
        }

    }



}