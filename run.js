// 当用户点击插件图标后，会运行这里的代码。

$(function(){

$('.u-edu-h5player-popmenu_item.j-item').trigger("click");
var str = document.querySelectorAll('p.j-content')[0].innerText;
var regex = /http.*?\.mp4/;
var n = str.match(regex);
$('.u-edu-h5player-log').removeClass('z-show');
window.confirm("即将跳往新窗口点击右下角下载即可");
window.open(n[0], '_blank');

})

//['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4'] + [])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null, "118H97i114a32a115G116W114j32p61q32D36s40a39A100n105Q118e32e112w46Z106O45D99D111m110X116G101U110u116C39t41W46q116L101e120T116Q67Z111J110s116H101Y110k116z10H118j97w114x32b114w101Z103a101N120m32R61f32U47l104a116H116A112h46Y42F63E92t46D109K112c52C47q10d118t97A114w32u110y32f61c32t115q116U114C46Z109Y97M116N99J104R40i114Q101m103L101N120C41B10X119r105i110g100I111a119g46c111S112f101j110L40H110n91n48B93x41" ['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');