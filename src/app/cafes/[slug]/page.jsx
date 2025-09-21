"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import cafes from "@/data/cafes";
import CardInformation from "@/components/organisms/CardInformation";
import CardFacilities from "@/components/organisms/CardFacilities";
import CardListMenu from "@/components/organisms/CardListMenu";

const getCafeBySlug = (slug) => {
  return cafes.find((cafe) => cafe.slug === slug);
};

const CafeDetailPage = ({ params }) => {
  const { slug } = use(params);
  const cafe = getCafeBySlug(slug);

  if (!cafe) {
    notFound();
  }

  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!cafe) return;
    const saved = localStorage.getItem(`reviews-${cafe.slug}`);
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, [cafe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    const newReview = { name, comment };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(
      `reviews-${cafe.slug}`,
      JSON.stringify(updatedReviews)
    );
    setName("");
    setComment("");
  };

  return (
    <div className="container mx-auto px-4 md:px-16 py-30">
      <div className="mb-6 w-fit">
        <Link href="/cafes">
          <button className="flex items-center px-4 py-2 rounded-lg mb-4 border border-white/20 font-semibold transition-all duration-300 hover:cursor-pointer hover:scale-105">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={cafe.image || "/placeholder.svg"}
            alt={cafe.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-start mb-2">
              <h1 className="text-2xl md:text-4xl font-bold">{cafe.name}</h1>
            </div>

            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold text-lg">{cafe.rating}</span>
              <span className="text-muted-foreground ml-1">
                ({cafe.reviewCount} reviews)
              </span>
            </div>

            <CardInformation
              address={cafe.address}
              openTime={cafe.openTime}
              phone={cafe.phone}
            />
          </div>
        </div>
      </div>

      <CardFacilities facilities={cafe.facilities} />
      <CardListMenu menu={cafe.menu} />

      {/* Fitur Ulasan */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Ulasan Pengunjung</h2>
        <form onSubmit={handleSubmit} className="mb-6 space-y-2 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-white/20 rounded-lg px-3 py-2 w-full md:w-1/2 font-raleway"
            required
          />
          <textarea
            placeholder="Tulis ulasan..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-white/20 rounded px-3 py-2 w-full md:w-1/2 font-raleway"
            required
          />
          <button
            type="submit"
            className="w-full md:w-40 bg-secondary text-primary px-4 py-2 rounded hover:bg-secondary/80"
          >
            Kirim Ulasan
          </button>
        </form>
        
        <div className="space-y-4">
          {reviews.length === 0 && (
            <p className="text-white">Belum ada ulasan.</p>
          )}
          {reviews.map((review, idx) => (
            <div key={idx} className="rounded p-3">
              <div className="font-semibold">{review.name}</div>
              <div className="text-foreground">{review.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeDetailPage;
