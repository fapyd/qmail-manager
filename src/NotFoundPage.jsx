import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError()
  
  return (
    <div id="error-page">
      <h1>Página no encontrada</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}