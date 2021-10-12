let host = 'http://www.domesy.cn:8081';

if (REACT_APP_ENV === 'pre') {
  host = 'http://www.domesy.cn:8083';
}

export { host };
