$(function() {

	var path = document.location.pathname
	var res = path.split("/");
	//alert(res[res.length - 1]);
	var curr=parseInt(res[res.length - 1]);
	$
			.get(
					"getquestion/" + res[res.length - 1],
					function(data, status) {
					//	alert("Data: " + data + "\nStatus: " + status);
						var jData=JSON.parse(data);
						var body = '<div class="modal-dialog">'
								+ '<div class="modal-content">'
								+ '<div class="modal-header">'
								+ '  <h2><span class="label label-warning" id="qid">'+curr+'</span> '+jData.quest+'</h2>'
								+ '</div>'
								+ '<div class="modal-body">'
								+ '   <div class="col-xs-3 col-xs-offset-5">'
								+ '     <div id="loadbar" style="display: none;">'
								+ '       <div class="blockG" id="rotateG_01"></div>'
								+ '      <div class="blockG" id="rotateG_02"></div>'
								+ '     <div class="blockG" id="rotateG_03"></div>'
								+ '    <div class="blockG" id="rotateG_04"></div>'
								+ '   <div class="blockG" id="rotateG_05"></div>'
								+ '  <div class="blockG" id="rotateG_06"></div>'
								+ ' <div class="blockG" id="rotateG_07"></div>'
								+ ' <div class="blockG" id="rotateG_08"></div>'
								+ '</div>'
								+ '</div>'
								+'<div class="quiz" id="quiz" data-toggle="buttons">';
						var count=1;
						jData.options.forEach(function(item){
						    //console.log(item.name + ' ' + item.id);
							body+= '<label class="element-animation'+count+' btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="'+item.option+'">'+item.option+'</label>'
							count+=1;
						});
								
								
								//+ '<label class="element-animation2 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2">2 Two</label>'
								//+ '<label class="element-animation3 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3">3 Three</label>'
								//+ '<label class="element-animation4 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4">4 Four</label>'
								body+= '</div>' + '</div>'
								+ '<div class="modal-footer text-muted">'
								+ '<ul class="pager">'
								+ '<li class="previous"><a href="'+(curr-1)+'">Previous</a></li>'
								+ '<li class="next"><a href="'+(curr+1)+'">Next</a></li>'
								+ '</ul>'
								+ ' <span id="answer"></span>'
								+ '</div>';
						//alert(body);
						document.getElementById("main-body").innerHTML =body;
								//$( "main-body" )
								  //.append( "Hello");
					});
	

});