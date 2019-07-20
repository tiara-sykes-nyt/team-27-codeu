'use strict';

const e = React.createElement;

class Mission extends React.Component{
  render() {
    return (
      <div>
      <p className="projectName"> FoodShare </p>
  <p className="missionBody">Welcome to our Student Food WebApp, a place for students to get their favorite food and earn money!
    You can log in and let other people know what you are craving and other students nearby will
    get the food for you. You can also view other people's requests to help them fulfill their need.
    Since we realized that some students have extra food swipes while others don't have enough for their meals,
    you can also trade/give your unused food swipes at your school dining halls to other students as an act of kindness!
  </p>
  <p className="missionBody">What are you waiting for? Log in now!</p>
  </div>
    );
  }
}

const domContainer = document.querySelector('#mission');
ReactDOM.render(e(Mission), domContainer);