// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<any> {
  return { 
    settings: {
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      // 默认布局调整
      menu: {
        locale: false,
      },
      navTheme: 'light',
      layout: 'mix',
      // 拂晓蓝
      colorPrimary: '#2F54EB',
      contentWidth: "Fluid",
      fixedHeader: false,
      fixSiderbar: true,
      colorWeak: false,
    },
  }
}
import { RunTimeLayoutConfig } from '@umijs/max';
import RightContent from './components/RightContent';
import Footer from './components/Footer';
import { ConfigProvider, App } from 'antd';

export const layout: RunTimeLayoutConfig = ({
  initialState,
  // setInitialState
}) => {
  return {
    title: '后台管理系统',
    pwa: false,
    onMenuHeaderClick: () => {
      console.log('后台管理系统');
    },
    waterMarkProps: {
      content: "水印水印水印"
    },
    disableContentMargin: false,
    rightContentRender: () => <RightContent />,
    footerRender: () => <Footer />,
    breadcrumbRender: (route) => route,
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      console.log(initialState);
      return (
        <ConfigProvider>
          <App>
            {children}
          </App>
        </ConfigProvider>
      );
    },
    ...initialState?.settings,
  };
};
