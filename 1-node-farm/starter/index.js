const fs = require("fs");
const http = require("http");
const url = require("url");

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
function replaceTemplate(template, product){
    let result = template.replaceAll("{%product_name%}", product.productName);
    output = output.replaceAll("{%image%}", product.image);
    output = output.replaceAll("{%price%}", product.price);
    output = output.replaceAll("{%from%}", product.from);
    output = output.replaceAll("{%nutrients%}", product.nutrients);
    output = output.replaceAll("{%image%}", product.image);
    output = output.replaceAll("{%image%}", product.image);
    output = output.replaceAll("{%image%}", product.image);
}

const templateOverview = fs.readFileSync(__dirname + "/templates/overview.html", "utf8");
const templateCard = fs.readFileSync(__dirname + "/templates/card.html", "utf8");
const templateProduct = fs.readFileSync(__dirname + "/templates/product.html", "utf8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");
const dataObject = JSON.parse(data);

const server = http.createServer((request, response) => {
    console.log(request.url);

    const pathName = request.url

    if(pathName === '/' || pathName === '/overview'){
        response.writeHead(200, {"Content-Type": "text/html"});

        const cardsHtml = dataObject.map((el) => replaceTemplate(templateCard, el))

        response.end(templateOverview)



    } else if(pathName === '/product'){
        response.end("this is the product")



    } else if(pathName === '/api') {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(data);


    } else {
        response.writeHead(404, {
            "Content-Type": "text/html"
        })
        response.end("<h1>Not Found</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server started on port 8080");
});
