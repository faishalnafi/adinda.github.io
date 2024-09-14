// ParticlesJS Config.
// Diedit dan dikembangkan oleh FaishalNafi' untuk Acaa.
// CopyRight Thn 2024.

particlesJS("particles-js", {

  // Merubah tampilan shape;
  "particles": {
    "number": {
      "value": 80, // Jumlah Shape;
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff" // Merubah warna;
    },
    "shape": {
      "type": "star", // Merubah Shape;
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4, // Ukuran Shape;
      "random": true, // Berukuran sama ganti false;
      "anim": {
        "enable": true, // Membuat tidak berkedip fanti false;
        "speed": 25, // Kecepatan kedipan;
        "size_min": 0.1,
        "sync": false // kedip bersamaan, biarkan false untuk kedip random;
      }
    },
    "line_linked": {
      "enable": false, // Ubah true bila ingin menampilkan garis rasi bintang;
      "distance": 150,
      "color": "#ffffff", // Merubah warna rasi;
      "opacity": 1, // Kecerahan garis rasi, 0 untuk menghilangkan;
      "width": 0.5 // Ketebalan garis rasi;
    },
    "move": {
      "enable": true, // Ubah true untuk moving objek;
      "speed": 10, // Kecepatan Moving;
      "direction": "none",
      "random": true, // Bergerak secara random;
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 800,
        "rotateY": 1800
      }
    }
  },

  // Biarkan secara default;
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});