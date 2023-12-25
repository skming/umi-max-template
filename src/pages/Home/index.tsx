import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { Button, Space, Card } from 'antd';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');
  
  const API_BASE_URL = process.env.API_BASE_URL
  const UMI_ENV = process.env.UMI_ENV
  
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Space direction="vertical">
          <Card title={name} size="small">
            <p>API_BASE_URL:{ API_BASE_URL }</p>
            <p>UMI_ENV:{UMI_ENV}</p>
            <Button onClick={() => setName('当前环境')}>global</Button>
          </Card>
        </Space>
      </div>
    </PageContainer>
  );
};

export default HomePage;
