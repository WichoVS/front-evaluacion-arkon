import Header from "../components/Header";

export default function Boletos() {
  return (
    <>
      <Header />
      <div className="flex w-flex justify-center">
        <div className="flex w-10/12 mt-[30px] flex-col">
          <h2 className="text-3xl uppercase">Boletos</h2>
          <table className="table border-collaps bg-white border border-black shadow-md">
            <thead className="bg-purple-200">
              <tr>
                <th className="border border-slate-600">Código</th>
                <th className="border border-slate-600">Evento</th>
                <th className="border border-slate-600">Canjeado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-1 text-center border border-slate-600">
                  khklj1h23lk12412412424
                </td>
                <td className="px-1 border border-slate-600">
                  Evento Nombre 12va Edición
                </td>
                <td className="px-1 text-center border border-slate-600">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
