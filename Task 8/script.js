/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b){


this.a = a;
this.b = b;

this.sum = function() {

return a + b;

};

this.subtraction = function() {

return a - b;
    
};

this.multiplication = function() {

return a * b;
        
};

this.division = function() {

return a / b;
            
};

console.log(`a = ${this.a}, b = ${this.b}`)

}

const bandymas = new Calculator(5,3);

console.log(bandymas.sum(), bandymas.subtraction(), bandymas.multiplication(), bandymas.division());