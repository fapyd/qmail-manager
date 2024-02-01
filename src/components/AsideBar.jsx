import { Link } from "react-router-dom"
import useUserStore from "../../store/userStore"

export default function AsideBar() {
  const { user } = useUserStore()
  
  return (
    <aside className="flex flex-col items-center w-2/12 gap-2 py-8 bg-red-300">
      <h1 className="text-xl font-bold">qmail-manager</h1>
      <hr className="w-11/12 border-2" />

      <h2>{user.username}</h2>

      <br />
      <br />
      
      <nav className="w-11/12 px-4 py-2 text-black underline bg-red-400">
        <ul>
          <li><Link to="/listas">Elegir lista</Link></li>
          <li><Link to="/listas/crear">Crear una nueva lista</Link></li>
        </ul>
      </nav>
    </aside>
  )
}