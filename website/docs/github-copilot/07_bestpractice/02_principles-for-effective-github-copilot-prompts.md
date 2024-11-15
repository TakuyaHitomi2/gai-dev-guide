---
sidebar_position: 2
---

# 効果的なGitHub Copilotプロンプトの原則

:::info
本ページは以下からの抜粋です。詳細は以下を御覧ください。<br/>
[AI-Powered Development with GitHub Copilot 20240202 - Speaker Deck](https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202)<br/>
[GitHub Copilot のプロンプト エンジニアリング- GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
:::
<br/>

GitHub Copilotを効果的に扱うコツとして以下の4つが挙げられています。

import {SpeakerDeck} from '@site/src/components/Embedded';

<!-- https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202 -->
<SpeakerDeck slideId="c183f4601ad7409da0d473f98f93a892"  page={19} />

## 文脈

GitHub Copilotが予測のために使う文脈を以下のように制御してください。より良い結果が生まれやすくなります。

- 文脈として与えたいファイルのみをタブで開いてください<br/>
  ※GitHub Copilotは現在タブで開かれているファイルを予測のために扱います
- GitHub Copilot Chatを使う場合は、@workspaceコマンドや、#file等のコンテキスト変数コマンドを使うことで、文脈の指定を行えます

## 意図

何をゴールにすべきかをGitHub Copilotに以下のように伝えてください。意図に沿った結果が生まれやすくなります。

- コメントで意図を記載してください
- クラス名、メソッド名等で意図を伝えてください

## 明瞭さ

曖昧さを避け、明瞭な指示をしてください。GitHub Copilotは指示が明瞭なほど、意図した結果が生まれやすくなります。

## 具体性

プロンプトの具体性を以下のように上げてください。具体性が増すほどGitHub Copilotの予測精度が良くなります。

- 具体的な出力例をプロンプトに含めてください
- 出力・入力の型を記載してください
