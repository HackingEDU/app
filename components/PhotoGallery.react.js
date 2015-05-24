var React = require('react');
var Photo = require('./Photo.react.js');

// React.js Photo Gallery Component

// TO-DO:
// 1. Format gallery objects to responsive Bootstrap
// classes.
// 2. Add CSS overlays via Component.
// 3. Celebrate with a brewski.


// All together now.
// PhotoGallery Component.
// Serves photo's as a gallery.
module.exports = PhotoGallery = React.createClass({

  render: function() {
    // Mapping data collection to 'photos'.
    var photos = this.props.photos.map(function(photo) {
      return <Photo src={photo.url} caption={photo.caption} />
    });
    // Ta-da!
    return (
      <div className="traning-day">
        <h1>HEADING</h1>
        <div className='photo-gallery'>
          {photos}
        </div>
        <p>Lorem Ipsum.Lorem Ipsum.Lorem Ipsum</p>
      </div>

    );
  }
});
