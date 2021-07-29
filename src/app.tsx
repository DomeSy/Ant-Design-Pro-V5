import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { notification, message } from 'antd';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import { ResponseError } from 'umi-request';
import Footer from '@/components/Footer';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import { storageSy } from '@/utils/Setting'
import initData from '@/utils/initData';
import { Jump } from '@/utils';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @module 初始设置状态，通过此方法可进行调用
 */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    const token = localStorage.getItem(storageSy.token);
    if(!token) Jump.go(loginPath);
    try {
      const msg = await initData();
      return { ...msg };
    } catch (error) {
      Jump.go(loginPath);
    }
    return false;
  };

  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser:any = await fetchUserInfo();
    if(!currentUser) return {}
    return {
      ...currentUser
    }
  }
  return {
  };
}

const requestInterceptors: any = (url: string, options: RequestInit) => {
  if (localStorage.getItem('token')) {
    const token = `Bearer ` + localStorage.getItem('token');
    // options.headers.Authorization = `Bearer ` + localStorage.getItem('token');
    options.headers = {
      ...options.headers,
      "Authorization": token,
      'Content-Type': 'application/json',
    }
  }
  return { url, options };
}

// 响应拦截
const responseInterceptors:any = async (response: Response) => {
  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
    return;
  }
  const data = await response.clone().json();
  if ([10001,10008].includes(data.resultCode)) {
    message.error(data.message);
    localStorage.clear();
    return false;
  }
  // if (data.status !== 'ok') {
  //   message.error(data.message);
  //   return;
  // }
  return data;
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

/**
 * @module 请求模块
 */
export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [requestInterceptors],
  responseInterceptors: [responseInterceptors],
};


// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    footerRender: () => <Footer />,
    //页面切换时的方法
    onPageChange: () => {
      const { location } = history;
      const token = localStorage.getItem(storageSy.token);
      // 如果没有登录，重定向到 login
      if (!token && location.pathname !== loginPath) {
        Jump.go(loginPath)
      }
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
