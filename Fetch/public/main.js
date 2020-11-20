const Holder = document.querySelector(".Holder");

function onPress() {
    var input = document.querySelector(".form-control").value;
    getData(input);
}

async function getData(input) {
    var res = await fetch(input+".json");
    res = await res.json();
    var Element = document.createElement("div")
    Element.className = "Element";
    Element.innerHTML=`<ul>
                        <li>Name: ${res.name} </li>
                        <li>Alter: ${res.age} </li>
                        <li>Geschlecht: ${res.gender} </li>
                        <li>Account-Guthabe: ${res.Guthaben} </li>
                        <li>IBAN: ${res.Iban} </li>
                    </ul>`;
    Holder.appendChild(Element); 
    document.querySelector(".form-control").value = null;
}