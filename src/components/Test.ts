import Controller from '../controller/index';

export default class Test extends Controller {
  data() {
    this.state = { item: true };
  }
  template() {
    const { item } = this.state;
    return `
      <div>test</div>
      <span>${item}</span>
      <button>클릭</button>
    `;
  }
  event() {
    const button = this.target.querySelector('button');
    button.addEventListener('click', () => {
      this.setState({ item: !this.state.item });
    });
  }
}
