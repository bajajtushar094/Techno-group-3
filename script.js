var team = new Object();
team.deductive = 1900;
team.logic = 1544;
team.obs = 0;
team.te = 1484.5;
team.visual = 1785.5;
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
document.getElementById("rank").innerHTML=team.rank;

function deductive(){
if(team.rank<=50)
{
	var display ="Congratulations!!\nWelcome to IIT Guwahati!";
   document.getElementById("message").innerHTML= display;
}
else
{
	document.getElementById("message").innerHTML="You fought well! \n But could not make it to IIT Guwahati."
}
if((team.deductive/2000)>=0.7)
{
	
	var x=document.createElement("img");
	x.src="Goldmedal.jpeg";
	document.body.appendChild(x);
}
else if((team.deductive/2000)>=0.4)
{
	var x=document.createElement("img");
	x.src="Silvermedal.jpeg";
	document.body.appendChild(x);
}
else
{
	var x=document.createElement("img");
	x.src="Bronzemedal.jpeg";
	document.body.appendChild(x);

}
}


