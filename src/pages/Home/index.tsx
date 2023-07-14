import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { Button } from 'antd';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');
  const { API_BASE_URL } = process.env;
  console.log('API_BASE_URL:', process.env.API_BASE_URL);
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        { name }{ API_BASE_URL }
      </div>
      <Button onClick={() => setName('😂')}>setName</Button>
    </PageContainer>
  );
};

export default HomePage;
