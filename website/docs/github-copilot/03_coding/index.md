---
title: コードを書く
sidebar_position: 3
---

インストール＆設定が終わったら早速GitHub Copilot・GitHub Copilot Chatを使ってコードを書いてみましょう。<br/>
すぐに始められる簡単なものを、利用頻度が高い順に紹介していきます。<br/>
本ページを読んだ後は、実際の開発でも同じような感じで使って見ましょう。

## コードから補完する

※`GitHub Copilot`の機能。

GitHub Copilotの最も利用頻度の高い使い方です。<br/>
記述中のコードに対し、次に記述されると想定されるコードをリアルタイムに提案できます。<br/>
GitHub Copilotを有効化した状態でいつも通りコードを書くだけで、その恩恵を受けることができます。<br/>

例として、関数の実装内容をGitHub Copilotに補完させる方法を示します。

### 1. 要求を提案させる

- 関数のインターフェース、クラスの定義を記述します
- 候補を提案してほしい場所にカーソルを合わせて改行します
- 提案を要求します（Windowsの場合は`Alt + \`、Macの場合は`Option + \`）
- 上記操作によりGitHub Copilotが補完候補を薄字で表示してくれます
  
### 2. 提案を受け入れる

- 提案を受け入れる場合、提案を表示させて状態でTABキーを押下すると補完できます
- 提示された補完候補がマッチしない場合は他の補完候補を確認できます（Windows： `Alt + ]`・`Alt +[`、Mac： `Option + ]`・`Option + [`）

![コード補完手順（gifアニメ）](images/code-completion.gif)

:::info
上記は最も簡単な例ですが、他にもGitHub Copilotにて補完方法を提案してもらう方法が様々あります。<br/>
[GitHub Copilot を使用して IDE でコードの提案を取得する - GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/getting-started-with-github-copilot#seeing-your-first-suggestion)を参照ください
:::

## コメントから補完する

※`GitHub Copilot`の機能。

上記セクションではコードをインプットにして補完候補を提案してもらうやり方を紹介しましたが、コメントをインプットにすることも可能です。
ここではコメントを記述した後にコードをGitHub Copilotに補完してもらう方法を示します。

### 1. 提案を要求させる

- 関数、クラスの定義や処理のコメントを記述します
  ![コード補完元のコメント](images/code-completion_1.png)
- 候補を提案してほしい場所にカーソルを合わせて改行します
- 提案を要求します（Windowsの場合は`Alt + \`、Macの場合は`Option + \`）
  ![コード補完：提案の要求](images/code-completion_2.png)
- 上記操作によりGitHub Copilotが補完候補を薄字で表示してくれます

### 2. 提案を受け入る

- 提案を受け入れる場合、提案を表示させて状態でTABキーを押下すると補完できます
- 提示された補完候補がマッチしない場合は他の補完候補を確認できます（Windows： `Alt + ]`・`Alt +[`、Mac： `Option + ]`・`Option + [`）
  ![コード補完：他提案の確認](images/code-completion_3.png)

:::info
要求受け入れ後にに警備なエラーがある場合、以下手順でエラーを解消できます。

- エラー箇所を右クリックします
- `クイック修正 ＞ Copilotを使用修正する`を選択します

**修正前：**<br/>
![コード補完：提案受け入れ前](images/code-completion_4.png)<br/>
**修正後：**<br/>
![コード補完：提案受け入れ後](images/code-completion_5.png)
:::

## エディタ上で提案をもらう

※`GitHub Copilot Chat`の機能。

GitHub Copilot Chatは、GitHub Copilot Chat Viewを開かなくても利用が可能です。

- エディタ上で右クリックします
- GitHub Copilotにカーソルをあわせます
- `Start in Editor`（`エディタ内でのインラインチャット`）を押下します

詳細はこちらをご確認ください [GitHub Copilot Chat ＞ インラインチャット](../08_vscode-extention/02_github-copilot-chat/05_inline-chat.md)

![インラインチャットで提案をもらう手順（gifアニメ）](images/inline-chat.gif)
