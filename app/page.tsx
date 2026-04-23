'use client';

export default function Home() {

  return (
    <main className="font-sans bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 mix-blend-difference">
        <span className="text-white text-2xl font-black tracking-widest uppercase">Le Minerale</span>
        <div className="flex gap-8 text-white text-sm font-medium tracking-widest uppercase">
          <a href="#keunggulan" className="hover:opacity-60 transition">Keunggulan</a>
          <a href="#produk" className="hover:opacity-60 transition">Produk</a>
          <a href="#cta" className="hover:opacity-60 transition">Beli</a>
        </div>
      </nav>

      {/* HERO - VIDEO LANDSCAPE */}
      <section className="relative h-screen overflow-hidden">
        <video
          src="/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200 mb-6">Air Mineral Premium Indonesia</p>
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-8 tracking-tight">
            LE<br />MINERALE
          </h1>
          <p className="text-xl text-blue-100 font-light max-w-md mx-auto">
            Dari pegunungan terbaik Indonesia, langsung ke tanganmu.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* GAMBAR PEGUNUNGAN */}
<section className="relative h-screen overflow-hidden flex items-center justify-center">
  <div className="absolute inset-0">
    <img
      src="/homeslider_1.webp"
      alt="Pegunungan Le Minerale"
      className="w-full h-full object-cover scale-110"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>
  <div className="relative z-10 text-center text-white px-6">
    <p className="text-xs uppercase tracking-[0.4em] text-blue-200 mb-6">Sumber Kemurnian Kami</p>
    <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8 tracking-tight">
      DARI ALAM<br />
      <span className="text-blue-300">TERBAIK</span>
    </h2>
    <p className="text-xl text-blue-100 font-light max-w-md mx-auto">
      Pegunungan asri Indonesia menjadi sumber kehidupan setiap botol Le Minerale.
    </p>
  </div>
</section>


      {/* STATISTIK */}
      <section className="bg-black py-24 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { angka: '50+', label: 'Sumber Mata Air' },
            { angka: '100M+', label: 'Konsumen Setia' },
            { angka: '34', label: 'Provinsi Dijangkau' },
            { angka: '10+', label: 'Tahun Beroperasi' },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-5xl md:text-7xl font-black text-white">{item.angka}</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO PORTRAIT SECTION */}
      <section className="bg-black py-32 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Langsung dari Sumbernya</p>
            <h2 className="text-5xl font-black leading-tight mb-6">
              Proses yang<br />
              <span className="text-blue-400">Bersih &</span><br />
              Terpercaya.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Setiap botol Le Minerale melewati proses ketat dari sumber mata air pegunungan hingga sampai ke tanganmu, tanpa kompromi.
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <div className="w-[280px] h-[500px] rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl">
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-[50px] border border-blue-500/20" />
          </div>
          <div className="flex-1 text-white">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Komitmen Kami</p>
            <h2 className="text-5xl font-black leading-tight mb-6">
              Kualitas yang<br />
              <span className="text-blue-400">Tidak</span><br />
              Pernah Turun.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Tersertifikasi internasional dan dipercaya jutaan keluarga Indonesia setiap harinya.
            </p>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section id="keunggulan" className="py-32 bg-[#f0f8ff] px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Mengapa Le Minerale?</p>
          <h2 className="text-5xl font-black text-[#001e3c] mb-20 max-w-lg leading-tight">Apa Kata Mereka</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { no: '01', title: 'Enak banget diminum abis kejar maling', desc: 'didiandra' },
              { no: '02', title: 'manis, adem, segar, tinggi, cakep, friendly, eh salah ya', desc: 'mila baddie' },
              { no: '03', title: 'standar internasional, standar tinggi, susah dikejar', desc: 'anonim' },
            ].map((item, i) => (
              <div key={i} className="border-t-2 border-[#001e3c] pt-8">
                <p className="text-blue-400 font-black text-sm mb-4">{item.no}</p>
                <h3 className="text-2xl font-black text-[#001e3c] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="py-32 bg-white px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Pilihan Ukuran</p>
          <h2 className="text-5xl font-black text-[#001e3c] mb-20 leading-tight">Untuk Setiap<br />Kebutuhanmu.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { size: '330 ml', desc: 'Praktis untuk on-the-go', price: 'Rp 3.000', tag: 'Mini' },
              { size: '600 ml', desc: 'Pas untuk aktivitas harian', price: 'Rp 5.000', tag: 'Favorit' },
              { size: '1500 ml', desc: 'Hemat untuk keluarga', price: 'Rp 8.000', tag: 'Keluarga' },
            ].map((item, i) => (
              <div key={i} className={`rounded-3xl p-10 flex flex-col justify-between min-h-[320px] ${i === 1 ? 'bg-[#001e3c] text-white' : 'bg-[#f0f8ff] text-[#001e3c]'}`}>
                <div>
                  <span className={`text-xs uppercase tracking-widest px-3 py-1 rounded-full ${i === 1 ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'}`}>{item.tag}</span>
                  <p className="text-6xl font-black mt-8 mb-2">💧</p>
                  <h3 className="text-3xl font-black mt-4">{item.size}</h3>
                  <p className={`mt-2 text-sm ${i === 1 ? 'text-blue-300' : 'text-gray-500'}`}>{item.desc}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-2xl font-black">{item.price}</p>
                  <button className={`px-6 py-3 rounded-full text-sm font-semibold ${i === 1 ? 'bg-white text-[#001e3c]' : 'bg-[#001e3c] text-white'} hover:opacity-80 transition`}>Beli</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#001e3c] text-blue-400 text-center py-8 text-xs uppercase tracking-widest">
        © 2025 Le Minerale · PT Tirta Fresindo Jaya · All Rights Reserved
      </footer>

    </main>
  );
}