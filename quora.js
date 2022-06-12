/**
 * Quora ブラックリストユーザの回答・コメント非表示
 * host: jp.quora.com
 */
 (function() {
  // ブラックリストユーザ
  const blUsers = [
    'Momoko-Friedenberg',
  ];

  // 指定間隔で監視(msec)
  setInterval(blAnswers, 100);

  function blAnswers()
  {
    delAnswers();
    delComments();
  }

  /**
   * ブラックリストユーザの回答非表示
   */
  function delAnswers()
  {
    const answers = document.querySelectorAll('div div.q-box.qu-borderAll.qu-borderRadius--small');

    Array.prototype.map.call(answers, function(answer) {
      // 表示されているコメントのみ対象
      if (answer.style.display !== 'none') {
        // profileからユーザを抽出
        const anchor = answer.querySelector('a.q-box');
        if (anchor) {
          const matches = anchor.href.match(/profile\/(.+)$/);

          if (matches !== null) {
            const user = matches[1];
            // ブラックリストの回答を非表示
            blUsers.map(function(blUser) {
              if (user == blUser) {
                answer.style.display = 'none';
              }
            });
          }
        }
      }
    });
  }

  /**
   * ブラックリストユーザのコメント非表示
   */
  function delComments()
  {
    const comments = document.querySelectorAll('div.q-box div.q-box.qu-px--medium.qu-pt--small');

    Array.prototype.map.call(comments, function(comment) {
      // 表示されているコメントのみ対象
      if (comment.style.display !== 'none') {
        // profileからユーザを抽出
        const anchors = comment.querySelectorAll('a.q-box');
        Array.prototype.map.call(anchors, function(anchor) {
          const matches = anchor.href.match(/profile\/(.+)$/);
          if (matches !== null) {
            const user = matches[1];

            // ブラックリストのコメントを非表示
            blUsers.map(function(blUser) {
              if (user == blUser) {
                comment.style.display = 'none';
              }
            });
          }
        });
      }
    });
  }
}());
