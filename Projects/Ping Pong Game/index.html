<!DOCTYPE html>
<html lang="en">
	
<head>
	<meta charset="UTF-8">
	<meta name ="viewport" content=
	"width=device-width, initial-scale=1.0">

	<title>PONG GAME</title>

	<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		height: 100vh;
		width: 100vw;
		background-image: linear-gradient(to top, #ffda77, #ffa45b);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.board {
		height: 85vh;
		width: 80vw;
		background-image: linear-gradient(to right, #5c6e91, #839b97);
		border-radius: 14px;
	}

	.ball {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		position: fixed;
		top: calc(50% - 15px);
		left: calc(50% - 15px);
	}

	.ball_effect {
		height: 100%;
		width: 100%;
		border-radius: 100px;
		animation: spinBall 0.1s linear infinite;
		box-shadow: inset 0 0 18px #fff, inset 6px 0 18px violet,
		inset -6px 0 18px #0ff, inset 6px 0 30px violet,
		inset -6px 0 30px #0ff, 0 0 18px #fff,
		-4px 0 18px violet, 4px 0 18px #0ff;
	}

	@keyframes spinBall {
		100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
		}
	}

	.paddle {
		height: 100px;
		width: 18px;
		border-radius: 50%;
		position: fixed;
	}

	.paddle_1 {
		top: calc(7.5vh + 55px);
		left: calc(10vw + 30px);
		box-shadow: inset 0 0 18px #fff,
		inset -6px 0 18px #f3bad6,
		inset 6px 0 18px #0ff, inset -6px 0 30px #f3bad6,
		inset 6px 0 30px #0ff, 0 0 18px #fff,
		4px 0 18px #f3bad6, -4px 0 18px #0ff;
	}

	.paddle_2 {
		top: calc(85vh + 7.5vh - 100px - 55px);
		right: calc(10vw + 30px);
		box-shadow: inset 0 0 18px #fff,
		inset 6px 0 18px #f3bad6,
		inset -6px 0 18px #0ff, inset 6px 0 30px #f3bad6,
		inset -6px 0 30px #0ff,
		0 0 18px #fff, -4px 0 18px #f3bad6, 4px 0 18px #0ff;
	}

	.player_1_score {
		height: 50px;
		width: 50px;
		color: chartreuse;
		position: fixed;
		left: 30vw;
		margin-top: 30px;
	}

	.player_2_score {
		height: 50px;
		width: 50px;
		color: chartreuse;
		position: fixed;
		left: 70vw;
		margin-top: 30px;
	}

	.message {
		position: fixed;
		/* color: #48426d; */
		height: 10vh;
		width: 30vw;
		color: #c9cbff;
		left: 38vw;
		margin: 30px auto auto auto;
	}
	</style>
</head>
	
<body>
<div class="board">
	<div class='ball'>
		<div class="ball_effect"></div>
	</div>
	<div class="paddle_1 paddle"></div>
	<div class="paddle_2 paddle"></div>
	<h1 class = "player_1_score">0</h1>
	<h1 class="player_2_score">0</h1>
	<h1 class="message">
		Press Enter to Play Pong
	</h1>
</div>
<script>
	let gameState = 'start';
	let paddle_1 = document.querySelector('.paddle_1');
	let paddle_2 = document.querySelector('.paddle_2');
	let board = document.querySelector('.board');
	let initial_ball = document.querySelector('.ball');
	let ball = document.querySelector('.ball');
	let score_1 = document.querySelector('.player_1_score');
	let score_2 = document.querySelector('.player_2_score');
	let message = document.querySelector('.message');
	let paddle_1_coord = paddle_1.getBoundingClientRect();
	let paddle_2_coord = paddle_2.getBoundingClientRect();
	let initial_ball_coord = ball.getBoundingClientRect();
	let ball_coord = initial_ball_coord;
	let board_coord = board.getBoundingClientRect();
	let paddle_common =
		document.querySelector('.paddle').getBoundingClientRect();
	let dx = Math.floor(Math.random() * 4) + 3;
	let dy = Math.floor(Math.random() * 4) + 3;
	let dxd = Math.floor(Math.random() * 2);
	let dyd = Math.floor(Math.random() * 2);

	document.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		gameState = gameState == 'start' ? 'play' : 'start';
		if (gameState == 'play') {
		message.innerHTML = 'Game Started';
		message.style.left = 42 + 'vw';
		requestAnimationFrame(() => {
			dx = Math.floor(Math.random() * 4) + 3;
			dy = Math.floor(Math.random() * 4) + 3;
			dxd = Math.floor(Math.random() * 2);
			dyd = Math.floor(Math.random() * 2);
			moveBall(dx, dy, dxd, dyd);
		});
		}
	}
	if (gameState == 'play') {
		if (e.key == 'w') {
		paddle_1.style.top =
			Math.max(
			board_coord.top,
			paddle_1_coord.top - window.innerHeight * 0.06
			) + 'px';
		paddle_1_coord = paddle_1.getBoundingClientRect();
		}
		if (e.key == 's') {
		paddle_1.style.top =
			Math.min(
			board_coord.bottom - paddle_common.height,
			paddle_1_coord.top + window.innerHeight * 0.06
			) + 'px';
		paddle_1_coord = paddle_1.getBoundingClientRect();
		}

		if (e.key == 'ArrowUp') {
		paddle_2.style.top =
			Math.max(
			board_coord.top,
			paddle_2_coord.top - window.innerHeight * 0.1
			) + 'px';
		paddle_2_coord = paddle_2.getBoundingClientRect();
		}
		if (e.key == 'ArrowDown') {
		paddle_2.style.top =
			Math.min(
			board_coord.bottom - paddle_common.height,
			paddle_2_coord.top + window.innerHeight * 0.1
			) + 'px';
		paddle_2_coord = paddle_2.getBoundingClientRect();
		}
	}
	});

	function moveBall(dx, dy, dxd, dyd) {
	if (ball_coord.top <= board_coord.top) {
		dyd = 1;
	}
	if (ball_coord.bottom >= board_coord.bottom) {
		dyd = 0;
	}
	if (
		ball_coord.left <= paddle_1_coord.right &&
		ball_coord.top >= paddle_1_coord.top &&
		ball_coord.bottom <= paddle_1_coord.bottom
	) {
		dxd = 1;
		dx = Math.floor(Math.random() * 4) + 3;
		dy = Math.floor(Math.random() * 4) + 3;
	}
	if (
		ball_coord.right >= paddle_2_coord.left &&
		ball_coord.top >= paddle_2_coord.top &&
		ball_coord.bottom <= paddle_2_coord.bottom
	) {
		dxd = 0;
		dx = Math.floor(Math.random() * 4) + 3;
		dy = Math.floor(Math.random() * 4) + 3;
	}
	if (
		ball_coord.left <= board_coord.left ||
		ball_coord.right >= board_coord.right
	) {
		if (ball_coord.left <= board_coord.left) {
		score_2.innerHTML = +score_2.innerHTML + 1;
		} else {
		score_1.innerHTML = +score_1.innerHTML + 1;
		}
		gameState = 'start';

		ball_coord = initial_ball_coord;
		ball.style = initial_ball.style;
		message.innerHTML = 'Press Enter to Play Pong';
		message.style.left = 38 + 'vw';
		return;
	}
	ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
	ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
	ball_coord = ball.getBoundingClientRect();
	requestAnimationFrame(() => {
		moveBall(dx, dy, dxd, dyd);
	});
	}
</script>
</body>
	
</html>
