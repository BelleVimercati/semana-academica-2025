const jsonData = {
  data: [
    {
      id: "6c8a595d-e03b-4879-ab1c-ae542c49ac71",
      title: "Naruto",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/3/249658.jpg",
      },
    },
    {
      id: "ee0e2f13-9ee6-4880-8b4e-9b759c6f1070",
      title: "Boruto: Naruto Next Generations",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/3/181968.jpg",
      },
    },
    {
      id: "4ae4f1dd-0e8e-4587-a768-7483c9cd2e6f",
      title: "Berserk",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
      },
    },
    {
      id: "f847bc29-0253-4a6a-818a-c696922d1eeb",
      title: "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/3/179882.jpg",
      },
    },
    {
      id: "b620ae2f-12c7-4db8-8ea1-12632ef9d621",
      title: "One Piece",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
      },
    },
    {
      id: "16ad15cb-a8e7-4e97-9908-6e5640bfbd96",
      title: "Fullmetal Alchemist",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/3/243675.jpg",
      },
    },
    {
      id: "fa2e19d8-7a1e-4deb-abc2-7ec54136b202",
      title: "Kaguya-sama wa Kokurasetai",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/3/188896.webp",
      },
    },
    {
      id: "d406cc1c-51fe-428a-a354-4120875c26ff",
      title: "Kimetsu no Yaiba",
      image: {
        medium: "https://cdn.myanimelist.net/images/manga/3/179023.webp",
      },
    },
    {
      id: "0a001461-afa3-4dee-a8e2-e1d61e4281ce",
      title: "Spider-Man Vs. The Chameleon",
      image: {
        medium:
          "https://comicvine.gamespot.com/a/uploads/scale_medium/11/117763/2676366-amazingspiderman001.jpg",
      },
    },
    {
      id: "b7f078a7-7679-4b30-95a8-97efe436b729",
      title: "The Coming of the Avengers",
      image: {
        medium:
          "https://comicvine.gamespot.com/a/uploads/scale_medium/11/117763/2464633-avengers001.jpg",
      },
    },
  ],
};

const gallery = document.getElementById("gallery");

jsonData.data.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${item.image.medium}" alt="${item.title}">
    <h3>${item.title}</h3>
  `;
  gallery.appendChild(card);
});
