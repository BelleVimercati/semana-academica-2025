const gallery = document.getElementById("gallery");

async function carregarDados() {
  try {
    const response = await fetch(
      "https://semanaacademica2025-2-production.up.railway.app/comics"
    );
    const data = await response.json();

    const items = data.data;

    items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imageUrl =
        item.image?.medium ||
        "https://via.placeholder.com/200x300?text=Sem+Imagem";

      card.innerHTML = `
        <img src="${imageUrl}" alt="${item.title}">
        <h3>${item.title}</h3>
        <button class="btn-card">Ver mais</button>
      `;

      gallery.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
    gallery.innerHTML = "<p>Erro ao carregar os dados da API.</p>";
  }
}
