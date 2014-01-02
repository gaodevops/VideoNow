var channelName = document.getElementById('channel-name');
var startButton = document.getElementById('start-button');

startButton.onclick = function(){
    if(channelName.value){
        var webrtc = new SimpleWebRTC({
        localVideoEl: 'localVideo',
        remoteVideosEl: 'remoteVideos',
        autoRequestMedia: true
        });

        webrtc.on('readyToCall', function () {
            webrtc.joinRoom(channelName.value);
        });

        localVideo.classList.remove('hidden');
    }else{
        alert('请输入频道名');
    }
}



