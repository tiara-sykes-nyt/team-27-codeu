'use strict';

const e = React.createElement;

class RequestLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: '',
      isLoading: false,
    }
  }
 
  /**
 * Creates an anchor element.
 * @param {string} url
 * @return {string} Anchor element
 */
  createLink = (url) => {
    const link = url;
    return link;
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('/login-status')
      .then(response => response.json())
      .then((loginStatus) => {
        if (loginStatus.isLoggedIn) {
          this.setState({ hits: createLink('/user-page.jsp?user=' + loginStatus.username), isLoading: false});
        }
        else {
          this.setState({ hits: '/login', isLoading: false });
        }
      })   
  }

  render() {
    if(this.state.isLoading)
    {
      return <p> </p>;
    }
    return(
    <a href={this.state.hits}>Request Service</a>);
  }
}

const domContainer = document.querySelector('#request-button');
ReactDOM.render(e(RequestLink), domContainer);