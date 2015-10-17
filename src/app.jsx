var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

var MainPage = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  },
  render: function() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }
});

React.render(MainPage, document.querySelector('.container'));
