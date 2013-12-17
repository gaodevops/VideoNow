var channelName = document.getElementById('channel-name');
var startButton = document.getElementById('start-button');

startButton.onclick = function(){
    if(channelName.value){
        var webrtc = new SimpleWebRTC({
        // the id/element dom element that will hold "our" video
        localVideoEl: 'localVideo',
        // the id/element dom element that will hold remote videos
        remoteVideosEl: 'remoteVideos',
        // immediately ask for camera access
        autoRequestMedia: true
        });

        // we have to wait until it's ready
        webrtc.on('readyToCall', function () {
            // you can name it anything
            webrtc.joinRoom(channelName.value);
        });

        //显示本地视频窗口
        localVideo.classList.remove('hidden');
    }else{
        alert('请输入频道名');
    }
}



