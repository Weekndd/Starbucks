// youtube iframe api 에서 가져와서 수정한 것
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', { //id = player의 값을 찾도록 설정된 명령임
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: {
        autoplay: true, //자동 재생 유무
        loop: true, //반복 재생 유무
        playlist: "An6LvWQuj_8" //반복 재생할 유튜브 영상 ID 목록
    },
    events : {//객체 데이터 내부에 익명함수니까, 메소드라고 할 수 있음
      onReady: function(event) { 
        event.target.mute() //음소거
      }
    }
  });
}
