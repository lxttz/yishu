// Main JavaScript File

// DOM Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile Menu Toggle (if needed)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const navList = document.querySelector('.nav-list');
      navList.classList.toggle('active');
    });
  }

  // Add Animation to Posts
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    post.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    post.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });
  });

  // Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '↑';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '30px';
  backToTopButton.style.right = '30px';
  backToTopButton.style.backgroundColor = '#007bff';
  backToTopButton.style.color = '#fff';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '50%';
  backToTopButton.style.width = '50px';
  backToTopButton.style.height = '50px';
  backToTopButton.style.fontSize = '24px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.opacity = '0';
  backToTopButton.style.transition = 'opacity 0.3s ease';
  backToTopButton.style.zIndex = '999';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.opacity = '1';
    } else {
      backToTopButton.style.opacity = '0';
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Image Preview (if needed)
  const images = document.querySelectorAll('.post-content img');
  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      // You can add image preview functionality here
      // For example, open a modal with the image
    });
  });
});