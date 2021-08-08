import storage from '../../model/storage';
import ListBox from '../listBox';
import Home from '../../views/home';
import './styles.scss';
export default class ItemBox {
  item: any;
  index: any;
  target: any;
  listBox: any;

  constructor(item: any, index: any, target: any, listBox: any) {
    this.item = item;
    this.index = index;
    this.target = target;
    this.listBox = listBox;
  }
  template() {
    return `
    <div data-id="${this.item.id}" class="itemBox">
      <div>${this.item.title}</div>
      <div>${this.item.content}</div>
      <button data-id="${this.item.id}" class="removeBtn">remove</button>
    </div>
    `;
  }
  event() {
    this.target.addEventListener('click', (e: any) => {
      if (Number(e.target.dataset.id) === this.item.id) {
        const newData = storage.lists.filter((item) => {
          return item.id !== Number(e.target.dataset.id);
        });
        storage.lists = newData;
        this.listBox.itemBoxRender(storage.lists);
        console.log(this.item.id);
        console.log(storage.lists);
        console.log(e.target);
      }
    });
  }
}
