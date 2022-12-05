export function addTransitionToMenu (navList) {
  navList.forEach((menu), () => {
    menu.addEventListener('click', () => {
      navList.forEach((item), () => { item.classList.remove('nav-active'); });
      menu.classList.add('nav-active');
      const sectionList = document.querySelector('section');
      sectionList.forEach((section) => { section.classList.add('hide'); });
      sectionList[Array.prototype.indexOf.call(item.parentElement.children, item)
      ].classList.remove('hide');
    });
  });
}