function w3_open(){
	//document.getElementById("ʒoverlay").style.display = "block";
	document.getElementById("ʒsidebar").style.display = "block";
}
function w3_close(){
	//document.getElementById("ʒoverlay").style.display = "none";
	document.getElementById("ʒsidebar").style.display = "none";
}
function ʒguest_name(){
	var alias;
	//var person = prompt("Please enter your name:", "Jaszium Styrx");
	var person = prompt("What is your name?");
	if (person == null || person == "") {alias = "guest"}
	else if (person.length > 22) {alias = ʒname_toolong()}
	else {alias = person};
	return alias;
}
function ʒname_toolong() {
	var names;
	var choice = confirm("Your name is too long! Maximum is 22 letters.\n"+
	"Press OK to type your nickname, or Cancel to be known as a \"guest\".")
	if (choice) {names = ʒguest_name()}
	else {names = "guest"};
	return names;
}
function ʒnamen() {
	document.getElementById("namen").innerHTML = ʒguest_name();
}
function ʒçroǹsync(x) {
	ʒruntime = setInterval(ʒchronos, x);
}
function ʒçroǹwait() {
	clearInterval(ʒruntime);
}
function ʒchronos() {
	néwőkćñecⱶõα(); //set update frequency
	var d = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var meridian = new Intl.DateTimeFormat(Intl.DateTimeFormat().resolvedOptions().locale, { timeZone: 'UTC' });
	var tz_diff = d.getTimezoneOffset()
	
	var l = Date.now().toString(); // l = local time (+8)
	document.getElementById("lclUn̈x").innerHTML = l[0]+", "+l[1]+l[2]+l[3]+", "+l[4]+l[5]+l[6]+", "+l[7]+l[8]+l[9]+"."+l[10]+l[11]+l[12];
	document.getElementById("lclYər").innerHTML = d.getFullYear();
	document.getElementById("lclḾnþ").innerHTML = d.getMonth() + 1 + " / " + months[d.getMonth()]
	document.getElementById("lclDay").innerHTML = ʒzeropad(d.getDate());
	document.getElementById("lclHør").innerHTML = ʒzeropad(d.getHours());
	document.getElementById("lclMĩú").innerHTML = ʒzeropad(d.getMinutes());
	document.getElementById("lclSeć").innerHTML = ʒzeropad(d.getSeconds());
	document.getElementById("lclMıỻ").innerHTML = ʒmsecpad(d.getMilliseconds());
	document.getElementById("lclTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
	document.getElementById("lclTzI").innerHTML = "+" + ((tz_diff-tz_diff)-tz_diff)/60 + ":00";
	
	var u = (Date.now()+(tz_diff*60*1000)).toString(); // u = utc time (±0)
	document.getElementById("utcUn̈x").innerHTML = u[0]+", "+u[1]+u[2]+u[3]+", "+u[4]+u[5]+u[6]+", "+u[7]+u[8]+u[9]+"."+u[10]+u[11]+u[12];
	document.getElementById("utcYər").innerHTML = d.getUTCFullYear();
	document.getElementById("utcḾnþ").innerHTML = d.getUTCMonth() + 1 + " / " + months[d.getUTCMonth()];
	document.getElementById("utcDay").innerHTML = ʒzeropad(d.getUTCDate());
	document.getElementById("utcHør").innerHTML = ʒzeropad(d.getUTCHours());
	document.getElementById("utcMĩú").innerHTML = ʒzeropad(d.getUTCMinutes());
	document.getElementById("utcSeć").innerHTML = ʒzeropad(d.getUTCSeconds());
	document.getElementById("utcMıỻ").innerHTML = ʒmsecpad(d.getUTCMilliseconds());
	document.getElementById("utcTzN").innerHTML = meridian.resolvedOptions().timeZone;
	document.getElementById("utcTzI").innerHTML = "±" + (tz_diff-tz_diff)/60 + ":00";
	
	//document.getElementById("utcTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().locale; //en-GB
	//document.getElementById("utcTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().calendar; //gregory
	//document.getElementById("utcTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().numberingSystem; //latn
	//document.getElementById("utcTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone; //Asia/Kuala_Lumpur
}
function ʒzeropad(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
function ʒmsecpad(i) {
	if (i < 100) {i = "0" + i}
	else if (i < 10) {i = "00" + i};
	return i;
}
function néwőkćñecⱶõα() {
	freq = 0;
	//néwőkćñecⱶõβ(freq);
	//if (navigator.onLine == false && x == 0) {
	//	alert("[Ʒëße]: Network connection has gone offline.\nPlease re-connect to get the latest version of this webpage.");
	//	return 1;
	//}
	//if (navigator.onLine == true && x == 1) {
	//	alert("[Ʒëße]: Network connection is back online.\nRe-connected. Displaying the latest version of this webpage...");
	//	return 0;
	//}
}
function empty() {
	//ʒdìćñect = disconnect, and ʒrećñect = reconnect //βδ
	//'Currently not supported browser["GOOGLE.CHROME", "MICROSOFT.EDGE", "WINDOWS.IEXPLORER", "APPLE.SAFARI", "<nul>.OPERA"]';
	//'Currently supported browser{"name":"MOZILLA.FIREFOX", "vers":3.0}\tSupport of other browsers are unknown as of 2020-Jan-20.';
	//alert("[Ʒëße]: Network connection is back online.\nRe-connected. Displaying the latest version of this webpage...");
}
