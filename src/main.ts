import Test from './components/Test';
import Home from './views/home/index';
import Router from './router/index';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const pages = [
    { page: Home, path: 'home' },
    { page: Test, path: 'test' },
  ];

  const router = new Router({ pages });
}
