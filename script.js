document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  let isOpen = false;

  hamburgerBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('hidden', !isOpen);
    if (isOpen) {
      bar1.style.transform = 'translateY(7px) rotate(45deg)';
      bar2.style.opacity = '0';
      bar3.style.transform = 'translateY(-7px) rotate(-45deg)';
      document.body.style.overflow = 'hidden';
    } else {
      bar1.style.transform = '';
      bar2.style.opacity = '';
      bar3.style.transform = '';
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      mobileMenu.classList.add('hidden');
      bar1.style.transform = '';
      bar2.style.opacity = '';
      bar3.style.transform = '';
      document.body.style.overflow = '';
    });
  });
});
