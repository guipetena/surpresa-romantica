"use client"

export default function RomanticWebsite() {
  const photos = {
    friends: [
      '/images/friends_1.jpeg',
      '/images/friends_2.jpeg',
      '/images/friends_3.jpeg'
    ],
    relationship: [
      '/images/amor_melhor.jpeg',
      '/images/amor_1.jpeg',
      '/images/amor_3.jpeg',
      '/images/amor_4.jpeg',
      '/images/amor_5.jpeg'
    ]
  }

  const startDate = new Date('2026-02-22T00:00:00')
  const now = new Date()
  const diff = Math.max(0, now.getTime() - startDate.getTime())

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)

  return (
    <div className="bg-[#0e0a0a] text-white min-h-screen overflow-x-hidden font-serif">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <img
          src={photos.friends[0]}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-2xl animate-fadeIn">
          <p className="text-pink-300 mb-4 tracking-[0.3em] uppercase text-sm">
            tem certeza que quer entrar?
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-light">
            Clique aqui
            <br />
            <span className="text-pink-300">se estiver com saudade</span>
          </h1>

          <button
            onClick={() => {
              document
                .getElementById('second-screen')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-10 bg-pink-300 text-black px-8 py-4 rounded-full text-lg hover:scale-105 transition"
          >
            Clique aqui ♡
          </button>
        </div>
      </section>

      {/* SECOND SCREEN */}
      <section
        id="second-screen"
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl mb-6 text-pink-200">
            Tem certeza?
          </h2>

          <p className="text-xl text-zinc-300 leading-relaxed">
            Porque essa história começou sem a gente perceber.
            <br />
            E sinceramente...
            <br />
            eu não faço mais ideia de como era antes de você.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <button className="border border-zinc-600 px-6 py-3 rounded-full hover:bg-zinc-800 transition">
              Talvez não...
            </button>

            <button
              onClick={() => {
                document
                  .getElementById('friends-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-pink-300 text-black px-6 py-3 rounded-full hover:scale-105 transition"
            >
              Tenho certeza
            </button>
          </div>
        </div>
      </section>

      {/* FRIENDS ERA */}
      <section id="friends-section" className="py-24 px-6 bg-[#140f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-4">
              antes da gente perceber
            </p>

            <h2 className="text-5xl leading-tight mb-6">
              Você já era
              <br />
              minha pessoa favorita.
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Engraçado como tudo começou tão naturalmente.
              <br />
              Sem pressão.
              <br />
              Sem expectativa.
              <br />
              Só duas pessoas que gostavam demais da companhia uma da outra.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {photos.friends.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="rounded-3xl h-72 object-cover hover:scale-[1.03] transition duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* COUNTER */}
      <section className="py-28 px-6 bg-[#f5e7df] text-black text-center">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 text-zinc-600">
          desde 22/02/2026
        </p>

        <h2 className="text-5xl md:text-6xl leading-tight max-w-4xl mx-auto">
          você começou a bagunçar
          <br />
          minha cabeça.
        </h2>

        <div className="flex justify-center gap-8 mt-16 flex-wrap">
          <div>
            <p className="text-6xl">{days}</p>
            <span className="uppercase text-sm tracking-[0.2em]">dias</span>
          </div>

          <div>
            <p className="text-6xl">{hours}</p>
            <span className="uppercase text-sm tracking-[0.2em]">horas</span>
          </div>

          <div>
            <p className="text-6xl">{minutes}</p>
            <span className="uppercase text-sm tracking-[0.2em]">minutos</span>
          </div>
        </div>
      </section>

      {/* RELATIONSHIP */}
      <section className="py-24 px-6 bg-[#120d0d]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-4">
            e aí tudo mudou
          </p>

          <h2 className="text-5xl md:text-6xl leading-tight mb-6">
            O problema foi
            <br />
            quando eu percebi
            <br />
            que queria mais.
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
            E acho que a melhor parte disso tudo
            <br />
            foi perceber que antes mesmo da gente tentar...
            <br />
            eu já gostava da vida com você nela.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-16">
            {photos.relationship.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="rounded-[2rem] h-[420px] w-full object-cover hover:scale-[1.02] transition duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d0d] to-black" />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-4">
            acho que você já percebeu...
          </p>

          <h2 className="text-6xl md:text-8xl leading-tight text-pink-100">
            Eu quero você
            <br />
            oficialmente
            <br />
            na minha vida.
          </h2>

          <p className="text-zinc-300 text-xl mt-10 leading-relaxed max-w-2xl mx-auto">
            Não é sobre pressa.
            <br />
            É sobre escolha.
            <br />
            E todos os dias,
            <br />
            eu escolho você.
          </p>

          <div className="mt-14 flex justify-center gap-4 flex-wrap">
            <button className="bg-pink-300 text-black px-8 py-4 rounded-full text-lg hover:scale-105 transition">
              ♡ continuar essa história
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}