import Controller from '../../controller';
import ListBox from '../../components/listBox';

export default class Complete extends Controller {
  listBox: any;
  constructor(target: any, props: null) {
    super(target, props);
    this.listBox;
  }

  template() {
    return `
      <main data-id="main" class="complete">
        <article data-id="list-container" data-page="complete-container" class="completeListContainer">
        
        </article>
      </main>
    `;
  }

  mounted() {
    const listContainer = this.target.querySelector('[data-id="list-container"]');
    const listBox = new ListBox(listContainer, this);
    this.listBox = listBox;
  }
}
