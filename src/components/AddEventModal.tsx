import { Modal } from "@mui/material";

interface Props {
  isOpen?: boolean;
  handleIsOpen: () => void;
}

const AddEventModal = ({ isOpen = true, handleIsOpen }: Props) => {
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
            <h2 className="text-2xl font-semibold">Crear Evento</h2>
          </div>
          <div className="flex w-10/12 justify-between flex-col mt-5 ">
            <div className="flex justify-between text-xl mb-2">
              <label className="text-left pl-4">Nombre del Evento:</label>
              <input
                className="w-5/12 px-3 py-1 border-none outline-none rounded-md"
                type="text"
              />
            </div>
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Fecha de Inicio:</label>
              <input
                className="w-5/12 px-3 py-1 border-none outline-none rounded-md"
                type="datetime-local"
              />
            </div>
            <div className="flex justify-between text-xl mt-2 mb-2">
              <label className="text-left pl-4">Fecha de Fin:</label>
              <input
                className="w-5/12 px-3 py-1 border-none outline-none rounded-md"
                type="datetime-local"
              />
            </div>
            <div className="flex justify-between text-xl">
              <label className="text-left pl-4">Boletos Totales:</label>
              <input
                className="w-2/12 px-3 py-1 border-none outline-none rounded-md"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-10/12 justify-end mt-5">
            <button className="flex text-center rounded-md text-white bg-gray-700 hover:bg-gray-800 active:bg-gray-900 items-center">
              <p className="px-2 font-bold uppercase">Cancelar</p>
              <span className="material-symbols-outlined px-2 py-1">
                cancel
              </span>
            </button>
            <button className="flex text-center rounded-md text-white bg-green-700 hover:bg-green-800 active:bg-green-900 items-center ml-4">
              <p className="px-2 font-bold uppercase">Crear</p>
              <span className="material-symbols-outlined px-2 py-1">event</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddEventModal;
