import welcome from './welcome';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';
import model from '../model/initialState';
import logo from './common/logo';

const template = (state) => `
<section class="main main--result">
  ${logo()}

  <h2 class="title">${state.title}</h2>
  <div class="main-stat">За&nbsp;${state.time}&nbsp;минуты<br>вы&nbsp;отгадали ${state.rightAnswers}&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${state.otherPlayersPercent}%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>
`;

const screen = getElementFromTemplate(template(Object.assign({}, model.level.resultWin, model.statistic)));
const replayButton = screen.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  showScreen(welcome);
});

export default screen;
