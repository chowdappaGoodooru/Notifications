const Notification = (props) => {
  //  Write your code here.
  const { className, notificationText, imageUrl } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={imageUrl} />
      <p>{notificationText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <h1>Notifications</h1>
    <Notification
      className="information"
      notificationText="Information Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      notificationText="Success Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      notificationText="Warning Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="error"
      notificationText="Error Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
