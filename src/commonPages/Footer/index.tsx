import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

const NoFoundPage: React.FC = () => (
  <DefaultFooter
    style={{ background: 'rgba(1,1,1,0)' }}
    copyright={`人生平凡无奇，才能在故事中做一场美梦。`}
    links={[
      {
        key: 'JueJing',
        title: '掘金',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'YuQue',
        title: '语雀',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);

export default NoFoundPage;
