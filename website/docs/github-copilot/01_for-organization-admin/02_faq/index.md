---
sidebar_position: 2
---

# FAQ

GitHub Copilot導入検討時に知っておいたほうが良い情報をまとめています。

:::warning
この記事は、2023年11月末時点の情報を元に作成しています。GitHub Copilotのアップデートで状況が変わる可能性もありますので、ご注意ください。
:::

## 全般

### Q. 使用したいのですが、利用申請はどうすればよいですか？

利用申請の手続きは各社ごとの対応方針に従ってください。

### Q. コードリポジトリがGitHubでなくてもGitHub Copilotを利用できますか？

利用できます。例えば、コードリポジトリが社内のGit、Subversionで管理しているプロジェクトでもGitHub Copilotをご利用いただけます。

### Q. 顧客受託開発プロジェクトで利用する場合に確認すべき事項はなんですか？

お客様にメリット、セキュリティ対策をご説明し、プロジェクトごとに利用許諾を得るようにしてください。

### Q. 外部パートナーの開発者も利用できますか？

アカウントの払い出しは、各社ごとの対応方針に従ってください。<br/>
TISでは、自社社員、パートナー様のいずれもご利用いただけます。

## セキュリティについて

### Q. GitHub Copilot利用中に入力を推奨しないデータはありますか？

機密性の高い情報（個人情報、パスワード、APIキーなど）は入力しないでください。

### Q. 送信されるデータはセキュアにやりとりされますか？

GitHub Copilot for Businessは、サジェストを生成する目的以外ではエディタのソースコードにアクセスしません。サジェストを生成するために使用されたプロンプトは、セキュアに送信され、提案が生成されると保持されず破棄されます。

### Q. GitHub Copilotが提案するコードの品質は問題ないですか？

GitHub Copilotが提案するコードの品質は使用される文脈やコードベースによって変わります。<br/>
提案されたコードは常に手動でレビューし、必要に応じて調整することが推奨されます。

### Q. GitHub Copilotが提案するコードに脆弱性はありますか？

GitHub Copilotは過去のコードから学習するため、その学習データに含まれる脆弱性が提案コードに反映される場合があります。ユーザは、提案されたコードを慎重にレビューし、セキュリティベストプラクティスに従ってください。

### Q. GitHub Copilotが提案するコードは商用利用しても問題ありませんか？

GitHub Copilotが生成するコードは、商用利用が可能です。しかし、生成されたコードが他のソースコードを参考にしている場合、そのソースコードのライセンスに従う必要があります。

### Q. GitHub Copilotが提案するコードの権利は誰が保有しますか？

GitHub Copilotによって生成されたコードの権利は、そのコードを生成したユーザに帰属します。ただし、生成されたコードが他の著作権で保護されたコードに基づいている場合は、それらの権利に注意する必要があります。

### Q. GitHub Copilotの提案にOSSライセンスのコードが含まれる場合はありますか？

GitHub Copilotには、公開されたコードと一致するコードの提案をブロックする機能があり、それを有効化することで著作権・ライセンス違反のリスクを軽減できます。
具体的な有効化方法は[パブリック コードに一致する候補の有効化または無効化 - GitHub Docs](https://docs.github.com/ja/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)を参照ください。

### Q. プロジェクト内のソースコードはGitHub Copilotの学習に使用されますか？

学習には使用されません。GitHub Copilot for Businessは、サジェストを生成する目的以外ではエディタのソースコードにアクセスしません。サジェストを生成するために使用されたプロンプトは、セキュアな形でモデルに送信されます。提案が生成されると、プロンプトは保持されません。

### Q. GitHub Copilotのセキュリティ・プライバシーの詳細はどのようになっていますか？

以下を参照ください。

[GitHub Copilot Trust Center](https://resources.github.com/ja/copilot-trust-center/)

## 費用について

### Q. GitHub Copilotを利用する場合の費用の考え方は？

著作権侵害リスクに備えるため、TISではGitHub Enterpriseと合わせて利用することを方針とします（*1）<br/>
その場合にかかる一人当たりの利用料は、以下の2つの合計になります。一人あたり約7万円/年です（*2）

- GitHub Enterprise: 年間契約で1人あたり年間約231ドル（*2）
- GitHub Copilot for Business: 1人あたり年間228ドル

:::info
（*1）著作権侵害の場合はマイクロソフトが法的防御を行い、不利な判決や和解に伴う費用を負担します。詳細は[マイクロソフト、お客様向けの Copilot Copyright Commitment を発表 - News Center Japan](https://news.microsoft.com/ja-jp/2023/09/12/230912-copilot-copyright-commitment-ai-legal-concerns/)を参照ください。<br/>
（*2）GitHub Enterprise`の費用は各社契約ごとに変動がありますので、あくまで参考情報としてご参照ください。
:::
