(function(w, d, s, q, i) {
w[q] = w[q] || [];
var f = d.getElementsByTagName(s)[0],j = d.createElement(s);
j.async = true;
j.id = 'beacon-aplus';
j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'aplus_queue', '203467608');

 //集成应用的appKey
 aplus_queue.push({
   action: 'aplus.setMetaInfo',
   arguments: ['appKey', 'xxxxxxx']
 });
 /************************以下内容为可选配置内容****************************/
 //sdk提供手动pv发送机制，启用手动pv(即关闭自动pv)，需设置aplus-waiting=MAN;
 //注意：由于单页面路由改变时不会刷新页面，无法自动发送pv，所以对于单页应用，强烈建议您关闭自动PV, 手动控制PV事件
 aplus_queue.push({
   action: 'aplus.setMetaInfo',
   arguments: ['aplus-waiting', 'MAN']
 });
 //是否开启调试模式
 aplus_queue.push({
   action: 'aplus.setMetaInfo',
   arguments: ['DEBUG', true]
 });
 //是否指定用作计算umid的id类型，默认为cnaid，目前支持:
 //1. 微信和QQ: openid; 字节和百度 anonymousid; 支付宝 alipay_id
 //2. 微信、QQ、字节、百度平台的 unionid
 //3. 业务方自己生成的随机id uuid
  aplus_queue.push({
   action: 'aplus.setMetaInfo',
   arguments: ['aplus-idtype', 'xxxx'] //取值参考见附表1
 });

const {aplus_queue} = window;
aplus_queue.push({
 action: 'aplus.sendPV',
  arguments: [pageEventConfig, userData]
});
