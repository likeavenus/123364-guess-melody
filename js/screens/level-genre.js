import win from './result-win';
import lose from './result-lose';
import {getElementFromTemplate} from '../helpers/getElementFromTemplate';
import {showScreen} from '../helpers/show-screen';
import model from '../model/initialState';

const result = [win, lose];

const template = (state) => `
<section class="main main--level main--level-genre">
  <h2 class="title">Выберите инди-рок треки</h2>
  <form class="genre">
  ${state.answers.map((answer) => `
    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-${answer.id}" id="a-${answer.id}">
      <label class="genre-answer-check" for="a-${answer.id}"></label>
    </div>
  `).join(``)}
    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>
</section>
`;

const screen = getElementFromTemplate(template(model.level.levelGenre));
const answerCheckboxes = screen.querySelectorAll(`input[type="checkbox"]`);
const sendButton = screen.querySelector(`.genre-answer-send`);

const isSomeCheckboxChecked = () => {
  return Array.from(answerCheckboxes).some((checkbox) => {
    return checkbox.checked;
  });
};

const validateForm = () => {
  if (isSomeCheckboxChecked()) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
};

const resetCheckboxes = () => {
  Array.from(answerCheckboxes).forEach((checkbox) => {
    checkbox.checked = false;
  });
};

Array.from(answerCheckboxes).forEach((input) => {
  input.addEventListener(`change`, () => {
    validateForm();
  });
});

sendButton.addEventListener(`click`, () => {
  showScreen(result[Math.trunc(Math.random())]);
  resetCheckboxes();
  validateForm();
});

validateForm();

export default screen;
