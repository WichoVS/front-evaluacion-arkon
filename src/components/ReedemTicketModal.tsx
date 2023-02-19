import { Modal } from "@mui/material";
import { Evento } from "../interfaces/Evento";

interface Props {
  isOpen?: boolean;
  evento?: Evento;
  onClose?: () => void;
  handleIsOpen: () => void;
}

const ReedemTicket = ({ isOpen = false, handleIsOpen }: Props) => {
  return (
    <Modal open={isOpen}>
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
          </div>
          <div className="flex w-10/12 justify-end mt-5">
            <input
              type="text"
              placeholder="Canjear boleto..."
              className="w-10/12 px-3 py-1 border-none outline-none rounded-md"
            />
            <button className="w-2/12 text-center rounded-md text-white bg-purple-700 hover:bg-purple-800 active:bg-purple-900 items-center ml-20">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReedemTicket;
