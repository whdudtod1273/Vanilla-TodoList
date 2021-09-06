import Controller from '../../controller';
import storage from '../../model/storage';
import ItemBox from '../ItemBox';
import './styles.scss';
export default class ListBox extends Controller {
  dropState: string;

  constructor(target: any, props: any) {
    super(target, props);
    this.target = target;
    this.dropState = '';
  }
  data() {
    if (this.target.dataset.page === 'home-container') {
      this.state = { lists: storage.lists };
    } else if (this.target.dataset.page === 'complete-container') {
      this.state = { lists: storage.confirmData };
    }
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
  // dragStart(e: any) {
  //   if (e.target.className === 'itemBox') {
  //     console.log('drag start');
  //     document.getElementById(this.dropState)?.classList.remove('drapOver');
  //     e.dataTransfer.setData('text', e.target.id);
  //     e.target.classList.add('drapOver');
  //     e.effectAllowed = 'copyMove';
  //   }
  // }
  dragOver(e: any) {
    e.preventDefault();
    if (e.target.className === 'itemBox') {
      document.getElementById(this.dropState)?.classList.remove('drapOver');
      e.target.classList.add('drapOver');
      this.dropState = e.target.id;
    }
  }
  // drop(e: any) {
  //   e.preventDefault();

  //   if (e.target.className === 'listBox') {
  //     const id = e.dataTransfer.getData('text/plain');
  //     const elDraggable = document.getElementById(id);

  //     e.target.classList.remove('drapOver');
  //     e.dataTransfer.clearData();
  //     const targetItemBox = document.querySelector('.drapOver');
  //     targetItemBox?.classList.remove('drapOver');
  //     console.log('drop');
  //   }
  //   console.log('drop');
  // }
  dragLeave(e: any) {
    if (e.target.classList[0] === 'itemBox') {
    }
  }

  dragEnd(e: any) {
    e.target.classList.remove('drapOver');
    document.querySelector('.drapOver')?.classList.remove('drapOver');
  }

  event() {
    const { lists } = this.state;
    let dropAble = false;
    if (this.target.childNodes[1].classList[0] === 'listBox') {
      this.target.addEventListener('dragstart', (e: any) => {
        if (e.target.className === 'itemBox') {
          dropAble = true;
          console.log('drag start', dropAble);
          document.getElementById(this.dropState)?.classList.remove('drapOver');
          e.dataTransfer.setData('text', e.target.id);
          e.target.classList.add('drapOver');
          e.effectAllowed = 'copyMove';
        }
      });
      this.target.addEventListener('dragleave', this.dragLeave);
      this.target.addEventListener('dragover', this.dragOver, false);
      this.target.addEventListener('drop', async (e: any) => {
        if (dropAble) {
          console.log('drop이벤트가 실행', e.target, this.target);
          e.preventDefault();
          e.stopPropagation();

          const id = e.dataTransfer.getData('text/plain');
          const startElem = document.getElementById(id);
          const startDataId = startElem?.dataset.id;
          let startIndex = null;
          let changeIndex = null;
          let startData = null;
          let dropData = null;

          if (e.target.classList[0] === 'itemBox') {
            await lists.map((item: any, index: number) => {
              if (item.id === Number(startDataId)) {
                startIndex = index;
                startData = item;
              }
              if (item.id === Number(e.target.dataset.id)) {
                changeIndex = index;
                dropData = item;
              }
              return item;
            });
            await lists.splice(startIndex, 1);
            await lists.splice(changeIndex, 0, startData);
            this.setState({ lists: lists });
            dropAble = false;
          } else if (e.target.parentNode.classList[0] === 'itemBox') {
            await lists.map((item: any, index: number) => {
              if (item.id === Number(startDataId)) {
                startIndex = index;
                startData = item;
              }
              if (item.id === Number(e.target.parentNode.dataset.id)) {
                changeIndex = index;
                dropData = item;
              }
              return item;
            });
            await lists.splice(startIndex, 1);
            await lists.splice(changeIndex, 0, startData);
            this.setState({ lists: lists });
            dropAble = false;
          }
        }
      });
      this.target.addEventListener('dragend', this.dragEnd);
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
