var team = new Object();
team.deductive = 1867;
team.logic = 1544;
team.obs = 1819;
team.te = 1100;
team.visual = 1300;
team.noob = 1;
team.rookie = 3;
team.expert = 5;
team.master = 3;
team.warrior = 2;
team.noob_at = 2;
team.rookie_at = 3;
team.expert_at = 5;
team.master_at = 4;
team.warrior_at = 2;
team.rank = 1;
document.getElementById("rank").innerHTML= "Your team has secured <br/><br/>" +"AIR" +team.rank;


if(team.rank<=50)
{
	var display ="Congratulations!! <br/> Welcome to IIT Guwahati!";
   document.getElementById("message").innerHTML= display;
}
else
{
	document.getElementById("message").innerHTML="You fought well! <br/> But could not make it to IIT Guwahati."
}
function deductive(){
if((team.deductive/2000)>=0.85)
{
	
	var x=document.createElement("img");
	x.src="Goldmedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	var screen="Your won Gold Medal for deductive reasoning.Your scored"+team.deductive+"out of 2000."
	x.onmouseover= screen;
	document.body.appendChild(x);
}
else if((team.deductive/2000)>=0.4)
{
	var x=document.createElement("img");
	x.src="Silvermedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);
}
else if(team.deductive/2000>=0.5)
{
	var x=document.createElement("img");
	x.src="Bronzemedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);

}
}
function logic(){
if((team.logic/2000)>=0.85)
{
	var x=document.createElement("img");
	x.src="Goldmedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);
}
else if((team.logic/2000)>=0.7)
{
	var x=document.createElement("img");
	x.src="Silvermedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.padding=10;
	document.body.appendChild(x);
}
else if(team.logic/2000>=0.5)
{
	var x=document.createElement("img");
	x.src="Bronzemedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);

}
}
function obs(){
if((team.obs/2000)>=0.85)
{
	
	var x=document.createElement("img");
	x.src="Goldmedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);
}
else if((team.obs/2000)>=0.7)
{
	var x=document.createElement("img");
	x.src="Silvermedal.jpeg";
	x.align="left";
	x.border=2;
	x.width= 100;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);
}
else if(team.obs/2000>=0.5)
{
	var x=document.createElement("img");
	x.src="Bronzemedal.jpeg";
	x.align="left";
	x.border=2;
	x.width= 100;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);

}
}
function te(){
if((team.te/2000)>=0.85)
{
	
	var x=document.createElement("img");
	x.src="Goldmedal.jpeg";
	x.align="left";
	x.border=2;
	x.width= 100;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);

}
else if((team.te/2000)>=0.7)
{
	var x=document.createElement("img");
	x.src="Silvermedal.jpeg";
	x.width= 100;
	x.align="left";
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);
}
else if(team.te/2000>=0.5)
{
	var x=document.createElement("img");
	x.src="Bronzemedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);

}
}
function visual(){
if((team.visual/2000)>=0.85)
{
	
	var x=document.createElement("img");
	x.src="Goldmedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);
}
else if((team.visual/2000)>=0.7)
{
	var x=document.createElement("img");
	x.src="Silvermedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	document.body.appendChild(x);
}
else if(team.visual/2000>=0.5)
{
	var x=document.createElement("img");
	x.src="Bronzemedal.jpeg";
	x.align="left";
	x.width= 100;
	x.border=2;
	x.margin= 5;
	x.padding=10;
	document.body.appendChild(x);

}
}



