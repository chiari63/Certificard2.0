function mudaTema() {
  document.body.classList.toggle("dark");
}
function trocaImagem(){
  if("dark"){
    document.getElementById("face").src = "https://capella.art.br/wp-content/uploads/2018/11/facebook-icon.png";
  }else{
    document.getElementById("face").src = "https://imagensemoldes.com.br/wp-content/uploads/2020/04/%C3%8Dcone-logo-Facebook-PNG.png" ;
  }
}