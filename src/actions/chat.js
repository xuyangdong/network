import {sock} from '../config'

export const SENDING = 'SENDING'
export function sending(msg,currentRoom){
  return dispatch =>{
    sock.send(msg.role+' says: '+msg.content)
    dispatch({
      type:SENDING,
      payload:msg
    })
  }
}

export const CHOOSEROOM = 'CHOOSEROOM'
export function chooseRoom(roomNum){
  return dispatch => dispatch({
    type:CHOOSEROOM,
    payload:roomNum
  })
}

export const RECEIVE = 'RECEIVE'
export function receive(msg,currentRoom){
  return dispatch =>{
    dispatch({
      type:RECEIVE,
      payload:msg
    })
  }
}
