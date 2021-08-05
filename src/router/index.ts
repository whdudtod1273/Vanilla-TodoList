import InputBox from '../components/InputBox';
import Aside from '../components/Aside';
import Controller from '../controller/index';
export default class Router {
  nowPagePath: string | undefined;
  pages: any;
  app: HTMLElement | null;
  view: any;

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

    if (this.nowPagePath === '') {
      const page = this.pages[0].page;
      new page(this.app);
    } else {
      const { page } = this.pages.find((page: { path: string }) => page.path === this.nowPagePath);
      new page(this.app);
    }
  }
}
