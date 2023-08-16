// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="Notification-container">
      <div className="Notification-content">{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
