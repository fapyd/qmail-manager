import { useForm } from "react-hook-form"
import useUserStore from "../store/userStore"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { setUser, setAuthenticated, isAuthenticated } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/listas")
    }
  }, [])

  const onSubmit = async (data) => {
    setUser({ username: "Pepe", email: data.email, id: 1 })
    setAuthenticated(true)
    return navigate("/listas")
  }
  
  return (
    <div className="flex justify-center items-center h-full">
      <form name="loginForm" onSubmit={handleSubmit(onSubmit)} className="bg-neutral-400 rounded-xl flex flex-col gap-4 px-4 py-12 items-center justify-center w-1/5 border-2 border-black">
        <h1 className="text-2xl font-bold">qmail-manager</h1>

        <div className="flex flex-col w-5/6">
          <label htmlFor="email" className="ml-2">Email</label>
          <input
            name="email"
            type="email"
            className="text-black rounded-md px-2 py-1"
            {...register("email", {
              required: {
                value: true,
                message: "Email requerido"
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col w-5/6">
          <label htmlFor="password" className="ml-2">Contraseña</label>
          <input
            name="password"
            type="password"
            className="text-black rounded-md px-2 py-1"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña requerida"
              }
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <input type="submit" value="Iniciar" className="px-2 py-1 border-black bg-neutral-500 rounded-md border-[1px] text-white" />
      </form>
    </div>
  )
}