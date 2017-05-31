import win from './main-result-win';
import lose from './main-result-lose';
import {getElementFromTemplate} from './getElementFromTemplate';
import {showScreen} from './show-screen';

const result = [win, lose];

const template = `
<template id="main-level-genre">
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
</template>
`;

const screen = getElementFromTemplate(template);
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

Array.from(answerCheckboxes).forEach((input) => {
  input.addEventListener(`change`, () => {
    validateForm();
  });
});

sendButton.addEventListener(`click`, () => {
  showScreen(result[Math.trunc(Math.random())]);
});

validateForm();

export default screen;
