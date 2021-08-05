import Controller from '../../controller';
import storage from '../../model/storage';
import './styles.scss';

export default class InputBox extends Controller {
  storage: { lists: { title: string; content: string }[] };
  constructor(target: any, props: any) {
    super(target, props);
    this.target = target;
    this.props = props;
    this.storage = storage;
  }
  data() {
    this.state = { lists: [{ title: '', content: '' }] };
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
    const titleInput = this.target.querySelector('.titleInput');
    const contentInput = this.target.querySelector('.contentInput');
    const button = this.target.querySelector('.registButton');

    button.addEventListener('click', () => {
      this.storage.lists.push({ title: titleInput.value, content: contentInput.value });
      this.props.setState(this.storage.lists);
    });
  }
}
