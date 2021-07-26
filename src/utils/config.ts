let host = 'http://testgp.pandabg.cn:8081';

if (REACT_APP_ENV === 'pre') {
  host = 'http://testgp.pandabg.cn:8083';
}

export { host };
