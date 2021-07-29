export default class Controller {
  target: any;
  state: any;
  app: HTMLElement | null;
  aside: any;

  constructor(target: any, aside: any) {
    this.app = document.getElementById('app');
    this.target = target;
    this.aside = aside;

    this.state;
    this.data();
    this.render();
  }
  data() {}
  async render() {
    this.target.innerHTML = this.aside.template() + this.template();
    this.event();
  }

  template() {
    return ``;
  }

  setState(data: any) {
    this.state = { ...this.state, ...data };
    this.render();
  }
  event() {}
}
