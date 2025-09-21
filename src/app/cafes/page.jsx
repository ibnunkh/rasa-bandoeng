"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, Star, Heart } from "lucide-react";
import Link from "next/link";

import cafes from "@/data/cafes";
import { Card } from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";

const CafesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteCafes");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (cafe) => {
    const isFavorite = favorites.some((fav) => fav.id === cafe.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== cafe.id);
    } else {
      updatedFavorites = [
        ...favorites,
        {
          ...cafe,
          hours: cafe.openTime,
          reviews: Math.floor(Math.random() * 100) + 20,
        },
      ];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteCafes", JSON.stringify(updatedFavorites));
  };

  const visibleCafes = cafes.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-6 md:px-15 py-30">
      <div className="mb-8 flex justify-between items-center gap-2">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">Daftar Cafe</h1>
          <p className="text-muted-foreground text-sm font-raleway mt-2">
            Temukan Cafe di Bandung dan sekitarnya
          </p>
        </div>
        <Link href="/favorites">
          <Button className="flex items-center gap-2 rounded-xl bg-transparent px-2 py-2 border border-white/30 hover:cursor-pointer transition-all duration-300 hover:scale-105">
            <Heart className="w-4 h-4" />
            <span className="font-raleway">Favorit</span>({favorites.length})
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCafes.map((cafe) => {
          const isFavorite = favorites.some((fav) => fav.id === cafe.id);

          return (
            <div key={cafe.id} className="group relative">
              <Link href={`/cafes/${cafe.slug}`}>
                <Card className="h-75 md:h-90 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cafe.image})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-foreground z-10">
                    <div className="space-y-3 z-20">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                          {cafe.name}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-foreground/80">
                          <MapPin className="w-4 h-4 mr-2" />
                          {cafe.location}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-foreground/80">
                            <Clock className="w-4 h-4 mr-2" />
                            {cafe.openTime}
                          </div>

                          <div className="flex items-center text-sm">
                            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                            <span className="font-md text-foreground">
                              {cafe.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(cafe);
                }}
                className={`absolute top-4 left-4 z-30 p-2 rounded-full transition-all duration-200 ${
                  isFavorite
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        {visibleCount < cafes.length ? (
          <Button
            onClick={() => setVisibleCount(cafes.length)}
            className="px-6 py-2 rounded-lg bg-secondary text-primary font-semibold hover:scale-105 transition-transform"
          >
            Tampilkan lebih banyak
          </Button>
        ) : (
          <Button
            onClick={() => setVisibleCount(6)}
            className="px-6 py-2 rounded-lg bg-secondary text-primary font-semibold hover:scale-105 transition-transform"
          >
            Sembunyikan
          </Button>
        )}
      </div>
    </div>
  );
};

export default CafesPage;
