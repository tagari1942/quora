/**
 * Quora 特定文字列ハイライト
 * host: jp.quora.com
 */
(function() {
  const word = 'プログラミング';
  const hclass = 'hilightmark';
  const fcolor = '#381919';
  const bgcolor = '#87cefa';

  // 指定間隔で監視(msec)
  setInterval(hilightStr, 100);

  /**
   * 質問文中の特定文字列をハイライトする
   */
  function hilightStr()
  {
    let answers = document.querySelectorAll('div.q-text.puppeteer_test_question_title span.q-box.qu-userSelect--text span');

    Array.prototype.map.call(answers, function(answer) {
      const html = answer.outerHTML;
      // hclassが含まれていない文字列のみ
      if (html && html.indexOf(hclass) === -1) {
        const resHtml = replacer(html, word);
        if (html != resHtml) {
          // console.log('resHtml', resHtml);
          answer.outerHTML = resHtml;
        }
      }
    });
  }

  /**
   * 置換
   */
  function replacer(str, word) {
    const string = '(' + word + ')';
    const regularExp = new RegExp(string, 'g');
    const replaceStr = '<span class="' + hclass + '" style="color: ' + fcolor + '; background-color: ' + bgcolor + '">$1</span>';
    const resStr = str.replace(regularExp , replaceStr);
    return resStr;
  }
}());
