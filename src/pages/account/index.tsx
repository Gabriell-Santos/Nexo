import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export function Account() {
  const { userAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  // função de sair da conta
  async function handleLogout() {
    await signOut(auth);
    toast.success("Deslogado com Sucesso");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {userAuth && (
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          {/* Avatar e Nome */}
          <div className="text-center">
            <div className="w-20 h-20 bg-fuchsia-500 rounded-full mx-auto flex items-center justify-center text-3xl text-white font-bold">
              {userAuth.name?.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold mt-4"> {userAuth.name} </h2>
            <p className="text-gray-500"> {userAuth.email} </p>
          </div>

          {/* Informações */}
          <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Membro desde</span>
              <span className="font-medium">
                {userAuth.date?.toLocaleDateString("pt-br", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="text-green-500 font-medium">✓ Ativo</span>
            </div>
          </div>

          {/* Botões */}
          <div className="mt-6 space-y-3">
            <Link
              to="/"
              className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-300 hover:scale-[1.02]"
            >
              ← Voltar para Home
            </Link>

            <button
              onClick={() => handleLogout()}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:scale-[1.02]"
            >
              Sair da conta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
