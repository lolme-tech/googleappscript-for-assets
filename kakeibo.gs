function getFormValue(e) {
  var sheet=SpreadsheetApp.getActiveSheet();
  //0=タイムスタンプ1=入金2=決済手段3=使った金額5=入金の種類
  var kessai = e.values[2]
  var outputmoney = e.values[3]
  var variaty = e.values[5]
  var inputmoney = e.values[1]
  outputmoney=Number(outputmoney);
  inputmoney=Number(inputmoney);
  //受け取った値の配列内確認用コード
  /*sheet.getRange(22,9).setValue(e.values[5]);
  console.log(e.values);*/
  if(kessai==="現金")
      {
        //使っていいお金
        var kessaimoney=sheet.getRange(9,10).getValue();
        kessaimoney=kessaimoney-outputmoney;
        sheet.getRange(9,10).setValue(kessaimoney);
      }
  if(kessai==="クレジットカード")
      {
        var credit=sheet.getRange(7,9).getValue();
        credit=credit+outputmoney;
        //クレジットカードセルに使った金額を足したものをセット
        sheet.getRange(7,9).setValue(credit);
        //使っていいお金
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-credit;
        //使っていいお金にクレジットを引いた額をセット
        sheet.getRange(9,10).setValue(currentmoney);
      }
  if(kessai==="モバイルスイカ")
    {
      //モバイルスイカの残高
      var mobilemoney=sheet.getRange(11,8).getValue();
      mobilemoney=mobilemoney-outputmoney;
      sheet.getRange(11,8).setValue(mobilemoney);
    }
  if(kessai==="アナログスイカ")
    {
      //アナログスイカの残高
      var analogmoney=sheet.getRange(11,9).getValue();
      analogmoney=analogmoney-outputmoney;
      sheet.getRange(11,9).setValue(analogmoney);
    }  
  if(kessai==="スタバカード")
    {
      //スターバックスカードのセル
      var starback=sheet.getRange(7,10).getValue();
      starback=starback+outputmoney;
      //出金した金額とスタバカードの金額を足したものをスタバカードセルにセット
      sheet.getRange(7,10).setValue(starback);
      //使っていいお金セル
      var currentmoney=sheet.getRange(9,10).getValue();
      currentmoney=currentmoney-outputmoney;
      //スタバカードに入金した分を使っていいお金から差し引く
      sheet.getRange(9,10).setValue(starback);
    }
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
        sheet.getRange(9,10).setValue(currentmoney);
      }
  if(variaty==="使ってはいけないお金(奨学金)")
      {
        //奨学金
        var currentmoney=sheet.getRange(9,9).getValue();
        //銀行のお金
        var bankmoney=sheet.getRange(9,8).getValue();
        
        currentmoney=currentmoney+inputmoney;
        //入金された奨学金を奨学金に加算
        sheet.getRange(9,9).setValue(currentmoney);
        //使っていいお金
        var former=sheet.getRange(9,10).getValue();
        //銀行のお金に奨学金のお金を加算
        bankmoney=bankmoney+currentmoney;
        sheet.getRange(9,8).setValue(bankmoney);
        //使っていいお金から奨学金を減算
        former=former-inputmoney;
        //減算された金額を使っていいお金に格納
        sheet.getRange(9,10).setValue(former);
      }
  if(variaty==="モバイルスイカにチャージ")
      {
        //モバイルスイカ
        var mobile=sheet.getRange(11,8).getValue();
        var addmobile=outputmoney+mobile;
        sheet.getRange(11,8).setValue(addmobile);
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-outputmoney;
        sheet.getRange(9,10).setValue(currentmoney);
      }
  if(variaty==="アナログスイカにチャージ")
      {
        //アナログスイカ
        var analog=sheet.getRange(11,9).getValue();
        var addanalog=outputmoney+analog;
        sheet.getRange(11,9).setValue(addanalog);
        var currentmoney=sheet.getRange(9,10).getValue();
        currentmoney=currentmoney-outputmoney;
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
