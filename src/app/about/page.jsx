import Image from "next/image"

const AboutPage = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-justify order-2 md:order-1">
          <h1 className="text-2xl font-bold mb-6">Tentang Kami</h1>

          <p className="leading-relaxed mb-4 text-foreground font-raleway">
            <strong>Rasa Bandoeng</strong> adalah website sederhana yang
            membantu kamu menemukan cafe terbaik di Bandung. Mulai dari tempat
            ngopi santai, cafe dengan suasana cozy, hingga pilihan dengan
            fasilitas lengkap seperti WiFi, smoking area, dan ruang kerja yang
            nyaman.
          </p>

          <p className="leading-relaxed mb-4 text-foreground font-raleway">
            Website ini dibuat dengan menggunakan{" "}
            <span className="font-semibold">Next.js</span> dan{" "}
            <span className="font-semibold">Tailwind CSS</span>.
          </p>

          <p className="leading-relaxed mb-4 text-foreground font-raleway">
            Tujuan utama website ini adalah untuk menunjukkan kemampuan Frontend
            Developer dalam membangun aplikasi web modern, mulai dari desain,
            navigasi, hingga interaksi sederhana dengan pengguna.
          </p>
        </div>

        <div className="relative w-full h-80 md:h-130 order-1 md:order-2">
          <Image
            src="/images/hero-coffee.jpg"
            alt="Tentang Kami"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
