const root = document.querySelector(`.main`);

export const showScreen = (view) => {
  root.innerHTML = ``;
  root.appendChild(view.element);
};
