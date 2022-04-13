# Quora用回答非表示ツール

特定のユーザの回答を非表示にするJavascriptスクリプトです。<br />
Javascriptを実行できる機能拡張ならばどんなものでも構いませんが、ここではChromeの機能拡張ScriptAutoRunnerでの設定方法を紹介します。<br />

## ScriptAutoRunner設定

1. Chromeに機能拡張ScriptAutoRunnerを追加する<br />
   https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm?hl=ja

2. ScriptAutoRunnerの設定画面を開く<br />
   ブラウザの右上にある機能拡張ボタン＞ScriptAutoRunner＞オプション
   ![ScriptAutoRunner02](https://user-images.githubusercontent.com/70423373/157871009-46e3abc4-0599-45cd-8ab9-bb5942bed85a.jpg)

3. 新規スクリプトを追加する<br />
   ![ScriptAutoRunner03](https://user-images.githubusercontent.com/70423373/157871394-187c64ba-6f86-4b1e-9272-e8a76f6ff09a.jpg)

4. quora.jsをコピペする<br />
   https://github.com/tagari1942/quora/blob/main/quora.js
   
   ![ScriptAutoRunner04](https://user-images.githubusercontent.com/70423373/157871877-f752d644-40e5-42fb-ba1f-8c61fa6e3fc0.jpg)
   
   上部のスクリプト名に「Quora」(任意)、下部のTarget hostnameに「jp.quora.com」を記入する。

5. ブラックリストユーザを変更する<br />
   デフォルトではMomoko Friedenbergさんが登録されています。<br />
   回答を非表示にしたいユーザに変更します。<br />
   ユーザ文字列の調べ方は後述。<br />
   ![ScriptAutoRunner06](https://user-images.githubusercontent.com/70423373/157872932-2d981e93-e053-4c2b-9bf3-e81997bc04c6.jpg)

6. スクリプトを有効にする<br />
   コンセントをクリックし、スクリプトを有効にします。<br />
   有効化されると全体が黄色になります。
   ![ScriptAutoRunner05](https://user-images.githubusercontent.com/70423373/157873319-8f3f9370-3a73-486c-9f30-daf42d556984.jpg)

7. Quoraで非表示になっていることを確認する<br />
   ここではMomoko Friedenbergさんの回答が非表示になることを確認しています。<br />
   ![Momoko-Friedenberg02](https://user-images.githubusercontent.com/70423373/157873652-a60e8d8f-a752-4667-bf5a-99246f1177a2.jpg)
   
   ↓↓↓↓↓<br />
   
   ![Momoko-Friedenberg03](https://user-images.githubusercontent.com/70423373/157873854-3acb15c8-5b2b-4482-86be-d3578325e84f.jpg)

## ユーザ文字列確認方法

ブラックリストに入れたいユーザのプロフィールを表示します。<br />
URLの「 https://jp.quora.com/profile/Momoko-Friedenberg 」の「Momoko-Friedenberg」の部分がユーザ文字列になります。<br />
![Momoko-Friedenberg01](https://user-images.githubusercontent.com/70423373/157874075-662d4eaf-2fcd-4388-a2ad-8d3f9063b10c.jpg)

