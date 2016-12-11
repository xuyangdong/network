// import SockJS from 'sockjs'
// var socket = require('sockjs')

// const baseURL = 'http://localhost:12362'

// console.log("socket js:",socket)
// export const sock = SockJS(baseURL)
// sock.onopen = function() {
//     console.log('open');
// };
// export const sock = null
// import io from 'socket.io'
// const socket = io(baseURL)
// console.log('config:',socket)
// socket.on('connection', function(socket){
//   console.log('a user connected');
// });
// var socket = io('http://localhost:12362');
  // socket.on('news', function (data) {
  //   console.log(data);
  //   socket.emit('my other event', { my: 'data' });
  // });
// import io from 'socket.io-client'
// import io from 'socket.io'
var connection = new WebSocket('ws://localhost:12362', []);
export const sock = connection

export default {
  debug:true
}
