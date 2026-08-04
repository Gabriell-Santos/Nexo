import img from "../../../src/assets/pexels-pavel-danilyuk-7942535.jpg";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero / Sobre a Nexo */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Sobre a <span className="text-fuchsia-600 font-bold">Nexo</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed text-justify ">
          A Nexo é uma plataforma de cursos criada para ajudar e direcionar
          pessoas em busca de conhecimento e sabedoria. Utilizamos o YouTube
          como parceiro de estudos, organizando os melhores conteúdos por tema
          para transformar horas de vídeo em uma trilha de aprendizado clara e
          acessível.
        </p>
      </section>

      {/* Diversidade de cursos + gratuito via YouTube */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block font-semibold text-sm uppercase tracking-wide mb-3">
              O conhecimento não tem
              <span className="text-fuchsia-600">limite</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sua próxima conquista começa com um clique
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Não importa onde você está agora — o importante é dar o primeiro
              passo. Exploramos o máximo que o YouTube tem a oferecer pra reunir
              conteúdo de qualidade em áreas como tecnologia, negócios, idiomas,
              saúde e criatividade. Tudo organizado em trilhas, 100% gratuito,
              pra transformar tempo livre em evolução de verdade.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-fuchsia-600" />
                Conteúdo selecionado dos melhores canais do YouTube
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-fuchsia-600" />
                Totalmente gratuito
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-fuchsia-600" />
                Ideal pra quem está dando o primeiro passo, ou quer se
                aprofundar em um tema específico
              </li>
            </ul>

            <Link
              to={"/courses"}
              className=" text-black text-2xl hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105 hover:underline underline-offset-4 decoration-purple-400"
            >
              Bora começar? 🚀
            </Link>
          </div>

          <div className="relative">
            <img
              src={img}
              alt="Pessoa que transformou sua trajetória através dos estudos"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute  mt-1-bottom-6 -left-4 bg-fuchsia-400 text-white px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <p className="text-sm font-medium">
                "O primeiro passo é sempre o mais importante."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
