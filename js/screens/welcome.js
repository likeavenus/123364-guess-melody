import levelArtist from './level-artist';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';
import model from '../model/initialState';
import logo from './common/logo';

const template = (state) => `
<section class="main main--welcome">
  ${logo}

  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">${state.title}</h2>
  <p class="text main-text">${state.text}</p>
</section>
`;

const screen = getElementFromTemplate(template(model.level[`welcome`]));

const playButton = screen.querySelector(`.main-play`);

playButton.addEventListener(`click`, () => {
  showScreen(levelArtist);
});

export default screen;
