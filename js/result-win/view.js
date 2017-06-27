import AbstractView from '../helpers/abstract-view';

export default class ResultWin extends AbstractView {
  constructor(state) {
    super();

    this.statistic = state.statistic;
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;${this.statistic.time}&nbsp;минуты<br>вы&nbsp;отгадали ${this.statistic.rightAnswers}&nbsp;мелодии</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.statistic.otherPlayersPercent}%&nbsp;игроков</span>
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
