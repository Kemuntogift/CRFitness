// Question: Output based question on event Loop
console.log("a");
setTimeout(() => console.log("set"), 0) //setTimeout is part of web api not javascript
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("b");