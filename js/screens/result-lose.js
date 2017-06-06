import welcome from './welcome';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';
import model from '../model/initialState';
import logo from './common/logo';

const template = (state) => `
<section class="main main--result">
  ${logo()}

  <h2 class="title">${state.title}</h2>
  <div class="main-stat">${state.text}</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>
`;

const screen = getElementFromTemplate(template(model.level.resultLose));
const replayButton = screen.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  showScreen(welcome);
});

export default screen;
