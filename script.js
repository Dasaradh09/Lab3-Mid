// Select the elements for interaction
const talkButton = document.querySelector('.talk');
const aboutMeButton = document.querySelector('.About_me');
const resumeLink = document.querySelector('nav ul li:nth-child(3) a');

// Create a modal dynamically for "Let's Talk"
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>`;
document.body.appendChild(modal);

// Modal open and close logic
talkButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

modal.querySelector('.close').addEventListener('click', () => {
  closeModal();
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

const title = document.querySelector('.title');
const text = "I'm Dasaradh, a passionate IT Grad Student!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); 
  }
}
window.addEventListener('load', typeEffect);

document.querySelector('.talk').addEventListener('click', () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
  
  const subtitle = document.querySelector('.subtitle');
const hours = new Date().getHours();

let greeting;
if (hours < 12) {
  greeting = 'Good Morning';
} else if (hours < 18) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good Evening';
}
subtitle.textContent = `HELLO - ${greeting}!`;

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
  }
  
  setInterval(updateClock, 1000);
  updateClock();




resumeLink.addEventListener('click', (e) => {
  e.preventDefault(); 
  const resumePath = 'assets/resume.pdf'; 
  window.open(resumePath, '_blank'); 
});


aboutMeButton.addEventListener('click', () => {
  const sectionContainer = document.querySelector('.section__container');
  
 
  if (!sectionContainer.querySelector('.about-message')) {
    const newContent = document.createElement('p');
    newContent.textContent = "I'm passionate about coding and technology!";
    newContent.className = 'about-message';
    sectionContainer.appendChild(newContent);
  }
});
