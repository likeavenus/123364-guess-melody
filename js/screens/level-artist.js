import levelGenre from './level-genre';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';
import model from '../model/initialState';

const template = (state) => `
<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">02</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">00</span>
    </div>
  </svg>

  <div class="main-wrap">
    <div class="main-timer"></div>

    <h2 class="title main-title">${state.title}</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">
      ${state.answers.map((answer) => `
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${answer.id}" name="answer" value="val-${answer.id}" />
          <label class="main-answer" for="answer-${answer.id}">
            <img class="main-answer-preview" src="${answer.imageSrc}">
            ${answer.label}
          </label>
        </div>
      `).join(``)}
    </form>
  </div>
</section>
`;

const screen = getElementFromTemplate(template(model.level.levelArtist));

const answerButtons = screen.querySelectorAll(`.main-answer`);

Array.from(answerButtons).forEach((button) => {
  button.addEventListener(`click`, () => {
    showScreen(levelGenre);
  });
});

export default screen;
