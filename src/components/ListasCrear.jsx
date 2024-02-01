export default function ListasCrear() {
    return (
      <fieldset className="border-[1px] w-1/3 border-black">
        <legend className="ml-2 text-sm font-semibold">Propiedades de la nueva lista</legend>

        <form className="flex flex-col gap-2 px-4 py-2">
          <div className="flex flex-col">
            <label>Nombre de la lista</label>
            <input type="text" className="border-black px-2 border-[1px] rounded-[0.200rem]" />
          </div>

          <div className="flex flex-col">
            <label>Dirección de la lista</label>
            <div className="flex justify-between w-full gap-1">
              <input type="text" className="border-black px-2 border-[1px] w-2/3 rounded-[0.200rem]" />
              <label>@</label>
              <input type="text" className="border-black px-2 border-[1px] w-1/2 rounded-[0.200rem]" />
            </div>
          </div>

          <div className="flex flex-col">
            <label>Idioma de la lista</label>
            <select className="border-black border-[1px] px-2 rounded-[0.200rem]">
              <option>Lista 1</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Usuarios que pueden editar esta lista</label>
            <input type="text" className="border-black px-2 border-[1px] rounded-[0.200rem]" />
          </div>

          <input type="submit" value="Crear lista" className="px-2 py-1 text-lg font-semibold bg-blue-300 rounded-md" />
        </form>
      </fieldset>
    )
}