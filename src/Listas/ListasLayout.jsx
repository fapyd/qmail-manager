import { useEffect } from "react"
import useUserStore from "../../store/userStore"
import { Outlet, useNavigate } from "react-router-dom"
import AsideBar from "../components/AsideBar"

export default function ListasLayout() {
  const { user, isAuthenticated } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    }
  }, [])
  
  return (
    <div className="flex flex-row w-full h-full gap-2">
      <AsideBar />
      
      <main className="flex flex-col w-full gap-4 py-8 pl-4 pr-6">
        <Outlet />
      </main>
    </div>
  )
}