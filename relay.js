const {WebSocketServer}=require('ws');
const port=process.env.PORT||8080;
const s=new WebSocketServer({port});
s.on('connection',c=>c.on('message',m=>{m=m.toString();s.clients.forEach(o=>o!==c&&o.readyState===1&&o.send(m))}));
console.log("relay ligado na "+port);
