---
sidebar_position: 5
---

# コードを解析する

ソースコードの論理構造と実行フローを視覚的に表現するために、GitHub Copilotを使ってクラス図とフロー図を作成できます。

## クラス図を作成する

- GitHub Copilot Chat Viewを開きます
- GitHub Copilotに以下を入力します

```txt
「#file:CopyCallTreeAnalyzeTool.java ロジックを理解して、クラス図をMermaidで作成してください。 
フローチャートにABCDを実際のメソッド名変更してください。処理ロジック漏れなくご注意ください。」
```

- クラス図が提案されます
  ![クラス図](images/class-diagram.png)
- Mermaidで表現するクラス図は以下です
  ![クラス図（Mermaid形式）](images/class-diagram-mermaid-style.png)

## フロー図を作成する

- GitHub Copilot Chat Viewを開きます
- GitHub Copilotに以下を入力します

```txt
「#file:CopyCallTreeAnalyzeTool.java ロジックを理解して、処理フロー図をMermaidで作成してください。
フローチャートにABCDを実際のメソッド名変更してください。」
```

- フロー図が提案されます
  ![graph_3.png](images/flow-diagram_1.png)<br/>
  ※中は省略<br/>
  ![graph_4.png](images/flow-diagram_2.png)
- Mermaidで表現するフロー図は以下です
  ![graph_5.png](images/flow-diagram-mermaid-style.png)
