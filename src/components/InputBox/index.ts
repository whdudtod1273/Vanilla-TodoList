import Controller from '../../controller';
import storage from '../../model/storage';
import './styles.scss';

export default class InputBox extends Controller {
  storage: { lists: { id: number; title: string; content: string; update: string }[] };
  titleInput: any;
  constructor(target: any, props: any) {
    super(target, props);
    this.target = target;
    this.props = props;
    this.storage = storage;
    this.titleInput;
  }
  data() {
    this.state = { lists: [{ id: 0, title: '', content: '' }] };
  }

  mounted() {
    this.titleInput.focus();
  }

  template() {
    return `
    <div class="inputBox">
      <div class="rowBox titleInputWrap">
        <h2>
          TodoTitle
        </h2>
        <input class="titleInput" value="" />
      </div>
      <div class="rowBox contentInputWrap">
        <h2>
          TodoContent
        </h2>
        <textarea class="contentInput" name="contentInput" id="" cols="30" rows="10" value=""></textarea>
      </div>
      <button class="registButton">SAVE</button>
    </div>
    `;
  }

  event() {
    this.titleInput = this.target.querySelector('.titleInput');
    const contentInput = this.target.querySelector('.contentInput');
    const button = this.target.querySelector('.registButton');

    button.addEventListener('click', () => {
      const nowDate = new Date();
      const idDate =
        `${nowDate.getFullYear()}` +
        `${nowDate.getMonth() + 1}` +
        `${nowDate.getDate()}` +
        `${nowDate.getHours()}` +
        `${nowDate.getMinutes()}`;

      const id = Math.floor(Number(idDate) + Math.random() * Number(idDate));
      // const id = storage.lists[storage.lists.length - 1]['id'] + 1;

      this.storage.lists.push({
        id: id,
        title: this.titleInput.value,
        content: contentInput.value,
        update: nowDate.getFullYear() + '/' + '0' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate(),
      });
      console.log(this.props);

      this.props.setState(this.storage.lists);
    });
  }
}
