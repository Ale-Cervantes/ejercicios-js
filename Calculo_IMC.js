function calcularIMC(pesoLibras, estaturaCm) {
    // Convertir peso de libras a kilogramos
    var pesoKg = pesoLibras * 0.453592;
  
    // Convertir estatura de centímetros a metros
    var estaturaM = estaturaCm / 100;
  
    // Calcular el IMC
    var imc = pesoKg / (estaturaM * estaturaM);
  
    // Determinar la categoría del IMC según los criterios de la OMS
    var categoria;
    if (imc < 16) {
      categoria = 'Criterio de ingreso';
    } else if (imc >= 16 && imc <= 16.9) {
      categoria = 'Infrapeso';
    } else if (imc >= 17 && imc <= 18.4) {
      categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
      categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      categoria = 'Obesidad premórbida';
    } else if (imc >= 40 && imc <= 45) {
      categoria = 'Obesidad mórbida';
    } else if (imc > 45) {
      categoria = 'Obesidad hipermórbida';
    }
  
    // Mostrar los resultados
    console.log('Peso en kilogramos: ' + pesoKg.toFixed(2));
    console.log('IMC: ' + imc.toFixed(2));
    console.log('Categoría: ' + categoria);
  }
  
  // Ejemplo de uso
  calcularIMC(160, 170); // Peso en libras: 160, Estatura en cm: 170