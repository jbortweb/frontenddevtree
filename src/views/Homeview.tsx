import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

export default function Homeview() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 py-10 min-h-screen lg:bg-home bg-no-repeat bg-right-top lg:bg-home-xl">
        <div className="max-w-5xl mx-auto mt-10">
          <div className="lg:w-1/2 px-10 lg:px-0 space-y-6">
            <h1 className="text-6xl font-black">
              Todas tus <span className="text-cyan-400">Redes Sociales </span>en
              un enlace
            </h1>
            <p className="text-slate-800 text-xl">
              Unete a la comunidad de developers que está compartiendo sus redes
              sociales en TikTok, Youtube, Instagram, GitHub y más
            </p>
            <SearchForm />
          </div>
        </div>
      </main>
    </>
  )
}
