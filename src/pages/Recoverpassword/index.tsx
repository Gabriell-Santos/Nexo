import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
export function Recoverpassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // função que lida com o envio do formulário
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    try {
      const EmailVerification = await sendPasswordResetEmail(auth, email);
      alert("E-mail de recuperação enviado com sucesso:");
      navigate("/signout");
    } catch (error: any) {
      console.error("Erro ao enviar o e-mail de recuperação:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Recuperar
            <span className="text-fuchsia-600"> Senha</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Digite seu e-mail para receber o link de recuperação
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
          >
            Enviar Link de Recuperação
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/signout"
            className="text-sm text-indigo-600 hover:text-fuchsia-800 font-medium hover:underline transition duration-200"
          >
            ← Voltar para o Login
          </a>
        </div>
        <span className="block text-center text-xs text-red-500 mt-2.5">
          *Atenção - Verifique na parte de spam do seu Email *
        </span>
      </div>
    </div>
  );
}
