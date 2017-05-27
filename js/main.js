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

const ARROW_KEYS = {
  LEFT: 37,
  RIGHT: 39,
};

const showScreen = (key) => {
  root.innerHTML = ``;
  root.appendChild(screens[key]);
};

const onKeydown = (e) => {
  const isAltKeyDown = e.altKey;

  if (!isAltKeyDown) {
    return;
  }

  const code = e.keyCode;
  const prevScreenKey = screenKey;

  switch (code) {
    case ARROW_KEYS.LEFT: {
      if (screenKey === 0) {
        break;
      }

      screenKey--;

      break;
    }

    case ARROW_KEYS.RIGHT: {
      if (screenKey === screens.length - 1) {
        break;
      }

      screenKey++;

      break;
    }
  }

  if (prevScreenKey !== screenKey) {
    showScreen(screenKey);
  }
};

document.addEventListener(`keydown`, onKeydown);

showScreen(screenKey);
