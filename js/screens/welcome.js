import levelArtist from './level-artist';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';

const template = `
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!
  </p>
</section>
`;

const screen = getElementFromTemplate(template);

const playButton = screen.querySelector(`.main-play`);

playButton.addEventListener(`click`, () => {
  showScreen(levelArtist);
});

export default screen;
