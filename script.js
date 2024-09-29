function GereratePassword() {
    const randomPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:\"<>?-=[];',./`~ ";
    let password = "";
    let passwordLength = "12";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * randomPassword.length);
        password += randomPassword[randomIndex];
    } 
    document.getElementById("Password").value = password
}


function passwordCopy(){
    const passwordField = document.getElementById("Password");
    passwordField.select();

    document.execCommand("copy");
    
}



