window.onload = function(){
	var newsl = document.getElementById("newsl");
	var div = newl.getElementsByTagName("div");
	var news_ul = document.getElementById("news_ul");
	var li = news_ul.getElementsByTagName("li");
	for (var i = 0; i < li.length; i ++) {
		li[i].index=i;
		li[i].oclick = function(){
			for (var j = 0; j < li.length;j++) 
			{
				li[j].className = "";
				div[j].className = "hide";
			}
				this.className = "on";
				div[this.index].className = "newslist";
			}
		}
	};