import Test from './views/Test/index';
import Home from './views/home/index';
import Router from './router/index';
import './style/app.scss';
import InputBox from './components/InputBox';

document.addEventListener('DOMContentLoaded', main);

function main() {
  const pages = [
    { page: Home, path: 'home' },
    { page: Test, path: 'test' },
  ];

  const router = new Router({ pages });
}
