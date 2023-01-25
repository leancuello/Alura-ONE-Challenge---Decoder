// CONST QUE TOMAN LOS INPUTS DEL HTML

const textinput = document.getElementById("texto");
const encbtn = document.getElementById('encriptar');
const desencbtn = document.getElementById('desencriptar');
const copybtn = document.getElementById('copybtn');
const textresult = document.getElementById("textresult");
const boxempty = document.getElementById("boxnomessagecontent");
const boxsucess = document.getElementById("boxmessagecontent");


// FUNCTIONS

// ENCRIPTAR FUNCION
const encryptText = (text) => {

	const textArr = text.split(" ")
    let encryptedWord = "";
    let encryptedFullText = "";
    const encryptedArr = []

    textArr.forEach((word) => {
        for(let i = 0; i < word.length; i++) {
        word[i] === "a" || word[i] === "á"
            ? encryptedWord += "ai"
            : word[i] === "e" || word[i] === "é"
            ? encryptedWord += "enter"
            : word[i] === "i" || word[i] === "í"
                ? encryptedWord += "imes"
                : word[i] === "o" || word[i] === "ó"
                ? encryptedWord += "ober"
                : word[i] === "u" || word[i] === "ú"
                    ? encryptedWord += "ufat"
                    : encryptedWord += word[i]
    }
        encryptedArr.push(encryptedWord)
        encryptedWord = ""
    })

  encryptedFullText = encryptedArr.join(" ")
  return encryptedFullText
}

// DESENCRIPTAR FUNCION
const decryptText = (text) => {

    let decryptedText = text.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
    
    return decryptedText
}


// FUNCION COPIAR

function copytext(){
    var sel = document.createRange();
    sel.selectNodeContents(textresult);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(sel);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(sel);
    alert('Texto copiado a portapapeles.')
    return res 
}

/* FUNCION COPIAR ALTERNATIVA */

/* function copytextAlt(){
    var textToCopy = textresult.value;
    navigator.clipboard.writeText(textToCopy);
    alert("Texto copiado al portapapeles");
} */ 

// DISPLAYS EN BOX DE RESULTADO

const successBox = (outText) => {
    textresult.value = outText;
    textresult.innerHTML = outText;
    boxempty.style.display = "none";
    boxsucess.style.display = "block";
    copybtn.style.display = "block";
}

const emptyBox = () => {
    boxsucess.hidden = true;
    boxempty.hidden = false;
    boxempty.style.display = "block";
    boxsucess.style.display = "none";
    copybtn.style.display = "none";
}


// FUNCIONAMIENTO DEL SISTEMA

encbtn.addEventListener("click",() =>{
    if (textinput.value != ""){
        let usertext = textinput.value.toLowerCase().trim();
        let encText = encryptText(usertext);
        successBox(encText);
    } else { emptyBox() }
}) 

desencbtn.addEventListener("click", () => {
    if (textinput.value != ""){
        let usertext = textinput.value.toLowerCase().trim();
        let desText = decryptText(usertext);
        successBox(desText);
    } else { emptyBox() }
    
})

copybtn.onclick = copytext;

