let volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

function registerVolunteer() {
  const name = volName.value;
  const email = volEmail.value;

  if (name === "" || email === "") {
    alert("Lengkapi data relawan");
    return;
  }

  volunteers.push({ name, email });
  localStorage.setItem("volunteers", JSON.stringify(volunteers));

  volName.value = "";
  volEmail.value = "";

  renderVolunteers();
  alert("Pendaftaran relawan berhasil 🙏");
}

function renderVolunteers() {
  const list = document.getElementById("volunteerList");
  if (!list) return;

  list.innerHTML = "";

  volunteers.forEach(v => {
    list.innerHTML += `
      <li>
        <strong>${v.name}</strong><br>
        <small>${v.email}</small>
      </li>
    `;
  });
}

renderVolunteers();
