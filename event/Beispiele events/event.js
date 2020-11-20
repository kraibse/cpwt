var x= 0;
document.addEventListener("keydown", (key) =>{
    document.getElementById("keydown").innerHTML = key.code;
});
document.addEventListener("change", (e) =>{
    x++;
    document.getElementById("change").innerHTML = x;
});