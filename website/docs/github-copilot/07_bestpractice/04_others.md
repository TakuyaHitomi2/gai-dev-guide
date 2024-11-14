---
sidebar_position: 4
---

# その他

:::info
本ページは以下からの抜粋です。詳細は以下を御覧ください。<br/>
[GitHub Copilot - Patterns & Exercises](https://ai-native-development.gitbook.io/docs/ja) ＞ Design Patterns
:::
<br/>

## 小さなコードチャンクで作業する

複雑な計算する関数を書くとしましょう。<br/>
GitHub Copilotに全体の複雑な解決策を求める代わりに、いくつかの関数に分けて、それぞれの関数を生成するように求めることで、より正確なコードを生成してくれます。

参考：[小さなコードチャンクで作業する](https://ai-native-development.gitbook.io/docs/v/ja/design-patterns/working-on-small-chunk)

## 一貫性のあるコーディングスタイル

GitHub Copilotは既存のソースコードを元に予測し提案を行います。<br/>
インデント、命名規則、宣言方法、コメントの書き方等のコーディングスタイルを一貫性のあるものにすることで、GitHub Copilotも一貫性のある提案を行ってくれるようになります。

参考：[一貫性のあるコーディングスタイル](https://ai-native-development.gitbook.io/docs/v/ja/design-patterns/consistent-coding-style)

## タイプヒンティング・命名規則

GitHub Copilotはコード上の型情報を認識して提案を行います。<br/>
静的型付け言語の型宣言はもちろん、動的型付け言語においても、タイプヒンティングを用いて型を宣言することで、提案の精度を上げることができます。<br/>
型宣言がない言語ではDocコメント等で代用できます。<br/>
また、GitHub Copilotは変数名や関数名もコンテキストとして扱うため、具体的で説明的な命名を行うことでより良い提案を行ってくれます。

参考：[タイプヒンティング](https://ai-native-development.gitbook.io/docs/v/ja/general/type-hinting)  
参考：[AI が理解可能な命名規則](https://ai-native-development.gitbook.io/docs/v/ja/design-patterns/ai-readable-naming-convention)
