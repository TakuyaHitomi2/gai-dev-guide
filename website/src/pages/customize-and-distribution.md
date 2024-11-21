---
title: ガイドのカスタマイズ・配布
---

# ガイドのカスタマイズ・配布

色々な開発プロジェクトがあるなかで、必ずしも本ガイドどおりに開発するケースは稀です。<br/>
そこで本ガイドでは、プロジェクトの様々な特性に合わせて、ガイドを個別にカスタマイズできるようにしています。<br/>
さらに、オフライン環境で開発する方向けでも参照できるように、参照時にWEBサーバを必要としないHTMLファイルとして配布可能です。<br/>
以下の手順に従ってカスタマイズ・配布してください。

## 1. カスタマイズ用環境を準備する

カスタマイズはローカルPC上で行います。
以下手順に従って、カスタマイズ用環境を準備してください。

- ガイドをカスタマイズするには、お使いの環境にて以下のツールが必要です。各ツールをインストールしてください
  - [Node.js](https://nodejs.org/en/)（v18以上）
    - 実行環境として必要です
  - [Visual Studio Code](https://code.visualstudio.com/)
    - カスタマイズ時のエディタとして推奨します
  - [git](https://git-scm.com/)
    - ガイドのリポジトリをクローンするために必要です

- 本リポジトリをgitでクローンします。ターミナルで以下を実行してください

  ```bash
  git clone https://github.com/Fintan-contents/gai-dev-guide.git
  ```

- 続いてガイドのライブラリをインストールします。ターミナルで以下を実行してください

  ```bash
  cd gai-dev-guide
  cd website
  npm ci
  ```

- ガイドの起動します。ターミナルで`gai-dev-guide/website`をカレントディレクトリとして以下を実行してください

  ```bash
  npm start
  ```

- ブラウザにて、[http://localhost:3000](http://localhost:3000)にアクセスし、ガイドが表示されれば準備完了です

## 2. ガイドをカスタマイズする

- クローンしたリポジトリをVS Codeで開きます
- `website/docs`ディレクトリ配下のmdファイルまたはmdxファイルを編集します
- 編集内容を確認するために、ガイドを再起動します<br/>
ターミナルで`gai-dev-guide/website`をカレントディレクトリとして以下を実行します<br/>
※編集しながらブラウザ（[http://localhost:3000](http://localhost:3000)）にて編集内容をリアルタイムで確認可能です
      ```bash
      npm start
      ```

:::info

ガイドは[Docusaurus](https://docusaurus.io/)というドキュメント生成用ライブラリを使用して作成されています。<br/>
カスタイマイズする際は、マークダウン記法と、マークダウン記法を拡張したMDX記法、およびDocusaurusの基本的な知識が必要です。<br/>
詳細は[Markdown Features - Docusaurus](https://docusaurus.io/docs/markdown-features)を参照ください。

:::

:::warning

オフライン環境に配布する場合、ガイドに記載された外部リンクにはアクセスできません。<br/>
必要に応じて、外部リンク先の情報をガイドに追記してください。

:::

## 3. カスタマイズしたガイドを配布する

開発プロジェクトによって様々な配布方法が考えられますが、ここではオフライン環境で開発する方向けに、ガイドを静的HTMLファイルとして配布する方法を紹介します。

### ビルドする

- ターミナルで`gai-dev-guide/website`をカレントディレクトリとして以下を実行してください。<br/>
この時のnpm scriptは`build`ではなく`build:usableWithoutServer`を実行します
      ```bash
      npm run build:usableWithoutServer
      ```
- `website/build`ディレクトリ配下に静的HTMLが出力されるので直下の`index.html`のファイルパスをコピーして、ブラウザにてアクセスして表示されれば出力成功です

### ビルドしたガイドを配布する

- `website/build`ディレクトリをプロジェクトごとの最適な方法で配布してください
  - 例えば「`website/build`ディレクトリをZIP圧縮して各人に送付する」や「`website/build`ディレクトリ資産をファイルサーバに格納する」などが考えられます

:::info

上記手順で配布した場合、配布したフォルダ直下の`index.html`をブラウザで開くことで、ガイドを参照できます。

:::
