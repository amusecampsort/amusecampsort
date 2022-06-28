// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 1;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 0;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 2;
var ary_TitleData = [
  "Girls",
  "Boys"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Akimaru Kaede",      [1,0,0,0,0,0], "girls/photo-Akimaru.jpg"],
  [1, "Arisaka Kohana",     [1,0,0,0,0,0], "girls/photo-Arisaka.jpg"],
  [1, "Okuwa Rei",          [1,0,0,0,0,0], "girls/photo-Okuwa.jpg"],
  [1, "Oshima Miyu",        [1,0,0,0,0,0], "girls/photo-Oshima.jpg"],
  [1, "Koie Misaki",        [1,0,0,0,0,0], "girls/photo-Koie.jpg"],
  [1, "Satou Neo",          [1,0,0,0,0,0], "girls/photo-Satou.jpg"], 
  [1, "Suenaga Hinata",     [1,0,0,0,0,0], "girls/photo-Suenaga.jpg"],   
  [1, "Naomi Claire",       [1,0,0,0,0,0], "girls/photo-Naomi.jpg"],   
  [1, "Nakae Hono",         [1,0,0,0,0,0], "girls/photo-Nakae.jpg"],
  [1, "Namiki Ayaka",       [1,0,0,0,0,0], "girls/photo-Namiki.jpg"],
  [1, "Negishi Mika",       [1,0,0,0,0,0], "girls/photo-Negishi.jpg"],
  [1, "Nozaki Juna",        [1,0,0,0,0,0], "girls/photo-Juna.jpg"],    
  [1, "Nozaki Yume",        [1,0,0,0,0,0], "girls/photo-Yume.jpg"],  
  [1, "Hoshina Haluha",     [1,0,0,0,0,0], "girls/photo-Hoshina.jpg"],  
  [1, "Maki Kotoka",        [1,0,0,0,0,0], "girls/photo-Maki.jpg"],  
  [1, "Momoi Anna",         [1,0,0,0,0,0], "girls/photo-Momoi.jpg"],
  [1, "Yagi Miki",          [1,0,0,0,0,0], "girls/photo-Yagi.jpg"],
  [1, "Roy Liliane",        [1,0,0,0,0,0], "girls/photo-Roy.jpg"], 
  [1, "Wada Miu",           [1,0,0,0,0,0], "girls/photo-Wada.jpg"],
  [1, "Aoishi Shoei",       [0,1,0,0,0,0], "boys/photo-Aoishi.jpg"],
  [1, "Amadera Ryoga",      [0,1,0,0,0,0], "boys/photo-Amadera.jpg"],
  [1, "Eguchi Kei",         [0,1,0,0,0,0], "boys/photo-Eguchi.jpg"],
  [1, "Enomoto Tsukasa",    [0,1,0,0,0,0], "boys/photo-Enomoto.jpg"],
  [1, "Kasamatsu Motoi",    [0,1,0,0,0,0], "boys/photo-Kasamatsu.jpg"],
  [1, "Kato Anji",          [0,1,0,0,0,0], "boys/photo-Kato.jpg"],
  [1, "Kamishima Riki",     [0,1,0,0,0,0], "boys/photo-Kamishima.jpg"],
  [1, "Sawaya Kyle",        [0,1,0,0,0,0], "boys/photo-Sawaya.jpg"],
  [1, "Takase Ibuki",       [0,1,0,0,0,0], "boys/photo-Takase.jpg"],
  [1, "Tsukaki Haru",       [0,1,0,0,0,0], "boys/photo-Tsukaki.jpg"],
  [1, "Tojo Subaru",        [0,1,0,0,0,0], "boys/photo-Tojo.jpg"],
  [1, "Fujii Yu",           [0,1,0,0,0,0], "boys/photo-Fujii.jpg"],
  [1, "Matsuse Daiji",      [0,1,0,0,0,0], "boys/photo-Matsuse.jpg"],
];
