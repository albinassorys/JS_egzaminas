/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {

constructor (title, director, budget)

{
this.title = title;
this.director = director;
this.budget = budget;
this.wasExpensive = ()=> { 

    if(this.budget >= 100000000){return true}
    else{return false}

};

}

}

let Movie1 = new Movie ("Jaws","Steven Spielberg","9000000");
let Movie2 = new Movie ("Terminator","James Cameron","6400000");
let Movie3 = new Movie ("Titanic","Jamesd Cameron","200000000");
let Movie4 = new Movie ("Coffee and Cigarettes","James Jarmusch","N/A");
let Movie5 = new Movie ("Tadas Blinda. Pradžia","Donatas Ulvydas","3500000");

console.log(Movie1.wasExpensive());
console.log(Movie2.wasExpensive());
console.log(Movie3.wasExpensive());
console.log(Movie4.wasExpensive());
console.log(Movie5.wasExpensive());