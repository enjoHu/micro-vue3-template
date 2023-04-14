import './public-path';
import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

interface IRenderProps {
  container: Element | string;
}

let instance: Vue.App<Element>;
function render(props: IRenderProps) {
  const { container } = props;

  instance = createApp(App);
  instance.use(store);
  instance.use(router);

  instance.mount(container instanceof Element
    ? (container.querySelector('#micro-app') as Element)
    : (container as string));
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: '#micro-app' });
}

export async function bootstrap() {
  console.log('vue-ts child app bootstraped');
}

export async function mount(props: any) {
  console.log('props from main app', props);
  render(props);
}

export async function unmount() {
  if (instance) {
    instance.unmount();
  }
}
