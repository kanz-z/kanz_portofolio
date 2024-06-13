document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, 
        behavior: 'smooth'
      });
    });
  });

  document.getElementById("tombol").addEventListener("click", function() {
    var nama = document.getElementById("inputNama").value;
    if (nama.trim() !== '') {
      document.getElementById("terimaKasih").style.display = "block";
    } else {
      alert("Silakan masukkan email terlebih dahulu!");
    }
  });