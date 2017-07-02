export default class Model {
  load() {
    return this.getQuests()
      .then((quests) => {
        return this.getStats()
          .then((stats) => {
            return {quests, stats};
          });
      });
  }

  getQuests() {
    return window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`)
      .then((response) => response.json());
  }

  getStats() {
    return window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/shalfey`)
      .then((response) => response.json())
      .catch((reject) => []);
  }
}
