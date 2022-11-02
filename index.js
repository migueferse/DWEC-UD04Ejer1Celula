


function mitosis(objeto) {
  let celulaHija1 = this;
  let celulaHija2 = this;
  delete this.id;
  delete this.name;
  delete this.mitosis;
}

let celula = {
  id: 1,
  name: 'Celula',
  mitosis: mitosis,

}
celula.mitosis(celula);