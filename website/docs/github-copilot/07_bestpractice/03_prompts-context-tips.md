---
sidebar_position: 3
---

# 効果的なプロンプト・コンテキストのTips

前ページでプロンプトとコンテキストの重要性を説明しました。<br/>
本ページではプロンプト・コンテキストの質を向上させるための具体的な方法を紹介します。

## 一貫性のあるコーディングスタイル

GitHub Copilotは既存のソースコードを元に予測し提案を行います。<br/>
インデント、命名規則、宣言方法、コメントの書き方等のコーディングスタイルを一貫性のあるものにすることで、GitHub Copilotも一貫性のある提案を行ってくれるようになります。

<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
<!-- textlint-disable jtf-style/4.3.2.大かっこ［］ -->
:::note[詳細は以下参照ください]
<!-- textlint-enable jtf-style/4.3.2.大かっこ［］ -->
<!-- textlint-enable ja-technical-writing/ja-no-mixed-period -->
- [一貫性のあるコーディングスタイル - GitHub Copilot - Patterns & Exercises](https://ai-native-development.gitbook.io/docs/v/ja/design-patterns/consistent-coding-style)
- [タイプヒンティング - GitHub Copilot - Patterns & Exercises](https://ai-native-development.gitbook.io/docs/v/ja/general/type-hinting)
- [AIが理解可能な命名規則 - GitHub Copilot - Patterns & Exercises](https://ai-native-development.gitbook.io/docs/v/ja/design-patterns/ai-readable-naming-convention)
:::

### 変数名などに意味のある名前を付ける

[効果的なプロンプト・コンテキストの原則](./02_prompts-context-principles.md)でも説明していますが、意図・具体性はGitHub Copilotを使う上で重要です。
変数名・関数名の命名も原則に従う必要があります。<br/>
関数名を具体度を上げることで、GitHub Copilotが意図を解釈し、より的確な提案が得られます。

- 抽象度が高い名前（関数名`fetchData`）の場合
  - ⇛ 抽象的な提案しか得られない
  ![良くない関数名のコード](images/function-name_bad.png)
- 具体的な名前（関数名`fetchUserData`）の場合
  - ⇛ より具体的な提案が得られる
  ![良い関数名のコード](images/function-name_good.png)

### 型やコメントを付ける

変数名・関数名以外にも、GitHub Copilotはコード上の型情報を認識して提案を行います。<br/>
静的型付け言語の型宣言はもちろん、動的型付け言語においても、タイプヒンティングを用いて型を宣言することで、提案の精度を上げることができます。<br/>
型宣言がない言語ではDocコメント等で代用できます。<br/>
また、GitHub Copilotは変数名や関数名もコンテキストとして扱うため、具体的で説明的な命名を行うことでより良い提案を行ってくれます。

## 効果的なコンテキストの指定

ソースコード以外にも、VS Codeで開いているファイルやGitHub Copilot Chatでのやりとりで、コンテキストをGitHub Copilotにインプットさせ、提案の精度を向上できます。<br/>
ここではコンテキストをインプットする方法を示します。

<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
<!-- textlint-disable jtf-style/4.3.2.大かっこ［］ -->
:::note[詳細は以下を参照ください]
<!-- textlint-enable jtf-style/4.3.2.大かっこ［］ -->
<!-- textlint-enable ja-technical-writing/ja-no-mixed-period -->
- [GitHub Copilot の使用についてのベストプラクティス - GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/best-practices-for-using-github-copilot#copilot-%E3%82%92%E5%BD%B9%E7%AB%8B%E3%81%A4%E5%87%BA%E5%8A%9B%E3%81%AB%E5%B0%8E%E3%81%8F)
:::

### コンテキストに含ませたいファイルだけ開いておく

GitHub Copilotでは、VS Codeで関連するファイルを開き、無関係なファイルを閉じておくことで、より適切なコンテキストを提供できます。<br/>
コンテキストスイッチングを行ったり、次のタスクに移るときには、不要なファイルを閉じることを忘れないでください。

GitHub Copilot Chatの場合は、関連ファイルを開くことに加えてコンテキスト変数`#editor`を使う必要があります。<br/>
`#editor`の使い方は[GitHub Copilot Chat ＞ コンテキスト変数](../08_vscode-extention/02_github-copilot-chat/04_context-variable.md#editorエディタで選択しているファイルをコンテキストに含める)を参照ください。

### コンテキスト変数・エージェントコマンド・スラッシュコマンドを使う

GitHub Copilot Chatでは、コンテキスト変数・エージェントコマンド・スラッシュコマンドなどのキーワードを使用して、特定のタスクまたはコンテキストにフォーカスできます。
詳細は以下を参照ください。
- [GitHub Copilot Chat ＞ コマンド](../08_vscode-extention/02_github-copilot-chat/03_command.md)
- [GitHub Copilot Chat ＞ コンテキスト変数](../08_vscode-extention/02_github-copilot-chat/04_context-variable.md)

## プロンプトの分割

大きく複雑な要求は、小さく簡潔な要求に分割してください。<br/>
<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
<!-- textlint-disable jtf-style/4.3.2.大かっこ［］ -->
:::note[具体例は以下を参照ください]
- [複雑なタスクを単純なタスクに分割する - GitHub docs](https://docs.github.com/ja/copilot/using-github-copilot/prompt-engineering-for-github-copilot#break-complex-tasks-into-simpler-tasks)<br/>
- [小さなコードチャンクで作業する - GitHub Copilot - Patterns & Exercises](https://ai-native-development.gitbook.io/docs/ja/design-patterns/working-on-small-chunk)
:::

## 会話の削除・切り替え

GitHub Copilot Chatにおける一連のスレッドにおいて、自身のコメントを削除できます。
当該コメントが関連性を持たない場合、この削除によって会話の流れが改善され、より精度の高い回答が得やすくなります。

<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
<!-- textlint-disable jtf-style/4.3.2.大かっこ［］ -->
:::note[詳細は以下参照ください]
<!-- textlint-enable jtf-style/4.3.2.大かっこ［］ -->
<!-- textlint-enable ja-technical-writing/ja-no-mixed-period -->
- [GitHub Copilot の使用についてのベストプラクティス - GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/best-practices-for-using-github-copilot#copilot-%E3%82%92%E5%BD%B9%E7%AB%8B%E3%81%A4%E5%87%BA%E5%8A%9B%E3%81%AB%E5%B0%8E%E3%81%8F)
:::

### 会話の一部を削除

- GitHub Copilot Chat Viewを開きます
- アイコン`x`を押下します
  - 削除前：
    ![不要な会話削除前](images/delete-request_before.png)
  - 削除後：
    ![不要な会話削除後](images/delete-request_after.png)

### 会話全体を削除

- GitHub Copilot Chat Viewを開きます
- GitHub Copilotに以下を入力します
    ![会話をクリア](images/clear-communication-setting.png)
- 現在の会話コミュニケーションをクリアします
  - 削除前：
    ![会話をクリアする前](images/clear-communication_before.png)
  - 削除後：
    ![会話をクリアした後](images/clear-communication_before.png)

### 会話を切り替え

GitHub Copilot Chatの`＋`を押下することで新しい会話（スレッド）を開始できます。<br/>
これにより、GitHub Copilot Chatと複数の異なるトピックを同時進行できます。

- GitHub Copilot Chat Viewを開きます
- アイコン`＋`を押下します
  - 実行前：
    ![スレッド追加前](images/add-thread_before.png)
  - 実行後：
    ![スレッド追加後](images/add-thread_after.png)

## 提案の選択

コード補完時にGitHub Copilotは複数の提案を提示できます。<br/>
キーボードショートカット（`Ctrl+Enter`）を使用すると、使用可能なすべての提案をすばやく確認できます。

<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
<!-- textlint-disable jtf-style/4.3.2.大かっこ［］ -->
:::note[詳細は以下参照ください]
<!-- textlint-enable jtf-style/4.3.2.大かっこ［］ -->
<!-- textlint-enable ja-technical-writing/ja-no-mixed-period -->
- [GitHub Copilot の使用についてのベストプラクティス - GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/best-practices-for-using-github-copilot#copilot-%E3%82%92%E5%BD%B9%E7%AB%8B%E3%81%A4%E5%87%BA%E5%8A%9B%E3%81%AB%E5%B0%8E%E3%81%8F)
:::

## フィードバック

GitHub Copilotの提案に対してフィードバックを提供することで、提案の質を向上できます。<br/>
提案に対して適宜フィードバックを提供し、GitHub Copilotの学習を助けましょう。

<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
<!-- textlint-disable jtf-style/4.3.2.大かっこ［］ -->
:::note[詳細は以下参照ください]
<!-- textlint-enable jtf-style/4.3.2.大かっこ［］ -->
<!-- textlint-enable ja-technical-writing/ja-no-mixed-period -->
- [GitHub Copilot の使用についてのベストプラクティス - GitHub Docs](https://docs.github.com/ja/copilot/using-github-copilot/best-practices-for-using-github-copilot#copilot-%E3%82%92%E5%BD%B9%E7%AB%8B%E3%81%A4%E5%87%BA%E5%8A%9B%E3%81%AB%E5%B0%8E%E3%81%8F)
:::
