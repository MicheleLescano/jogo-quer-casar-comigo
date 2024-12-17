const texto = document.getElementById("texto")
const no = document.getElementById("no")

var contador = 0

no.addEventListener("mousemove",function(){
    contador++
  let x = Math.floor( Math.random() * 100 )
  let y = Math.floor( Math.random() * 100 )

  no.style.right = x + "%"
  no.style.bottom = y + "%"
  if( contador == 10 ){
    texto.innerHTML = "CASE COMIGO!!!💖"
    texto.style.fontSize = "40pts"
    texto.style.color = "red"
  }
  if( contador == 10 ){
     texto.innerHTML = " 💔FELIZES PARA SEMPRE..."
     document.body.style.backgroundImage = "url(img/coracaopartidopng.webp)"
  }
})
function casar() {
    no.innerHTML = "CLARO!"
    setTimeout( function(){
        while( !confirm("Confirmar o casório?") ){}
        alert("💕Parabéns!!!\n Vos declaro casados!")
    }, 1000 )
    
}


