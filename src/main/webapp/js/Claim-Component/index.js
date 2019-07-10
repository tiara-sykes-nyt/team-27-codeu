'use strict';

const e = React.createElement;

class ClaimLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <a href='/feed.html'>Claim Requests</a>);
  }
}

const domContainer = document.querySelector('#claim-button');
ReactDOM.render(e(ClaimLink), domContainer);