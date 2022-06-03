const hostUrl = window.location.href.split("#")[0];

function renderString(s){
	location.replace(hostUrl + "#" + s);
}

renderString("zero搬运网-全网最新最全的在线日本生肉漫画");
