import { useEffect, useState } from "react"

export default function ListasTabla() {
  const [listas, setListas] = useState([])
  const anchoListas = 20

  const truncarNombre = (nombre) => {
    if (nombre.length > anchoListas) {
      const mitad = Math.floor(anchoListas / 2)
      return nombre.substring(0, mitad) + "..." + nombre.substring(nombre.length - mitad)
    }
    return nombre
  }

  useEffect(() => {
    // Carga api

    let listas2 = [
      {id: 1, nombre: "_autoridades"},
      {id: 2, nombre: "_cad1"},
      {id: 3, nombre: "_dindustrial2020"},
      {id: 4, nombre: "_ingresantes2020"},
      {id: 5, nombre: "_planificacion2009"},
      {id: 6, nombre: "asdasdasasdasasdasdasdasddasdasdd"},
      {id: 7, nombre: "_postitulo2013"},
      {id: 8, nombre: "asd"},
      {id: 9, nombre: "aasdasdasdasdasdassdasdasd"},
      {id: 10, nombre: "_preuniversitarioarq2022"},
      {id: 11, nombre: "asdasdasdasdsaasdd"},
      {id: 12, nombre: "_prueba"},
      {id: 13, nombre: "asasdasdasdasdasdd"},
      {id: 14, nombre: "_voluntariosbiau1"},
      {id: 15, nombre: "asdasdasasd"},
      {id: 16, nombre: "asdasdasdsadas"},
      {id: 17, nombre: "asd"},
      {id: 18, nombre: "asdasdasasdasasdasdasdasddasdasdd"},
      {id: 19, nombre: "asd"},
      {id: 20, nombre: "asd"},
      {id: 21, nombre: "aasdasdasdasdasdassdasdasd"},
      {id: 22, nombre: "asd"},
      {id: 23, nombre: "asdasdasdasdsaasdd"},
      {id: 24, nombre: "asd"}
    ]
    listas2.map(lista => ( lista.nombre = truncarNombre(lista.nombre) ))

    setListas(listas2)
  }, [])

  return (
    <fieldset className="border-[1px] border-black w-full">
      <legend className="ml-2 text-sm font-semibold">Listas disponibles</legend>
      
      <ul className="flex flex-row flex-wrap gap-3 px-4 py-2">
        {
          listas.map((lista, index) => (
            <li key={index} className="px-2 py-1 rounded-md bg-zinc-200">{lista.nombre}</li>
            ))
        }
      </ul>

      {/* <table id="tablaListas">
        <tbody className="">
          {
            listas.map((lista, index) => (
              <tr key={index}><td>{lista.nombre}</td></tr>
            ))
          }
        </tbody>
      </table> */}
    </fieldset>
  )
}