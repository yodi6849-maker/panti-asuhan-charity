let campaigns = JSON.parse(localStorage.getItem("campaigns")) || [
  {
    id: 1,
    title: "Bantuan Pendidikan Anak Panti",
    category: "pendidikan",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500"
  },
  {
    id: 2,
    title: "Donasi Kebutuhan Harian Panti",
    category: "kesehatan",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=500"
  },
  {
    id: 3,
    title: "Renovasi Asrama Panti Asuhan",
    category: "bencana",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=500"
  }
];

let donations = JSON.parse(localStorage.getItem("donations")) || [];