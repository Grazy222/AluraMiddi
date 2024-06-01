//introduzindo som
function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio') {
      elemento.play();
    } 
    else { 
      //alert('Elemento não encontrado');
      console.log('Elemento não encontrado ou seletor inválido');
  }
    
}


const listaDeTeclas = document.querySelectorAll('.tecla');  // formato das atribuições acima. Pra não acrescentar variasvezes.Assim fica resumido

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;// template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (event) { //O evento que queremos é um evento de teclado chamado onkeydown, então quando a tecla estiver abaixada, ou seja, pressionada.
      // se a tecla clicada for igual a "Space" ou a "Enter", adicionar a classe ativa.
    if (event.code === 'Space' || evento.code === 'Enter') {      //  se (dada condição for verdadeira) 
      tecla.classList.add('ativa');
    }
    // if (event.code === 'Enter') {
    //   tecla.classList.add('ativa');

    // }
  }

  tecla.onkeydown = function () { // escrevemos tecla.onkeyup, se é justamente quando soltamos a tecla. Passamos a function () {}. Dentro das chaves, na linha seguinte, escrevemos teclas.classList.remove() e nos parênteses, entre aspas simples, passamos ativa.
    tecla.classList.remove('ativa');
  }

}
// let contador = 0;

// // enquanto
// while (contador < listaDeTeclas.length) {  // Portanto, o while() dependeu de um fator externo para funcionar, que é o contador. Tivemos que criar uma variável chamada contador, que é verificada a cada repetição do while() e tem seu valor modificado a cada repetição da nossa rotina.
//     const tecla = listaDeTeclas[contador]; // Se tivéssemos outros instrumentos com botões e fôssemos reproduzir outros while(), teríamos que declarar outros contadores e geraríamos repetições em nosso código. Teríamos que criar, por exemplo, um let contador2, contadorBongo ou contadorPiano, etc. Essa variável contador se tornaria repetitiva.
//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;
     

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }

//     contador = contador + 1;

    
// }

//O for() é uma estrutura de laço de repetição que também vai fazer o mesmo que o while(): enquanto uma condição for verdadeira, ele vai repetir a rotina. A vantagem em relação ao while() é que o contador pode ser declarado dentro dos parênteses do for().
 //Substituiremos a palavra while() por for() e dentro dos parênteses faremos a declaração do contador: let contador = 0;. Depois do ponto e vírgula, temos a condição. Portanto, não precisamos mais ter a variável let declarada fora do nosso laço de repetição.





