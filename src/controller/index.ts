export default class Controller {
  target: any;
  state: any;
  app: HTMLElement | null;
  header: any;

  constructor(target: any, { header }: any) {
    this.app = document.getElementById('app');
    this.target = target;
    this.header = header.prototype;

    this.state;
    this.data();
    this.render();
  }
  data() {}
  async render() {
    this.target.innerHTML = this.header.template() + this.template();
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
