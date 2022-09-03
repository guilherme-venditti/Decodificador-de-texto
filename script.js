var input = document.getElementById('input')
var res = document.getElementById('res')
var bcrip = document.getElementById('btn-crip')
var bdescrip = document.getElementById('btn-descrip')
var bcopiar = document.getElementById("btn-copiar")

function criptografar() {
        let text = input.value.toLowerCase()

        if (text == '') {
            alert('Digite um texto!')

        } else {
        text = text.replace(/e/, 'enter')
         .replace(/i/g, 'imes')
         .replace(/a/g, 'ai')
         .replace(/o/g, 'ober')
         .replace(/u/g, 'ufat')

        }
        res.innerHTML = text
        
}

function descriptografar () {
    let text = input.value.toLowerCase()

    if (text == '') {
        alert('Digite um texto!')

    } else {
     text = text
     .replace(/enter/, 'e')
     .replace(/imes/g, 'i')
     .replace(/ai/g, 'a')
     .replace(/ober/g, 'o')
     .replace(/ufat/g, 'u')
    }

    res.innerHTML = text
}

function copiar() {
   
    navigator.clipboard.writeText(res.innerText)
}

bcrip.onclick = criptografar
bdescrip.onclick = descriptografar
bcopiar.onclick = copiar

