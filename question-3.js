// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
let result;
function checkPasswordStrength(userPassword) {
if (userPassword.length < 6) {
    result = "Weak";
} else if (userPassword.length >= 6 && userPassword.length <= 10) {
    result = "Medium";
} else {
    result = "Strong";
}
return result;
}


console.log(checkPasswordStrength("thisIsStrongPassword"));