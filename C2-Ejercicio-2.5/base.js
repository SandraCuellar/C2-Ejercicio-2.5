
function esItaliano(apellido) {
 if (apellido[apellido.length-1] === "i") {
  return true;
 }
 return false;
}

let apellido = "Pérez";
let appelido2 = "Giovanni";

esItaliano(apellido)

function imprimeResultado(esItaliano) {
  if (esItaliano) {
  console.log("Este apellido tiene muchas posibilidades de ser italiano");
} else {
  console.log("Este apellido podría ser de cualquier país");
}

}
while (true) {
  let apellido = prompt("¿Cuál es tu apellido?");
  imprimeResultado(esItaliano(apellido))
}
