import React from 'react'
import styles from './ChessContainer.scss'

const ChessContainer = React.createClass({
  render(){
    return (
      <div className={styles.container}>
        <div className={styles.leftBoard}>
          <div>*</div>
          <div>o</div>
        </div>
        <div className={styles.content}></div>
      </div>
    )
  }
})
