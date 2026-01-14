const list = document.getElementById("campaignList");
const filter = document.getElementById("filterKategori");

function renderCampaigns() {
  const list = document.getElementById("campaignList");
  list.innerHTML = "";

  const selected = document.getElementById("filterKategori").value;

  const filtered = campaigns.filter(c =>
    selected === "all" || c.category === selected
  );

  filtered.forEach(c => {
  list.innerHTML += `
    <div class="campaign-card">
      <img src="${c.image || 'assets/img/pendidikan.jpg'}" alt="${c.title}">
      <h3>${c.title}</h3>
      <p>Kategori: ${c.category}</p>
    </div>
  `;
});


  document.getElementById("totalKampanye").innerText = campaigns.length;
}
// Tambahkan ini di akhir main.js
renderCampaigns();