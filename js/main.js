console.log("desafio1");

function usePrompt() {
    const numero = Number(prompt('Escribí un número, por favor'));
    
    for (let i = 0; i <= 10; i++) {
      console.log(numero + i);
    }
  }
  
  usePrompt();