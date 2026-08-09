import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className="w-full">
      <h2 className="text-center mt-6 text-2xl font-bold">
        Ops... Essa <span className="text-fuchsia-600">Página</span> não existe
      </h2>
      <div className=" flex  flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-fuchsia-600 pb-8">Error 404</h1>
        <span className="hover:bg-fuchsia-500 hover:text-white p-4 rounded-2xl hover:scale-105 font-medium  transition-all duration-300">
          <Link to={"/"}> Retorna para Home</Link>
        </span>
      </div>
    </div>
  );
}
