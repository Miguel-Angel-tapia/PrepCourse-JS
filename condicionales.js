function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
viajar('Argentina');
  
function puedeManejar(edad) {
  if(edad >= 18) {
           console.log( true );
  } 
  console.log( false );
}

puedeManejar(17);

// condicional IF : nos permite introducir una situacion que debe ser verdadera para que una accion se ejecute

// condicional ELSE IF : es una condicion que podemos agregar ademas de if, que solo se ejecutada si if, no es verdadera, se puede agregar mas de un else if

// condicional ELSE : es una condicion que solo actua, si if y else if, no son verdaderas y no se ejecutan
