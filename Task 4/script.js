/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const obj = JSON.stringify(auto);
let obj2 = JSON.parse(obj);

console.log(typeof obj2)

let cardContent = "";
let output = obj2.forEach((item) => {
    
    cardContent+= `<div class="card">

    <h3>${item.brand}</h3>
    <h4>Models:</h4>
    ${item.models}

    </div><br><hr>`

})


    
  document.getElementById("output").innerHTML = cardContent;