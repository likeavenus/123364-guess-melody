import welcome from './welcome';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';

const template = `
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>
`;

const screen = getElementFromTemplate(template);
const replayButton = screen.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  showScreen(welcome);
});

export default screen;
