/**
 * Created by 64661_000 on 2017/6/25.
 */
console.log('hh')
var myFunction = {
  getCookie: function (name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0] == name) {
        return arr2[1];
      }
    }
    return "";
  },
  setCookie: function (name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + "=" + value + ";expires=" + oDate;
  },
  removeCookie: function (name) {
    setCookie(name, null, -1);
  },
  getSearchString: function (key) {
    // 获取URL中?之后的字符
    var str = location.search;
    str = str.substring(1, str.length);
    // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
    var arr = str.split("&");
    var obj = new Object();
    // 将每一个数组元素以=分隔并赋给obj对象
    for (var i = 0; i < arr.length; i++) {
      var tmp_arr = arr[i].split("=");
      obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
    }
    return obj;
  },

  // leanclund       发送消息的函数
  sendMsg: function (msg, userName, professorName, managerName, chatRoomName) {

    realtime.createIMClient(userName).then(function (tom) {
      // 创建与Jerry之间的对话
      return tom.createConversation({
        members: [professorName, managerName],
        name: chatRoomName,
      });
    }).then(function (conversation) {
      // 发送消息
      return conversation.send(new TextMessage(msg));
    }).then(function (message) {
      console.log(chatRoomName, '发送成功！');
    }).catch(console.error);
  },

  // leanclund       接收消息的函数
  gotMsg:function(userName){
    realtime.createIMClient(userName).then(function(jerry) {
      jerry.on('message', function(message, conversation) {
        console.log('Message received: ' + message.text);
      });
    }).catch(console.error);
  },
  getChatRecord:function(Quantity){
    conversation.queryMessages({
      limit: Quantity, // limit 取值范围 1~1000，默认 20
    }).then(function(messages) {
      // 最新的十条消息，按时间增序排列
      console.log(messages);
    }).catch(console.error.bind(console));
  }



}
