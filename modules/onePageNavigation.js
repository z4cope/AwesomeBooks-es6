const onePageNavigation = () => {
  const navList = document.querySelector('.nav-list');

  navList.addEventListener('click', (e) => {
    const navElements = document.querySelectorAll('.active');
    navElements.forEach((element) => {
      element.classList.remove('active');
    });
    e.target.className += ' active';
  });

  const navPills = document.querySelectorAll('.nav-pill');
  const slides = document.querySelectorAll('.display-item');

  navPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      const tar = e.target.classList;
      slides.forEach((slide) => {
        if (slide.classList[1] === tar[1]) {
          slide.classList.remove('hidden');
        } else {
          slide.classList.add('hidden');
        }
      });
    });
  });
};

export default onePageNavigation;
