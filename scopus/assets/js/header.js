document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("headercode");

  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="sc-navbar">
      <div class="sc-logo">
        <a href="index.html">Scopus</a>
      </div>
      <a href="#" class="sc-menu-toggle"><i class="fa fa-bars"></i></a>
      <nav class="sc-nav">
        <ul class="sc-menu">
          <li><a href="index.html">Home</a></li>
          <li class="has-submenu">
            <a href="services.html">Publication Services</a>
            <ul class="sub-menu">
              <li><a href="#ebook">Ebook Publication</a></li>
              <li><a href="#arti">Article Publishing Assistance</a></li>
              <li><a href="#smanu">Manuscript Writing</a></li>
              <li><a href="#thesis">Thesis Writing</a></li>
            </ul>
          </li>
          <li><a href="platform.html">Platforms</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;

  // Toggle navigation for mobile
  const toggle = document.querySelector('.sc-menu-toggle');
  const nav = document.querySelector('.sc-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      nav.classList.toggle('active');
    });
  }

  // Toggle submenu for mobile
  const dropdowns = document.querySelectorAll('.has-submenu > a');

  dropdowns.forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault(); // Prevent link jump
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('open');
      }
    });
  });
});

