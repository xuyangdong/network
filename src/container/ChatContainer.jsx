import React from 'react'
import {Row,Col} from 'antd'
import styles from './ChatContainer.scss'
import pic1 from '../public/50.jpeg'
import MyEditor from './MyEditor'
import {fromJS} from 'immutable'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sending,chooseRoom,receive} from '../actions/chat'
import timeago from 'timeago.js'
import {sock} from '../config'
export const ChatContainer = React.createClass({

  getDefaultProps(){
    return {
      roomList:fromJS([
        {
          name:1,
          time:Date.now(),
          msg:[{
            role:'徐阳东',
            content:'你好'
          },{
            role:'徐茂陈',
            content:'你好'
          }]
        },{
          name:2,
          time:Date.now(),
          msg:[{
            role:'徐阳东',
            content:'你好'
          },{
            role:'徐茂陈',
            content:'你好'
          }]
        }
      ]),
      currentRoom:0,
      currentMaster:'徐阳东'
    }
  },
  componentDidMount(){
    const {currentRoom} = this.props
    sock.onmessage = function(e){
      console.log("收到的信息:",e.data)
      var datas = e.data.split(' ')
      if(datas.length === 3){
        this.props.receive({role:datas[0],content:datas[2]},currentRoom)
      }
    }
  },
  handleSending(content){
    const {currentRoom,currentMaster} = this.props
    this.props.sending({role:currentMaster,content:content},currentRoom)
  },
  handleChooseRoom(index){
    this.props.chooseRoom(index)
  },
  render(){
    const {roomList,currentRoom,currentMaster} = this.props
    return (
      <Row type='flex' justify='center' align='top'>
        <Col span={20}>
          <Row type='flex' justify='center' align='top'>
            <Col span={2}>
              {/* 侧边栏 */}
              <div className={styles.leftBoard}>
                <div className={styles.controller}>
                  {/* 控制栏 */}

                </div>
                <div className={styles.avatar}>
                  {/* 头像 */}
                  <img src={pic1} alt='Avatar'/>
                </div>
              </div>
            </Col>
            <Col span={6}>
              {/* 房间列表 */}
              <div className={styles.roomList}>
                <div className={styles.searchBar}>
                  {/* 搜索框 */}
                </div>
                <div>
                  {/* 列表 */}
                  {
                    roomList.toJS().map( (item,index) => (
                      <div key={index} className={styles.room} onClick={(e) => {this.handleChooseRoom(index)}} style={currentRoom===index?{backgroundColor:'#CCCCCC'}:{backgroundColor:'#FBFBFB'}}>
                        <div className={styles.roomAvatar}>
                          <img src={pic1} alt='Avatar'/>
                        </div>
                        <div className={styles.roomInfo}>
                          <div><div>{item.name}</div><div>{new timeago().format(item.time,'zh_CN')}</div></div>
                          <div>{item.msg[0].content}</div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Col>
            <Col span={16}>
              {/* 主界面 */}
              <div className={styles.chatBoard}>
                <div className={styles.chatTitle}>
                  {/* 对话标题 */}
                  <div>聊天室1</div>
                </div>
                <div className={styles.chatContent}>
                  {/* 对话面板 */}
                  {
                    roomList.get(currentRoom).get('msg').toJS().map( (item,index) => {
                        return item.role===currentMaster?(
                          <div key={index} className={styles.session} style={{alignSelf:'flex-end'}}>
                            <div className={styles.sessionContent} style={{backgroundColor:'#A2E563'}}>
                              {item.content}
                            </div>
                            <div className={styles.sessionAvatar} style={{marginLeft:'5px'}}>
                              <img src={pic1} alt='头像'/>
                            </div>
                          </div>
                        ):(
                          <div key={index} className={styles.session} style={{alignSelf:'flex-start'}}>
                            <div className={styles.sessionAvatar}>
                              <img src={pic1} alt='头像'/>
                            </div>
                            <div className={styles.sessionContent} style={{backgroundColor:'#FFFFFF'}}>
                              {item.content}
                            </div>
                          </div>
                        )
                    })
                  }
                </div>
                <div className={styles.chatInput}>
                  {/* 输入框 */}
                  <MyEditor dd={1} onSubmit={this.handleSending}/>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

    )
  }
})

function mapStateToProps(state) {
	return {
	   roomList: state.getIn(['chat','roomList']),
     currentRoom:state.getIn(['chat','currentRoom']),
     currentMaster:state.getIn(['chat',"currentMaster"]),
	}
}

function mapDispatchToProps(dispatch) {
	return {
    sending:bindActionCreators(sending,dispatch),
    chooseRoom:bindActionCreators(chooseRoom,dispatch),
    receive:bindActionCreators(receive,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
