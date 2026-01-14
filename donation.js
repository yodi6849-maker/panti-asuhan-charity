function submitDonation() {
  const name = donorName.value;
  const amount = donationAmount.value;
  const method = paymentMethod.value;

  if (name === "" || amount <= 0 || method === "") {
    alert("Lengkapi data donasi");
    return;
  }

  donations.push({ name, amount, method });
  localStorage.setItem("donations", JSON.stringify(donations));

  donorName.value = "";
  donationAmount.value = "";
  paymentMethod.value = "";

  renderDonations();
  updateTotalDonation();

  alert("Terima kasih atas donasi Anda ❤️");
}

function updateTotalDonation() {
  const total = donations.reduce((sum, d) => sum + Number(d.amount), 0);
  document.getElementById("totalDonasi").innerText = "Rp " + total;
  document.getElementById("progressBar").style.width =
    Math.min((total / 1000000) * 100, 100) + "%";
}

function renderDonations() {
  const list = document.getElementById("donationList");
  if (!list) return;

  list.innerHTML = "";

  donations.forEach(d => {
    list.innerHTML += `
      <li>
        <div>
          <strong>${d.name}</strong><br>
          <small>${d.method}</small>
        </div>
        <span>Rp ${d.amount}</span>
      </li>
    `;
  });
}

renderDonations();
updateTotalDonation();
