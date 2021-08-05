import Aside from '../components/Aside';

export default class Controller {
  target: any;
  props: any;
  state: any;
  app: HTMLElement | null;

  constructor(target: any, props: any) {
    this.app = document.getElementById('app');
    this.target = target;
    this.props = props;
    this.state;
    this.data();
    this.render();
    this.aside();
  }
  data() {}
  mounted() {}
  event() {}

  template() {
    return ``;
  }

  render() {
    this.target.innerHTML = this.template();
    this.event();
    this.mounted();
    this.aside();
  }

  setState(data: any) {
    this.state = { ...this.state, ...data };

    this.render();
  }

  aside() {
    const sideMenu = document.getElementById('sideMenu');
    const asideComponent = new Aside();
    const asideTag = document.createElement('aside');
    asideTag.setAttribute('id', 'sideMenu');
    if (!sideMenu) {
      if (this.app) this.app.appendChild(asideTag);
    }

    if (sideMenu) sideMenu.innerHTML = asideComponent.template();
  }
}
