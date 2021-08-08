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
    <div class="listBox">
      ${lists
        .map((item: any, index: any) => this.itemBox(item, index, this.target))
        .filter((item: any, index: number) => index !== 0)
        .join('')}
     </div>
    `;
  }

  itemBox(item: any, index: any, target: any) {
    const itemBox = new ItemBox(item, index, target, this);
    itemBox.event();

    return itemBox.template();
  }
  itemBoxRender(data: any) {
    // const { lists } = this.state;
    this.setState({ lists: data });
    // console.log('list Data', this.state);
    // console.log(storage.lists);
    // console.log(this.state);
    // console.log(data);
  }
}
