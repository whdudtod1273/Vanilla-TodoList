import Aside from '../components/Aside';
import Controller from '../controller/index';
export default class Router {
  nowPagePath: string | undefined;
  pages: any;
  app: HTMLElement | null;
  view: any;
  aside: Aside | undefined;
  constructor({ pages }: any) {
    this.app = document.getElementById('app');

    this.pages = pages;
    this.route();

    window.onhashchange = () => {
      this.route();
    };
  }
  route() {
    this.nowPagePath = window.location.hash.replace('#', '');
    const aside = new Aside(this.nowPagePath);

    if (this.nowPagePath === '') {
      const current = this.pages[0].page;
      new current(this.app, aside);
      new Controller(current, aside);
    } else {
      const { page } = this.pages.find((page: { path: string }) => page.path === this.nowPagePath);
      new page(this.app, aside);
      new Controller(page, aside);
    }
  }
}
