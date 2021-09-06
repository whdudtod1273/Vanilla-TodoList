import Test from './views/Test/index';
import Home from './views/home/index';
import Complete from './views/complete';
import Router from './router/index';
import './style/app.scss';
import InputBox from './components/InputBox';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const pages = [
    { page: Home, path: 'home' },
    { page: Test, path: 'test' },
    { page: Complete, path: 'complete' },
  ];

  const router = new Router({ pages });
}
