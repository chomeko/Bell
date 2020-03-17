# アプリ作成
- npx create-react-app my-app
## レイアウト作成
- Layoutコンポーネント作成
- components/Layout.js
- components/Header.js
- components/Footer.js
- index.jsにimport
## metatag設定にreact-helmetインストール
- npm install --save react-helmet
- components/Layout.js編集
## reduxの導入
- npm install --save redux
- npm install --save react-redux
- npm install --save redux-thunk
- indexの編集
## firebase
- firebaseのサイトで色々やる
- アプリの追加
- スクリプトコピー
## firebaseのインストール
- npm install --save firebase
## storeの作成
- /fire/Store.js
- レデューサーの作成
## 本体の作成
- Bell.js作成
- firebaseの値を取得
- onClick作成しdispatchする
- buttonの作成
## デプロイ
- npm run build
- firebase deploy
## バグ発生
>読み込み時stateの初期値0が表示されたあとにDBの値が表示されることで
>読み込み後すぐにクリックすると値が１か−１に上書きされる問題
>試行錯誤するが解決できないため0の時はdisabledでクリックできないように一時処理中

