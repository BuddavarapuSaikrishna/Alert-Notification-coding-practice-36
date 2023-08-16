// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotification = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="check-icon" />
      <div className="message-container">
        <h1 className="alert-success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="message-container">
        <h1 className="alert-error">Error</h1>
        <p>Sorry, you are not authorized to have access to delete the files</p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning-icon" />
      <div className="message-container">
        <h1 className="alert-warning">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info-icon" />
      <div className="message-container">
        <h1 className="alert-info">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="App-container">
      <div className="NotificationList-container">
        <h1>Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotification
