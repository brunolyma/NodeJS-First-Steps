const http = require("http")

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })

    if (req.url === "/product") {
      res.end(
        JSON.stringify({
          message: "Rota de produto",
        })
      )
    }

    if (req.url === "/users") {
      res.end(
        JSON.stringify({
          message: "Rota de usuários",
        })
      )
    }

    res.end(
      JSON.stringify({
        data: "Hello, World!",
      })
    );

  }).listen(3000, () => console.log("Servidor rodando okay"))
