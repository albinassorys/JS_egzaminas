/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("form").addEventListener("submit", (e)=> {

e.preventDefault();

let kg = document.getElementById("search").value;

let lb = kg * 2.2046;

let g = kg / 0.0010000;

let oz = kg * 35.274;

document.getElementById("output").style.display = "block";

document.getElementById("output").innerHTML =

`<div id="data">

<div class="weight">Svoris svarais<br><br>Svoris gramais<br><br>Svoris uncijomis</div>
<div class="number">
<div class="value">${lb}<br><br>${g}<br><br>${oz}</div>
</div>

</div>`

})

