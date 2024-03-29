function getFormValue(e) {
  var activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet=activeSpreadSheet.getSheetByName("シート2");
  //0=タイムスタンプ , 1=入金 , 2=決済手段 . 3=使った金額 , 5=入金の種類
  var kessai = e.values[2]
  var outputmoney = e.values[3]
  var variaty = e.values[5]
  var inputmoney = e.values[1]
  outputmoney=Number(outputmoney);
  inputmoney=Number(inputmoney);
  //受け取った値の配列内確認用コード
  //sheet.getRange(22,9).setValue(e.values[1]);
  //console.log(e.values[1]);
  //問題なし
  if(kessai==="現金")
      {
        //財布の残高
        var wallet=sheet.getRange(7,8).getValue();
        wallet=wallet-outputmoney;
        sheet.getRange(7,8).setValue(wallet);
        //使っていいお金
        var kessaimoney=sheet.getRange(9,10).getValue();
        kessaimoney=kessaimoney-outputmoney;
        sheet.getRange(9,10).setValue(kessaimoney);
      }
  //問題なし
  if(kessai==="銀行から直接支出(手数料)"){
        //銀行の残高
        var bankmoney=sheet.getRange(9,8).getValue();
        bankmoney=bankmoney-outputmoney;
        sheet.getRange(9,8).setValue(bankmoney);
        //使っていいお金
        var kessaimoney=sheet.getRange(9,10).getValue();
        kessaimoney=kessaimoney-outputmoney;
        sheet.getRange(9,10).setValue(kessaimoney);
  }
  //問題なし
  if(kessai==="クレジットカード")
      {
        var credit=sheet.getRange(7,9).getValue();
        credit=credit+outputmoney;
        //クレジットカードセルに使った金額を足したものをセット
        sheet.getRange(7,9).setValue(credit);
        //使っていいお金
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-outputmoney;
        //使っていいお金にクレジットを引いた額をセット
        sheet.getRange(9,10).setValue(currentmoney);
      }
  //問題なし
  if(kessai==="モバイルスイカ")
    {
      //モバイルスイカの残高
      var mobilemoney=sheet.getRange(11,8).getValue();
      mobilemoney=mobilemoney-outputmoney;
      sheet.getRange(11,8).setValue(mobilemoney);
    }
    //問題なし
  if(kessai==="アナログスイカ")
    {
      //アナログスイカの残高
      var analogmoney=sheet.getRange(11,9).getValue();
      analogmoney=analogmoney-outputmoney;
      sheet.getRange(11,9).setValue(analogmoney);
    }  
    //問題なし
  if(kessai==="スタバカード")
    {
      //スターバックスカードのセル
      var starback=sheet.getRange(7,10).getValue();
      starback=starback-outputmoney;
      //出金した金額とスタバカードの金額を引いたものをスタバカードセルにセット
      sheet.getRange(7,10).setValue(starback);
      
    }
  //問題なし
  if(kessai==="現金の引き出し")
    {
      //銀行のお金セル
      var bankmoney=sheet.getRange(9,8).getValue();
      bankmoney=bankmoney-outputmoney;
      sheet.getRange(9,8).setValue(bankmoney);
      //財布の金額セル
      var wallet=sheet.getRange(7,8).getValue();
      //財布の金額と引き出したお金を足す
      wallet=wallet+outputmoney;
      //加算された財布の金額を財布残高にセット
      sheet.getRange(7,8).setValue(wallet);
    }
  if(variaty==="使っていいお金")
      {
        //使っていいお金
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney+inputmoney;
        bankmoney=sheet.getRange(9,8).getValue();
        bankmoney=bankmoney+inputmoney;
        sheet.getRange(9,8).setValue(bankmoney);
        sheet.getRange(9,10).setValue(currentmoney);
      }
    //問題なし
  if(variaty==="使ってはいけないお金(奨学金)")
      {
        //奨学金
        var currentmoney=sheet.getRange(9,9).getValue();
        //銀行のお金
        var bankmoney=sheet.getRange(9,8).getValue();
        currentmoney=currentmoney+inputmoney;
        //入金された奨学金を奨学金に加算
        sheet.getRange(9,9).setValue(currentmoney);
        //銀行のお金に奨学金のお金を加算
        bankmoney=bankmoney+inputmoney;
        sheet.getRange(9,8).setValue(bankmoney);
      }
  //10月25日更新
  if(variaty==="モバイルスイカにチャージ")
      {
        //モバイルスイカのセルを取得
        var mobile=sheet.getRange(11,8).getValue();
        var addmobile=inputmoney+mobile;
        //モバイルスイカにチャージ分をセット
        sheet.getRange(11,8).setValue(addmobile);
        //使っていいお金のセルを取得(マイナス)
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-outputmoney;
        sheet.getRange(9,10).setValue(currentmoney);
        //銀行の残高のセルを取得(マイナス)
        var bankmoney=sheet.getRange(9,8).getValue();
        bankmoney=bankmoney-inputmoney;
        sheet.getRange(9,8).setValue(bankmoney);
      }
  //10月25日更新
  if(variaty==="アナログスイカにチャージ")
      {
        //アナログスイカのセルを取得
        var analog=sheet.getRange(11,9).getValue();
        var addanalog=inputmoney+analog;
        //アナログスイカのセルにチャージ分をセット(プラス)
        sheet.getRange(11,9).setValue(addanalog);
        //使っていいお金のセルを取得(マイナス)
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-outputmoney;
        sheet.getRange(9,10).setValue(currentmoney);
        //財布の残高のセルを取得(マイナス)
        var walletmoney=sheet.getRange(7,8).getValue();
        walletmoney=walletmoney-outputmoney;
        sheet.getRange(7,8).setValue(walletmoney);
      }
    //11月6日更新
  if(variaty==="スタバカードにチャージ"){
        //スタバカードにプラス
        var sutaba=sheet.getRange(7,10).getValue();
        var sutaba=inputmoney+sutaba;
        sheet.getRange(7,10).setValue(sutaba);
        //クレジットカードからマイナス
        var credit=sheet.getRange(7,9).getValue();
        credit=credit+inputmoney;
        sheet.getRange(7,9).setValue(bankmoney);
        //使っていいお金からマイナス
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-inputmoney;
        sheet.getRange(9,10).setValue(currentmoney);
  }
  if(variaty==="財布に現金を追加"){
    //財布の残高
        var wallet=sheet.getRange(7,8).getValue();
        var wallet=inputmoney+wallet;
        sheet.getRange(7,8).setValue(wallet);
        //使っていいお金
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney+inputmoney;
        sheet.getRange(9,10).setValue(currentmoney);
  }
}
//以前に書いていたコード、for文などの使い方のために一応残しておく
  /*var lastRow=sheet.getLastRow();
  console.log(sheet.getName());
    for(var i=2;i<=lastRow;i++)
    {
      if(sheet.getRange(i,3).getValue()==="現金orクレジットカード類")
      {
        var money=sheet.getRange(i,4).getValue(); 
        var currentmoney=sheet.getRange(9,10).getValue();
        var currentmoney=currentmoney-money;
        sheet.getRange(9,10).setValue(currentmoney);
        console.log(currentmoney);
      }
      if(sheet.getRange(i,6).getValue()==="使ってはいけないお金(奨学金)")
      {
        var getsyougaku=sheet.getRange(i,6).getValue(); 
        var syougaku=sheet.getRange(8,9).getValue();
        var beta=getsyougaku+syougaku;
        sheet.getRange(8,9).setValue(beta);
      }
    }
    for(var i=2;i<=lastRow;i++)
    {
      if(sheet.getRange(i,6).getValue()==="モバイルスイカにチャージ")
      {
        var nyuukin=sheet.getRange(i,2).getValue();
        var mobile=sheet.getRange(11,8).getValue();
        var addmobile=nyuukin+mobile;
        sheet.getRange(11,8).setValue(addmobile);
      }
    }
        for(var i=2;i<=lastRow;i++)
    {
      if(sheet.getRange(i,6).getValue()==="アナログスイカにチャージ")
      {
        var nyuukin=sheet.getRange(i,2).getValue();
        var analog=sheet.getRange(11,9).getValue();
        var addanalog=nyuukin+analog;
        sheet.getRange(11,9).setValue(addanalog);
      }
    }
  
}*/
