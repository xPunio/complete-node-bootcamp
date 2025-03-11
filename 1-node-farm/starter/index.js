// const fs = require("fs");
const http = require("http");

// bloacking, synchrinouse way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
//
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// console.log(textOut);

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log(err);
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", () => {
//         console.log("your file has been written");
//       });
//     });
//   });
// });
// console.log("Will read file");

////////////////////////////////////
///////// SERVER

const server = http.createServer((request, response) => {
  response.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started on port 8080");
});

