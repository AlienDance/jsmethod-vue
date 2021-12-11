const generateImages = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 500000);

  const generateRandomImages = async (imgElement, linkElement, resolution, sig) => {
    await fetch(`https://source.unsplash.com/random/${resolution}/${sig}${generateRandomNumber()}`)
      .then((result) => {
        imgElement.setAttribute('src', result.url);
        if (linkElement !== null) {
          linkElement.setAttribute('href', result.url);
          refreshFsLightbox();
        }
      })
      .catch((err) => console.log(err));
  };

  return { generateRandomNumber, generateRandomImages };
};

export default generateImages;
