// Write your code here
import './index.css'
// import {Component} from 'react'

// class Message extends Component {
//   render() {
//     return <p>{text}</p>
//   }
// }

// Message.defaultProps = {
//   text: 'Please Login',
// }

const Message = props => {
  const {text} = props

  return <h1 className="message">{text}</h1>
}

export default Message
