
const socket = io.connect(document.URL);
const data="12345";

socket.on("connect",()=> {
    socket.emit("req",data);
});

socket.on("answer",(data)=>{
    console.log(data);
});