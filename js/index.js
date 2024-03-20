


document.addEventListener('DOMContentLoaded', () => {
    const glow = document.createElement('div');
    glow.classList.add('glowing-effect');
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        glow.style.left = mouseX + 'px';
        glow.style.top = mouseY + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var aboutMeBody = document.querySelector('.aboutme__body--aboutme');

  // Enable scrolling on hover
  aboutMeBody.addEventListener('mouseenter', function() {
    aboutMeBody.style.overflowY = 'auto';
  });

  // Disable scrolling when not hovering
  aboutMeBody.addEventListener('mouseleave', function() {
    aboutMeBody.style.overflowY = 'hidden';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.hobbies-scrollable');
  scrollContainer.scrollLeft = 0; // Explicitly set the scroll position to the start
});



