import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/jsx', component: '@/pages/jsx/index' },
    { path: '/message', component: '@/pages/message/index' },
    { path: '/hooks', component: '@/pages/hooks/index.tsx' },
    { path: '/props', component: '@/pages/basic/index.tsx' },
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
