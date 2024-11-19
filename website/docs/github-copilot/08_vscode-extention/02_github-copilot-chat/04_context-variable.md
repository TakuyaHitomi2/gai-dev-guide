---
sidebar_position: 4
---

# コンテキスト変数

GitHub Copilot Chatの会話では、`#`で始まるコンテキスト変数というものが使えます。
コンテキスト変数を用いてGitHub Copilot Chatに特定のコンテキストを与えることができます。<br/>
以下にコンテキスト変数の一覧を示します。

| コンテキスト変数 | 説明 |
| :--- | :--- |
| `#editor` | コマンドに `#editor` とすることでエディタで選択中のファイル情報をプロンプトに含めることができます。 |
| `#file` | `#file:package.json` のように指定することで特定のファイルの情報をプロンプトに含めることができます。 |
| `#selection` | 範囲選択したコードやテキスト情報をプロンプトに含めることができます。 |
| `#terminalLastCommand` | 最後に選択したターミナルの最後のコマンドの情報をプロンプトに含めることができます。 |
| `#terminalSelection` | ターミナル上での選択エリアの情報をプロンプトに含めることができます。 |

エージェントコマンド、スラッシュコマンドと併用することも可能です。

import {SpeakerDeck} from '@site/src/components/Embedded';

<!-- https://speakerdeck.com/yuhattor/ai-powered-development-with-github-copilot-20240202 -->
<SpeakerDeck slideId="c183f4601ad7409da0d473f98f93a892"  page={23} />
