function addCampaign() {
  if (title.value === "") {
    alert("Nama program gaboleh kosong");
    return;
  }

  campaigns.push({
    id: Date.now(),
    title: title.value,
    category: category.value
  });

  localStorage.setItem("campaigns", JSON.stringify(campaigns));
  title.value = "";
  renderAdmin();
}

function deleteCampaign(id) {
  campaigns = campaigns.filter(c => c.id !== id);
  localStorage.setItem("campaigns", JSON.stringify(campaigns));
  renderAdmin();
}

function renderAdmin() {
  adminCampaignList.innerHTML = "";

  campaigns.forEach(c => {
    adminCampaignList.innerHTML += `
      <tr>
        <td>${c.title}</td>
        <td>${c.category}</td>
        <td>
          <button onclick="deleteCampaign(${c.id})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

renderAdmin();

