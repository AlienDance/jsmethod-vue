// no need for anchor(#) links anymore. empty href doesn't refresh page
const noRefreshOnEmptyLink = () => {
  const links = document.querySelectorAll('a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === '') {
      a.addEventListener('click', e => e.preventDefault());
    }
  });
};

export default noRefreshOnEmptyLink;
