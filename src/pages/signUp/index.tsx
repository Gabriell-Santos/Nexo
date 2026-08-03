import { Input } from "../../components/ui/input";

export function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Seja
            <span className="text-fuchsia-600"> bem-vindo</span>
          </h2>
          <p className="text-gray-500 mt-2">Cadastre-se para continuar</p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-fuchsia-600-700 mb-1"
            >
              Nome:
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Digite seu Primeiro nome"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-fuchsia-600-700 mb-1"
            >
              Email:
            </label>
            <Input
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
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Já tem conta?
            <a
              href="/signout"
              className="text-indigo-600 hover:text-fuchsia-800 font-medium hover:underline transition duration-200"
            >
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
