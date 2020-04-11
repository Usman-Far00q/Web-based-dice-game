var scores = [0,0];
var round_score = 0;
var active_player = 0; 
var dice;
document.querySelector(".dice").style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click',function(){
	dice = Math.floor((Math.random() * 6) +1);  /*generate random function */
	var pic = 'dice' + dice + '.png';
	pic = "url('"+ pic + "')";
	document.querySelector('.dice').style.background =pic;
	document.querySelector('.dice').style.display = "block";
	if(dice !==1)
	{
		document.querySelector('.dice').style.display = 'block';
		round_score=dice+round_score;
		document.querySelector('.player'+(active_player+1)+'Score').textContent = round_score;
	}
	else{
		round_score = 0;
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player'+(active_player+1)+'Score').textContent = 0;
		active_player ===0?active_player=1:active_player=0;
		document.querySelector('.player0').classList.toggle('active');
		document.querySelector('.player1').classList.toggle('active');
	}
});
document.querySelector('.btn-hold').addEventListener('click',function(){
		scores[active_player] += round_score;
		document.querySelector('#player'+active_player+'GlobalScore').textContent = scores[active_player];
		document.querySelector('.player0').classList.toggle('active');
		document.querySelector('.player1').classList.toggle('active');
		document.querySelector('.player'+(active_player+1)+'Score').textContent = 0;
		round_score = 0;
		if(scores[active_player] >=100)
		{
			document.getElementById('name' + active_player).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
		} 
		active_player ===0?active_player=1:active_player=0;

	});
