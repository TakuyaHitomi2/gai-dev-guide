---
sidebar_position: 10
---

# ガイドのカスタマイズ・配布

色々な開発プロジェクトがあるなかで、必ずしも本ガイドどおりにGitHub Copilotを利用するケースは稀です。<br/>
そこで本ガイドでは、プロジェクトの様々な特性に合わせて、ガイドを個別にカスタマイズできるようにしてます。<br/>
さらに、オフライン環境で開発する方向けであっても参照できるように、参照時にWEBサーバを必要としないHTMLファイルとして配布できるようにしています。<br/>
以下の手順に従ってカスタマイズ・配布してください。

## 前提

ガイドをカスタマイズするには、お使いの環境にて以下のツールが必要です。

- [Node.js](https://nodejs.org/en/)（v18以上）
- [Visual Studio Code](https://code.visualstudio.com/)
- [git](https://git-scm.com/)

## 手順

### ガイドをローカルで起動する

- 本リポジトリをクローンします

  ```bash
  git clone https://github.com/Fintan-contents/gai-dev-guide.git
  ```

- ガイドのライブラリをインストールします

  ```bash
  cd gai-dev-guide
  cd website
  npm ci
  ```

- ガイドの起動します

  ```bash
  # gai-dev-guide/website直下で実行
  npm start
  ```

- ブラウザにて、[http://localhost:3000](http://localhost:3000)にアクセスします

### ガイドをカスタマイズする

- クローンしたリポジトリをVisual Studio Codeで開きます
- `website/docs`ディレクトリ配下のmdファイルまたはmdxファイルを編集します
- 編集内容を確認するために、ガイドを再起動します<br/> ※編集しながらブラウザ（[http://localhost:3000](http://localhost:3000)）にて編集内容をリアルタイムで確認可能です

  ```bash
  # gai-dev-guide/website直下で実行
  npm start
  ```

:::warning

オフライン環境に配布する場合、ガイドに記載された外部リンクにはアクセスできません。<br/>
必要に応じて、外部リンク先の情報をガイドに追記してください。

:::

### ガイドを静的HTMLに出力する

- ビルドを実行します。この時のnpm scriptは`build`ではなく`build:usableWithoutServer`を実行します

  ```bash
  # gai-dev-guide/website直下で実行
  npm run build:usableWithoutServer
  ```

- `website/build`ディレクトリ配下に静的HTMLが出力されるので直下の`index.html`のファイルパスをコピーして、ブラウザにてアクセスして表示されれば出力成功です

### 出力したガイドを配布する

- `website/build`ディレクトリをプロジェクトごとの最適な方法で配布してください
  - 例えば「`website/build`ディレクトリをZIP圧縮して各人に送付する」や「`website/build`ディレクトリ資産をファイルサーバに格納する」などが考えられます
