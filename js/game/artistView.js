import AbstractView from '../helpers/abstract-view';

export default class LevelArtist extends AbstractView {
  constructor(quests) {
    super();

    this.quests = quests;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">${this.quests.question}</h2>
          <div class="player-wrapper" src="${this.quests.src}"></div>
          <form class="main-list">
            ${this.quests.answers.map((answer) => `
              <div class="main-answer-wrapper">
                <input class="main-answer-r" type="radio" id="answer-${answer.title}" name="answer" value="${answer.isCorrect}" />
                <label class="main-answer" for="answer-${answer.title}">
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

    Array.from(answerButtons).forEach((button) => {
      button.addEventListener(`change`, (e) => {
        this.onClick(!e.target.value);
      });
    });
  }
}
