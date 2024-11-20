---
sidebar_position: 4
---

# コンテキスト変数

GitHub Copilot Chatの会話では、`#`で始まるコンテキスト変数というものが使えます。
コンテキスト変数を用いてGitHub Copilot Chatに特定のコンテキストを与えることができます。<br/>
以下にコンテキスト変数の一覧を示します。
エージェントコマンド、スラッシュコマンドと併用することも可能です。

| コンテキスト変数 | 説明 |
| :--- | :--- |
| `#editor` | コマンドに `#editor` とすることでエディタで選択中のファイル情報をプロンプトに含めることができます。 |
| `#file` | `#file:package.json` のように指定することで特定のファイルの情報をプロンプトに含めることができます。 |
| `#selection` | 範囲選択したコードやテキスト情報をプロンプトに含めることができます。 |
| `#terminalLastCommand` | 最後に選択したターミナルの最後のコマンドの情報をプロンプトに含めることができます。 |
| `#terminalSelection` | ターミナル上での選択エリアの情報をプロンプトに含めることができます。 |

以下にコンテキスト変数ごとの具体例を示します。

## `#file`：指定したファイルをコンテキストに含める

`#file:index.tsx` のように指定することで特定のファイルの情報をコンテキストに含めることができます。

以下のように特定ファイルに関してGitHub Copilot Chatの力を借りたい時などに便利です。

![#file利用例](images/sample_file.png)

## `#editor`：エディタで選択しているファイルをコンテキストに含める

`#editor`を指定することで、エディタで選択しているファイル情報をコンテキストに含めることができます。

`#file`でファイルを指定しなくても、エディタでファイルを選択している場合は`#editor`で代用できます。

以下例では選択中のファイル（`ClientSearchForm.java`）をコンテキストに含めて`industryCode`について質門しています。
応答では`industryCode`の一般的な事柄だけでなく、`ClientSearchForm.java`のクラスの定義についても言及しています。

![#editor利用例](images/sample_editor.png)

## `#selection`：エディタの選択している箇所をコンテキストに含める

`#file`や`#selection`から更にコンテキストを絞りたい場合は、エディタでファイルの特定箇所を選択し`#selection`を指定することで、コンテキストを選択箇所に限定できます。

以下例では特定ファイルのメソッドを選択して質門しています。

![#selection利用例](images/sample_selection.png)

## `#terminalLastCommand`：ターミナルの最後のコマンド情報をコンテキストに含める

`#terminalLastCommand`を指定することで、ターミナルで最後に実行したコマンド情報をコンテキストに含めることができます。

以下例では静的コード解析の結果について概要をまとめてもらっています。

![#terminalLastCommand利用例](images/sample_terminalLastCommand.png)

## `#terminalSelection`：ターミナルで選択している箇所をコンテキストに含める

`#terminalLastCommand`から更にコンテキストを絞りたい場合は`#terminalSelection`を使います。

ターミナル上で特定箇所を選択し、`#terminalSelection`を指定することで、コンテキストを選択箇所に限定できます。

## 参考

以下資料でもコンテキスト変数の説明が記載されているので参考にしてください。

import {SpeakerDeck} from '@site/src/components/Embedded';

<!-- https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202 -->
<SpeakerDeck slideId="c183f4601ad7409da0d473f98f93a892"  page={23} />
