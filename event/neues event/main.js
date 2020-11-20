const event = new Event("crazyevent");

document.addEventListener("crazyevent",()=> {
    console.log("the event got triggered")
});

setInterval(()=>{
    document.dispatchEvent(event);
},10000);