import React from 'react';
import $ from 'jquery';

function Preloader() {
  React.useEffect(() => {
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader')
          .delay(100)
          .fadeOut('slow', function () {
            $(this).remove();
          });
      }
    });
  }, []);
  return <div id='preloader'></div>;
}

export default Preloader;
