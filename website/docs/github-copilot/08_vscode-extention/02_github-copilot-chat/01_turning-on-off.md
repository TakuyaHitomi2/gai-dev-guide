---
sidebar_position: 1
---

# 有効・無効の切り替え

開発の中で以下のようなケースがある場合は、GitHub Copilot Chatの有効・無効を素早く切り替えられたほうが便利です。
ここではVS CodeのGitHub Copilot Chat拡張機能を前提として有効・無効を切り替える方法を示します。

- **プロジェクトを兼務しており**、GitHub Copilotを使る/使えないプロジェクトが混在している場合

:::warning
GitHub CopilotとGitHub Copilot Chatの両方を使用している場合に、片方のみ有効・無効を切り替えるケースは稀です。<br/>
片方を切り替えた場合は、もう片方も切り替えてください。
:::

## UIやショートカットで切り替える

2024年2月時点では、GitHub Copilot Chatを一時的に無効化する機能は提供されていません。

## GitHubでサインイン・サインアウトする

アカウントメニューからGitHubアカウントをサインアウトしてください。<br/>
この操作を実施するとGitHub CopilotとGitHub Copilot Chatの両方が使えなくなるのでご注意ください。

![GitHub Copilotでサインアウトする操作](images/sign-out-ghc.png)

## 拡張機能自体で切り替える

インストールされている拡張機能からGitHub Copilotを検索し、「無効にする」を押下して無効にすることができます。設定を反映するためにIDEを再起動する必要があります。

![VSCode上のGitHub Copilot Chatを無効にする操作](images/github-copilot-chat-in-vscode-off.png)
