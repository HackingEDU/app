var React = require('react');

module.exports = Loader = React.createClass({
  render: function(){
    return (
      <div className={"loader " + (this.props.paging ? "active" : "")}>
        <img src="img/loader.svg" />
      </div>
    )
  }
});
