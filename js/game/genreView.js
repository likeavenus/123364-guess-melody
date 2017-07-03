import AbstractView from '../helpers/abstract-view';

export default class LevelGenre extends AbstractView {
  constructor(state) {
    super();

    this.level = state;
    this.sendButton = null;
    this.answerCheckboxes = null;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <h2 class="title">${this.level.title}</h2>
        <form class="genre">
        ${this.level.answers.map((answer) => `
          <div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="${answer.id}" id="a-${answer.id}">
            <label class="genre-answer-check" for="a-${answer.id}"></label>
          </div>
        `).join(``)}
          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </section>
    `.trim();
  }

  bind() {
    const element = this.element;
    this.sendButton = element.querySelector(`.genre-answer-send`);
    this.answerCheckboxes = element.querySelectorAll(`input[type="checkbox"]`);

    Array.from(this.answerCheckboxes).forEach((input) => {
      input.addEventListener(`change`, () => {
        this.validateForm();
      });
    });

    this.sendButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      const answers = this.getAnswers();

      this.onClick(answers);
    });
  }

  validateForm() {
    if (this.isSomeCheckboxChecked()) {
      this.sendButton.disabled = false;
    } else {
      this.sendButton.disabled = true;
    }
  }

  isSomeCheckboxChecked() {
    return Array.from(this.answerCheckboxes).some((checkbox) => {
      return checkbox.checked;
    });
  }

  getAnswers() {
    return Array.from(this.answerCheckboxes).filter((checkbox) => {
      return checkbox.checked;
    }).map((checkbox) => {
      return +checkbox.value;
    });
  }
}
