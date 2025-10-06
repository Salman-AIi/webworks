// src/services/fetchGames.js
export async function fetchData(params = {}) {
  const { category, search, page = 1, limit = 8 } = params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch games");
    }

    let data = await res.json();

    const imgRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/images`,
      {
        cache: "no-store",
      }
    );

    const images = imgRes.ok ? await imgRes.json() : [];

    if (category) {
      data = data.filter(
        (game) => game.creator?.name?.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      data = data.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    const totalGames = data.length;
    const totalPages = Math.ceil(totalGames / limit);

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = data.slice(start, end);

    const finalData = paginatedData.map((game) => {
      const img = images.find((img) => img.targetId === game.id);
      return {
        id: game.id,
        name: game.name,
        rootPlaceId: game.rootPlaceId,
        creatorName: game.creator?.name || "",
        visits: game.visits,
        playing: game.playing,
        icon: img?.imageUrl || "/game-fish.jpg",
      };
    });

    return {
      data: finalData,
      totalPages,
      totalGames,
    };
  } catch (error) {
    console.error("fetchGames error:", error);
    return { data: [], totalPages: 0, totalGames: 0 };
  }
}
