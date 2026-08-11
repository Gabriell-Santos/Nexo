import { Input } from "../../components/ui/input";
import { auth } from "../../services/firebaseConnection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export function SignOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // função que lida com o envio do formulário
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    try {
      // Tenta fazer login com email e senha
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setError("");
      setEmail("");
      setPassword("");
      // Redireciona para a página inicial após o login bem-sucedido
      toast.success("Login realizado com sucesso");
      navigate("/courses");
    } catch (error: any) {
      setError("Email ou senha incorretos.");
      return;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Seja bem-vindo, de <span className="text-fuchsia-600">Volta</span>
          </h2>
          <p className="text-gray-500 mt-2">Faça login para continuar</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-fuchsia-600-700 mb-1"
            >
              Email:
            </label>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha:
            </label>
            <Input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-200"
            />
          </div>

          {error && (
            <span className="text-red-500 text-sm block mt-2 text-center">
              Erro: {error}
            </span>
          )}

          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Não tem conta?
            <a
              href="/signup"
              className="text-indigo-600 hover:text-fuchsia-800 font-medium hover:underline transition duration-200"
            >
              Cadastre-se
            </a>
          </p>
          <span className="text-sm text-gray-600">
            Esqueceu sua senha?
            <a
              href="/recoverpassword"
              className="text-indigo-600 hover:text-fuchsia-800 font-medium hover:underline transition duration-200"
            >
              Clique aqui
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
