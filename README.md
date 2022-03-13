# entry-exit-management
## What
- 人の入退出を管理するアプリケーション

## Will
Android App で入退出をチェックし Google Calendar に記録する
- felica のために Android App を使う
- Google API のために Web API 作って使いやすくする
- ブラウザからユーザ情報を管理したいので Webアプリ を作る
- 個人情報を扱うので TLS 必須
- 複数のコンテナを使うので Kubernetes 上で動かしたい

## 構成
- nginx・・・リバースプロキシ <- ingress がリバースプロキシのような機能を提供している
- node(react)・・・Webアプリケーション -> サーバサイドレンダリングがしたいので Next.js を使うように変更
- golang(gin)・・・Web API
- mariadb・・・データベース
- マニフェスト・・・https://github.com/munvei/eem-manifests で管理する
- Android App・・・別リポジトリで管理する予定
- CI/CD・・・CircleCI と AlgoCD を使う
