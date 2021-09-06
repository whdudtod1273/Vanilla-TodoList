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
    <div data-id="${this.item.id}" id="itemBox${this.item.id}" class="itemBox" draggable='true'>
      <div>${this.item.title}</div>
      <div>${this.item.content}</div>
      <button data-id="${this.item.id}" class="removeBtn">remove</button>
      ${
        this.target.dataset.page === 'home-container'
          ? `<button data-id="${this.item.id}" class="completeBtn">complete</button>`
          : ''
      }
    </div>
    `;
  }
  event() {
    this.target.addEventListener('click', (e: any) => {
      if (Number(e.target.dataset.id) === this.item.id && e.target.classList.value === 'removeBtn') {
        let newData: any = [];
        if (this.target.dataset.page === 'home-container') {
          newData = storage.lists.filter((item) => {
            return item.id !== Number(e.target.dataset.id);
          });
          storage.lists = newData;
          this.listBox.itemBoxRender(storage.lists);
        } else if (this.target.dataset.page === 'complete-container') {
          newData = storage.confirmData.filter((item) => {
            return item.id !== Number(e.target.dataset.id);
          });
          storage.confirmData = newData;
          this.listBox.itemBoxRender(storage.confirmData);
        }
      } else if (Number(e.target.dataset.id) === this.item.id && e.target.classList.value === 'completeBtn') {
        if (this.target.dataset.page === 'home-container') {
          let completeElem;
          let newData = storage.lists.filter((item) => {
            if (item.id == Number(e.target.dataset.id)) {
              completeElem = item;
            }
            return item.id !== Number(e.target.dataset.id);
          });
          storage.lists = newData;
          this.listBox.itemBoxRender(storage.lists);
          if (completeElem) storage.confirmData.push(completeElem);
        }
      }
    });
  }
}
