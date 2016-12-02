import React from 'react'
import {Row,Col,Button} from 'antd'
import styles from './ChatContainer.scss'
import pic1 from '../public/50.jpeg'
import MyEditor from './MyEditor'
export const ChatContainer = React.createClass({

  getDefaultProps(){
    return {
      roomList:[
        {
          name:1,
          time:Date.now(),
          msg:[{
            role:'A',
            content:'哈哈哈'
          }]
        }
      ],
      currentRoom:{
        sessionList:[{
          role:'A',
          content:'你好'
        },{
          role:'me',
          content:'你好'
        }]
      },
      currentMaster:'me'
    }
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
                    roomList.map( (item,index) => (
                      <div key={index} className={styles.room}>
                        <div className={styles.roomAvatar}>
                          <img src={pic1} alt='Avatar'/>
                        </div>
                        <div className={styles.roomInfo}>
                          <div><div>{item.name}</div><div>{item.time}</div></div>
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
                    currentRoom.sessionList.map( (item,index) => {
                        return (
                          <div key={index} className={styles.session} style={item.role==currentMaster?{alignSelf:'flex-end'}:{alignSelf:'flex-start'}}>
                            <div className={styles.sessionAvatar}>
                              <img src={pic1} alt='头像'/>
                            </div>
                            <div className={styles.sessionContent} style={item.role==currentMaster?{backgroundColor:'#A2E563'}:{backgroundColor:'#FFFFFF'}}>
                              {item.content}
                            </div>
                          </div>
                        )
                    })
                  }
                </div>
                <div className={styles.chatInput}>
                  {/* 输入框 */}
                  <MyEditor />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

    )
  }
})
