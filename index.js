function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
  }

  function logShout() {
    console.log('HELLO');
  }

  function logWhisper() {
    console.log('hello');
  }

  function sayHiToHeadphonedRoommate (aWord) {
    var lowAnswer = "I can't hear you!";
    var highAnswer = "YES INDEED!";
    var loveAnswer = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
      return lowAnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
      return highAnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
      return loveAnswer
    }
  }