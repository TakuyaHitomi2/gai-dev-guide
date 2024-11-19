---
sidebar_position: 2
---

# 効果的なプロンプト・コンテキストの原則

GitHub Copilot・GitHub Copilot Chatは、要求（プロンプト）に対して提案を返却します。<br/>
要求の他にもIDEで開いているファイルやワークスペースなども文脈（コンテキスト）として加味して提案を作成します。<br/>
そのため、プロンプト・コンテキスト次第で、出力結果が大きく変わります。<br/>

効果的な出力を得るために、以下の4つの原則に従って、プロンプト・コンテキストを作成してください。

:::info
<!-- textlint-disable ja-technical-writing/sentence-length -->
本ページは以下からの抜粋です。詳細は以下を参照ください。<br/>
[AI-Powered Development with GitHub Copilot 20240202 - Speaker Deck](https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202)<br/>
[GitHub Copilot のプロンプト エンジニアリング- GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
<!-- textlint-enable ja-technical-writing/sentence-length -->
:::
<br/>

以下スライドにて4つの原則が簡潔に示されています。

import {SpeakerDeck} from '@site/src/components/Embedded';

<!-- https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202 -->
<SpeakerDeck slideId="c183f4601ad7409da0d473f98f93a892"  page={19} />

## 1. 文脈

GitHub Copilotが予測のために使う文脈を以下のように制御してください。より良い結果が生まれやすくなります。

- 文脈として与えたいファイルのみをタブで開いてください<br/>
  ※GitHub Copilotは現在タブで開かれているファイルを予測のために扱います
- GitHub Copilot Chatを使う場合は、`@workspace`コマンドや、`#file`等のコンテキスト変数コマンドを使うことで、文脈の指定を行えます
  - ※`@workspace`の使い方は[GitHub Copilot Chat ＞ コマンド](../08_vscode-extention/02_github-copilot-chat/03_command.md#エージェントコマンド)参照ください<br/>
  - ※`#file`の使い方は[GitHub Copilot Chat ＞ コンテキスト変数](../08_vscode-extention/02_github-copilot-chat/04_context-variable.md)参照ください

## 2. 意図

何をゴールにすべきかをGitHub Copilotに明示的に伝えてください。意図に沿った結果が生まれやすくなります。

- コメントで意図を記載してください
- クラス名、メソッド名等で意図を伝えてください

## 3. 明瞭さ

曖昧さを避け、明瞭な指示をしてください。GitHub Copilotは指示が明瞭なほど、意図した結果が生まれやすくなります。

## 4. 具体性

プロンプトの具体性を以下のように上げてください。具体性が増すほどGitHub Copilotの予測精度が良くなります。

- 具体的な出力例をプロンプトに含めてください
- 出力・入力の型を記載してください
