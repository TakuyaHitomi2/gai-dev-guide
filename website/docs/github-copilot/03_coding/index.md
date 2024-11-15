---
title: コードを書く
sidebar_position: 3
---

## コードから補完する

GitHub Copilotの最も利用頻度の高い使い方です。<br/>
記述中のコードに対し、次に記述されると想定されるコードをリアルタイムに提案できます。<br/>
GitHub Copilotを有効化した状態でいつも通りコードを書くだけで、その恩恵を受けることができます。<br/>

例として、関数の実装内容をGitHub Copilotに補完させる方法を示します。

- 最初に、関数、クラスの定義や処理を記述します
- その後、下記のような動作を行うとGitHub Copilotが補完候補を提案してくれるので、補完候補を確認し、TABキーで反映させます
  - 候補を提案してほしい場所にカーソルを合わせます
  - 改行します
  - 提案を要求します（Windowsの場合は`Alt + \`、Macの場合は`Option + \`）

候補表示時`Alt + ]`、`Alt +[` で他の補完候補を確認できます。(Macの場合は`Option + ]`、`Option + [`)

![コード補完手順（gifアニメ）](images/code-completion.gif)<br/>

参考：[GitHub Copilot の概要 - GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/getting-started-with-github-copilot#seeing-your-first-suggestion)

## コメントから補完する

- まず関数、クラスの定義や処理をコメントで記述します
  ![コード補完元のコメント](images/code-completion_1.png)
- その後下記のような動作を行うとGitHub Copilotが補完候補を提案してくれるので、補完候補を確認しTABキーでコードに反映させます
  - 候補を提案してほしい場所にカーソルを合わせます
  - 改行します
  - 提案を要求します（Windowsの場合は`Alt + \`、Macの場合は`Option + \`）
    ![コード補完：提案の要求](images/code-completion_2.png)
  - 候補表示時`Alt + ]`、`Alt +[` にて他の補完候補を確認できます（Macの場合は`Option + ]`、`Option + [`）
    ![コード補完：他提案の確認](images/code-completion_3.png)
  - 候補コードを確認してTABキーでコードに反映させます
    ※簡単なエラーがあれば、エラー場所に右クリック → Quick Fixで解消できます<br/>
    **修正前：**<br/>
    ![コード補完：提案受け入れ前](images/code-completion_4.png)<br/>
    **修正後：**<br/>
    ![コード補完：提案受け入れ後](images/code-completion_5.png)

## エラーや問題点のある箇所の修正提案をもらう

GitHub Copilot Chatで`/fix`を使うことで、修正提案をもらうことができます。

- エディタで、該当のファイルを開きます
- GitHub Copilot Chat Viewを開きます
- `/fix このコードの潜在的なリスクを教えて`と入力し送信します
- GitHub Copilot Chatにより、リスクになりそうな箇所と修正案が提示されます

![GitHub Copilot Chatで潜在的なリスクを教えてもらう手順](images/security-detect_1.png)

## エディタ上で提案をもらう

GitHub Copilot Chatは、GitHub Copilot Chat Viewを開かなくても利用が可能です。

- エディタ上で右クリックします
- GitHub Copilotにカーソルをあわせます
- `Start in Editor` を押下します

詳細はこちらをご確認ください [インラインチャット](../08_vscode-extention/01_github-copilot/03_inline-chat.md)

![インラインチャットで提案をもらう手順（gifアニメ）](images/inline-chat.gif)
