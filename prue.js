var numeros = [1, 2, 3, 4, 5 ];
// var mayor = math.max.apply(null, numeros);
// var menor = math.min.apply(null, numeros);
// console.log [menor, mayor];
var menor = [0];
var mayor = [0];
for (var i = 0; i < numeros.length; i ++){
    if (numeros[i] >= mayor){
      mayor = numeros[i];
    }
    if(numeros[i] <= menor){
      menor = numeros[i];
    }
}