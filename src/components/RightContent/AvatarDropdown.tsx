import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Space } from 'antd';
import { stringify } from 'querystring';
import React from 'react';
import { history } from '@umijs/max';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  const { search, pathname } = history.location;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/login') {
    history.replace({
      pathname: '/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {

  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(key);
    
    if (key === 'logout') {
      loginOut()
      return;
    }
  };

  const items: MenuProps['items'] = [
    {
      key: 'user',
      label: (
        <>
          <Space>
            <UserOutlined />
            <span>个人中心</span>
          </Space>
        </>
      ),
    },
    {
      key: 'setting',
      label: (
        <>
          <Space>
            <SettingOutlined />
            <span>个人设置</span>
          </Space>
        </>
      ),
    },
    {
      key: 'logout',
      label: (
        <>
          <Space>
            <LogoutOutlined />
            <span>退出登录</span>
          </Space>
        </>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items, onClick }}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{'哈哈哈'}</span>
      </span>
    </Dropdown>
  );
};

export default AvatarDropdown;
