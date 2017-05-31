import welcome from './main-welcome';
import {getElementFromTemplate} from './getElementFromTemplate';
import {showScreen} from './show-screen';

const template = `
<template id="main-result-lose">
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
</template>
`;

const screen = getElementFromTemplate(template);
const replayButton = screen.querySelector(`.main-replay`);

// console.log(welcome);

replayButton.addEventListener(`click`, () => {
  showScreen(welcome);
});

export default screen;
