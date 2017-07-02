import AbstractView from '../helpers/abstract-view';
import initializePlayer from '../helpers/player';

export default class LevelArtist extends AbstractView {
  constructor(quest) {
    super();

    this.quest = quest;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">${this.quest.question}</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${this.quest.answers.map((answer) => `
              <div class="main-answer-wrapper">
                <input class="main-answer-r" type="radio" id="answer-${answer.title}" name="answer" value="${answer.isCorrect}" />
                <label class="main-answer" for="answer-${answer.title}" ${answer.isCorrect ? `style="background-color: red"` : ``}>
                  <img class="main-answer-preview" src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
                  ${answer.title}
                </label>
              </div>
            `).join(``)}
          </form>
        </div>
      </section>
    `.trim();
  }

  bind() {
    const answerButtons = this.element.querySelectorAll(`.main-answer-r`);
    const player = this.element.querySelector(`.player-wrapper`);

    initializePlayer(player, this.quest.src, true);

    Array.from(answerButtons).forEach((button) => {
      button.addEventListener(`change`, (e) => {
        this.onClick(e.target.value === `true`);
      });
    });
  }
}
