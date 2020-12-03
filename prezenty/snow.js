function startSnow() {
  const styles = `
  @keyframes fall {
    from {
      bottom: 105%;
    }
    to {
      bottom: 0%;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rock {
    from {
      left: 0%;
    }

    to {
      left: 100%;
    }
  }

  @keyframes upAndDown {
    from {
      top: -25%;
    }

    to {
      top: 25%;
    }
  }

  .snow-flake-container,
  #santa-container {
    position: absolute;
  }

  .snow-flake,
  .reindeer img {
    position: relative;
  }

  .snow-flake {
    animation: rotate 6s 0s infinite linear,
      rock 2s 0s infinite alternate ease-in-out;
  }

  .snow-flake-container {
    padding: 0 50px;
    animation: fall 10s 0s 1 linear forwards;
  }

  #santa-container {
    display: flex;
    z-index: 10;
  }

  .reindeer,
  .sleigh {
    padding: 20px 0;
  }

  .flipped-santa {
    transform: rotateY(180deg);
  }

  .reindeer img {
    top: -25%;
    animation: upAndDown 2s 0s infinite alternate ease-in-out;
  }

  .reindeer:nth-child(3) img {
    animation-delay: 1s;
  }

  .reindeer:nth-child(4) img {
    animation-delay: 2s;
  }`;

  function createElement(tagName, classes = []) {
    const element = document.createElement(tagName);

    classes.forEach((c) => {
      element.classList.add(c);
    });

    return element;
  }

  function addChild(element, children) {
    if (children) {
      element.appendChild(children);
    }
    return element;
  }

  function createImg(src, classes = []) {
    const img = createElement("img", classes);
    img.src = src;
    return img;
  }

  function generateFlakeContainer(flakeImg, startingPostiion, scale) {
    const flake = createImg(flakeImg, ["snow-flake"]);
    const flakeContainer = addChild(
      createElement("div", ["snow-flake-container"]),
      flake
    );

    flakeContainer.style.left = `${startingPostiion}%`;
    flakeContainer.style.transform = `scale(${scale}) `;

    return flakeContainer;
  }

  function getRandomFlake(images) {
    const randomPosition = Math.random() * 100;
    const randomImage = Math.floor(Math.random() * images.length);
    const randomScale = Math.random();

    return generateFlakeContainer(
      images[randomImage],
      randomPosition,
      randomScale
    );
  }

  function removeFlake(flake) {
    flake.remove();
  }

  function generateFlakes(container, images) {
    const flake = getRandomFlake(images);
    addChild(container, flake);
    setTimeout(removeFlake, 10 * 1000, flake);
    setTimeout(generateFlakes, 500, container, images);
  }

  function renderSnowContainer() {
    const snowContainer = createElement("div");
    snowContainer.id = "snow-container";

    addChild(document.body, snowContainer);
    return snowContainer;
  }

  function renderSanta(container) {
    const santa = createElement("div");
    santa.id = "santa-container";

    const sleigh = createElement("div", ["sleigh"]);
    const sleighImage = createImg("images/sleigh.png");

    addChild(santa, addChild(sleigh, sleighImage));

    for (let i = 0; i < 3; i++) {
      let reinder = createElement("div", ["reindeer"]);
      let image = createImg("images/reindeer.png");

      addChild(santa, addChild(reinder, image));
    }

    let lastPosition = 0;
    let santaRect;

    document.addEventListener("mousemove", (e) => {
      if (!santaRect) {
        addChild(container, santa);
        santaRect = santa.getBoundingClientRect();
      }

      const x = e.clientX - santaRect.left;
      const y = e.clientY - santaRect.top;

      if (lastPosition > x) {
        santa.style.left = `${x}px`;
        santa.classList.add("flipped-santa");
      }

      if (lastPosition < x) {
        santa.classList.remove("flipped-santa");
        santa.style.left = `${x - santaRect.width}px`;
      }

      lastPosition = x;
      santa.style.top = `${y}px`;
    });
  }

  function appendStyles() {
    const style = createElement("style");
    style.innerText = `
        #snow-container {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 200;
        }
      `;
    addChild(document.head, style);
  }

  appendStyles();

  const flakes = ["images/flake.png", "images/flake2.png", "images/flake3.png"];

  const stylesContainer = createElement("style");
  stylesContainer.innerText = styles;

  addChild(document.head, stylesContainer);

  const snowContainer = renderSnowContainer();
  generateFlakes(snowContainer, flakes);
  renderSanta(snowContainer);
}
