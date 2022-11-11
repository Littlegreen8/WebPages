var theVideo = document.getElementById("cspd_video");
theVideo.volume = 0.25
  document.onkeydown = function(event) {
      switch (event.keyCode) {
         case 37:
              event.preventDefault();

              vid_currentTime = theVideo.currentTime;
              theVideo.currentTime = vid_currentTime - 5 + (theVideo.duration * 0.01) ;
            break;

         case 39:
              event.preventDefault();

              vid_currentTime = theVideo.currentTime;
              theVideo.currentTime = vid_currentTime + 5 - (theVideo.duration * 0.01);
            break;

      }
  };
