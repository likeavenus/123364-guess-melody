const root = document.querySelector(`.main`);

export const showScreen = (element) => {
  root.innerHTML = ``;
  root.appendChild(element);
};
