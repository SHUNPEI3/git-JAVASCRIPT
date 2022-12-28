let user_hand;

while(user_hand !== ("グー"||"チョキ"||"パー")){
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
  if(user_hand !== ("グー"||"チョキ"||"パー")){
    alert("グー・チョキ・パーのいずれかを入力してください")
  }
}


let js_hand = get_js_hand();

let result = get_result(user_hand,js_hand);


document.write("あなたの選んだ手は"+user_hand+"です\nJSが選んだ手は"+js_hand+"です\n結果は"+result+"です");



function get_js_hand() {
  let js_hand_num = Math.floor( Math.random() * 3 );
  let js_hand;

  if(js_hand_num===0){
    js_hand = "グー";
  }else if(js_hand_num===1){
    js_hand = "チョキ";
  }else{
    js_hand = "パー";
  };

 return js_hand
}


function get_result(user_hand,js_hand){
  let result;

if (user_hand ==="チョキ" ){
  if (js_hand === "チョキ"){
    result = "あいこ"
  }else if(js_hand === "グー"){
    result = "JSの勝ち"
  }else if(js_hand === "パー"){
    result = "あなたの勝ち"
  }
}else if (user_hand ==="パー"){
  if (js_hand === "チョキ"){
    result = "JSの勝ち"
  }else if(js_hand === "グー"){
    result = "あなたの勝ち"
  }else if(js_hand === "パー"){
    result = "あいこ"
  }
}else if (user_hand ==="グー"){
  if (js_hand === "チョキ"){
    result = "あなたの勝ち"
  }else if(js_hand === "グー"){
    result = "あいこ"
  }else if(js_hand === "パー"){
    result = "JSの勝ち"
  }
};

 return result
}

