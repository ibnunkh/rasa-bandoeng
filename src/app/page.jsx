import Image from "next/image";
import Link from "next/link";

import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/hero-coffee.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full text-center gap-4 px-4 md:px-0">
          <h2 className="font-poppins text-xl md:text-4xl font-semibold">
            Ngopi Asik dan Nongkrong Seru di Bandung
          </h2>
          <p className="font-raleway text-sm md:text-lg text-justify">
            Dari cafe estetik untuk foto-foto, sampai spot cozy buat kerja dan
            ngobrol, semua cafe hits Bandung ada di sini.
          </p>
          <Link href="/cafes">
            <Button className="bg-primary rounded-lg w-50 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-primary hover:cursor-pointer">
              Jelajahi Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
