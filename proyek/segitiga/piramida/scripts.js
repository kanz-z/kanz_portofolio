// Mendapatkan elemen-elemen dari DOM
const form = document.getElementById('pyramidForm');
const heightInput = document.getElementById('heightInput');
const pyramidResult = document.getElementById('pyramidResult');
const placeholderText = document.getElementById('placeholderText');
const checkbox = document.getElementById('switch');

// Menambahkan event listener untuk form submission
form.addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman standar
    event.preventDefault();

    // Mendapatkan nilai input dari user
    const height = parseInt(heightInput.value);

    // Memanggil fungsi untuk membuat piramida
    const pyramid = generatePyramid(height);

    // Menampilkan hasil piramida di dalam elemen 'pyramidResult'
    pyramidResult.textContent = pyramid;

    placeholderText.style.display = 'none';

    // Menggulirkan halaman ke atas untuk memastikan input field terlihat
    window.scrollTo(0, 0);
});

// Fungsi untuk membuat piramida bintang
function generatePyramid(totalNumberofRows) {
    var arr = new Array();
    var result = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            result += '* ';
        }
        result += '\n';
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