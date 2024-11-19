---
sidebar_position: 5
---

# インラインチャット

GitHub Copilot Chat Viewではなく、エディタ上でチャットを実行することができます。

## 使い方

Windows `ctrl + i` 、Mac `⌘ + i` でチャットを開始します。

<!-- textlint-disable prh -->
- エディタ上で右クリック後「Copilot」の項目が表示されます
<!-- textlint-enable prh -->
- 「Start in Editor」を押下すると、インラインチャットが表示されます
  ![inlinechat_1.png](images/inlinechat_1.png)
  ![inlinechat_2.png](images/inlinechat_2.png)

## インライン補完とチャットの使い分け

インライン補完機能とチャット機能の違いとして以下のようなものが挙げられています。<br/>

import {SpeakerDeck} from '@site/src/components/Embedded';

<!-- https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202 -->
<SpeakerDeck slideId="c183f4601ad7409da0d473f98f93a892"  page={17} />
<br/>
類似体験の違いからも分かるように、以下のように利用シーンが異なります。

- **インライン補完機能**
  - GitHub Copilotがナビゲーター役となり、ペアプログラミングをする
- **チャット機能**
  - GitHub Copilotに相談・質問をする
  - GitHub Copilotにコードレビューをしてもらう
  - 細かい指示を行い、コードやドキュメントを生成してもらう
