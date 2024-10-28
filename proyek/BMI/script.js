const skor = document.getElementById("skor");
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function () {
    const umur = document.getElementById("umur").value;
    const tinggi = document.getElementById("tinggi").value;
    const berat = document.getElementById("berat").value;

    if (!tinggi || !berat) {
        skor.innerText = "Tinggi dan berat harus diisi!";
        skor.style.color = "";
        return;
    }

    const hitung = (beratBadan, tinggiBadan) => beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));
    const hasil = hitung(berat, tinggi);
    
    let kategori = "";
    let warna = "";

    if (hasil < 18.5) {
        kategori = "Kurus";
        warna = "#3498db"; 
    } else if (hasil >= 18.5 && hasil < 24.9) {
        kategori = "Normal";
        warna = "#27ae60"; 
    } else if (hasil >= 25 && hasil < 29.9) {
        kategori = "Gendut";
        warna = "#f39c12"; 
    } else {
        kategori = "Obesitas";
        warna = "#e74c3c"; 
    }

    skor.innerText = `${hasil.toFixed(2)} (${kategori})`;
    skor.style.color = warna;
});
