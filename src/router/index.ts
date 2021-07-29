import Header from '../components/Header';
import Controller from '../controller/index';
export default class Router {
  nowPagePath = '';
  pages: any;
  app: HTMLElement | null;
  view: any;
  constructor({ pages }: any) {
    this.app = document.getElementById('app');

    const view = {
      header: Header,
    };

    this.pages = pages;
    this.route(view);

    window.onhashchange = () => {
      this.route(view);
    };
  }
  route(view: { header: typeof Header }) {
    this.nowPagePath = window.location.hash.replace('#', '');

    if (this.nowPagePath === '') {
      const current = this.pages[0].page;
      new current(this.app, view);
      new Controller(current, view);
    } else {
      const { page } = this.pages.find((page: { path: string }) => page.path === this.nowPagePath);
      new page(this.app, view);
      new Controller(page, view);
    }
  }
}
