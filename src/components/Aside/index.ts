import './aside.scss';
export default class Aside {
  nowPagePath: string | undefined;
  constructor(path: string | undefined) {
    this.nowPagePath = path;
  }
  template() {
    return `
      <aside>
        <h1 class="logo">TodoList</h1>
        <nav>
          <ul class="cb">
            <li class="${this.nowPagePath === 'home' || this.nowPagePath === '' ? 'on' : ''}">
              <a href="/#home">Todo</a>
            </li>
            <li class="${this.nowPagePath === 'test' ? 'on' : ''}">
              <a href="/#test">Complete</a>
            </li>
          </ul>
        </nav>
      </aside>
    `;
  }
}
