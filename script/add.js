 
 

myform.onsubmit =  function () {
     
    
     
    var valid = true;
    if (exampleInputEmail1.value == "") {
        emailerror.innerHTML = "please enter your Email";
        emailerror.style.color = 'red';
        valid = false;
    }
    if (exampleInputPassword1.value == "") {
        passerror.innerHTML = "Password should not Empty less than 8";
        passerror.style.color = 'red';


        //    if(exampleInputPassword1 .length >8)
        //     {
        //         passerror .innerHTML = "Maximum Length should be 8";
        //         passerror .style.color = 'red';
        //         valid = false;
        //     }
        valid = false;

    }
    if (city.value == "SC") {
        selcterror.innerHTML = "please select your city";
        selcterror.style.color = "red";
        valid = false;

    }
    if (inlineRadio1.value == null) {
        selctgender.innerHTML = "please select your Gender";
        selctgender.style.color = "red";
        valid = false;

    }
    if(!Number(inputZip.value) )
    {
        enterzipcode.innerHTML = "please Enter Zipcode in Number";
        enterzipcode.style.color = "red";
        valid = false;

    }
    else{

        valid = true;
    }
     return false;
}
