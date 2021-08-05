import Controller from '../../controller';
import storage from '../../model/storage';
import ItemBox from '../ItemBox';
import './styles.scss';
export default class ListBox extends Controller {
  constructor(target: any, props: any) {
    super(target, props);
  }
  template() {
    const itemBox = new ItemBox();

    return `
    <div class="listBox">
      ${storage.lists
        .map(
          (item, index) => `
          ${itemBox.template(item, index)}
      `,
        )
        .join('')}
     </div>
    `;
  }
}
