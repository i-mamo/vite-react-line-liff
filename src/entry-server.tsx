import { StrictMode } from "react"
import ReactDomServer from "react-dom/server"
import App from "./view/App"

export const render = () => {
  const html = ReactDomServer.renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
  return html
}