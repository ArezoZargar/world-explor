"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton({ country }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = saved.some((item) => item.cca3 === country.cca3);

    setFavorite(exists);
  }, [country.cca3]);

  function toggleFavorite() {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (favorite) {
      updated = saved.filter((item) => item.cca3 !== country.cca3);
    } else {
      updated = [...saved, country];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));

    setFavorite(!favorite);
  }

  return (
    <button className="favorite-btn" onClick={toggleFavorite}>
      {favorite ? "★ Favorite" : "☆ Add Favorite"}
    </button>
  );
}
