import {fromJS} from "immutable"
import {SENDING,CHOOSEROOM} from '../actions/chat'
const initialState = fromJS({
  roomList:[
    {
      name:1,
      time:Date.now(),
      msg:[{
        role:'徐阳东',
        content:'你好'
      },{
        role:'徐茂成',
        content:'你好'
      }]
    },
    {
      name:2,
      time:Date.now(),
      msg:[{
        role:'徐阳东',
        content:'你好'
      }]
    }
  ],
  currentRoom:0,
  currentMaster:'徐阳东'
})
export default (state = initialState,action) => {
  switch (action.type) {
    case SENDING:
    //发送消息
      let newState = state.setIn(['roomList',state.get('currentRoom'),'msg'], state.getIn(['roomList',state.get('currentRoom'),'msg']).push(action.payload) )
      let newState2 = newState.setIn(['roomList',state.get('currentRoom'),'time'],Date.now())
      return newState2
    case CHOOSEROOM:
      return state.set('currentRoom',action.payload)
    default:
      return state

  }
}
