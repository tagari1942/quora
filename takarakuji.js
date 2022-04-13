// みずほ 宝くじ 1等書き換え
// host: www.mizuhobank.co.jp
(function() {
  // 組
  const group = '99組';
  // 番号
  const num = '123456番';

  let elemGroup = document.querySelector('table.typeTK.js-takarakuji-table-pc tbody tr:nth-child(1) td:nth-child(3) strong');
  let elemNum = document.querySelector('table.typeTK.js-takarakuji-table-pc tbody tr:nth-child(1) td:nth-child(4) strong');

  elemGroup.innerText = group;
  elemNum.innerText = num;
}());
