import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';

import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();
  const { initialState, setInitialState } = useModel('@@initialState');
  function setRole(role: string) {
    setInitialState({
      ...initialState,
      role,
    })
  }
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.admin}>
        只有 Admin 可以看到这个按钮
        <Button onClick={() => setRole('test')}>其他权限</Button>
      </Access>
      <Access accessible={!access.admin}>
        <Button onClick={() => setRole('admin')}>admin 权限</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
