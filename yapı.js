// Add event listener to each navigation link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      // Prevent default link behavior
      e.preventDefault();
  
      // Get the corresponding section to scroll to
      const targetId = link.attributes.href.value.substring(1);
      const target = document.getElementById(targetId);
  
      // Scroll to the target section
      const startPosition = window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top;
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        let progress = timeElapsed / 500;
        if (progress > 1) progress = 1;
  
        const newPosition = startPosition + (targetPosition * easeOutQuint(progress));
        window.scrollTo(0, newPosition);
  
        if (progress < 1) requestAnimationFrame(animation);
      };
  
      requestAnimationFrame(animation);
  
      // Define easing function
      function easeOutQuint(t) {
        return t * t * t * t * t;
      }
    });
  });
  
  // Utility function to extract the href attribute from HTML
  function getIdFromHref(href) {
    return href.substring(href.indexOf('#') + 1);
  }
  const footer = document.querySelector('footer');
const githubLink = document.createElement('a');
const githubImg = document.createElement('img');
githubLink.href = 'https://github.com/troubleddeveloperusa';
githubImg.src = 'github.png';
githubImg.alt = 'GitHub';
githubLink.appendChild(githubImg);
footer.appendChild(githubLink);

const linkedinLink = document.createElement('a');
const linkedinImg = document.createElement('img');
linkedinLink.href = 'https://www.linkedin.com/in/troubleddeveloperusa/';
linkedinImg.src = 'linkedin.png';
linkedinImg.alt = 'LinkedIn';
linkedinLink.appendChild(linkedinImg);
footer.appendChild(linkedinLink);