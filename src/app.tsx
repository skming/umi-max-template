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
      splitMenus: false,
      // 页面 loading 状态
      // loading: true
    },
  }
}
import { RunTimeLayoutConfig } from '@umijs/max';
import RightContent from './components/RightContent';
import Footer from './components/Footer';
import { ConfigProvider, App, } from 'antd';

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
    bgLayoutImgList:[
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    disableContentMargin: false,
    rightContentRender: () => <RightContent />,
    footerRender: () => <Footer />,
    breadcrumbRender: (route) => route,
    menuHeaderRender: undefined,
    menuFooterRender: (props) => {
      if (props?.collapsed) return undefined;
      return (
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(0,0,0,0.6)',
            paddingBlockStart: 12,
          }}
        >
          Power by Ant Design
        </p>
      );
    },
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
