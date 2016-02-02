function carInfo(state,time){//班线名称
	var carinfoDom = "<div class='tips'><h2>"+state+"</h2><h1>班线名称</h1><h3>发车时间  "+time+"</h3></div>";
	return carinfoDom;
}

function stateLine(statearr,cityarr){//班线状态轴
	var state = ["正常","延时","预计延时"];
	var stateClass = ["point_blue","point_red","point_white"];
	var lineDom = "<div class='line'><div class='lines'></div><ul>";
	for(var i=0;i<statearr.length;i++){
		lineDom += "<li><p>"+state[statearr[i]-1]+"</p><div class='point "+stateClass[statearr[i]-1]+"'><span></span></div><p>"+cityarr[i]+"</p></li>";
	}
	lineDom += "</ul></div>";
	return lineDom;
}
