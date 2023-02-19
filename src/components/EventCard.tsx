interface Props {
  handleVerDetalles: () => void;
  handleComprarBoletos: () => void;
  handleCanjearBoleto: () => void;
}

const EventCard = ({
  handleVerDetalles,
  handleCanjearBoleto,
  handleComprarBoletos,
}: Props) => {
  return (
    <div className="bg-slate-100 rounded-md shadow-md flex flex-col h-[204px] justify-evenly">
      <h3 className="text-lg font-bold text-center mb-2">
        Nombre del Evento 12va Edición
      </h3>
      <div className="flex justify-between text-sm">
        <label className="text-left pl-4">Inicio:</label>
        <p className="text-right pr-4">dd/mm/aaaa hh:mm</p>
      </div>
      <div className="flex justify-between text-sm">
        <label className="text-left pl-4">Fin:</label>
        <p className="text-right pr-4">dd/mm/aaaa hh:mm</p>
      </div>
      <div className="flex justify-between text-sm">
        <label className="text-left pl-4">Boletos disponibles:</label>
        <p className="text-right pr-4">100</p>
      </div>
      <div className="flex justify-around w-full">
        <button
          onClick={handleVerDetalles}
          className="text-center rounded-md text-white bg-emerald-900 pt-1 hover:bg-emerald-700 active:bg-emerald-800"
        >
          <span className="material-symbols-outlined px-2">info</span>
        </button>
        <button
          onClick={handleComprarBoletos}
          className="text-center rounded-md text-white bg-emerald-900 pt-1 hover:bg-emerald-700 active:bg-emerald-800"
        >
          <span className="material-symbols-outlined px-2">sell</span>
        </button>
        <button
          onClick={handleCanjearBoleto}
          className="text-center rounded-md text-white bg-emerald-900 pt-1 hover:bg-emerald-700 active:bg-emerald-800"
        >
          <span className="material-symbols-outlined px-2">
            confirmation_number
          </span>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
