$(document).ready(function(){
	alert("hola");
});


function listar(){
	$.get("http://localhost:3030/api/persona/all",function(data){
		//let x = JSON.stringify(data);
		for(let i=0;i<data.length;i++){
			$("#datos").append("<option>"+data[i].title+"</optiop>");
		}

	});
}