document.addEventListener("DOMContentLoaded", function() {
    // Lazy load images
    const lazyLoadImages = document.querySelectorAll(".lazy-load");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    }, options);
  
    lazyLoadImages.forEach(image => {
      observer.observe(image);
    });
  
    // Check localStorage for last visit date
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // in milliseconds
  
    if (!lastVisit) {
      // Display welcome message if it's the first visit
      document.getElementById("sidebar-content").textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const daysSinceLastVisit = Math.round((currentDate - lastVisit) / oneDay);
      let message;
  
      // Construct message based on days since last visit
      if (daysSinceLastVisit < 1) {
        message = "Back so soon! Awesome!";
      } else {
        message = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
      }
  
      // Display message in last visit section
      document.getElementById("last-visit-message").textContent = message;
    }
  
    // Store current visit date
    localStorage.setItem("lastVisit", currentDate);
  });
  