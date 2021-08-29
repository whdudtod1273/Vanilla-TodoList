import Controller from '../../controller';
import storage from '../../model/storage';
import ItemBox from '../ItemBox';
import './styles.scss';
export default class ListBox extends Controller {
  constructor(target: any, props: any) {
    super(target, props);
    this.target = target;
  }
  data() {
    this.state = { lists: storage.lists };
  }
  template() {
    const { lists } = this.state;

    return `
    <div class="listBox" droppable="true">
      ${lists
        .map((item: any, index: any) => this.itemBox(item, index, this.target))
        .filter((item: any, index: number) => index !== 0)
        .join('')}
     </div>
    `;
  }
  dragStart(e: any) {
    if (e.target.className === 'itemBox') {
      console.log('drag start', e.target);
      e.dataTransfer.setData('text', e.target.id);
      e.target.classList.add('drapOver');
      e.effectAllowed = 'copyMove';
    }
  }
  dragOver(e: any) {
    e.preventDefault();

    if (e.target.className === 'itemBox') {
      e.target.classList.add('drapOver');
    }
  }
  drop(e: any) {
    e.preventDefault();

    if (e.target.className === 'listBox') {
      const id = e.dataTransfer.getData('text/plain');
      const elDraggable = document.getElementById(id);

      e.target.classList.remove('drapOver');
      // const targetItemBox = document.querySelector('.drapOver');
      // targetItemBox?.classList.remove('drapOver');

      e.dataTransfer.clearData();
    }
  }
  dragLeave(e: any) {
    e.preventDefault();
    console.log('dragLeave', e.target.classList);

    if (e.target.classList[0] === 'itemBox') {
      console.log(e.target.classList);

      e.target.classList.remove('drapOver');
    }
  }
  dragEnd(e: any) {
    e.target.classList.remove('drapOver');
  }

  event() {
    if (this.target.childNodes[1].classList[0] === 'listBox') {
      this.target.addEventListener('dragstart', this.dragStart);
      console.log(this.target);

      this.target.addEventListener('dragover', this.dragOver, false);
      this.target.addEventListener('drop', this.drop);
      this.target.addEventListener('dragend', this.dragEnd);
      document.addEventListener('dragleave', this.dragLeave);
    }
  }

  itemBox(item: any, index: any, target: any) {
    const itemBox = new ItemBox(item, index, target, this);
    itemBox.event();

    return itemBox.template();
  }
  itemBoxRender(data: any) {
    this.setState({ lists: data });
  }
}
