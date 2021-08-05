import ListBox from '../listBox';
import './styles.scss';
export default class ItemBox {
  constructor() {}
  template(item: { title: string; content: string }, index: number) {
    return `
    <div data-id="${index}" class="itemBox">
      <div>${item.title}</div>
      <div>${item.content}</div>
    </div>
    `;
  }
}
