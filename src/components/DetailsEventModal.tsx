import { Modal } from "@mui/material";
import { Evento } from "../interfaces/Evento";

interface Props {
  isOpen: boolean;
  evento?: Evento;
  onClose?: () => void;
  handleIsOpen: () => void;
}

const DetailsEvent = ({ isOpen = false, handleIsOpen }: Props) => {
  return (
    <Modal open={isOpen} onClose={() => {}}>
      <div className="absolute flex top-0 w-screen h-screen justify-center items-center">
        <div className="flex w-6/12 py-10 bg-slate-100 flex-col items-center rounded-md shadow-md">
          <div className="flex justify-end w-10/12">
            <button
              onClick={handleIsOpen}
              className="text-center rounded-md text-white bg-purple-700 pt-1 hover:bg-purple-800 active:bg-purple-900"
            >
              <span className="material-symbols-outlined px-2 py-1">close</span>
            </button>
          </div>
          <div className="flex w-10/12 justify-between">
            <h2 className="text-2xl font-semibold">
              Nombre del Evento 12va Edición
            </h2>
          </div>
          <div className="flex w-10/12 justify-between flex-col mt-5">
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Fecha de Inicio:</label>
              <p className="text-right pr-4">dd/mm/aaaa HH:MM</p>
            </div>
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Fecha de Fin:</label>
              <p className="text-right pr-4">dd/mm/aaaa HH:MM</p>
            </div>
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Boletos Totales:</label>
              <p className="text-right pr-4">300</p>
            </div>
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Boletos Disponibles:</label>
              <p className="text-right pr-4">294</p>
            </div>
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Boletos Canjeados:</label>
              <p className="text-right pr-4">6</p>
            </div>
          </div>
          <div className="flex w-10/12 justify-center mt-5">
            <button className="flex text-center rounded-md text-white bg-red-700 hover:bg-red-800 active:bg-red-900 items-center">
              <p className="px-2 font-bold uppercase">Eliminar</p>
              <span className="material-symbols-outlined px-2 py-1">
                delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsEvent;
