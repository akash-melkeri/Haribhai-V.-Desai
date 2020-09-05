var FLAG = [0,0];
var button = document.getElementsByTagName("button");
function loadPage(index){
	var active=FLAG[0];
	if(active != index){
		var bgi=0.0;
		var fader = setInterval(bgfadein,10);
		function bgfadein(){
			bgi+=0.1;
			if(bgi<1){
				button[index].style.background = "rgba(230,230,230,"+bgi+")";
				button[index].style.color = "rgba(30,30,30,"+bgi+")";
				button[index].style.boxShadow = "0 0 5px rgba(255,255,255,"+bgi+")";
				button[active].style.background = "rgba(230,230,230,"+(1.0-bgi)+")";
				button[active].style.color = "rgba(255,255,255,"+(bgi)+")";
				button[active].style.boxShadow = "0 0 5px rgba(255,255,255,"+(1.0-bgi)+")";
			}else{
				button[index].style.fontWeight ="bold";
				button[active].style.fontWeight = "normal";
				clearInterval(fader);
			}
		}
	}
	FLAG[0] = index;
}