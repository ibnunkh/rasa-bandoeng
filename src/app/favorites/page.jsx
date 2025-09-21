"use client";

import { useState, useEffect } from "react";
import { Heart, ArrowLeft, MapPin, Clock, Star } from "lucide-react";
import { Card } from "@/components/molecules/Card";
import Link from "next/link";

import Button from "@/components/atoms/Button";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteCafes");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFavorites = (cafeId) => {
    const updatedFavorites = favorites.filter((cafe) => cafe.id !== cafeId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteCafes", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen py-30">
      <div className="max-w-7xl mx-auto px-4 md:px-15">
        <div className="mb-8 w-fit">
          <div className="w-fit">
            <Link href="/cafes">
              <Button className="flex items-center px-4 py-2 rounded-lg mb-4 border border-white/30 font-semibold transition-all duration-300 hover:cursor-pointer hover:scale-105">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Daftar
              </Button>
            </Link>
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            Daftar Cafe Favorit
          </h1>
          <p className="text-foreground font-raleway">
            {favorites.length > 0
              ? `${favorites.length} cafe favorite anda`
              : "Belum ada cafe favorit"}
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((cafe) => (
              <Link
                key={cafe.id}
                href={`/cafes/${cafe.slug}`}
                className="group"
              >
                <Card className="h-80 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cafe.image})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFavorites(cafe.id);
                    }}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-yellow-300 transition-colors">
                          {cafe.name}
                        </h3>
                      </div>

                      <div className="flex items-center text-white/80 text-sm drop-shadow-md">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{cafe.location}</span>
                      </div>

                      <div className="flex items-center text-white/80 text-sm drop-shadow-md">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{cafe.openTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/90 drop-shadow-md">
                          <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{cafe.rating}</span>
                          <span className="text-white/70 ml-1">
                            ({cafe.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Belum Ada Cafe Favorit
            </h3>
            <p className="text-foreground text-sm md:text-base font-raleway mb-6">
              Mulai tambahkan cafe favorit Anda dengan mengklik tombol hati di
              halaman daftar cafe
            </p>
            <Link href="/cafes">
              <Button className="px-4 py-3 border border-white/30 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:cursor-pointer">Jelajahi Cafes</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
