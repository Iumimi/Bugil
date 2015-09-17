function antiblock(){
if ($(".ads").height()=="0"){

$("body").append('<div id="ad-notif"><div id="ad-message"><h2>Anda menggunakan AdBlock???</h2><h3>Harap Disable/Matikan AdBlock Anda sebelum melanjutkan kemudian refresh browser Anda.</h3></div></div>');
}
}
$(window).bind('load', function() {
setTimeout(antiblock, 1000);
});
