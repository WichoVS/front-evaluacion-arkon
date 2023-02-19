const SearchCard = () => {
  return (
    <div className="bg-slate-100 rounded-md shadow-md w-full flex flex-col items-center py-5">
      <div className="w-10/12">
        <label className="font-medium text-base text-black">Búsqueda:</label>
        <div className="flex items-center">
          <input
            className="w-10/12 px-3 py-1 border-none outline-none rounded-l-md"
            placeholder="Búsqueda por nombre..."
            type="text"
          />
          <button className="w-2/12 text-center rounded-r-md text-white bg-emerald-900 pt-1 hover:bg-emerald-700 active:bg-emerald-800">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      <div className="w-10/12 mt-4">
        <div className="flex justify-between mb-1">
          <label className="font-medium text-base text-black">Fecha:</label>
        </div>
        <div>
          <label>Inicio</label>
          <input
            className="w-full px-3 py-1 border-none outline-none rounded-md"
            type="date"
          />
          <label>Fin</label>
          <input
            className="w-full px-3 py-1 border-none outline-none rounded-md mt-1"
            type="date"
          />
          <div className="flex justify-end mt-2">
            <button className="w-2/12 text-center rounded-md text-white bg-emerald-900 pt-1 hover:bg-emerald-700 active:bg-emerald-800">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
