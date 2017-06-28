import AbstractView from '../helpers/abstract-view';

export default class LevelArtist extends AbstractView {
  constructor(level) {
    super();

    this.level = level;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">${this.level.title}</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${this.level.answers.map((answer) => `
              <div class="main-answer-wrapper">
                <input class="main-answer-r" type="radio" id="answer-${answer.id}" name="answer" value="${answer.id}" />
                <label class="main-answer" for="answer-${answer.id}">
                  <img class="main-answer-preview" src="${answer.imageSrc}">
                  ${answer.label}
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

    Array.from(answerButtons).forEach((button) => {
      button.addEventListener(`change`, (e) => {
        this.onClick([+e.target.value]);
      });
    });
  }
}
