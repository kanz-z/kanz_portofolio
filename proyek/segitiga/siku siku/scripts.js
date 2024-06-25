// Mendapatkan elemen-elemen dari DOM
const form = document.getElementById('triangleForm');
const heightInput = document.getElementById('heightInput');
const triangleResult = document.getElementById('triangleResult');
const placeholderText = document.getElementById('placeholderText');
const checkbox = document.getElementById('switch');

// Menambahkan event listener untuk form submission
form.addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman standar
    event.preventDefault();

    // Mendapatkan nilai input dari user
    const height = parseInt(heightInput.value);

    // Memanggil fungsi untuk membuat segitiga
    const triangle = generateRightTriangle(height);

    // Menampilkan hasil segitiga di dalam elemen 'triangleResult'
    triangleResult.textContent = triangle;

    placeholderText.style.display = 'none';

    // Menggulirkan halaman ke atas untuk memastikan input field terlihat
    window.scrollTo(0, 0);
});

// Fungsi untuk membuat segitiga siku-siku
function generateRightTriangle(height) {
    let result = '';
    // Loop untuk setiap baris segitiga
    for (let i = 1; i <= height; i++) {
        // Menambahkan '*' sebanyak nomor baris saat ini
        result += '* '.repeat(i) + '\n';
    }
    return result;
}

checkbox.addEventListener('click', function() {
    // Periksa apakah checkbox di-check
    if (checkbox.checked) {
        // Redirect ke halaman lain ketika di-check
        window.location.href = '../siku siku/siku.html';
    } else {
        // Redirect ke halaman utama jika tidak di-check
        window.location.href = '../piramida/piramid.html';
    }
});
