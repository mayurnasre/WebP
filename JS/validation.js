const Nname=document.getElementById("username");
const Nnumber=document.getElementById("number");
const Nage=document.getElementById("age");
const Nemail=document.getElementById("email");
const Npassword=document.getElementById("password");


const errNode1=document.getElementById("error1");
const errNode2=document.getElementById("error2");
const errNode3=document.getElementById("error3");
const errNode4=document.getElementById("error4");
const errNode5=document.getElementById("error5");

Nname.addEventListener("blur",()=>validate1())

const validate1=function()
{
    const name=Nname.value;
    console.log(name);
    if(name=="")
    {
        errNode1.textContent="name required ";
        return false;
    }
       
    else if(name.length<2)
    {
        errNode1.textContent="Enter Valid name";
        return false;
        
    }
    else if(!name.match("^[A-Za-z]*$"))
    {
        errNode1.textContent="Enter only character";
        return false;
    }
    else
    return true;
        

}

Nnumber.addEventListener("blur",()=>validate2())
const validate2 = function() {
    const number = Nnumber.value;
    if (number === "") {
        errNode2.textContent = "Phone number required";
        return false;
    } else if (!number.match("^[0-9]{10}$")) {
        errNode2.textContent = "Enter a valid 10-digit phone number";
        return false;
    } else {
        errNode2.textContent = ""; // Clear error message
        return true;
    }
};


Nage.addEventListener("blur",()=>validate3())
const validate3 = function() {
    const age = Nage.value;
    if (age === "") {
        errNode3.textContent = "Age required";
        return false;
    } else if ( age < 1 || age > 100) {
        errNode3.textContent = "Enter a valid age (1-100)";
        return false;
    } else {
        errNode3.textContent = ""; // Clear error message
        return true;
    }
};


Nemail.addEventListener("blur",()=>validate4())
const validate4 = function() {
    const email = Nemail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errNode4.textContent = "Email required";
        return false;
    } else if (!email.match(emailRegex)) {
        errNode4.textContent = "Enter a valid email address";
        return false;
    } else {
        errNode4.textContent = ""; // Clear error message
        return true;
    }
};


Npassword.addEventListener("blur",()=>validate5())

const validate5 = function() {
    const password = Npassword.value;
    if (password === "") {
        errNode5.textContent = "Password required";
        return false;
    } else if (password.length < 6) {
        errNode5.textContent = "Password must be at least 6 characters long";
        return false;
    } else {
        errNode5.textContent = ""; // Clear error message
        return true;
    }
};



function validate(){
    const r1=validate1();
    const r2=validate1();
    const r3=validate1();
    const r4=validate1();
    const r5=validate1();
    return r1 && r2 && r3 && r4 && r5;
}


