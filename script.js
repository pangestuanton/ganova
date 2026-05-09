// ===============================
// Ganova Website Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const navLinks = document.querySelectorAll(".nav a");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  const allMenuLinks = document.querySelectorAll(".nav a, .mobile-menu a");

  const sections = document.querySelectorAll("section[id]");

  // ===============================
  // Mobile Menu Toggle
  // ===============================

  function openMobileMenu() {
    mobileMenu.classList.add("show");
    menuBtn.classList.add("open");
    menuBtn.setAttribute("aria-label", "Tutup menu");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("show");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-label", "Buka menu");
  }

  function toggleMobileMenu() {
    if (mobileMenu.classList.contains("show")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMobileMenu();
    });
  }

  // ===============================
  // Close Mobile Menu When Link Clicked
  // ===============================

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  // ===============================
  // Close Mobile Menu When Click Outside
  // ===============================

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = menuBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      closeMobileMenu();
    }
  });

  // ===============================
  // Close Mobile Menu With Escape Key
  // ===============================

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  // ===============================
  // Header Effect On Scroll
  // ===============================

  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  // ===============================
  // Smooth Scroll With Header Offset
  // ===============================

  allMenuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const targetSection = document.querySelector(href);

      if (targetSection) {
        event.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          targetSection.offsetTop - headerHeight + 2;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        closeMobileMenu();
      }
    });
  });

  // ===============================
  // Active Navigation On Scroll
  // ===============================

  function setActiveMenu() {
    let currentSection = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const headerHeight = header ? header.offsetHeight : 0;

      if (window.scrollY >= sectionTop - headerHeight - 80) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });

    mobileLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveMenu);
  setActiveMenu();

  // ===============================
  // Image Fallback
  // ===============================

  const images = document.querySelectorAll("img");

  images.forEach(function (img) {
    img.addEventListener("error", function () {
      this.src = "assets/image.png";
      this.alt = "Gambar belum tersedia";
    });
  });
});