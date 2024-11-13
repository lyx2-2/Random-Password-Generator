function generatePassword(){
  const passwordLength = document.getElementById("passwordLength").value
  const includeLowerCase = document.getElementById("includeLowerCase").checked
  const includeUpperCase = document.getElementById("includeUpperCase").checked
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const result = document.getElementById("result")

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "%$&#&$^&$";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if(allowedChars.length === 0){
    result.textContent = `⚠️ (At least 1 set of character needs to be selected)`
    return result;
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  result.textContent = `😄 Generated Password: ${password}`
}