import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/jsx', component: '@/pages/jsx/index' },
    { path: '/message', component: '@/pages/message/index' },
  ],
  fastRefresh: {},
});
