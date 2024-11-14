---
sidebar_position: 6
---

# テストコードを書く

GitHub Copilotにサポートしてもらいながら、テストコードを効率良く記述できます。

:::info
[ユニットテストの作成 | GitHub Copilot - Patterns & Exercises](https://ai-native-development.gitbook.io/docs/v/ja/testing/creating-unit-tests)
:::

## 関数からテストコードを生成する

1. 実装ファイルを開く
2. テストを記述するファイルを別タブで開く  
   ※GitHub Copilotが関数をコンテキストとして扱えるように、関数が記載されているファイルを別タブで開いておく必要があります
3. テストを途中まで書く
4. テストの内容が提案されます

### 例１（提案時 → 提案受け入れ後）

![テストコード生成：例１：提案時](images/generate-test_1_before.png)<br/>
↓<br/>
![テストコード生成：例１：提案受け入れ後](images/generate-test_1_after.png)

### 例２（提案時 → 提案受け入れ後）

![テストコード生成：例２：提案時](images/generate-test_2_before.png)<br/>
↓<br/>
![テストコード生成：例２：提案受け入れ後](images/generate-test_2_after.png)

### 例３

![テストコード生成：例３（gifアニメ）](images/generate-test_3.gif)

## GitHub Copilot Chatからテストコードを生成する

- エディタで、テストを生成したい処理が書かれているファイルを開く
- GitHub Copilot Chat Viewを開く
- GitHub Copilotに`/tests`と入力する
  ![チャットからテストコードを生成する手順１から３](images/generate-test-from-chat_1to3.png)
- テストコードが提案される
  - ※ボタン「Create」をクリックし、「Create As」を選択できる
  - ボタン「Accept」：提案されたコードに反映させる
  - ボタン「Discard」：提案されたコードに破棄させる
  - ボタン「Create」：提案されたコードは生成元ファイルと同じフォルダにテストコードファイルを生成する
  - ボタン「Create As」：提案されたコードは自分指定したフォルダにテストコードファイルを生成する
    ![チャットからテストコードを生成する手順４](images/generate-test-from-chat_4.png)
