import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

const Footer: React.FC = () => (
  <DefaultFooter
    style={{ background: 'rgba(1,1,1,0)' }}
    copyright={`人生平凡无奇，才能在故事中做一场美梦。`}
    links={[
      {
        key: 'YuQue',
        title: '语雀',
        href: 'https://www.yuque.com/domesy/pro',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/DomeSy/Ant-Design-Pro-V5',
        blankTarget: true,
      },
      {
        key: 'Gitee',
        title: 'Gitee',
        href: 'https://gitee.com/domesy/Ant-Design-Pro-V5',
        blankTarget: true,
      },
    ]}
  />
);

export default Footer;
