
window.addEventListener('DOMContentLoaded', e => {
  // 各フォーム部品を選択
  const elTimeLine = document.querySelector('#timeLine');

  const elName = document.querySelector('#name');
  const elTitle = document.querySelector('#title');
  const elMessage = document.querySelector('#message');

  const elBtnAuto = document.querySelector('#btnAuto');
  const elForm = document.querySelector('#sendForm');
  
  // 自動入力ボタンの処理を登録
  elBtnAuto.addEventListener('click', e => {
    // 各フォーム部品の値を設定
    elName.value = '自動太郎';
    elTitle.value = '今週の予定について'
    elMessage.value = '明日は買い物に行って終末はランチ';
  });
  
  // 送信実行時の処理を登録
  elForm.addEventListener('submit', e => {
    // 各フォーム部品の値を取得
    const vName = elName.value;
    const vTitle = elTitle.value;
    const vMessage = elMessage.value;
    
    // タイムラインに出力するhtmlを作成
    const newLi = document.createElement('li');
    newLi.innerHTML =`<ul><li id="name_tl">${vName}</li><li id="title_tl">${vTitle}</li><li id="message_tl">${vMessage}</li></ul>`;

    // #timeLineの先頭にhtmlを追加
    elTimeLine.insertBefore(newLi, elTimeLine.firstChild);
    
    // 送信を停止
    e.preventDefault();
  });
});