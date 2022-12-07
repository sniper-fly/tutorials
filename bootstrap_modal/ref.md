https://www.buildinsider.net/web/jqueryref/059
jqueryを使ったAJAX通信

[実装方針]
buttonにcar idのデータをつける
押されたボタンのidによって、格納されている画像の呼び出しを変える

画像の表示に逐一サーバーとの通信が必要な場合は、Rails側で画像を返すrouteを用意し
ボタンが押された際にAJAXでやり取りする
