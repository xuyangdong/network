
export const SENDING = 'SENDING'
export function sending(msg,currentRoom){
  return dispatch =>
      dispatch({
        type:SENDING,
        payload:msg
    })
}

export const CHOOSEROOM = 'CHOOSEROOM'
export function chooseRoom(roomNum){
  return dispatch => dispatch({
    type:CHOOSEROOM,
    payload:roomNum
  })
}
