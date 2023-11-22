function tocarSom(animal) {
    document.getElementById(`${animal}_som`).play();
  }
  
  function atribuirEvento(animal, classe) {
    document.querySelector(`.${classe}`).onclick = () => tocarSom(animal);
  }
  
  atribuirEvento("cachorro", "som_cachorro");
  atribuirEvento("chimpanze", "som_chimpanze");
  atribuirEvento("elefante", "elefante_som");
  atribuirEvento("gato", "som_gato");
  atribuirEvento("gorilla", "som_gorilla");
  atribuirEvento("jacare", "som_jacare");
  atribuirEvento("leopardo", "som_leopardo");
  atribuirEvento("lobo", "som_lobo");
  atribuirEvento("tigre", "som_tigre");