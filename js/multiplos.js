
let soma = function () {
    return parseInt(this.numero1)+parseInt(this.numero2);
}  
let subtrair = function () {
    return this.numero1-this.numero2;
}
let Multiplicar = function () {
    return this.numero1*this.numero2;
}    
let dividir = function () {
    return this.numero1/this.numero2;
}
let iniciar = function (x, y) {
    this.numero1 = x;
    this.numero2 = y;
}