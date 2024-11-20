---
sidebar_position: 1
---

# 有効化・無効化する

## VS CodeのUIで切り替える

GitHub CopilotのCompletions機能を無効化することでインライン補完を無効にできます。

- ウィンドウの下部パネルにある状態アイコンで有効化・無効化できます
  ![VSCode上のGitHub Copilot有効/無効化ボタン](images/toggle-ghc-on-off-ui.png)
- `DisableCompletions`  を押下すると無効化されます
  ![VSCode上のGitHub Copilotを無効にする操作](images/turn-off-ghc-by-ui.png)
- 有効にしたい場合は、 `Enable Completions` を押下します
  ![VSCode上のGitHub Copilotを有効にする操作](images/turn-on-ghc-by-ui.png)

:::warning
上記操作でインライン補完を無効にしても、GitHub Copilot Chatは影響を受けず、引き続き利用できます。<br/>
データの送信を完全に停止する場合は、以下のような対応が考えられます。

- VS Code Extension自体を無効化する：[セクションへスクロール↓](#vs-code-extension自体を無効化する)
- GitHub Copilotからログアウトする：[セクションへスクロール↓](#github-copilotからログアウトする)
:::

## VS Codeのショートカットキーで切り替える

VS Codeでは、ショートカットキーがデフォルトで設定されていないため、設定をする必要があります。

<!-- textlint-disable prh -->
- ファイル ＞ ユーザ設定 ＞ キーボードショットカットの順で設定画面を開きます
- 「GitHub Copilot: Enable/Disable Copilot completions」で検索します
    ![GitHub Copilotショートカットの設定１](images/toggle-ghc-on-off-shortcut_1.png)
- 「＋」を押下し、任意のショートカットキーを設定します
    ![GitHub Copilotショートカットの設定２](images/toggle-ghc-on-off-shortcut_2.png)
<!-- textlint-enable prh -->

## 言語別に切り替える

特定の言語でのGitHub Copilotの有効化・無効化の設定をしていると、言語の有効化・無効化が優先されるので、**ショートカットだけでは有効化・無効化の切り替えができません。**

設定方法は[環境での GitHub Copilot の構成 ＞ インライン候補の有効化なまた無効化 - GitHub Docs](https://docs.github.com/ja/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment?tool=vscode#enabling-or-disabling-inline-suggestions)を参照ください。

以下にJavaについて個別設定している場合の無効化の方法を示します。
1. ファイル ＞ ユーザ設定 ＞ 設定の順で設定画面を開きます
2. 検索窓に`copilot`と入力します
3. 左メニューから`拡張機能 ＞　GitHub Copilot`を選択します
4. 言語別の設定一覧が表示されます
5. javaの行の値列を選択してtrue/falseを切り替えることで、有効化・無効化を切り替えることができます
    ![GitHub Copilotショートカットの設定３](images/toggle-ghc-on-off-by-language.png)

## VS Code Extension自体を無効化する

インストールされている拡張機能からGitHub Copilotを検索し、「無効にする」を押下して無効にすることができます。設定を反映するためにIDEを再起動する必要があります。

![VSCode上のGitHub Copilot Chatを無効にする操作](images/turn-off-ghc.png)

## GitHub Copilotからログアウトする

アカウントメニューからGitHubアカウントをサインアウトしてください。
