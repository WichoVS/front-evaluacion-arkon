import BuyEventTickets from "../components/BuyEventTicketsModal";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import DetailsEvent from "../components/DetailsEventModal";
import SearchCard from "../components/SearchCard";
import ReedemTicket from "../components/ReedemTicketModal";
import AddEventModal from "../components/AddEventModal";
import { useState } from "react";

export default function Principal() {
  const [isDetalles, SetIsDetalles] = useState<boolean>(false);
  const [isComprando, SetIsComprando] = useState<boolean>(false);
  const [isCanjeando, SetIsCanjeando] = useState<boolean>(false);

  const handleIsDetalles = () => {
    SetIsDetalles(!isDetalles);
  };
  const handleIsComprando = () => {
    SetIsComprando(!isComprando);
  };
  const handleIsCanjeando = () => {
    SetIsCanjeando(!isCanjeando);
  };

  return (
    <>
      <Header />
      <div className="flex w-full mt-[30px] justify-center">
        <div className="flex justify-between w-10/12">
          <div className="w-4/12">
            <SearchCard />
          </div>
          <div className="w-7/12">
            <h2 className="text-3xl uppercase">Próximos eventos</h2>
            <div className="w-full grid gap-4 grid-cols-3">
              <EventCard
                handleCanjearBoleto={handleIsCanjeando}
                handleComprarBoletos={handleIsComprando}
                handleVerDetalles={handleIsDetalles}
              />
            </div>
          </div>
        </div>
      </div>
      <DetailsEvent isOpen={isDetalles} handleIsOpen={handleIsDetalles} />
      <BuyEventTickets isOpen={isComprando} handleIsOpen={handleIsComprando} />
      <ReedemTicket isOpen={isCanjeando} handleIsOpen={handleIsCanjeando} />
    </>
  );
}
