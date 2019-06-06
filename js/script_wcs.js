//音声認識処理
const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

// コールする
const join = document.getElementById('js-voiceChat-start-trigger');

//--------------- 変更 join. ---------------//
join.addEventListener('click', function () {
  console.info('js-voiceChat-start-trigger click');
  speech.start();
});

speech.onresult = function (e) {
  console.info('speech.onresult start');
  const username = document.getElementById("username");
  const roomId = document.getElementById("js-room-id").value;
  
    speech.stop();
    if (e.results[0].isFinal) {
      var autotext = e.results[0][0].transcript
      const localText = document.getElementById('js-local-text');
      localText.value = autotext;
      console.log(e);
      console.log(autotext);
      
    }
};

speech.onstart = () => {
  //console.info('speech.onstart start');
};
 

speech.onend = () => {
  //console.info('speech.onend start');
  speech.start();
};

speech.onerror = function( event ) {
  console.error( event.error );
};
