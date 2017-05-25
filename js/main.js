const templates = document.querySelector(`#templates`);
const screensTemplates = templates.content.querySelectorAll(`.main`);
const root = document.querySelector(`.main`);
let screenKey = 0;
const screens = [
  screensTemplates[4],
  screensTemplates[0],
  screensTemplates[3],
  screensTemplates[2],
  screensTemplates[1],
];

const showScreen = (key) => {
  root.innerHTML = ``;
  root.appendChild(screens[key]);
};

const ARROW_KEYS = {
  37: `ArrowLeft`,
  39: `ArrowRight`,
};

const onKeydown = (e) => {
  const isAltKeyDown = e.altKey;

  if (!isAltKeyDown) {
    return;
  }

  const code = e.keyCode;
  const prevScreenKey = screenKey;

  switch (ARROW_KEYS[code]) {
    case `ArrowLeft`: {
      if (screenKey === 0) {
        break;
      }

      screenKey -= 1;

      break;
    }

    case `ArrowRight`: {
      if (screenKey === screens.length - 1) {
        break;
      }

      screenKey += 1;

      break;
    }
  }

  if (prevScreenKey !== screenKey) {
    showScreen(screenKey);
  }
};

document.addEventListener(`keydown`, onKeydown);

showScreen(screenKey);
