import { createServer as createViteServer } from "vite"
import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createServerForVite = async () => {
  const app = express()
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom"
  })

  
  app
  .use(vite.middlewares)
  .use("*", async (req, res, next) => {
    const url = req.originalUrl
    console.log("method:",req.method);
    
    if(req.method !== "GET") { return next()}
    
    try {
        console.log("こんにt");
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8")
        template = await vite.transformIndexHtml(url, template)
        const { render } = await vite.ssrLoadModule("/src/entry-server.tsx")
        const appHtml = await render(url)
        const html = template.replace(`<!--ssr-outlet-->`, appHtml)
        res.status(200).set({ "Content-Type": "text/html" }).send(html)
      } catch (err) {
        vite.ssrFixStacktrace(err)
        next(err)
      }
    })
    .post("/api/test", (_req, res) => {
      // POSTリクエストの処理を行う
      console.log("test");
      res.send("POSTリクエストを受信しました。")
    })
    .listen(5173, () => {
      console.log(`Vite Server Start!`);
    })
    
}

createServerForVite()