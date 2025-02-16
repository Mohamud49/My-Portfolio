// Toggle Menu Icon
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const overlay = document.getElementById('overlay');

//loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () =>{
    document.body.removeChild("loader");
  })
})



menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close Menu When Clicking on Overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuIcon.classList.remove('active');
  overlay.classList.remove('active');
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const modeIcon = document.querySelector('.mode-icon');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    modeIcon.textContent = '☀'; // Sun icon for light mode
  } else {
    modeIcon.textContent = '🌙'; // Moon icon for dark mode
  }
});

//hERO SECTION
// Text Changing Animation
const changingText = document.getElementById("changing-text");
const texts = ["Web Developer", "UI/UX Designer", "Video Editor", "Graphic Designer", "Mobile App Developer", "Digital Marketer"];
let index = 0;

function changeText() {
  changingText.innerHTML = `<span>${texts[index]}</span>`;
  index = (index + 1) % texts.length;
}

// Change text every 3 seconds
setInterval(changeText, 3000);

/*
// Read More and Read Less Functionality
// Read More and Read Less Functionality
const readMore = document.getElementById('read-more');
const readLess = document.getElementById('read-less');
const moreText = document.getElementById('more-text');

readMore.addEventListener('click', () => {
  moreText.classList.add('visible');
  readMore.classList.add('hidden');
  readLess.classList.remove('hidden');
});

readLess.addEventListener('click', () => {
  moreText.classList.remove('visible');
  readMore.classList.remove('hidden');
  readLess.classList.add('hidden');
});*/

const readMore = document.getElementById('read-more');
const readLess = document.getElementById('read-less');
const moreText = document.getElementById('more-text');
const cvDownload = document.getElementById('cv-download');

readMore.addEventListener('click', () => {
  moreText.style.display = 'inline';
  readMore.style.display = 'none';
  readLess.style.display = 'inline';
  cvDownload.style.display = 'inline';
});

readLess.addEventListener('click', () => {
  moreText.style.display = 'none';
  readMore.style.display = 'inline';
  readLess.style.display = 'none';
  cvDownload.style.display = 'none';
});

// Animate progress bars when the skills section is in view
const progressBars = document.querySelectorAll(".progress");

function animateProgressBars() {
  progressBars.forEach((progress) => {
    const progressValue = progress.getAttribute("data-progress");
    progress.style.width = progressValue + "%";
  });
}

// Trigger animation when the skills section is in view
const skillsSection = document.querySelector(".skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(skillsSection); // Stop observing after animation
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(skillsSection);

//POPUP MESSAGE contact-form
// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Show the popup modal
  const popupModal = document.getElementById("popup-modal");
  popupModal.style.display = "flex";

  // Clear the form
  document.getElementById("contact-form").reset();
});

// Close the popup modal
document.getElementById("close-button").addEventListener("click", function() {
  const popupModal = document.getElementById("popup-modal");
  popupModal.style.display = "none";
});

// Close the popup modal when clicking the OK button
document.getElementById("ok-button").addEventListener("click", function() {
  const popupModal = document.getElementById("popup-modal");
  popupModal.style.display = "none";
});

// Close the popup modal when clicking outside the modal
window.addEventListener("click", function(event) {
  const popupModal = document.getElementById("popup-modal");
  if (event.target === popupModal) {
    popupModal.style.display = "none";
  }
});



//POPUP MESSAGE newsletter-form 
// Handle form submission
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Show the popup modal
  const popupModal = document.getElementById("popup-modal");
  popupModal.style.display = "flex";

  // Clear the form
  document.getElementById("newsletter-form").reset();
});

// Close the popup modal
document.getElementById("close-button").addEventListener("click", function() {
  const popupModal = document.getElementById("popup-modal");
  popupModal.style.display = "none";
});

// Close the popup modal when clicking the OK button
document.getElementById("ok-button").addEventListener("click", function() {
  const popupModal = document.getElementById("popup-modal");
  popupModal.style.display = "none";
});

// Close the popup modal when clicking outside the modal
window.addEventListener("click", function(event) {
  const popupModal = document.getElementById("popup-modal");
  if (event.target === popupModal) {
    popupModal.style.display = "none";
  }
});
