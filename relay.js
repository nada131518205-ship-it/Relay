const {WebSocketServer}=require('ws');
const s=new WebSocketServer({port:8080});
s.on('connection',c=>c.on('message',m=>{m=m.toString();s.clients.forEach(o=>o!==c&&o.readyState===1&&o.send(m))}));
console.log("relay ligado na 8080");