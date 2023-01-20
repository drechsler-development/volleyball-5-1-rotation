<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Volleyball 5:1 Rotation</title>
	<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/css/bootstrap.min.css" integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="css/css.css">
</head>
<body>
<div id="wrapper">
	<div id="field" class="fields">
		<div id="topField">
			<div class="fields" id="topFieldBackground">
				<label for="selectSetterPos"></label> Zusteller auf:
				<select id="selectSetterPos">
					<option value="1">1</option>
					<option value="6">6</option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
				</select><span id="situationName"></span>
				<div id="z1" class="position">
					<button class="btnStep btn btn-sm btn-success" data-setterPos="1" data-situation="standard">Grund</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="1" data-situation="preServe">Vor Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="1" data-situation="afterServe">Nach Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="1" data-situation="preServeReceive">Vor Ann.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="1" data-situation="afterServeReceive">Nach Ann.</button>
				</div>
				<div id="z6" class="position" style="display: none">
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="6" data-situation="standard">Grund</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="6" data-situation="preServe">Vor Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="6" data-situation="afterServe">Nach Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="6" data-situation="preServeReceive">Vor Ann.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="6" data-situation="afterServeReceive">Nach Ann.</button>
				</div>
				<div id="z5" class="position" style="display: none">
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="5" data-situation="standard">Grund</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="5" data-situation="preServe">Vor Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="5" data-situation="afterServe">Nach Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="5" data-situation="preServeReceive">Vor Ann.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="5" data-situation="afterServeReceive">Nach Ann.</button>
				</div>
				<div id="z4" class="position" style="display: none">
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="4" data-situation="standard">Grund</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="4" data-situation="preServe">Vor Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="4" data-situation="afterServe">Nach Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="4" data-situation="preServeReceive">Vor Ann.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="4" data-situation="afterServeReceive">Nach Ann.</button>
				</div>
				<div id="z3" class="position" style="display: none">
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="3" data-situation="standard">Grund</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="3" data-situation="preServe">Vor Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="3" data-situation="afterServe">Nach Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="3" data-situation="preServeReceive">Vor Ann.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="3" data-situation="afterServeReceive">Nach Ann.</button>
				</div>
				<div id="z2" class="position" style="display: none">
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="2" data-situation="standard">Grund</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="2" data-situation="preServe">Vor Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="2" data-situation="afterServe">Nach Auf.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="2" data-situation="preServeReceive">Vor Ann.</button>
					<button class="btnStep btn btn-sm btn-outline-success" data-setterPos="2" data-situation="afterServeReceive">Nach Ann.</button>
				</div>
				<br>Spieler:
				<button class="btn-sm btn btn-info btnTogglePlayerInfo" data-value="name">Zeige Namen</button>
				<button class="btn-sm btn btn-outline-info btnTogglePlayerInfo" data-value="number">Zeige Positionen</button>
				<button class="btn-sm btn btn-outline-info btnTogglePlayerInfo" data-value="type">Zeige Typen</button>
				<?php
				if(!empty($_GET['admin'])){
				?>
					<button id="btnClearArray" class="btn-sm btn btn-info">Clear Array</button>
					<button id="btnAddToArray" class="btn-sm btn btn-info">Add to Array</button>
				<?php
				}
				?>
			</div>
			<div class="fields container" id="topFieldAttackZone">
				<form>
					<div class="row">
						<div class="col">
							<label class="col-3" for="nameL">L:</label><input type="text" class="form-control-sm names col-9" id="nameL" data-target="libero" value="Felix">
							<label class="col-3" for="nameM1">M1:</label><input type="text" class="form-control-sm names col-9" id="nameM1" data-target="mittleblock1" value="Fabian">
							<label class="col-3" for="nameM2">M2:</label><input type="text" class="form-control-sm names col-9" id="nameM2" data-target="mittleblock2" value="Gunnar">
						</div>
						<div class="col">
							<label class="col-3" for="nameD">Dia:</label><input type="text" class="form-control-sm names col-9" id="nameD" data-target="diagonal" value="Alex">
							<label class="col-3" for="nameA1">A1:</label><input type="text" class="form-control-sm names col-9" id="nameA1" data-target="attacker1" value="Chris">
							<label class="col-3" for="nameA2">A2:</label><input type="text" class="form-control-sm names col-9" id="nameA2" data-target="attacker2" value="Raimo">
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<label class="col-3" for="nameZ">Z:</label><input type="text" class="form-control-sm names col-9" id="nameZ" data-target="setter" value="Ronny">
						</div>
					</div>
				</form>
			</div>
		</div>

		<div class="fields" id="net">### -- NETZ -- ### -- NETZ -- ###</div>
		<div id="bottomField">
			<!-- DO NOT CHANGE ORDER OF PLAYERS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
			<div style="z-index: 100;" id="setter" class="player" data-pos="1" data-name="Zuspieler">Ronny</div>
			<div style="z-index: 200;" id="diagonal" class="player" data-pos="4" data-name="Diagonal">Alex</div>
			<div style="z-index: 300;" id="mittleblock1" class="player" data-pos="3" data-name="Mitte1">Fabian</div>
			<div style="z-index: 400;" id="mittleblock2" class="player" data-pos="6" data-name="Mitte2">Gunnar</div>
			<div style="z-index: 500;" id="attacker1" class="player" data-pos="2" data-name="Außen1">Chris</div>
			<div style="z-index: 600;" id="attacker2" class="player" data-pos="5" data-name="Außen2">Raimo</div>
			<div style="z-index: 700;" id="libero" class="player" data-pos="6" data-name="Libero">Felix</div>
			<!-- DO NOT CHANGE ORDER OF PLAYERS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
			<!--<div class="fields" id="bottomFieldAttackZone" style="position:fixed;"></div>
			<div class="fields" id="bottomFieldBackground" style="position:fixed;"></div>-->
			<div id="playerArea"></div>
		</div>
	</div>
</div>
<script src="js/script.js"></script>
</body>
</html>
