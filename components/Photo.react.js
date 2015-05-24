var React = require('react');

// Let's get this party started.
// Photo Component.
 module.exports = Photo = React.createClass({

  render: function() {

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='stamp'>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }
});
