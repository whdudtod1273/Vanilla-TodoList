import './aside.scss';
export default class Aside {
  nowPagePath: string | undefined;

  constructor() {
    this.nowPagePath = window.location.hash.replace('#', '');
  }
  template() {
    return `
    <div class="sideMenuInner">
      <h1 class="logo">TodoList</h1>
      <nav>
        <ul class="cb">
          <li class="${this.nowPagePath === 'home' || this.nowPagePath === '' ? 'on' : ''}">
            <a href="/Vanilla-TodoList/#home">Todo</a>
          </li>
          <li class="${this.nowPagePath === 'test' ? 'on' : ''}">
            <a href="/Vanilla-TodoList/#test">Complete</a>
          </li>
        </ul>
      </nav>
    </div>
    `;
  }
}
