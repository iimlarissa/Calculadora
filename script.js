function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  
  function limpar() {
    document.getElementById("resultado").innerHTML = "";
  }
  
  function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
  }
  
  function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
  
    if (resultado) {
      resultado = resultado.replace(/÷/g, '/');
      resultado = resultado.replace(/×/g, '*');
      resultado = resultado.replace(/,/g, '.');
      resultado = resultado.replace(/–/g, '-');

      //Quebra a expressão em um vetor de tokens. Separa números e operadores.
      const tokens = resultado.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
  
      
      if (!tokens) return;
      
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '*' || tokens[i] === '/'){
          const operacao = tokens[i];
          const anterior = parseFloat(tokens[i - 1]);
          const proximo = parseFloat(tokens[i + 1]);
          const resultado = operacao === '*' ? anterior * proximo : anterior /proximo;

          tokens.splice(i - 1, 3, resultado.toString()); // Remove o número anterior, o operador e o número seguinte, e adiciona o resultado
          i -= 1; // Ajusta o índice para considerar a remoção
        }
      }
      
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-'){
          const operacao = tokens[i];
          const anterior = parseFloat(tokens[i - 1]);
          const proximo = parseFloat(tokens[i + 1]);
          const resultado = operacao === '*' ? anterior * proximo : anterior /proximo;

          tokens.splice(i - 1, 3, resultado.toString()); // Remove o número anterior, o operador e o número seguinte, e adiciona o resultado
          i -= 1; // Ajusta o índice para considerar a remoção
        }
      }
      
      document.getElementById('resultado').innerHTML = eval(resultado);
    }
  }