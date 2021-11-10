import PySimpleGUI as sg

sg.theme('DarkAmber')   # デザインテーマの設定
def select():
    # ウィンドウに配置するコンポーネント
    layout = [  [sg.Text('ジャンルを選択してください')],
            [sg.Text('ジャンルの選択', size=(15, 1)),sg.Combo(('飲食', '日用雑貨','趣味','娯楽'), default_value="飲食",size=(10, 1), key='janru')],
            [sg.Text('そのジャンルの金額を入力'), sg.InputText()],
            [sg.Button('OK')]]

    # ウィンドウの生成
    window = sg.Window('ジャンルと金額の設定', layout)

    # イベントループ
    while True:
        event, values = window.read()
        if event == sg.WIN_CLOSED or event == 'OK':
            break

    window.close()
# ウィンドウに配置するコンポーネント
layout = [  [sg.Text('購入物はまだありますか？')],
            [sg.Button('はい'), sg.Button('なし')]]

# ウィンドウの生成
window = sg.Window('家計簿ソフト', layout)

# イベントループ
while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED or event == 'なし':
        break
    elif event == 'はい':
        select()

window.close()