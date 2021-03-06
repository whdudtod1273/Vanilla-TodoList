import ListBox from '../../components/listBox';
import InputBox from '../../components/InputBox';
import Controller from '../../controller/index';
import './styles.scss';
export default class Home extends Controller {
  listBox: any;
  constructor(target: any, props: null) {
    super(target, props);
    this.listBox;
  }

  template() {
    return `
      <main data-id="main" class="home">
        <article data-id="input-container" class="inputContainer">
        
        </article>
        <article data-id="list-container" data-page="home-container" class="listContainer">

        </article>
      </main>
    `;
  }

  mounted() {
    const inputContainer = this.target.querySelector('[data-id="input-container"]');
    const listContainer = this.target.querySelector('[data-id="list-container"]');
    const inputBox = new InputBox(inputContainer, this);
    const listBox = new ListBox(listContainer, this);
    this.listBox = listBox;
  }

  setData() {}

  event() {}
}
