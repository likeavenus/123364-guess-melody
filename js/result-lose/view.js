import AbstractView from '../helpers/abstract-view';

export default class ResultLose extends AbstractView {
  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">Вы проиграли</h2>
        <div class="main-stat">Ничего, вам повезет в следующий раз</div>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>
    `.trim();
  }

  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);

    replayButton.addEventListener(`click`, () => {
      this.onClick();
    });
  }
}
