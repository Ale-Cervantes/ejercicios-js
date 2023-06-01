pesoPayaso = 112;
pesoMuñeca = 75;

/*payasoVendido =27;
muñecaVendida =14;

pesoVendidoPayaso = pesoPayaso * payasoVendido;
pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
totalDelPedido= pesoVendidoPayaso + pesoVendidoMuñeca /1000;

console.log("Peso total del Paquete:" + totalDelPedido+ "kg"); */

//mi propuesta
pesoPayaso = 112;
pesoMuñeca = 75;

payasoVendido =27;
muñecaVendida =14;

function ventaEnGramos(){
    pesoTotalPayasos= (pesoPayaso * payasoVendido) ;
    pesoTotalMuñecas= (pesoMuñeca * muñecaVendida) ;
    operacion = ((pesoTotalPayasos + pesoTotalMuñecas) /1000) ; 
    Total= pesoTotalPayasos+pesoTotalMuñecas
    
    console.log(Total); 
}
ventaEnGramos();