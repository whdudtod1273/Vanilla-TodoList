import Test from './components/Test';
import Home from './views/home/index';
import Router from './router/index';
import Header from './components/Header';
document.addEventListener('DOMContentLoaded', main);

function main() {
  // const app = document.getElementById('app');
  // new Header(app);
  // if (app !== null) {
  //   app.innerHTML = Header.prototype.template();
  //   console.log(app);
  // }

  const pages = [
    { page: Home, path: 'home' },
    { page: Test, path: 'test' },
  ];

  const router = new Router({ pages });
}
