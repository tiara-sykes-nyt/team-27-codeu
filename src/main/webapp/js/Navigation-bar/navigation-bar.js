'use strict';

const e = React.createElement;

class NavigationBar extends React.Component{
  render() {
    return (
      <nav>
      <ul id="navigation">

        <li><a className="nav-link" href="/">Home</a></li>
        <li><a className="nav-link" href="/aboutus.html">Meet the Team</a></li>
        <li><a className="nav-link" href="/community.html">Community</a></li>
        <li><a className="nav-link" href="/stats.html">Stats</a></li>
        <li><a className="nav-link" href="/feed.html">Orders</a></li>
        <li><a className="nav-link" href="/restaurant-map.html">Map</a></li>
        <li><a className="nav-link" href="/chart.html">Reviews</a></li>

      </ul>
    </nav>
    );
  }
}

const domContainer = document.querySelector('#navigation-bar');
ReactDOM.render(e(NavigationBar), domContainer);
