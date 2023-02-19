import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEventModal from "./AddEventModal";

const Header = () => {
  const [isCreando, SetIsCreando] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleIsCreando = () => {
    SetIsCreando(!isCreando);
  };
  return (
    <>
      <div className="h-[100px] bg-purple-900 flex justify-center">
        <div className="flex items-center w-11/12 justify-between">
          <h1 className="text-white font-extrabold text-2xl">
            Evaluación Akron Data
          </h1>
          <div className="w-2/12 flex justify-between">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="hover:underline decoration-slate-50"
            >
              <h3 className="text-white">Principal</h3>
            </button>
            <button
              onClick={() => {
                navigate("/boletos");
              }}
              className="hover:underline decoration-slate-50"
            >
              <h3 className="text-white">Boletos</h3>
            </button>
            <button
              onClick={handleIsCreando}
              className="hover:underline decoration-slate-50"
            >
              <h3 className="text-white">Crear Evento</h3>
            </button>
          </div>
        </div>
      </div>

      <AddEventModal isOpen={isCreando} handleIsOpen={handleIsCreando} />
    </>
  );
};

export default Header;
