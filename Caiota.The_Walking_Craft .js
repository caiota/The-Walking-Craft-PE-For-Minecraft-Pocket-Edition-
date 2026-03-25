
var casag=1;
var versao="1.40"
var versaopack="2.8";
//2.9
var anticrash=0;
var lastGame=null;

var isZoom=0;
var tobg=["§fOh, Obrigado!","§fValeu!","§fIsto vai ser muito útil","§fhmmm :)","§fMuito Obrigado!!","§fOh *-*","Aonde achou isso?",":3", ":D","§fOh, Obrigado!","§fValeu!","§fIsto vai ser muito útil","§fhmmm :)","§fMuito Obrigado!!","§fOh *-*","Aonde achou isso?",":3", ":D","§fOh, Obrigado!","§fValeu!","§fIsto vai ser muito útil","§fhmmm :)","§fMuito Obrigado!!","§fOh *-*","Aonde achou isso?",":3", ":D","§fOh, Obrigado!","§fValeu!","§fIsto vai ser muito útil","§fhmmm :)","§fMuito Obrigado!!","§fOh *-*","Aonde achou isso?",":3", ":D","§fOh, Obrigado!","§fValeu!","§fIsto vai ser muito útil","§fhmmm :)","§fMuito Obrigado!!","§fOh *-*","Aonde achou isso?",":3", ":D"];
var nmsg=["§6Oque eu posso fazer com isso?"];
var up=0;


//ARMAS 
//CrossBow
var bestaArrow;
var bestaGui;
var shoot;
var isComArma=0;
var removerArma=20;
var isReload=0;
var reloadTime=7;
function Tiro() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{ 
if(isComArma==0) {
isComArma=1;
			bestaGui = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			
			 shoot = new android.widget.Button(ctx);
shoot.setTextColor(android.graphics.Color.GREEN);
			shoot.setText("Atirar");
shoot.setTextSize("20");
if(isReload==0) {
shoot.setTextColor(android.graphics.Color.GREEN);
shoot.setText("Atirar");
shoot.setTextSize("20");
}else{
if(bolsa(262,0)) {
shoot.setTextColor(android.graphics.Color.RED);
shoot.setTextSize("12");
shoot.setText("Recarregando");
}else{
if(Level.getGameMode()==0) {
shoot.setTextColor(android.graphics.Color.RED);
shoot.setText("Sem Flechas!");
shoot.setTextSize("14");
}
}
}
			shoot.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
		if (v.getText()=="Atirar"&&Player.getCarriedItem()==450&&isReload==0&&bolsa(262,0)&&Level.getGameMode()==0) {
Item.damageCarriedItem();
isReload=1;

shoot.setTextColor(android.graphics.Color.RED);
shoot.setTextSize("10");
shoot.setText("Recarregando");
						Level.playSoundEnt(Player.getEntity(),"random.bow",100,100);
addItemInventory(262,- 1,0);
var p = ((Entity.getPitch(Player.getEntity()) + 90) * Math.PI) / 180;
							var yi = ((Entity.getYaw(Player.getEntity()) + 90) * Math.PI) / 180;
							var yi = ((Entity.getYaw(Player.getEntity()) + 90) * Math.PI) / 180;
							var xx = Math.sin(p) * Math.cos(yi) * 1.2;
							var yy = Math.sin(p) * Math.sin(yi) * 1.2;
							var zz = Math.cos(p) * 1.2;
						bestaArrow=Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy,80);
setVelX(bestaArrow, 5.5 * xx);
							setVelY(bestaArrow, 6.5 * zz);
							setVelZ(bestaArrow, 5.5 * yy);
}
else {
if(Level.getGameMode()==0) {
Level.playSoundEnt(Player.getEntity(),"fire.ignite",100,100);
shoot.setTextColor(android.graphics.Color.RED);
shoot.setText("Sem Flechas!");
shoot.setTextSize("14");
if(bolsa(262,0)) {
shoot.setTextColor(android.graphics.Color.GREEN);
shoot.setTextSize("20");
shoot.setText("Atirar");
}else{
if(Level.getGameMode()==0) {
shoot.setTextColor(android.graphics.Color.RED);
shoot.setText("Sem Flechas!");
shoot.setTextSize("14");
}
}

}
}
if(Level.getGameMode()==1&&Player.getCarriedItem()==450&&isReload==0) {
isReload=1;
isComArma=1;
						Level.playSoundEnt(Player.getEntity(),"random.bow",100,100);
var p = ((Entity.getPitch(Player.getEntity()) + 90) * Math.PI) / 180;
							var yi = ((Entity.getYaw(Player.getEntity()) + 90) * Math.PI) / 180;
						var xx = Math.sin(p) * Math.cos(yi) * 1.2;
						var yy = Math.sin(p) * Math.sin(yi) * 1.2;
			var zz = Math.cos(p) * 1.2;
						bestaArrow=Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy,80);
setVelX(bestaArrow, 5.5 * xx);
							setVelY(bestaArrow, 6.5 * zz);
							setVelZ(bestaArrow, 5.5 * yy);
}
if(isComArma==1) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(bestaGui != null) {
					bestaGui.dismiss();
					bestaGui= null;
isComArma=0;
			}
			}catch(err){
				print("Erro: " + err);
			}
		}}));
	} 
					}
				
			
			});
layout.addView(shoot);
			bestaGui.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			bestaGui.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

			bestaGui.setContentView(layout);
			bestaGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 60); 
		}
} catch(err){
			print("Erro: " + err);
		
}
}}));

}
//updates
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var versionChecked=false;
var updateVerificada=0;
//Outro
var CANTIL_V=407;
var SOPA=410;
var PALITO=420;
var BATERIA=399;
var criativo=true;
var staminat=["Estamina: "];
var dmge=[ChatColor.RED+"[ !!! ]§f Você está muito machucado! Encontre uma §6Seringa com morfina!"];
var sang=[ChatColor.RED+"[ !!! ]§f Você está sangrando! Encontre uma §2Bandagem §fe pare o sangramento!"];
var bmsg=["§3The Walking Craft §6Mod Desenvolvido por §fCaiota§4Games"];
var wmsg=["Antes de Sair, digite /salvar!"];

var salvart=["salvar"];
var salvarok=["§6Jogo Salvo"];
var tabelat=["tabela"];
var msgt=["Configure a posiçao X e Y aonde a tabela vai aparecer"];
var emsg=["§6O filtro de água está sem energia! Use uma bateria nele!"];
var hmsg=["§6Fome 1 por 20 segundos"];
hpt=["Sangue"];
var sanguet=["Sangue: "];
var sedet=["Sede: "];
var msgt=["Configuraçoes da Tabela"];
var tt=["Digite §6/off §fpara remover a tabela"];

var dsede=["§6Você está passando §9sede!"];

//ItemsComDurabilidade
//- TACO COM PREGO
var TACO_ID=411;
var TACO_DMG=100;
var TACO_DANO=4.5;
Item.setMaxDamage(TACO_ID,TACO_DMG);
Player.addItemCreativeInv(TACO_ID,2);
//- BARRA DE AÇO
var PE_ID=412;
var PE_DMG=400;
var PE_DANO=5;
Item.setMaxDamage(PE_ID,PE_DMG);
Player.addItemCreativeInv(PE_ID,2);
//-TACO COM ARAME
var TA_ID=413;
var TA_DMG=102;
var TA_DANO=3.5;
Item.setMaxDamage(TA_ID,TA_DMG);
Player.addItemCreativeInv(TA_ID,2);
//- FACAO
var FACA_ID=414;
var FACA_DMG=310;
var FACA_DANO=8;
Player.addItemCreativeInv(FACA_ID,2);
Item.setMaxDamage(FACA_ID,FACA_DMG);
//-BESTA arma
var bestaDmg=90;
Item.setMaxDamage(450,bestaDmg);
//Machadinha
var machado=503;
var machadoDmg=340;
var machadoDano=8.5;
Item.setMaxDamage(503,machadoDmg);
Item.damageCarriedItem = function()
{
if(Level.getGameMode()==0) {
var maxDamage;
if(Player.getCarriedItem()==machado) {
	maxDamage=machadoDmg;
msg(Player.getCarriedItemData()+" / 340");
	
	}
if(Player.getCarriedItem()==FACA_ID) {
	maxDamage=FACA_DMG;
msg(Player.getCarriedItemData()+" / 310");
	
	}
	if(Player.getCarriedItem()==TACO_ID) {
	maxDamage=TACO_DMG;
msg(Player.getCarriedItemData()+" / 100");
	
	}
if(Player.getCarriedItem()==PE_ID) {
maxDamage=PE_DMG;
msg(Player.getCarriedItemData()+" / 400");
	
}
if(Player.getCarriedItem()==TA_ID) {
maxDamage=TA_DMG;
msg(Player.getCarriedItemData()+" / 102");
	
}
if(Player.getCarriedItem()==450) {
maxDamage=bestaDmg;
msg(Player.getCarriedItemData()+" / 90");
	
}
	if(Player.getCarriedItemData() < maxDamage)
		Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + 1);
	else
	{
		Level.playSoundEnt(Player.getEntity(), "random.break", 100, 30);
		if(Player.getCarriedItemCount() == 1)
			Player.clearInventorySlot(Player.getSelectedSlotId());
		else
			Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
	}
}
}

function bolsa(id, data){

for(var i = 0; i < 35; i++){

var slotItem = Player.getInventorySlot(i);
var slotData = Player.getInventorySlotData(i);


if(id == slotItem && data == slotData){

return true;
break;
}
}
return false;
}
var casabt=0;
var zoomOk=0;
var zoomtick=15;
var zoomt=0;
function estatistica()
{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{
				var layoutPlayer = new android.widget.LinearLayout(ctx);
				layoutPlayer.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scrollPlayer = new android.widget.ScrollView(ctx);
				scrollPlayer.addView(layoutPlayer);
							
				var popupPlayer = new android.app.Dialog(ctx); 
				popupPlayer.setContentView(scrollPlayer);
				popupPlayer.setTitle("CraftingDead "+versao);
				
				var updatesText = new android.widget.TextView(ctx);
				updatesText.setText(new android.text.Html.fromHtml("<h1>"+"Nome: "+Player.getName(Player.getEntity())+" <br><br>"+"Humanidade: "+humanidade+"<br><br>Morreu: "+mortes+" Vezes"+"<br><br>Zombies Mortos: " + zombie+"<br><br>Sobreviveu "+dia+" Dias<br><br>=======================<br><br></h1>"));
				layoutPlayer.addView(updatesText);
var tabela=new android.widget.Button(ctx); 
tabela.setText("Configurar Tabela");
tabela.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						
						Update2();
removeGuis();
					}
				});
layoutPlayer.addView(tabela);
//+++++++++
var casa = new android.widget.Switch(ctx);
			if(casag==1) {
casa.setChecked(true);
}
if(casag==0) {
casa.setChecked(false);
}
				casa.setText("Gerar Estruturas");
				casa.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
				{
					onCheckedChanged: function()
					{
if(casag==0) {
						casag=1;
casa.setChecked(true);
print("Gerando estruturas perto de mobs");
					}
else if(casag==1){
casag=0;
casa.setChecked(false);
print("Nao vai mais gerar estruturas pelo seu mundo");
}
}
				});
				layoutPlayer.addView(casa);
				var zoom = new android.widget.Switch(ctx);
				if(zoomOk==1) {
zoom.setChecked(true);
}
if(zoomOk==0) {
zoom.setChecked(false);
}
				zoom.setText("Botao de Zoom");
				zoom.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
				{
					onCheckedChanged: function()
					{
if(zoomOk==0) {
						zoomOk=1;
zoom.setChecked(true);
print("zoom ativado");
zoomt=1;
					}
else if(zoomOk==1){
zoomOk=0;
isZoom=0;
zoom.setChecked(false);
print("zoom desativado");
ModPE.resetFov();
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGui != null) {
					simpleGui.dismiss();
					simpleGui = null;
					
			}
			}catch(err){
				print("Erro: " + err);
			}
		}}));
	} 
}
}
				});
layoutPlayer.addView(zoom);
//-------------
				var exitButton = new android.widget.Button(ctx); 
				exitButton.setText("Fechar"); 
				exitButton.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						popupPlayer.dismiss();
						
					}
				});
				layoutPlayer.addView(exitButton);
				
				
				popupPlayer.show();
			}catch(err)
			{
				print("JANELA POPUP NAO SUPORTADA EM SEU APARELHO");
				clientMessage(err);
			}
		}
	});
}

var fps=300;
var lL=new Date;
function gameping() { 
    var al = new Date;
    fps = 3 * (al - lL);
    lL = al;
}
var fpsu=false;
var fpst=1;

var energia=6100;
var mortes=0;
function saveCasa(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".casag.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(casag.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loadCasa(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
if(java.io.File(path+".casag.apk").exists()){
var file=new java.io.File(path+".casag.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
casag = parseInt(str.toString());
fos.close();
}
}
function saveStamina(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".sta.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(stamina.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loadStamina(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
if(java.io.File(path+".sta.apk").exists()){
var file=new java.io.File(path+".sta.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
stamina = parseInt(str.toString());
fos.close();
}
}

function saveDia(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".dia.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(dia.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loadDia(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
if(java.io.File(path+".dia.apk").exists()){
var file=new java.io.File(path+".dia.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
dia = parseInt(str.toString());
fos.close();
}
}

function savek(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".kil.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(mortes.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loadk(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/dat/";
if(java.io.File(path+".kil.apk").exists()){
var file=new java.io.File(path+".kil.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
mortes = parseInt(str.toString());
fos.close();
}
}
function saveen(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/filtro/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".en.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(energia.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loaden(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/filtro/";
if(java.io.File(path+".en.apk").exists()){
var file=new java.io.File(path+".en.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
energia = parseInt(str.toString());
fos.close();
}
}
function saveEst(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/estamina/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".est.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(estagio.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loadEst(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/estamina/";
if(java.io.File(path+".est.apk").exists()){
var file=new java.io.File(path+".est.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
estagio= parseInt(str.toString());
fos.close();
}
}
function datatx(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/tx/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".tx.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(tx.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 

function loadtx(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/tx/";
if(java.io.File(path+".tx.apk").exists()){
var file=new java.io.File(path+".tx.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
tx = parseInt(str.toString());
fos.close();
}
}
function dataty(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/ty/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".ty.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(ty.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadty(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/ty/";
if(java.io.File(path+".ty.apk").exists()){
var file=new java.io.File(path+".ty.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
ty = parseInt(str.toString());
fos.close();
}
}
	 function dataz(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/zombies/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".apkZombie.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(zombie.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadz(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/zombies/";
if(java.io.File(path+".apkZombie.apk").exists()){
var file=new java.io.File(path+".apkZombie.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
zombie = parseInt(str.toString());
fos.close();
}
} 
 
function dataosso(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/osso/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".apkOsso.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(perna.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadosso(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/osso/";
if(java.io.File(path+".apkOsso.apk").exists()){
var file=new java.io.File(path+".apkOsso.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
perna = parseInt(str.toString());
fos.close();
}
}
function datahumanidade(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/hum/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".apkHum.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(humanidade.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadhumanidade(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/hum/";
if(java.io.File(path+".apkHum.apk").exists()){
var file=new java.io.File(path+".apkHum.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
humanidade = parseInt(str.toString());
fos.close();
}
}
function saveSobrevivente(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/hum/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".armadura.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(armaduraObtida.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadSobrevivente(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/hum/";
if(java.io.File(path+".armadura.apk").exists()){
var file=new java.io.File(path+".armadura.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
armaduraObtida = parseInt(str.toString());
fos.close();
}
} 
function datasede(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/sede/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".apkSede.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(sede.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadsede(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/"+Level.getWorldName()+"/sede/";
if(java.io.File(path+".apkSede.apk").exists()){
var file=new java.io.File(path+".apkSede.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
sede = parseInt(str.toString());
fos.close();
}
}

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function Update() {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() { 
try {
				var layoutUpdates = new android.widget.LinearLayout(ctx);
				layoutUpdates.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scrollUpdates = new android.widget.ScrollView(ctx);
				scrollUpdates.addView(layoutUpdates);
							
				var popupUpdates =  android.app.Dialog(ctx); 
				popupUpdates.setContentView(scrollUpdates);
				popupUpdates.setTitle("Configurar Zoom");
		
				
				
				 var salvar=new android.widget.Button(ctx);
				 var reset=new android.widget.Button(ctx);
				 reset.setText("Desfazer");
				 salvar.setText("Salvar");
				 var oxt=new android.widget.TextView(ctx);
				 var oyt=new android.widget.TextView(ctx);
				 oxt.setText("Posicao X do Zoom na sua tela ");
				 oyt.setText("Posicao Y do Zoom na sua tela");
				 var zxt=new android.widget.EditText(ctx);
			 
				 var zyt=new android.widget.EditText(ctx);
			
			
				 layoutUpdates.addView(oxt);
				 layoutUpdates.addView(zxt);
				 layoutUpdates.addView(oyt);
				 layoutUpdates.addView(zyt);				 
				layoutUpdates.addView(salvar);
				layoutUpdates.addView(reset);
zxt.setText(""+zx);
zyt.setText(""+zy);
				popupUpdates.show();
				reset.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
				zxt.setText("120");
				zyt.setText("0");
				

				}
				});
				salvar.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
				zx=zxt.getText();
				zy=zyt.getText();
				datazx();
				datazy();
msg(" §5Configuraçoes foram salvas");
popupUpdates.dismiss();
		
				}
				});
} catch(err) {
clientMessage(err);
}
}
});
}
var psf=false;
var pst=100;
var psg=500;
var textview;
var ctx;
var simpleGUI;
var simpleGui;
var Gui;
var x=0;
var y=0;
var z=0 ;
var ta=-1;
function getXYZ() {
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(textview != null) {
					textview.setText("S:"+spc+"\n"+"E:"+esT+"\n"+"S:"+hpti+"\n"+"H:"+humanidade);
				}
			}
			catch(erro) {
			print(erro);
			}
		}}));
	}
	}
	var tx=1100;
var ty=500;
function Update2() {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() { 
try {
				var layoutUpdates = new android.widget.LinearLayout(ctx);
				layoutUpdates.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scrollUpdates = new android.widget.ScrollView(ctx);
				scrollUpdates.addView(layoutUpdates);
							
				var popupUpdates = new android.app.Dialog(ctx); 
				popupUpdates.setContentView(scrollUpdates);
				popupUpdates.setTitle("Configurar Tabela");
				
				
				
				 var salva=new android.widget.Button(ctx);
				 var reset=new android.widget.Button(ctx);
				 reset.setText("Desfazer");
				 salva.setText("Salvar");
				 var oxt=new android.widget.TextView(ctx);
				 var oyt=new android.widget.TextView(ctx);
				 oxt.setText("Posicao X da tabela na sua tela");
				 oyt.setText("Posicao Y da tabela na sua tela");
				 var zxt=new android.widget.EditText(ctx);
		
				 var zyt=new android.widget.EditText(ctx);
			 
			

				 	 layoutUpdates.addView(oxt);
				 layoutUpdates.addView(zxt);
				 layoutUpdates.addView(oyt);
				 layoutUpdates.addView(zyt);				 
				layoutUpdates.addView(salva);
				layoutUpdates.addView(reset);
zxt.setText(""+tx);
zyt.setText(""+ty);
				popupUpdates.show();
				reset.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
				zxt.setText("1");
				zyt.setText("1");
				

				}
				});
				salva.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function() {
				tx=zxt.getText();
				ty=zyt.getText();
				datatx();
				dataty();
msg(" §5Configuraçoes foram salvas");

popupUpdates.dismiss();
		
				}
				});
} catch(err) {
clientMessage(err);
}
}
});
}
	
	
//Drops Aleatorios
var bk = [502,264,280,48,263,264,1,2,3,4,5,6,7,8,9,10,11,12,1,141,15,16,17,18,20,48,22,24,355,30,31,32,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,56,4,58,59,60,61,62,63,64,65,67,68,71,73,74,78,79,80,82,83,85,87,89,92,95,98,102,103,105,107,109,108,112,114,128,166,156,245,246,247,248,249,253,254,255,411,412,415];
var c = [502,457,455,329,456,301,416,450,367,506,402,401,399,CANTIL_V,2,252,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,282,311,380,322,357,1,411,412,415];
//Aldeoes Interaçoes
var presente=[502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415,502,4,280,257,265,266,17,355,50,49,38,37,456,329,455,457,505,399,401,SOPA,152,459,246,364,4,3,92,262,101,19,252,361,362,260,293,306,307,308,309,400,46,47,408,CANTIL_V,421,412,415];
//Nomes
var mnames=["Crys","Alvaro","Viniccius","Caio","Maicon","Bruno","Gabriel","Mikhael","Joao","§6Gutin!","Rafael","Luiz","Gustavo","Betao","Silvio","Taric","Michael","Vitor","Hudson","Mateus","Matheus","Lucas","Kelsson","Alberto","Andryo","Bismark","Paulo","Ruan","Cleversson","Victor","Marlon","Wesley","Junior","Nikolas","Hebert","Jonn","Caua","Giuseppe","Pablo","Jonathan","Alex","Hian","Crys","Alvaro","Viniccius","Caio","Maicon","Bruno","Gabriel","Mikhael","Joao","§6Gutin!","Rafael","Luiz","Gustavo","Betao","Silvio","Taric","Michael","Vitor","Hudson","Mateus","Matheus","Lucas","Kelsson","Alberto","Andryo","Bismark","Paulo","Ruan","Cleversson","Victor","Marlon","Wesley","Junior","Nikolas","Hebert","Jonn","Caua","Giuseppe","Pablo","Jonathan","Alex","Hian","Crys","Alvaro","Viniccius","Caio","Maicon","Bruno","Gabriel","Mikhael","Joao","§6Gutin!","Rafael","Luiz","Gustavo","Betao","Silvio","Taric","Michael","Vitor","Hudson","Mateus","Matheus","Lucas","Kelsson","Alberto","Andryo","Bismark","Paulo","Ruan","Cleversson","Victor","Marlon","Wesley","Junior","Nikolas","Hebert","Jonn","Caua","Giuseppe","Pablo","Jonathan","Alex","Hian"];
var gnames=["Kaline","Juliana","Brenda","Carol","Livia","Renata","Leticia","Bruna","Katarina","Luanna","Isa","Mikhaela","Fabricia","Joana","Viviane","Jussiane","Mariana","Yasmin","Victoria","Daniela","Daiane","Jennyfer","Rebeccah","Kaiane","Silvia","Marilene","Marlene","Maria","Laila","Valkyria","Marisol","Luanny","Ericka","Fabiana","Luiza","Erica","Mary","Kaline","Juliana","Brenda","Carol","Livia","Renata","Leticia","Bruna","Katarina","Luanna","Isa","Mikhaela","Fabricia","Joana","Viviane","Jussiane","Mariana","Yasmin","Victoria","Daniela","Daiane","Jennyfer","Rebeccah","Kaiane","Silvia","Marilene","Marlene","Maria","Laila","Valkyria","Marisol","Luanny","Ericka","Fabiana","Luiza","Erica","Mary","Kaline","Juliana","Brenda","Carol","Livia","Renata","Leticia","Bruna","Katarina","Luanna","Isa","Mikhaela","Fabricia","Joana","Viviane","Jussiane","Mariana","Yasmin","Victoria","Daniela","Daiane","Jennyfer","Rebeccah","Kaiane","Silvia","Marilene","Marlene","Maria","Laila","Valkyria","Marisol","Luanny","Ericka","Fabiana","Luiza","Erica","Mary"];
var lastEnt;

var delayt=false;
var dtime=30;
//Estamina
var stamina=1100;
var regen=1;
var regent=60;
//ossos(meu cachorro curtiu isso!);
var perna=0;
var osso=30000;
var perna2=0;
var dt=101;
var ossot=3;
var ossoo=0;
var ossoq=0;
var estagio=2;
var isDor=0;
var dorTime=5000;
//LoadCraftedItens
var crafted=0;
//sangue
var sangue=0;
var hp=10000;
//sede
var botao;
var sede=55000;
var sedeti=1;
//outros
var humanidade=0;
var isCompleta=0;
var armaduraObtida=0;
var cb;
var stat=1;
var e;
var z;
var zx=120;
var zy=0;
var victin;
//dias vivo
var dia=1;
//zombies interacoes
var zombie=0;
var zombieDrop=[502,280,287,296,399,401,402,506,407,410,408,415,416,154,418,420,451,282,281,260,289,456,329,455,457,4,5,252,50,318,17,262,453];
var zombieDrop2=[502,280,287,296,399,401,402,506,407,410,408,415,416,154,418,420,451,282,281,260,289,456,329,455,457,4,5,252,50,318,17,262,453];
var zombieDrop3=[502,280,287,296,399,401,402,506,407,410,408,415,416,154,418,420,451,282,281,260,289,456,329,455,457,4,5,252,50,318,17,262,453];
//Kit Medico Uses
var delayForUse=0;
var delayTime=50;
//Funcoes do Filtro
var fdelay=false;
var fdt=100;
var fx=0;
var fy=0;
var fz=0;
//Msg 
var tickt=41;
var ticks=0;
var msgt=30;
var msgl=0;
//outros
var vx;
var vy;
var vz;
var af;
//anti-spawn entrando no mundo
var spawne=0;
var spawnt=100;
//timers anti-bug
//legs break
var timer=1;
var timert=50;
var isok=0;
//C4 funcoes
var cx;
var cy;
var cz;
var dx;
var dy;
var dz;
var pronto=0;
var blocks=0;
var cTime=30;
var plugin=0;
var desarmando=0;
var dtime=40;
//easter egg
//easter.lobagamer 
var lg=0;
var efeitot=61;
//easter.RenataG
var Renata;
var isRenata=0;
//eu *u*
var caio=false;
var caioTime=22;
var entCaio;
//DeopaLURHS
var drop;
var dropg;
var adrop;
var bdrop
//vermelho (comida)
var VERMELHO=251;
var vdrops=[502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297,502,506,402,401,415,260,319,320,363,364,365,366,459,391,392,393,400,282,297];
//verde (vida e medicamentos)
var VERDE=249;
var gdrops=[456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408,456,329,455,457,505,408];
//amarelo (armas do MOD)
var AMARELO=248;
var adrops=[FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503,FACA_ID,TACO_ID,PE_ID,TA_ID,503];
//Branco (ferramentas qualquer)
var BRANCO=250;
var bdrops=[252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286,252,257,258,259,268,269,270,271,272,273,274,275,283,284,285,286];
//vaeek
var randItem=20;
// funcoes temporariamente off
var isBeta=1;
//Salvar/carregar Data
function datazx(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/zx/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".zx.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(zx.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadzx(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/zx/";
if(java.io.File(path+".zx.apk").exists()){
var file=new java.io.File(path+".zx.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
zx = parseInt(str.toString());
fos.close();
}
}
function datazy(){
	try{
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/zy/";
java.io.File(path).mkdirs();
var newFile=new java.io.File(path,".zy.apk");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append(zy.toString());
outWrite.close();
}
catch(err){
clientMessage(err);
}
} 
function loadzy(){
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/CaiotaGames/zy/";
if(java.io.File(path+".zy.apk").exists()){
var file=new java.io.File(path+".zy.apk");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
savefile=String(str.toString());
zy = parseInt(str.toString());
fos.close();
}
}


function msg(p) {
ModPE.showTipMessage(p);
}
function attackHook(attacker,victim) {
if(attacker==bestaArrow) {
Entity.remove(bestaArrow);
}
if(stamina==0) {
	msg("Estou tão cansado...");
	sede=sede-100;
	}
if(Level.getGameMode()==0) {
	stamina=stamina-Math.floor((Math.random()*30)+1);
}
if(Player.getCarriedItem()==FACA_ID&&Entity.getHealth(victim)>=FACA_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)-FACA_DANO);
if(Entity.getHealth(victim)<FACA_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)+1);
}
}
if(Player.getCarriedItem()==TA_ID&&Entity.getHealth(victim)>=TA_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)-TA_DANO);
if(Entity.getHealth(victim)<TA_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)+1);
}
}
if(Player.getCarriedItem()==TACO_ID&&Entity.getHealth(victim)>=TACO_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)-TACO_DANO);
if(Entity.getHealth(victim)<TACO_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)+1);
}
}
if(Player.getCarriedItem()==PE_ID&&Entity.getHealth(victim)>=PE_DANO) {
Item.damageCarriedItem();

Entity.setHealth(victim,Entity.getHealth(victim)-PE_DANO);
if(Entity.getHealth(victim)<PE_DANO) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)+1);
}
}
if(Player.getCarriedItem()==machado&&Entity.getHealth(victim)>=machadoDano) {
Item.damageCarriedItem();

Entity.setHealth(victim,Entity.getHealth(victim)-machadoDano);
if(Entity.getHealth(victim)<machadoDano) {
Item.damageCarriedItem();
Entity.setHealth(victim,Entity.getHealth(victim)+2);
}
}
if(Entity.getEntityTypeId(victim)==15&&getCarriedItem()==38&&delayt==false) {
delayt=true;
dtime=5;
preventDefault();
stamina=stamina+30;
if(Level.getGameMode()==0) {
if(Player.getCarriedItemCount()>=2) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
if(Player.getCarriedItemCount()==1) {
Player.clearInventorySlot(Player.getSelectedSlotId(),Player.getSelectedSlotId());
}
}
//Aldeao
var r= Math.floor(Math.random()*(presente.length)+1);
var tmsg=Math.floor(Math.random()*(tobg.length)+1);
var rnd=Math.floor((Math.random()*2)+1);
if(rnd==2) {
humanidade=humanidade+10;
Level.dropItem(Entity.getX(victim), Entity.getY(victim)+1, Entity.getZ(victim),0,presente[r],Math.floor((Math.random()*1)+1));

msg(tobg[tmsg]);
Level.addParticle(ParticleType.cloud, Entity.getX(victim), Entity.getY(victim)+2, Entity.getZ(victim),0,0,0,3);
Level.addParticle(ParticleType.cloud, Entity.getX(victim), Entity.getY(victim)+1, Entity.getZ(victim),0,0,0,1);
Level.addParticle(ParticleType.cloud, Entity.getX(victim), Entity.getY(victim)+0, Entity.getZ(victim),0,0,0,2);
}
if(rnd==1) {
msg(nmsg);
} 
}

Level.addParticle(ParticleType.redstone,Entity.getX(victim),Entity.getY(victim)+2,Entity.getZ(victim),4,4,4,1);
	if(Player.getX()-Entity.getX(victim)<=2&&Player.getX()-Entity.getX(victim)>=-2&&Player.getZ()-Entity.getZ(victim)<=2&&Player.getZ()-Entity.getZ(victim)>=-2&&Entity.getHealth(Player.getEntity())<=6) {
 var sng=Math.floor((Math.random()*100)+1);
if(sng==50) {
sangue=true;
clientMessage(sang);
Entity.addEffect(Player.getEntity(),MobEffect.confusion,100,1,false,false);
}
if(sng==100) {
perna=1;
estagio=1;
clientMessage(dmge);
stamina=20;
Level.playSoundEnt(victim,"damage.fallbig",100,100);
Entity.addEffect(Player.getEntity(),MobEffect.movementSlowdown,200,1,false,false);
}
if(sng==1) {
ht=100;
}
}
}

function useItem(x,y,z,id,bd,side,dmg) {
if(Level.getGameMode()==0){
if(podeUsar==1&&bd==VERMELHO) {
var drop=Math.floor(Math.random()*(vdrops.length)+1);
  Level.destroyBlock(x,y,z,false);
podeUsar=0;

Level.dropItem(x,y+1,z,0,vdrops[drop],Math.floor((Math.random()*2)+1));

}
if(podeUsar==1&&bd==VERDE) {
var dropg=Math.floor(Math.random()*(gdrops.length)+1);

 
 podeUsar=0;
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y+1,z,0,gdrops[dropg],1);

}
 if(podeUsar==1&&bd==AMARELO) {
var adrop=Math.floor(Math.random()*(adrops.length)+1);
 
podeUsar=0;
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y+1,z,0,adrops[adrop],1);

}
if(podeUsar==1&&bd==BRANCO) {
var bdrop=Math.floor(Math.random()*(bdrops.length)+1);
 
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y+1,z,0,bdrops[bdrop],1,Math.floor((Math.random()*100)+20));
podeUsar=0;
}
}
if(id==501) {
Level.dropItem(x,y+1,z,0,502,1);
Level.dropItem(x,y+1,z,0,260,1);
addItemInventory(501,-1);
}
if(bd==26&&diado==1) {
diado=0;
}

if(Level.getGameMode()==1) {

}
else if(Player.getCarriedItem()==0&&bd==154&&desarmando==0) {
desarmando=1;
dx=x;
dy=y;
dz=z;
}
else if(id==418&&plugin==1) {
Level.setTile(cx,cy,cz,0);
Level.explode(cx,cy,cz,10);
cx=10;
cy=10;
cz=10;
plugin=0;
pronto=0;
msg("@....@");
}
if(id==418&&bd==154&&plugin==0) {
plugin=1;
cx=x;
cy=y;
cz=z;
msg("§6C4 Pronto!");
clientMessage("afaste-se e use o controle para explodir... tudo");
}
else if(id==154&&pronto==0) {
pronto=1;
cx=x;
cy=y+1;
cz=z;
clientMessage("Conecte um controle remoto a C4 agora");
msg("Instalando C4!");
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
}


else if(id==408&&getTile(x,y+1,z)==9) {
Level.dropItem(x,y+2,z,0,505,1);
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
}

else if(id==399&&bd==252&&energia<=6000) {
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}

Level.playSoundEnt(Player.getEntity(),"random.click",100,100);
msg(ChatColor.YELLOW+"Energia +600");
energia=energia+600;
saveen();
}
        else if(id==416&&energia<=200&&bd==252) {
           clientMessage(emsg);
           fdelay=null;
           fdt=101;
           } if(id==416&&bd==252&&fdelay==false) {
         fx=x;
         fy=y;
         fz=z;
         
         msg(ChatColor.YELLOW+"Energia: "+energia);
         saveen();
         fdelay=true; 
 if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
Level.playSoundEnt(Player.getEntity(),"random.click",10,10);
            }

else if(bd==61) {

Level.playSoundEnt(Player.getEntity(),"step.stone",100,100);
}
else if(bd==245) {

Level.playSoundEnt(Player.getEntity(),"step.stone",100,100);
}
else if(bd==26) {
Level.setSpawn(getPlayerX(),getPlayerY(),getPlayerZ());
}
else if(id==CANTIL_V&&getTile(x,y+1,z)==9) {
var rnd2=Math.floor((Math.random()*6)+1);
if(rnd2<=5) {
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
Player.addItemInventory(401,1);

}
else if(rnd2==6) {
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
Player.addItemInventory(416,1);
}

}

if(id==457&&delayForUse==0&&perna==1) {
Level.playSoundEnt(Player.getEntity(),"step.gravel",100,100);
estagio=0;
perna=0;
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
clientMessage("§6A dor passou, agora faça uma Apoiadeira\n§6Para substituir o osso quebrado\n§6antes da dor voltar!");
var isDor=1;
dorTime=5000;
}
delayForUse=1;
}
 if(id==PALITO&&estagio==0) {
delayForUse=1;
delayTime=20;
dt=102;
clientMessage("§2[ !!! ] Muito Melhor");
perna=0;
ossoo=0;
estagio=2;
isDor=0;
osso=30001;
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
}
else if(id==505&&sangue==1&&delayForUse==0) {
delayForUse=1;
Level.playSoundEnt(Player.getEntity(),"step.gravel",100,100);
hp=hp+100;
sangue=false;
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
}
else if(id==456&&hp<=19900&&delayForUse==0&&sangue==1) {
delayForUse=1;
Level.playSoundEnt(Player.getEntity(),"step.gravel",100,100);
hp=hp+5000;
if(Level.getGameMode()==0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, 0);
}
}
if(bd==54||bd==58||bd==60||bd==61||bd==253) {
ultiId=-1;
}
}
function entityAddedHook(e) {

x=Entity.getX(e)-2;
y=Entity.getY(e)-1;
z=Entity.getZ(e)+1;
if(Entity.getEntityTypeId(e)==80) {
af=e;
vx = Entity.getVelX(e);
vy = Entity.getVelY(e);
vz = Entity.getVelZ(e);
}
if(Entity.getEntityTypeId(e)==40) {
Entity.remove(e)
var rnd=Math.floor((Math.random()*11)+1);
if(rnd==10&&casag==1) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
}
if(Entity.getEntityTypeId(e)==41) {
Entity.remove(e);
var rnd=Math.floor((Math.random()*11)+1);
if(rnd==10&&casag==1) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
}
if(Entity.getEntityTypeId(e)==42) {
Entity.remove(e);
var rnd=Math.floor((Math.random()*10)+1);
if(rnd==10&&casag==1) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
}
if(Entity.getEntityTypeId(e)==34) {
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");

}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");

}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");

}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");

}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");

}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");

}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");

}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");

}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");

}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");

}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");

}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");

}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");

}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");

}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");

}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");

}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");

}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");

}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
}
Entity.remove(e);
}

if(Entity.getEntityTypeId(e)==36) {

Entity.remove(e);
}
if(Entity.getEntityTypeId(e)==33) {
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");

}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");

}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");

}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");

}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");

}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");

}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");

}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");

}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");

}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");

}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");

}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");

}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
}
Entity.remove(e);
}
if(Entity.getEntityTypeId(e)==35) { 
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
}
Entity.remove(e);
}
if(Entity.getEntityTypeId(e)==37) {
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
}
Entity.remove(e);
}
if(Entity.getEntityTypeId(e)==38) {
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
}
Entity.remove(e);
}


if(Entity.getEntityTypeId(e)==32) {

var tipo=Math.floor((Math.random()*2)+1);
Entity.addEffect(e,MobEffect.fireResistance,25299*1,0,true,true);
if(tipo==2) {
Entity.addEffect(e,MobEffect.fireResistance,25299*1,0,true,true);
Entity.addEffect(e,MobEffect.damageBoost,25299*99,0,false,false);
Entity.setHealth(e,40);
var rnd=Math.floor((Math.random()*2)+1);
if(rnd==1) {
Entity.addEffect(e,MobEffect.movementSpeed,25299,0,true,false);
Entity.addEffect(e,MobEffect.movementSlowdown,25299,0,false,false);
}
if(rnd==2) {
Entity.addEffect(e,MobEffect.movementSlowdown,25299,0,false,false);

}
}
if(tipo==1) {
Entity.setRenderType(e,3);
Entity.setHealth(e,20);
Entity.addEffect(e,MobEffect.fireResistance,25299*1,0,true,true);
var rndp=Math.floor((Math.random()*2)+1);
if(rndp==1) {
Entity.addEffect(e,MobEffect.movementSpeed,25299*1,1,true,true);
Entity.addEffect(e,MobEffect.movementSlowdown,25299,0,false,false);
} else if(rndp==2) {
Entity.addEffect(e,MobEffect.movementSlowdown,25299*1,0,false,false);

}
}
var remov=Math.floor((Math.random()*5)+1);
if(remov<=2){
Entity.remove(e);
}
var zr=Math.floor((Math.random()*28)+1);
if(zr==1) {
Entity.setMobSkin(e,"mob/zombie.png");
}
if(zr==2) {
Entity.setMobSkin(e,"mob/zombie1.png");

}
if(zr==3) {
Entity.setMobSkin(e,"mob/zombie2.png");

}
if(zr==4) {
Entity.setMobSkin(e,"mob/zombie3.png");

}
if(zr==5) {
Entity.setMobSkin(e,"mob/zombie4.png");

}
if(zr==6) {
Entity.setMobSkin(e,"mob/zombie5.png");

}
if(zr==7) {
Entity.setMobSkin(e,"mob/zombie6.png");

}
if(zr==8) {
Entity.setMobSkin(e,"mob/zombie7.png");

}
if(zr==9) {
Entity.setMobSkin(e,"mob/zombie8.png");

}
if(zr==10) {
Entity.setMobSkin(e,"mob/zombie9.png");

}
if(zr==11) {
Entity.setMobSkin(e,"mob/zombie10.png");

}
if(zr==12) {
Entity.setMobSkin(e,"mob/zombie11.png");

}
if(zr==13) {
Entity.setMobSkin(e,"mob/zombie12.png");

}
if(zr==14) {
Entity.setMobSkin(e,"mob/zombie13.png");

}
if(zr==15) {
Entity.setMobSkin(e,"mob/zombie14.png");

}
if(zr==16) {
Entity.setMobSkin(e,"mob/zombie15.png");

}
if(zr==17) {
Entity.setMobSkin(e,"mob/zombie16.png");

}
if(zr==18) {
Entity.setMobSkin(e,"mob/zombie17.png");

}
if(zr==19) {
Entity.setMobSkin(e,"mob/zombie18.png");

}
if(zr==20) {
Entity.setMobSkin(e,"mob/zombie19.png");

}
if(zr==21) {
Entity.setMobSkin(e,"mob/zombie20.png");

}
if(zr==22) {
Entity.setMobSkin(e,"mob/zombie21.png");

}
if(zr==23) {
Entity.setMobSkin(e,"mob/zombie22.png");

}
if(zr==24) {
Entity.setMobSkin(e,"mob/zombie23.png");

}
if(zr==25) {
Entity.setMobSkin(e,"mob/zombie24.png");

}
if(zr==26) {
Entity.setMobSkin(e,"mob/zombie25.png");
}
if(zr==27) {
Level.spawnMob(x,y+1,z,32,"mob/cgz.png");
}
if(zr==28) {
Entity.setMobSkin(e,"mob/zombie26.png");
}
var rnd=Math.floor((Math.random()*100)+1);
if(rnd==10&&casag==1&&getTile(Entity.getX(e),Entity.getY(e),+4,Entity.getZ(e))==0) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
}
if(Entity.getEntityTypeId(e)==10&&spawnt==0) {
var rnd=Math.floor((Math.random()*180)+1);
if(rnd==10&&casag==1) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
}
if(Entity.getEntityTypeId(e)==11&&spawnt==0) {
var rnd=Math.floor((Math.random()*180)+1);
if(rnd==10&&casag==1) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
}
if(Entity.getEntityTypeId(e)==12&&spawnt==0) {
var rnd=Math.floor((Math.random()*180)+1);
if(rnd==10&&casag==1) {
var rn=Math.floor((Math.random()*5)+1);
if(rn==1) {
casa1();
}
if(rn==2) {
casa2()
}
if(rn==3) {
torre();
}
if(rn==4) {
torre2();
}
if(rn==5) {
casa3();
}
}
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie3.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
}
if(Entity.getEntityTypeId(e)==13&&spawnt==0) {
var zr=Math.floor((Math.random()*21)+1);
if(zr==1) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==2) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie1.png");
}
if(zr==3) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie2.png");
}
if(zr==4) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==5) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie4.png");
}
if(zr==6) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie5.png");
}
if(zr==7) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie6.png");
}
if(zr==8) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie7.png");
}
if(zr==9) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie8.png");
}
if(zr==10) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie9.png");
}
if(zr==11) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie10.png");
}
if(zr==12) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie11.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==13) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie12.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==14) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie13.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==15) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie14.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==16) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie15.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==17) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie16.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==18) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie17.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==19) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie18.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie.png");
}
if(zr==20) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie19.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie22.png");
}
if(zr==21) {
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie20.png");
z=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),32,"mob/zombie22.png");
}
}
if(Entity.getEntityTypeId(e)==15) {
 

var vr=Math.floor((Math.random()*39)+1);
var mn= Math.floor(Math.random()*(mnames.length)+1);
var gn= Math.floor(Math.random()*(gnames.length)+1)

Entity.setRenderType(e,3);
if(vr==1) {
Entity.setMobSkin(e,"mob/homem.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==2) {
Entity.setMobSkin(e,"mob/mulher.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==3) {
Entity.setMobSkin(e,"mob/mulher2.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==4) {
Entity.setMobSkin(e,"mob/homem2.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==5) {
Entity.setMobSkin(e,"mob/mulher3.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==6) {
Entity.setMobSkin(e,"mob/homem4.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==7) {
Entity.setMobSkin(e,"mob/mulher5.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==8) {
Entity.setMobSkin(e,"mob/homem6.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==9) {
Entity.setMobSkin(e,"mob/mulher6.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==10&&caio==false) {
caio=true;
Entity.setMobSkin(e,"mob/cg.png");
Entity.setNameTag(e,"Caiota");
Entity.setHealth(e,20);
entCaio=e;
}
if(vr==11) {
Entity.setMobSkin(e,"mob/homem7.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==12) {
Entity.setMobSkin(e,"mob/homem8.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==13) {
Entity.setMobSkin(e,"mob/homem9.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==13) {
Entity.setMobSkin(e,"mob/homem10.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==14) {
Entity.setMobSkin(e,"mob/homem11.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==15) {
Entity.setMobSkin(e,"mob/homem12.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==16) {
Entity.setMobSkin(e,"mob/homem13.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==17) {
Entity.setMobSkin(e,"mob/homem14.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==18) {
Entity.setMobSkin(e,"mob/homem15.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==19) {
Entity.setMobSkin(e,"mob/homem16.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==20) {
Entity.setMobSkin(e,"mob/mulher8.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==21) {
Entity.setMobSkin(e,"mob/mulher9.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==22) {
Entity.setMobSkin(e,"mob/mulher7.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==23&&lg==0) {
lg=1;
victin=Level.spawnMob(Entity.getX(e),Entity.getY(e),Entity.getZ(e),15,"mob/lg.png");
Entity.setMobSkin(victin,"mob/lg.png");
Entity.setNameTag(victin,"§7Loba Gamer");
Entity.remove(e);
}
if(vr==24&&isRenata==0) {
isRenata=1;
Entity.setMobSkin(e,"mob/r.png");
Entity.setNameTag(e," §7R§6e§5n§4a§3t§2a");
Renata=e;
}
if(vr==25) {
Entity.setMobSkin(e,"mob/homem17.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==26) {
Entity.setMobSkin(e,"mob/homem18.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==27) {
Entity.setMobSkin(e,"mob/homem19.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==28) {
Entity.setMobSkin(e,"mob/homem20.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==29) {
Entity.setMobSkin(e,"mob/homem21.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==30) {
Entity.setMobSkin(e,"mob/homem22.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==31) {
Entity.setMobSkin(e,"mob/homem23.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==32) {
Entity.setMobSkin(e,"mob/homem24.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==33) {
Entity.setMobSkin(e,"mob/homem25.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==34) {
Entity.setMobSkin(e,"mob/homem26.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==35) {
Entity.setMobSkin(e,"mob/homem27.png");
Entity.setNameTag(e,mnames[mn]);
Entity.setHealth(e,20);
}
if(vr==36) {
Entity.setMobSkin(e,"mob/mulher10.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==37) {
Entity.setMobSkin(e,"mob/mulher11.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==38) {
Entity.setMobSkin(e,"mob/mulher12.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
if(vr==39) {
Entity.setMobSkin(e,"mob/mulher13.png");
Entity.setNameTag(e,gnames[gn]);
Entity.setHealth(e,20);
}
lastEnt=e;
if(Player.getCarriedItem()==383&&Player.getCarriedItemData()==15&&Level.getGameMode()==1) {
Entity.setNameTag(e,"");
}
}
}
//Sede
var spc=Math.floor(sede/54)+"%";
//Sangue
var hpti=Math.floor(hp/100)+"%";
//Estamina
var esT=Math.floor(stamina/10.5)+"%";
var uptick=1;
var contador=30;
var armado=20;
var tick=0;
var diado=1;
var diat=70;
//+
var tick=0;
var lastBlock;
var itemId=0;
var nowItems=0;
var novaQuantia=0;
var needAlert=false;
var alert;
var ultiId=1;
var ultiItens=0;
var ultiQuantidade=0;
var data;
var lastData=0;
var myslot=0;
var slott=55;
var foodItems=[401,506,402,453,416];
var invBlocks = [54,58,61,62,245];
function eatHook(ultiId) {
if(ultiId==401){
sede=sede+7500;
addItemInventory(407,1);
}
if(ultiId==506){
sede=sede+7400;
}
 if(ultiId==402){
sede=sede+5400;
}
if(ultiId==453){
sede=sede+4000;
stamina=1100;
}
 if(ultiId==416){
Entity.addEffect(getPlayerEnt(),MobEffect.confusion,200,1,false,false);
sede=sede-2000;
addItemInventory(407,1);
}
}

//+
var carri=false;
var carrit=5;
var papapa=0;
var podeUsar=1;
function modTick() {

if(podeUsar==0) {
randItem--;
}
if(randItem==0){
podeUsar=1;
randItem=10;

}
if(Player.getCarriedItem()==407) {
msg("Use Na Agua para encher");
}
if(Player.getCarriedItem()==399) {
msg("Use No Filtro de Agua para recuperar a energia");
}
if(Player.getCarriedItem()==329) {
msg("Use com uma seringa para parar alguma dor");
}
if(Player.getCarriedItem()==408) {
msg("Use na Agua para Limpar!");
}
if(Player.getCarriedItem()==420) {
msg("Use Para Substituir Ossos Quebrados!");
}

if(Player.getCarriedItem()==416||Player.getCarriedItem()==453||Player.getCarriedItem()==402||Player.getCarriedItem()==506||Player.getCarriedItem()==401) {
carri=true;
Player.setSelectedSlotId(0);
msg("§fColoque no Slot 1 Para Beber!");
}else{
carri=false;
papapa=1;
}
if(carri==true&&papapa==1&&Player.getSelectedSlotId()<=1&&Level.getGameMode()==0) {
carrit--;
Entity.addEffect(Player.getEntity(),MobEffect.hunger,90,1,false,false);
papapa=0;
}
if(carrit==0) {
carri=false;
carrit=5;
}
//FSllpppp
slott--;
if(slott==0) {
myslot=Player.getSelectedSlotId();

lastData=myslot;

if(myslot<=lastData) {
myslot=null;
}
if(myslot>=lastData) {
myslot=null;
}
slott=5.5;
}
nowItems = Player.getCarriedItemData();
	novaQuantia = Player.getCarriedItemCount();
data=Player.getSelectedSlotId();
	lastBlock = Player.getPointedBlockId();
	itemId = Player.getCarriedItem();
	
	nowSlotId = Player.getSelectedSlotId();
		
if(Player.getInventorySlotCount(Player.getSelectedSlotId())>=Player.getInventorySlotData(Player.getSelectedSlotId())&&Player.getSelectedSlotId()==lastData) {
	if(foodItems.indexOf(itemId)>=0){ 
tick++; 
		if(tick>=0.2) {
			tick=0; 
			if(itemId==ultiId){ 
				if(nowItems==ultiItens){ 
					if((ultiQuantidade-1)==novaQuantia){ 
						if(invBlocks.indexOf(lastBlock)==-1){ 
							eatHook(ultiId); 
itemId=-1;
lastBlock=-1;
ultiQuantidade=-1;

						}
					
				}
}
			}
			ultiId = Player.getCarriedItem();
			ultiItens = Player.getCarriedItemData();
			ultiQuantidade = Player.getCarriedItemCount();
		
}
	}
	
	if(itemId==0) {
		if(foodItems.indexOf(ultiId)>=0){ 
			if(ultiQuantidade==1){
				if(invBlocks.indexOf(lastBlock)==-1){ 
					eatHook(ultiId);
itemId=-1;
lastBlock=-1;
ultiQuantidade=-1;
					

				}
			}
		}
	}
}
	if(foodItems.indexOf(itemId)==-1){ 
		if(itemId!==0){ 
			
		
	}

}

//Outro

if(caio){
caioTime--;
}
if(caioTime==0) {
Level.addParticle(24,Entity.getX(entCaio),Entity.getY(entCaio)+2,Entity.getZ(entCaio),3,3,3,2);
caioTime=40;
}
if(diado==0) {
diat--;
}
if(Level.getTime()==10060) {
dia=dia+1;
}
if(diat==0&&Player.getPointedBlockId()==26&&Level.getTime()>=10060&&Level.getTime()<=19100) {
diado=1;
dia=dia+1;
msg("Mais 1 dia Vivo");
diat=70;
}
if(Level.getGameMode()==0) {
if(humanidade>=400&&Player.getArmorSlot(0)==302&&Player.getArmorSlot(1)==303&&Player.getArmorSlot(2)==304&&Player.getArmorSlot(3)==305&&armaduraObtida==1) {
Entity.addEffect(Player.getEntity(),MobEffect.damageResistance,10,1,false,false);
Entity.addEffect(Player.getEntity(),MobEffect.movementSpeed,10,0,false,false);
}
else if(humanidade<=400&&Player.getArmorSlot(0)==302&&Player.getArmorSlot(1)==303&&Player.getArmorSlot(2)==304&&Player.getArmorSlot(3)==305) {
Player.setArmorSlot(0,0);
Player.setArmorSlot(1,0);
Player.setArmorSlot(2,0);
Player.setArmorSlot(3,0);
}
if(humanidade>=400&&isCompleta==0) {
isCompleta=1;
}
if(humanidade<=399) {
isCompleta=0;
armaduraObtida=0;

}
if(humanidade<=0) {
humanidade=1;
}
if(Player.getCarriedItem()==302&&humanidade<=399) {
Entity.setCarriedItem(Player.getEntity(),0);
armaduraObtida=0;
isCompleta=0;
msg("Você não é digno de possuir esta armadura!");
}
if(Player.getCarriedItem()==303&&humanidade<=399) {
Entity.setCarriedItem(Player.getEntity(),0);
armaduraObtida=0;
isCompleta=0;
msg("Você não é digno de possuir esta armadura!");
}
 if(Player.getCarriedItem()==304&&humanidade<=399) {
Entity.setCarriedItem(Player.getEntity(),0);
armaduraObtida=0;
isCompleta=0;
msg("Você não é digno de possuir esta armadura!");
}
if(Player.getCarriedItem()==305&&humanidade<=399) {
Entity.setCarriedItem(Player.getEntity(),0);
armaduraObtida=0;
isCompleta=0;
msg("Você não é digno de possuir esta armadura!");
}
if(isCompleta==1&&armaduraObtida==0) {
armaduraObtida=1;
saveSobrevivente();
clientMessage("§2Você ganhou a armadura de §6sobrevivente!");
Level.dropItem(getPlayerX(),getPlayerY()+2,getPlayerZ(),0,302,1);

Level.dropItem(getPlayerX(),getPlayerY()+2,getPlayerZ(),0,303,1);

Level.dropItem(getPlayerX(),getPlayerY()+2,getPlayerZ(),0,304,1);

Level.dropItem(getPlayerX(),getPlayerY()+2,getPlayerZ(),0,305,1);
}
}
if(Player.getPointedBlockId()==252) {
msg(ChatColor.YELLOW+"Use um §6Cantil Envenenado"+ChatColor.YELLOW+" para obter água limpa");
ultiId=0;
}
if(podeUsar==0) {
msg(ChatColor.YELLOW+"Delay: "+randItem);
}
if(Level.getGameMode()==0&&podeUsar==1) {
if(Player.getPointedBlockId()==VERMELHO) {
msg(ChatColor.YELLOW+"Toque para obter um item aleatório do tipo alimentos");

}
if(Player.getPointedBlockId()==AMARELO) {
msg(ChatColor.YELLOW+"Toque para obter um item aleatório do tipo armas do mod");


}
if(Player.getPointedBlockId()==VERDE) {
msg(ChatColor.YELLOW+"Toque para obter um item aleatório do tipo medicamentos");

}
if(Player.getPointedBlockId()==BRANCO) {
msg(ChatColor.YELLOW+"Toque para obter um item aleatório do tipo ferramentas");

}
}

//Anticrash
if(Level.getGameMode()==lastGame) {
anticrash=0;
}else{
anticrash=1;
}

if(anticrash==1) {
clientMessage("§6Modo de jogo ALTERADO!\n§6Reinicie o mundo para evitar travadas com alguns items!!");
anticrash=0;
lastGame=Level.getGameMode();
}
//+++
if(isReload==1) {
reloadTime--;
msg("§6Recarregando...");
}
if(reloadTime==0&&bolsa(262,0)&&Level.getGameMode()==0) {
reloadTime=36;
isReload=0;
msg("Pronto para atirar!");
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				shoot.setTextColor(android.graphics.Color.GREEN);
shoot.setText("Atirar");
shoot.setTextSize("20");

			}catch(err){
				print("Erro: " + err);
			}
		}}));
}
else if(reloadTime==0&&isReload==1){
if(Level.getGameMode()==0) {
msg("§6Voce não tem mais flechas!");
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				shoot.setTextColor(android.graphics.Color.RED);
shoot.setText("Sem Flechas!");
shoot.setTextSize("12");

			}catch(err){
				print("Erro: " + err);
			}
		}}));
}
isReload=0;
reloadTime=40;
}

if(Player.getCarriedItem()==450) {
Tiro();
}else{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(bestaGui != null) {
					bestaGui.dismiss();
isComArma=0;
					bestaGui= null;
			}

			
			}catch(err){
				print("Erro: " + err);
			}
		}}));
}
if(zoomt==1) {
zoomtick--;
}
if(zoomtick==0) {
zoomtick=15;
zoomt=0;
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGui = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			
			var zoomButton = new android.widget.Button(ctx);
			zoomButton.setText("[ ZOOM ]");
			zoomButton.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
					if (v.getText() == "[ ZOOM ]") {
						ModPE.setFov(36);
isZoom=1;
						Level.playSoundEnt(Player.getEntity(),"random.click",100,100);
						v.setText("[X]");
					} else if(v.getText()=="[X]"){
					 Level.playSoundEnt(Player.getEntity(),"random.click",100,100);
isZoom=0;
						ModPE.resetFov(); 
						v.setText("[ ZOOM ]");
					} else {
v.setText("[ ZOOM ]");
ModPE.resetFov();
isZoom=0;
}
				}
			
			})
			layout.addView(zoomButton);

			simpleGui.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			simpleGui.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

			simpleGui.setContentView(layout);
			simpleGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, zx, zy); 
		} catch(err){
			print("Erro: " + err);
		
}
}}));

}
contador--;
if(contador==0) {
if(Level.getGameMode()==0) {
hum=true;
comida=true;
btn=true;
botao=true;
}
if(Level.getGameMode()==1){
hum=false;
comida=false;
btn=false;
botao=false;
}
contador=30;
}
if(isZoom==1) {
Entity.addEffect(Player.getEntity(),MobEffect.movementSlowdown,10,2,false,false);
}
if(estagio==2) {
perna=0;
isDor=0;
}
if(estagio==0) {
isDor=1;
perna=0;
dt--;
}
if(dt<=99&&dt>=70) {
setVelZ(Player.getEntity(),0);
setVelX(Player.getEntity(),0);
}
if(dt<=50&&dt>=20) {
setVelZ(Player.getEntity(),0);
setVelX(Player.getEntity(),0);

}
if(dt<=20) {
setVelZ(Player.getEntity(),0);
setVelX(Player.getEntity(),0);
Level.addParticle(ParticleType.snowballpoof,getPlayerX(),getPlayerY(),getPlayerZ(),0,1,0,1);
Level.addParticle(ParticleType.snowballpoof,getPlayerX(),getPlayerY(),getPlayerZ(),0,1,0,1);
Level.addParticle(ParticleType.snowballpoof,getPlayerX()-1,getPlayerY(),getPlayerZ(),0,1,0,1);
Level.addParticle(ParticleType.snowballpoof,getPlayerX()+1,getPlayerY(),getPlayerZ(),0,1,0,1);
dt=140;
}
if(isDor==1) {
dorTime--;
}
if(dorTime==0) {
estagio=1;
perna=1;
isDor=0;
dorTime=5000;
clientMessage("§6Aahh dor está voltando!!!");
}
//sede, sangue e estamina em Porcentagem
uptick--;
if(uptick==0) {
uptick=2;
//sede
spc=Math.floor(sede/546)+"%";
//sangue
hpti=Math.floor(hp/100)+"%";
//estamina
esT=Math.floor(stamina/11)+"%";
}
//quebrar perna
if(timer==1) {
timert--;
}
if(timert==0) {
timer=0;
timert=52;
isok=1;
}

if(Level.getGameMode()==0) {
if(Player.getCarriedItem()==VERMELHO) {
Entity.setCarriedItem(Player.getEntity(),0,0);
}
if(Player.getCarriedItem()==AMARELO) {
Entity.setCarriedItem(Player.getEntity(),0,0);
}
if(Player.getCarriedItem()==VERDE) {
Entity.setCarriedItem(Player.getEntity(),0,0);
}
if(Player.getCarriedItem()==BRANCO) {
Entity.setCarriedItem(Player.getEntity(),0,0);
}
}
if(Player.getCarriedItem()==154) {
msg("Arme No Chão");
}

if(desarmando==1) {
dtime--;
setVelY(Player.getEntity(),0);
setVelX(Player.getEntity(),0);
setVelZ(Player.getEntity(),0);
msg("§6Desarmando....");
}
if(dtime==0) {
desarmando=0;
dtime=40;
Level.dropItem(dx,dy,dz,0,154,1);
setTile(dx,dy,dz,0,0);
msg("§2Desarmado");
plugin=0;
pronto=0;
}
if(pronto==1) {
cTime--;
setVelX(Player.getEntity(),0);
setVelZ(Player.getEntity(),0);
}
if(cTime==0) {
pronto=0;
setTile(cx,cy,cz,154,0);

cTime=60;
}
if(regen==1) {
regent--;
}
		if(regent==0) {
			stamina=stamina+Math.floor((Math.random()*50)+5);
			regent=40;
			}
			if(stamina>=1100) {
				stamina=1100;
				}
				if(stamina<=0) {
					stamina=0;
					}
					if(stamina<=200) {
						setVelZ(Player.getEntity(),0);
						setVelX(Player.getEntity(),0);
Entity.addEffect(Player.getEntity(),MobEffect.digSlowdown,40,2,false,false);
}
	if(spawne==1) {
		spawnt--;
		}
		if(spawnt==0) {
			spawne=0;
			}


if(msgl==1) {
msgt--;
}
if(msgt>=20&&msgt<=29) {
msg("§3T.W.C MOD BY §6CAIOTA GAMES !")
}
if(msgt<=20) {
msg("§2T.W.C §6MOD BY §7CAIOTA GAMES !")
}
if(msgt==0) {
msgl=0;
msgt=30;
}
if(delayt==true) {
dtime--;

}
if(dtime==0) {
dtime=30;
delayt=false;
}
if(ticks==1) {
tickt--;
}
if(tickt==40) {
Level.addParticle(24,getPlayerX(),getPlayerY(),getPlayerZ(),0,1,0,1);
Level.addParticle(24,getPlayerX(),getPlayerY(),getPlayerZ(),0,1,0,1);
Level.addParticle(24,getPlayerX()-1,getPlayerY(),getPlayerZ(),0,1,0,1);
Level.addParticle(24,getPlayerX()+1,getPlayerY(),getPlayerZ(),0,1,0,1);
}
if(tickt==0) {
Level.addParticle(24,getPlayerX(),getPlayerY()+0.2,getPlayerZ(),0,1,0,1);
Level.addParticle(24,getPlayerX(),getPlayerY()-0.5,getPlayerZ(),0,1,0,1);
Level.addParticle(24,getPlayerX()-0.2,getPlayerY()+0.3,getPlayerZ(),0,1,0,1);
Level.addParticle(24,getPlayerX()+0.2,getPlayerY()+0.3,getPlayerZ(),0,1,0,1);
tickt=41;
}
if(sangue==1) {
ticks=1;
}
if(sangue==0) {
ticks=0;
tickt=41;
}
if(delayForUse==1) {
delayTime--;
setVelX(Player.getEntity(),0);
setVelZ(Player.getEntity(),0);
}
if(delayTime==0) {
delayForUse=0;
delayTime=20;
}
if(fpsu){
fpst--;
}
if(fpst==0) {
fpsu=false;
ta=5;
fpst=10;
if(fps>=90) {
msg(ChatColor.GREEN+"Chunks "+Math.round(Math.floor(fps)));
}
if(fps<=90&&fps>=50) {
msg(ChatColor.YELLOW+"Chunks "+Math.round(Math.floor(fps)));
}
if(fps<=50) {
msg(ChatColor.RED+"Chunks "+Math.round(Math.floor(fps)));

}
}
if(energia<=0) {
energia=0;
}

if(fdelay) {
fdt--;
Level.playSoundEnt(Player.getEntity(),"random.bow",10,20);
msg("§6Filtrando...");
}
if(fdt==0){
fdelay=false;
fdt=100;
energia=energia-110;
var fr=Math.floor((Math.random()*10)+1);
if(fr<=9) {
Level.dropItem(fx,fy+1,fz,0,401,1);clientMessage("§2Sucesso!");
}
if(fr==10) {
Level.playSoundEnt(Player.getEntity(),"item.break",100,100);
clientMessage("§6Nao foi possivel filtrar esta água");
}
msg("Energia: "+energia);
}


if(ta==1) {
if(hp>=7000) {
ModPE.showTipMessage(hpt+": §2"+hpti);
}
if(hp>=3000&&hp<=7000) {
ModPE.showTipMessage(hpt+": §6"+hpti);
}
if(hp<=3000) {
ModPE.showTipMessage(hpt+": "+ChatColor.RED+hpti);
}
fpsu=false;
fpst=10;
}
if(ta==3) {
ModPE.showTipMessage(sedet+": "+spc);
fpsu=false;
fpst=10;
if(sede>=40000) {
	ModPE.showTipMessage(sedet+ChatColor.GREEN+spc);
	}
	if(sede<=40000&&sede>=23000) {
		ModPE.showTipMessage(sedet+ChatColor.YELLOW+spc);
		}
		if(sede<=23000&&sede>=10000) {
			ModPE.showTipMessage(sedet+"§6"+spc);
			}
if(sede<=10000&&sede>=0) {
			ModPE.showTipMessage(sedet+ChatColor.RED+spc);
			}
}
if(ta==0) {
fpsu=false;
fpst=10;

}
if(ta==5) {
fpsu=true;
}
if(ta==4) {
	msg("Estamina: "+esT);
if(stamina>=250) {
	ModPE.showTipMessage(staminat+ChatColor.GREEN+esT);
	}
	if(stamina<=250&&stamina>=100) {
		ModPE.showTipMessage(staminat+ChatColor.YELLOW+esT);
		}
		if(stamina<=100) {
			ModPE.showTipMessage(staminat+ChatColor.RED+esT);
			}
	}
if(sangue&&Level.getGameMode()==0) {
hp--;
}
if(hp<=0) {
hp=0;
}
if(hp<=1000) {
Entity.addEffect(Player.getEntity(),MobEffect.movementSlowdown,10,0,true,true);
Entity.addEffect(Player.getEntity(),MobEffect.confusion,100,0,true,true);
}else{ 
}
if(hp==0) {
Entity.addEffect(Player.getEntity(),MobEffect.harm,100,0,true,true);
}
if(perna==1) {
osso--;
}

if(osso<=29998) {
if(perna==1&&estagio==1) {
Entity.addEffect(Player.getEntity(),MobEffect.digSlowdown,2,1,false,true);
setVelX(Player.getEntity(),0);
setVelZ(Player.getEntity(),0);
}
}
if(osso==29980) {
perna=1;
estagio=1;
osso=29960;
clientMessage(dmge);
}

if(sede<=700&&sedeti==1) {
clientMessage(dsede);
sedeti=0;
}
if(sede>=700) {
sedeti=1;
}
if(botao) {
sede--;
}
if(sede<=700) {
setVelX(Player.getEntity(),0);
setVelZ(Player.getEntity(),0);
}
if(sede<=0) {
sede=0;
}

if(sede>=55000) {
sede=55000;
}
if(hp>=10000) {
hp=10000;
}
getXYZ();
gameping();
}

function leaveGame() {
saveData();
hp=90000;
osso=30000;
sede=90000;
estagio=-4;
stamina=1100;
removeGuis();
caio=false;
isRenata=0;
timer=1;
timert=52;
isok=0;
	spawnt=100;
	spawne=0;
Caiota();
Config();
}

function procCmd(cmd) {
var cmd = cmd.split(" ");
if(cmd[0]=="betaCmd") {
addItemInventory(450,1);
addItemInventory(262,64);
addItemInventory(451,1);
addItemInventory(399,1);
addItemInventory(416,64);
addItemInventory(505,1);
addItemInventory(502,1);
addItemInventory(401,1);
addItemInventory(452,1);
addItemInventory(402,1);
addItemInventory(453,1);
addItemInventory(506,1);
addItemInventory(411,1);
addItemInventory(412,1);
addItemInventory(413,1);
addItemInventory(414,1);
addItemInventory(503,1);
}
if(cmd[0]=="casa") {
print(" ");
if(casag==0&&cmd[1]=="on") {

casag=1;
clientMessage("Gerando estruturas perto de mobs");
saveCasa();
msg("Isto foi salvo");
}


if(casag==1&&cmd[1]=="off") {
casag=0;

clientMessage("Nao ira mais gerar estruturas pelo mundo");
msg("Isto foi salvo");
saveCasa();
}

}
if(cmd[0]=="sa") {
ta=1;
}
if(cmd[0]=="fps") {
ta=5;
}
if(cmd[0]=="e") {
	ta=4;
	}
if(cmd[0]=="s") {
ta=3;
}
if(cmd[0]=="n") {
ta=-1;
fpsu=false;
}
if(cmd[0]=="zoom") {
zoomOk=1;
clientMessage("Use §6/zoom on | off");
clientMessage("Use §6/zoom configurar §fpara configurar a posiçao X e Y do zoom na sua tela.");
if(cmd[1]=="on") {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGui = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			
			var zoomButton = new android.widget.Button(ctx);
			zoomButton.setText("[ZOOM]");
			zoomButton.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
					if (v.getText() == "[ZOOM]") {
						ModPE.setFov(32);
isZoom=1;
						Level.playSoundEnt(Player.getEntity(),"random.click",100,100);
						v.setText("[X]");
					} else if(v.getText()=="[X]"){
					 Level.playSoundEnt(Player.getEntity(),"random.click",100,100);
isZoom=0;
						ModPE.resetFov(); 
						v.setText("[ZOOM]");
					} else {
v.setText("[ZOOM]");
ModPE.resetFov();
isZoom=0;
}
				}
			
			})
			layout.addView(zoomButton);

			simpleGui.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			simpleGui.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

			simpleGui.setContentView(layout);
			simpleGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, zx, zy); 
		} catch(err){
			print("Erro: " + err);
		
}
}}));

}
if(cmd[1]=="off") {
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGui != null) {
					simpleGui.dismiss();
					simpleGui = null;
				}
			}catch(err){
				print("Error: "+err);
			}
		}}));
	}
}
if(cmd[1]=="configurar") {
Update();
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGUI != null) {
					simpleGUI.dismiss();
					simpleGUI = null;
				}
			}catch(err){
				print("Error: "+err);
			}
		}}));
	}
}
}
if(cmd[0]=="cmd") {
clientMessage("Use §6/zoom on | off §fpara mostrar o botão de zoom");
clientMessage("Use §6/sa §fpara mostrar o Sangue\n §6/s §fpara mostrar a Sede\n §6/e §fpara mostrar a Estamina\n §6/n §fpara remover tudo\n §6/fps §f para mostrar chunk atual");
clientMessage("Use §4/"+salvart+"§f Para salvar seu jogo");


clientMessage("Use  §6/"+tabelat+" on | off §f para mostrar uma tabela com Sede, Estamina e Sangue");
clientMessage(""+tt);
clientMessage("\n Digite §6/cmd2 §fpara mais");
}
if(cmd[0]=="cmd2") {
clientMessage("§2==============\n\n");
clientMessage(" §6/remod §fpara reistalar o mod e resetas as texturas (Caso Bug)");
clientMessage("§7use /caiota para visitar o canal no §4You§fTube§7 do desenvolvedor");
} 
if(cmd[0]=="tabela") {
clientMessage(" §6Use /tabela on | off");
clientMessage("Use §6/tabela configurar §fpara configurar a posiçao X e Y da tabela na sua tela.");
clientMessage("Use §6/tabela off §fpara remover a tabela");
if(cmd[1]=="on"){
ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGUI = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			textview = new android.widget.TextView(ctx);
			textview.setTextColor(android.graphics.Color.RED);
			 textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
			getXYZ();
			textview.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
				estatistica();
				}
				})
			layout.addView(textview);
			simpleGUI.setContentView(layout);
			simpleGUI.setWidth(126);
			simpleGUI.setHeight(159);
			simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, tx, ty);
		}catch(err){
			print("Error: "+err);
			tx=1;
			ty=1;
		}
	} }));
	}
if(cmd[1]=="off") {
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGUI != null) {
					simpleGUI.dismiss();
					simpleGUI = null;
				}
			}catch(err){
				print("Error: "+err);
			}
		}}));
	}
}
if(cmd[1]=="configurar") {
Update2();
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGui != null) {
					simpleGui.dismiss();
					simpleGui = null;
					
			}
			}catch(err){
				print("Erro: " + err);
			}
		}}));
		}
}
}
	if(cmd[0]=="remod") {
	saveData();
	 clientMessage("§6Jogo Salvo\n§6Reinicie O BLOCK LAUNCHER");
	 ModPE.resetImages();
	}
	if(cmd[0]=="caiota") {
Level.dropItem(getPlayerX(),getPlayerY()+1,getPlayerZ(),0,501,1);
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() { 
try {
print("Carregando...");
saveData();
	ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("https://www.youtube.com/c/CaiotaGames")));
}

catch(e) {
print(e);
}
}
})
	}
if(cmd[0]=="wiki") {
ctx.runOnUiThread(new java.lang.Runnable() {
run: function() { 
try {
print("Carregando...");
	ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://mcpe.wapka.me/site_19.xhtml")));
saveData();
}

catch(e) {
print(e);
}
}
});
}
	if(cmd[0]==salvart) {
	clientMessage(salvarok);
saveData();
	}
	}

function deathHook(murderer,victim) {
if(Entity.getNameTag(victim)=="Caiota") {
caio=false;
caioTime=22;
}
if(Entity.getEntityTypeId(victim)==victin&&lg==1) {
lg=0;
}
 if(Entity.getEntityTypeId(victim)==15){
Entity.remove(victim);
	}
	if(Player.getEntity()==victim) {
	sangue=false;
psf=false;
	humanidade=1;
	sede=55000;
	hp=10000;
	perna=false;
estado=2;
	stamina=1110;
	osso=30000;
	Entity.remove(murderer);
mortes=mortes+1;	
	}
	if(Entity.getEntityTypeId(victim)==32) {
zombie=zombie+1;
dataz();
humanidade=humanidade+Math.floor((Math.random()*10)+1);
}
if(Entity.getEntityTypeId(victim)==15) {
humanidade=humanidade-10;
msg("§6Humanidade -10!!");
}
if(Entity.getEntityTypeId(victim)==32) {
var rnd=Math.floor((Math.random()*7)+1);
var io=Math.floor((Math.random()*50)+1);
var drope=Math.floor((Math.random()*(zombieDrop.length)+1));
var drope2=Math.floor((Math.random()*(zombieDrop2.length)+1));
var drope3=Math.floor((Math.random()*(zombieDrop3.length)+1));
var it=Math.floor((Math.random()*3)+1);
if(io<=40 ) {
var rndd=Math.floor((Math.random()*50)+1);
var droprnd=Math.floor((Math.random()*25)+1);
if(droprnd<=5) {
if(it==1) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,zombieDrop[drope],Math.floor((Math.random()*2)+1));
}
if(it==2) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,zombieDrop2[drope2],Math.floor((Math.random()*1)+1));
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,zombieDrop3[drope3],Math.floor((Math.random()*1)+1));
}
if(it==3) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,zombieDrop3[drope3],Math.floor((Math.random()*1)+1));Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,zombieDrop2[drope3],Math.floor((Math.random()*1)+1));
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,zombieDrop[drope],Math.floor((Math.random()*1)+1));
}
}
if(rnd==2) {
if(rndd<=10) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,261,1,Math.floor((Math.random()*300)+110));
}
}
if(rnd==7) { 
if(rndd<=2) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,450,1,Math.floor((Math.random()*90)+1));
}
}
if(rnd==3) {
if(rndd<=10) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,268,1,Math.floor((Math.random()*90)+1));
}
}
if(rnd==1){
if(rndd<=10) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,269,1,Math.floor((Math.random()*90)+10));
}
}
if(rnd==5) {
if(rndd<=10) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,271,1,Math.floor((Math.random()*90)+1));
}
}

if(rnd==6) {
if(rndd<=10) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,270,1,Math.floor((Math.random()*50)+10));
}
}
}
if(io>=40) {
//DROPS ARMAS
var rnd2=Math.floor((Math.random()*25)+1);
if(rnd2==7) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,TACO_ID,1,Math.floor((Math.random()*60)+1));
}
if(rnd2==8) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,PE_ID,1,Math.floor((Math.random()*100)+1));
}
if(rnd2==4) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,FACA_ID,1,Math.floor((Math.random()*90)+1));
}
if(rnd2==10) {
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,TA_ID,1,Math.floor((Math.random()*70)+1));
}
}
	}
	}
	

//
var status="";
var haveNotification=0;
function CheckForNotification(){
	try
	{
		var url = new java.net.URL("https://ws.cubbyusercontent.com/p/_96d85167eafa440683ae46bf4af5d743/notificacao.txt/1462399809");
		var connection = url.openConnection();
		inputStream = connection.getInputStream();
 var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var oldVersao = "";
		while((oldVersao = bufferedVersionReader.readLine()) != null)
		{
			haveNotification += oldVersao;
}
if(oldVersao==0) {
haveNotification=0;
}
if(oldVersao==1) {
haveNotification=1;
}
 bufferedVersionReader.close();
		inputStream.close();
CheckForStatus();
	} catch(err)
	{
	}

}
function CheckForStatus(){
	var outp=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("CheckForStatus()").execute(new org.apache.http.client.methods.HttpGet("https://ws.cubbyusercontent.com/p/_31b6b54457cc4e6693b4890cc711b1ea/notificacao.html/1462400406")).getEntity().writeTo(outp);
status=outp;
print("Carregando Notificaçoes");
	outp.close();
	}
CheckForNotification();
var web=0;
var mostrado=0;
Caiota();
Config();
function Caiota() {
if(mostrado==0) {
mostrado=1;
Config();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{ 
			caiota = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			var WebCaiota=new android.webkit.WebView(ctx);

var webSet = WebCaiota.getSettings();

webSet.setJavaScriptEnabled(true);
WebCaiota.setWebChromeClient(new android.webkit.WebChromeClient());
WebCaiota.setWebViewClient(new android.webkit.WebViewClient());

WebCaiota.loadUrl("http://mcpe.wapka.me/forum2_112314557.xhtml");
var navegador=new android.widget.Button(ctx);
navegador.setText("Abrir No Navegador Padrão");
navegador.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
print("Carregando...");
	ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://mcpe.wapka.me/forum2_112314557.xhtml")));
}
});
var cbotao = new android.widget.Button(ctx);
cbotao.setText("Forum");
layout.addView(cbotao); 
cbotao.setTextColor(android.graphics.Color.WHITE);
layout.setBackgroundColor(android.graphics.Color.GRAY);
			
cbotao.setTextSize("30");
//StatusCheck
var sts=new android.widget.TextView(ctx);
sts.setText(new android.text.Html.fromHtml(status));
var gO=new android.widget.Button(ctx);
gO.setText("Notícias do Administrador");
gO.setTextColor(android.graphics.Color.WHITE);
if(haveNotification==1) {
gO.setText("Notícias do Administrador");
cbotao.setText("Forum (1)");
gO.setTextColor(android.graphics.Color.YELLOW);

layout.removeView(cbotao);
layout.addView(cbotao);
}else{
if(haveNotification==0) {
cbotao.setText("Forum");
layout.removeView(cbotao);
layout.addView(cbotao);
}
}
gO.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
cbotao.setText("Fechar");
layout.addView(sts);
layout.removeView(gO);
layout.removeView(navegador);
layout.removeView(updates);
layout.removeView(WebCaiota);
}
});
//Outros
navegador.setTextSize("17");
			
var updates=new android.widget.Button(ctx);
updates.setText("Buscar Atualização");
updates.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {

var versionCheck=CheckForUpdates();
UpdateTwc();
if(versaopack==novaVersao) {
print("Você tem a ultima versão");
}
if(novaVersao==""){
print("Nenhuma Atualização disponivel");
}
}
});
			cbotao.setOnClickListener(new android.view.View.OnClickListener() {

				onClick: function(v) {

if(web==0) {
cbotao.setText("Fechar");
cbotao.setTextSize("20")
layout.addView(updates);
layout.addView(gO);
layout.addView(navegador);
layout.addView(WebCaiota);

caiota.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER| android.view.Gravity.CENTER,0, 0);
web=1; 
}else{
layout.removeView(navegador);
WebCaiota.loadUrl("http://mcpe.wapka.me/forum2_112314557.xhtml");
layout.removeView(gO);
layout.removeView(updates);
layout.removeView(sts);
cbotao.setText("Forum");
cbotao.setTextSize("30");
layout.removeView(WebCaiota);
caiota.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER| android.view.Gravity.BOTTOM ,0, 2); 
web=0;
}
		}
});


			caiota.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			caiota.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			caiota.setContentView(layout);
			caiota.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER| android.view.Gravity.BOTTOM ,0, 2); 
		}
catch(err){
			print("Erro: " + err);
		
}
}}));
}
}
//
loadtx();
loadty();
loadzx();
loadzy();
function config_choose() {
{
	ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{
				var layoutPlayer = new android.widget.LinearLayout(ctx);
				layoutPlayer.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scrollPlayer = new android.widget.ScrollView(ctx);
				scrollPlayer.addView(layoutPlayer);
							
				var popupPlayer = new android.app.Dialog(ctx); 
				popupPlayer.setContentView(scrollPlayer);
				popupPlayer.setTitle("Configuraçoes Gerais");
				
				var updatesText = new android.widget.TextView(ctx);
				updatesText.setText(new android.text.Html.fromHtml("<h1>Escolha oque configurar<br><br></h1>"));
				layoutPlayer.addView(updatesText);
var tabela=new android.widget.Button(ctx); 
tabela.setText("Configurar Tabela");
tabela.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						
						Update2();
popupPlayer.dismiss();
					}
				});
layoutPlayer.addView(tabela);
//+++++++++
var zoom=new android.widget.Button(ctx); 
zoom.setText("Configurar Zoom");
zoom.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						
						Update();
popupPlayer.dismiss();
					}
				});
layoutPlayer.addView(zoom);
//-------------
				var exitButton = new android.widget.Button(ctx); 
				exitButton.setText("Fechar"); 
				exitButton.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
						popupPlayer.dismiss();
						
					}
				});
				layoutPlayer.addView(exitButton);
				
				
				popupPlayer.show();
			}catch(err)
			{
				print("JANELA POPUP NAO SUPORTADA EM SEU APARELHO");
				clientMessage(err);
			}
		}
	});
}
}
var conf_show=0;
function Config() {
if(conf_show==0) {
conf_show=1;
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{ 
			conf = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			 var tabela = new android.widget.Button(ctx);
tabela.setTextColor(android.graphics.Color.WHITE);
layout.setBackgroundColor(android.graphics.Color.GRAY);
			tabela.setText("Config.");
tabela.setTextSize("24");
			tabela.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
config_choose();

		}
});
layout.addView(tabela);

			conf.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			conf.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

			conf.setContentView(layout);
			conf.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT| android.view.Gravity.BOTTOM ,0, 120); 
		}
catch(err){
			print("Erro: " + err);
		}
}}));
}
}
Config();
//
var mudanca="Erro Ao Carregar Mudanças, clique para tentar novamente";

function CheckForChangelog(){
	var oute=new java.io.ByteArrayOutputStream();
	var response=android.net.http.AndroidHttpClient.newInstance("CheckForChangelog()").execute(new org.apache.http.client.methods.HttpGet("https://ws.cubbyusercontent.com/p/_872d85ffd8674025a60b60df0a4c2a0b/changelog.html/1462337091")).getEntity().writeTo(oute);
mudanca=oute;
	oute.close();

	}
function UpdateTwc() {
if(versaopack<novaVersao &&versaopack<novaVersao2&& !versionChecked){
CheckForChangelog();
ctx.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{
var layoutUpdates = new android.widget.LinearLayout(ctx);
				layoutUpdates.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scrollUpdates = new android.widget.ScrollView(ctx);
				scrollUpdates.addView(layoutUpdates);
							
				var popupUpdates = new android.app.Dialog(ctx); 
				popupUpdates.setContentView(scrollUpdates);
				popupUpdates.setTitle("TheWalkingCraft PE");
				
				var infoText= new android.widget.TextView(ctx);
				infoText.setText(new android.text.Html.fromHtml("<h2>O Mod Tem Uma Nova Atualização, por favor atualize para correções de Bugs e Adicoes :)</h2>"));
				layoutUpdates.addView(infoText);
var threadButton = new android.widget.Button(ctx); 
var wv=new android.widget.TextView(ctx);
layoutUpdates.addView(wv);

				threadButton.setText("📲 Instalar Atualização"); 

layoutUpdates.addView(threadButton);
wv.setText(new android.text.Html.fromHtml(mudanca));
						wv.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
popupUpdates.dismiss();
UpdateTwc();
}
});

				threadButton.setOnClickListener(new android.view.View.OnClickListener()
				{
					onClick: function()
					{
//Vai se fuder!
layoutUpdates.removeView(threadButton);
infoText.setText(new android.text.Html.fromHtml("<h4>🔧 Verificação de Atualização concluida. O The Walking Craft foi atualizado.</h4>"));
layoutUpdates.removeView(infoText);
layoutUpdates.removeView(wv);
layoutUpdates.addView(infoText);
layoutUpdates.addView(wv);
						ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("https://ws.cubbyusercontent.com/p/_471bdc6165c44da18f11e620419419ba/OfficialCraftingDeadModByCaiotaGames.zip/1358918343")));
print("Conectando...");
threadButton.setText("Baixado");

					}
				});
				popupUpdates.show();
			}catch (err)
			{
				clientMessage("ERRO   (  " + err+ "  )" );
				
			}
		}
	});
	}
}

var novaVersao2="";
var novaVersao="";
var versionCheck=CheckForUpdates();
function CheckForUpdates(){
	try
	{
		var url = new java.net.URL("https://ws.cubbyusercontent.com/p/_c1021f965964484c987a5ce33b9d076b/twc_version.txt/1462341853");
		var connection = url.openConnection();
		inputStream = connection.getInputStream();
 var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var oldVersao = "";
		while((oldVersao = bufferedVersionReader.readLine()) !=null)
		{
			novaVersao += oldVersao;
print("Verificação 1 completa");
}

 bufferedVersionReader.close();
		inputStream.close();
//UpdateDebug
var url2 = new java.net.URL("https://ws.cubbyusercontent.com/p/_c97682ee205c49e9a234d716a5f674f6/twc_debug.txt/1462342032");
		var connection = url2.openConnection();
		inputStream2 = connection.getInputStream();
 var bufferedVersionReader2 = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream2));
		var oldversao = "";
		while((oldversao = bufferedVersionReader2.readLine()) !=null)
		{
			novaVersao2 += oldversao;
print("Verificação 2 completa");
}

 bufferedVersionReader2.close();
		inputStream2.close();
//Otherss
UpdateTwc();
	} catch(err)
	{
		print("Não foi possível verificar atualizacoes!");
if(oldVersao>=1&&versaopack==novaVersao){
print("Voce Tem a Ultima Versão");
}
if(versaopack==novaVersao) {
print("Você tem a ultima versão");
}
if(novaVersao==""){
print("Nenhuma Atualização disponivel");
//-
if(versaopack==novaVersao2) {
print("Você tem a ultima versão");
}
if(novaVersao2==""){
print("Nenhuma Atualização disponivel");
}
	}
}
}
//
ModPE.setItem(501,"ender_eye",0,"§fC§2A§3I§4O§5T§6A G§aA§cM§7E§8S");

ModPE.setItem(407,"record_13",0,"Cantil Vazio");
//ModPE.removeCraft(407);

ModPE.setItem(399,"record_cat",0,"Bateria");
//ModPE.removeCraft(399);
//Palito Reforcado
ModPE.setItem(451,"item_frame",0,"Palito Reforçado");

//Coca
ModPE.setItem(505,"gold_horse_armor",0,"Bandagem");
//ModPE.removeCraft(505);
ModPE.setItem(456,"fireworks",0,"Bolsa de Sangue");
//ModPE.removeCraft(456);
//FOOD ITEMS :p
ModPE.setFoodItem(502,"repeater", 0,5,"Goiaba");
ModPE.setFoodItem(401,"record_blocks",0,0,"§2Cantil Cheio");
//ModPE.removeCraft(401);
ModPE.setFoodItem(410,"mushroom_stew", 0,9,"Sopa de Cactos");

ModPE.setFoodItem(452,"diamond_horse_armor",0,20,"Torta de Maça");

ModPE.setFoodItem(402,"record_chirp",0,0,"Coca-Cola");
//ModPE.removeCraft(402);
ModPE.setFoodItem(506,"record_far",0,0,"Água Mineral");
//ModPE.removeCraft(506);
ModPE.setFoodItem(453,"record_mall",0,0," Energético");

ModPE.setFoodItem(416,"ender_pearl",0,0,"§6Cantil Envenenado");
//ModPE.removeCraft(416);

ModPE.setFoodItem(415,"iron_horse_armor",0,6,"Barra de Cereal");

ModPE.setItem(329,"saddle",0,"Kit de Morfina");
//ModPE.removeCraft(329);

ModPE.setItem(455,"name_tag",0,"Seringa");
//ModPE.removeCraft(455);
ModPE.setItem(457,"lead",0,"§2Seringa com Morfina");

ModPE.setItem(408,"record_mellohi",0,"Bandagem Suja");
//ModPE.removeCraft(408);

ModPE.setItem(420,"record_strad",0,"Apoiadeira");
Item.setHandEquipped(420,true);

//ModPE.RemoveItensFromCraft
ModPE.setItem(411,"book_writable",0,"Taboa com Prego");
Item.setHandEquipped(411,true);
ModPE.setItem(412,"carrot_on_a_stick",0,"Barra de Aço");
Item.setHandEquipped(412,true);
ModPE.setItem(413,"hopper",0,"Taboa com Arame");
Item.setHandEquipped(413,true);
ModPE.setItem(414,"record_ward",0,"Facão");
Item.setHandEquipped(414,true);
ModPE.setItem(503,"fireworks_charge", 0," Machadinha");
Item.setHandEquipped(503,true);
//CrossBow
ModPE.setItem(450,"ruby",0,"Crossbow");
Item.setHandEquipped(450,true);

//--------------------------------
ModPE.setItem(418,"record_11",0,"Controle Remoto");
//ModPE.removeCraft(418);
Block.defineBlock(154,ChatColor.YELLOW+"C4", [["stonecutter",3],["stonecutter",2]],1,false,0,1);
Block.setShape(154,0,0,0,1,0.4,1);
Block.setDestroyTime(154,5);


Block.defineBlock(252,"Filtro De Água",[["stonecutter",3],["stonecutter",2]],1,true,0,0);
Block.setDestroyTime(252,2);

Block.defineBlock(251, "Luth "+ChatColor.RED+"Vermelha",["stained_clay",14],1,false,0);
Block.setShape(251,0,0,0,1,0.2,1);
Block.defineBlock(249,"Luth "+ChatColor.GREEN+"Verde", ["stained_clay",5 ],1,false,0);
Block.setShape(249,0,0,0,1,0.2,1);

Block.defineBlock(248,"Luth "+ChatColor.YELLOW+"Amarelo", ["stained_clay",4],1,false,0);
Block.setShape(248,0,0,0,1,0.2,1);
Block.defineBlock(250,"Luth Branco", ["stained_clay",0,],1,false,0);
Block.setShape(250,0,0,0,1,0.2,1);

var lastWorld="";
 function newLevel(){
if(Level.getWorldDir()==lastWorld) {
crafted=0;
}else{
lastWorld=Level.getWorldDir();
}
if(crafted==0) {
Player.addItemCreativeInv(501,1);
Player.addItemCreativeInv(407,1);
Player.addItemCreativeInv(399,1);
Player.addItemCreativeInv(451,1);
Player.addItemCreativeInv(505,1);
Player.addItemCreativeInv(456,1);
Player.addItemCreativeInv(502,1);
Player.addItemCreativeInv(401,1);
Player.addItemCreativeInv(410,1);
Player.addItemCreativeInv(452,1);
Player.addItemCreativeInv(402,1);
Player.addItemCreativeInv(506,1);
Player.addItemCreativeInv(416,1);
Player.addItemCreativeInv(329,1);
Player.addItemCreativeInv(415,1);
Player.addItemCreativeInv(455,1);
Player.addItemCreativeInv(457,1);
Player.addItemCreativeInv(408,1);
Player.addItemCreativeInv(420,1);
Player.addItemCreativeInv(411,1);
Player.addItemCreativeInv(412,1);
Player.addItemCreativeInv(413,1);
Player.addItemCreativeInv(414,1);
Player.addItemCreativeInv(503,1);
Player.addItemCreativeInv(450,1);
Player.addItemCreativeInv(418,1);
Player.addItemCreativeInv(154,1);
Player.addItemCreativeInv(252,1);
Player.addItemCreativeInv(251,1);
Player.addItemCreativeInv(249,1);
Player.addItemCreativeInv(248,1);
Player.addItemCreativeInv(250,1);
//@Cdjslapppp
Item.addShapedRecipe(252,1,0,[" b "," a "," f "],["b",325,0,"a",399,0,"f",265,0]);

Item.addShapedRecipe(154,1,0,["pbp","frf","ppp"],["p",4,0,"f",265,0,"r",331,0,"b",399,0]);
Item.addShapedRecipe(450,1,0,["ppt","pp ","t p"],["p",451,0,"t",287,0]);
Item.addShapedRecipe(420,1,0,["   ","ptp","   "],["p", 451,0,"t",287,0]);
Item.addShapedRecipe(457,1,0,["cm ","   ","   "],["c",455,0,"m",329,0]);
Item.addShapedRecipe(415,1,0,[" a ","pcp"," t "],["a", 353,0,"p", 339,0,"c", 351,3,"t", 296,0]);
Item.addShapedRecipe(410,1,0,[" s "," c "," t "],["s", 280,0,"c", 81,0,"t", 281,0]);
Item.addShapedRecipe(451,1,0,["   "," p "," p "],["p", 280,0]);
Item.addShapedRecipe(452,1,0,["tmt","aoa","tmt"],["m",260,0,"a",353,0,"t",296,0,"o",344,0]);

Item.addShapedRecipe(30,1,0,["ttt","ttt","ttt"],["t",287,0]);
crafted=1;

}

ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(caiota != null) {
					caiota.dismiss();
					caiota= null;
mostrado=0;
web=1;
			}
if(conf != null) {
					conf.dismiss();
					conf= null;
conf_show=0;
			}
			}catch(err){
				print("Erro: " + err);
			}
		}}));
loadSave();
lastGame=Level.getGameMode();
	 msgl=1;
	 spawne=1;
	
clientMessage("§6                 THE WALKING CRAFT PE "+versao);
clientMessage(bmsg);
clientMessage(ChatColor.RED+wmsg);
clientMessage("Use §6/cmd §fpara ver os comandos disponíveis");
clientMessage("Use §6/tabela on | off §fpara mostrar Sede, Estamina e Sangue");
clientMessage("Use §6/casa on | off §fpara ativar a geração de Estruturas\nUse §6/zoom §fpara ativar o Zoom!\n ");
//@@@
if(tx==NaN) {
tx=1;
}
if(ty==NaN) {
ty=1;
}
}

function saveData() {
saveDia();
saveEst();
	saveStamina();
saveCasa();
savek();
	datahumanidade();
	dataosso();
	datasede();
	dataz();
	saveSobrevivente();
}
function loadSave() {
loadDia();
loadSobrevivente();
loadEst();
	loadStamina();
loadz();
loadosso();
loadsede();
loaden();
loadhumanidade();
loadCasa();
loadk();
}
function removeGuis() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(bestaGui != null) {
					bestaGui.dismiss();
					bestaGui= null;
isComArma=0;
shoot.setText("Remover");
			}
			}catch(err){
				print("Erro: " + err);
			}
		}}));
					
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGUI != null) {
					simpleGUI.dismiss();
					simpleGUI = null;
				}
			}catch(err){
				print("Error: "+err);
			}
		}}));
	}
if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGui != null) {
					simpleGui.dismiss();
					simpleGui = null;
					
			}
			}catch(err){
				print("Erro: " + err);
			}
		}}));
	} 
isZoom=0;
ModPE.resetFov();
}
function destroyBlock(x,y,z,bd,d) {
bd=getTile(x,y,z);


if(bd==BRANCO||bd==AMARELO||bd==VERDE||bd==VERDE&&podeUsar==0&&Level.getGameMode()==0) {
preventDefault();
stamina=stamina+30;
}
if(Level.getGameMode()==0) {



stamina=stamina-30;
if(bd==106&&Player.getCarriedItem()==359) {
Level.destroyBlock(x,y,z,false);
preventDefault();
Level.dropItem(x,y,z,0,287,Math.floor((Math.random()*2)+1));
}

}
if(bd==30&&Level.getGameMode()==0) {
preventDefault();
Level.dropItem(x,y,z,0,287,9);
Level.setTile(x,y,z,0);
}
}
var cbloco=[13,48,4,13,48,4,1,17,12,3];
var dbloco=[13,48,4,13,48,4,1,17,12,3,40];
var ebloco=[13,48,4,13,48,4,1,17,12,3];
function casa3() {
var br=Math.floor((Math.random()*(cbloco.length)+1));
var be=Math.floor((Math.random()*(dbloco.length)+1));
var bf=Math.floor((Math.random()*(ebloco.length)+1));
var rnd=Math.floor((Math.random()*4)+1);
setTile(x+1,y,z,cbloco[br],0);
setTile(x+1,y+2,z,cbloco[br],0);
setTile(x+1,y+1,z,cbloco[br],0);
setTile(x+2,y,z,cbloco[br],0);
setTile(x+2,y+2,z,cbloco[br],0);
setTile(x+2,y+1,z,dbloco[be],0);
setTile(x+3,y,z,cbloco[br],0);
setTile(x+3,y+1,z,cbloco[br],0);
setTile(x+4,y,z,ebloco[bf],0);
setTile(x+5,y,z,cbloco[br],0);
if(rnd==1) {
setTile(x+2,y+1,z+3,VERMELHO);
}
if(rnd==2) {
setTile(x+2,y+1,z+3,VERDE);
}
if(rnd==3) {
setTile(x+2,y+1,z+3,AMARELO);
}
if(rnd==4) {
setTile(x+2,y+1,z+3,BRANCO);
}
setTile(x+6,y,z,cbloco[br],0);
setTile(x+1,y,z+1,cbloco[br],0);
setTile(x+1,y+2,z+1,cbloco[br],0);
setTile(x+1,y+1,z+1,cbloco[br],0);
setTile(x+1,y,z+2,cbloco[br],0);

setTile(x+1,y+2,z+2,cbloco[br],0);
setTile(x+1,y+1,z+2,cbloco[br],0);
setTile(x+1,y,z+3,cbloco[br],0);
setTile(x+1,y+2,z+3,dbloco[be],0);
setTile(x+1,y+1,z+3,cbloco[br],0);
setTile(x+1,y,z+4,ebloco[bf],0);
setTile(x+1,y,z+5,ebloco[bf],0);
setTile(x+1,y,z+6,cbloco[br],0);
setTile(x+2,y,z+1,cbloco[br],0);
setTile(x+2,y,z+2,dbloco[be],0);
setTile(x+2,y,z+3,cbloco[br],0);
setTile(x+2,y,z+4,cbloco[br],0);
setTile(x+2,y,z+5,cbloco[br],0);
setTile(x+2,y,z+6,cbloco[br],0);
setTile(x+3,y,z+1,cbloco[br],0);
setTile(x+3,y,z+2,cbloco[br],0);
setTile(x+3,y,z+3,cbloco[br],0);
setTile(x+3,y,z+4,cbloco[br],0);
setTile(x+3,y,z+5,cbloco[br],0);
setTile(x+3,y,z+6,cbloco[br],0);
setTile(x+4,y,z+1,cbloco[br],0);
setTile(x+4,y,z+2,cbloco[br],0);
setTile(x+4,y,z+3,cbloco[br],0);
setTile(x+4,y,z+4,cbloco[br],0);
setTile(x+4,y,z+5,cbloco[br],0);
setTile(x+4,y,z+6,cbloco[br],0);
setTile(x+5,y,z+1,cbloco[br],0);
setTile(x+5,y,z+2,cbloco[br],0);
setTile(x+5,y,z+3,cbloco[br],0);
setTile(x+5,y,z+4,cbloco[br],0);
setTile(x+5,y,z+5,cbloco[br],0);
setTile(x+5,y,z+6,cbloco[br],0);
setTile(x+6,y,z+1,cbloco[br],0);
setTile(x+6,y,z+2,cbloco[br],0);
setTile(x+6,y,z+3,cbloco[br],0);
setTile(x+6,y,z+4,cbloco[br],0);
setTile(x+6,y,z+5,cbloco[br],0);
setTile(x+6,y,z+6,cbloco[br],0);
}
function torre2() {
var rnd=Math.floor((Math.random()*3)+1);
if(rnd==1) {
setTile(x+1,y,z,4)
setTile(x+2,y,z,4);
setTile(x+3,y,z,4);
setTile(x+4,y,z,4);
setTile(x+1,y,z+1,4)
setTile(x+2,y,z+1,4);
setTile(x+3,y,z+1,4);
setTile(x+4,y,z+1,4);
setTile(x+1,y,z+2,4)
setTile(x+2,y,z+2,4);
setTile(x+3,y,z+2,4);
setTile(x+4,y,z+2,4);
setTile(x+1,y,z+3,4)
setTile(x+2,y,z+3,4);
setTile(x+3,y,z+3,4);
setTile(x+4,y,z+3,4);
setTile(x+1,y,z+4,4)
setTile(x+2,y,z+4,4);
setTile(x+3,y,z+4,4);
setTile(x+4,y,z+4,4);
setTile(x,y+1,z,4);
setTile(x,y+2,z,4);
setTile(x,y+3,z,4);
setTile(x,y+4,z,4);
setTile(x,y+5,z,4);
setTile(x,y+6,z,4);
setTile(x,y+7,z,48);
setTile(x,y+8,z,101);
setTile(x+1,y+1,z,4);
setTile(x+2,y+1,z,4);
setTile(x+3,y+1,z,4);
setTile(x+4,y+1,z,4);
setTile(x+1,y+2,z,4);
setTile(x+2,y+2,z,4);
setTile(x+3,y+2,z,4);
setTile(x+4,y+2,z,4);
setTile(x+1,y+3,z,4);
setTile(x+2,y+3,z,48);
setTile(x+3,y+3,z,4);
setTile(x+4,y+3,z,4);
setTile(x+1,y+4,z,4);
setTile(x+2,y+4,z,4);
setTile(x+3,y+4,z,4);
setTile(x+4,y+4,z,4);
setTile(x+1,y+5,z,4);
setTile(x+2,y+5,z,48);
setTile(x+3,y+5,z,4);
setTile(x+4,y+5,z,4);
setTile(x+1,y+6,z,4);
setTile(x+2,y+6,z,48);
setTile(x+3,y+6,z,4);
setTile(x+4,y+6,z,4);
setTile(x+1,y+7,z,4);
setTile(x+1,y+8,z,101);
setTile(x+2,y+7,z,4);
setTile(x+2,y+8,z,101);
setTile(x+3,y+7,z,4);
setTile(x+3,y+8,z,101);
setTile(x+4,y+7,z,4);
setTile(x+4,y+8,z,101);
setTile(x,y+1,z+1,4);
setTile(x,y+1,z+2,48);
setTile(x,y+1,z+3,4);
setTile(x,y+1,z+4,48);
setTile(x,y+2,z+1,48);
setTile(x,y+2,z+2,4);
setTile(x,y+2,z+3,4);
setTile(x,y+2,z+4,4);
setTile(x,y+3,z+1,4);
setTile(x,y+3,z+2,4);
setTile(x,y+3,z+3,4);
setTile(x,y+3,z+4,4);
setTile(x,y+4,z+1,48);
setTile(x,y+4,z+2,4);
setTile(x,y+4,z+3,4);
setTile(x,y+4,z+4,48);
setTile(x,y+5,z+1,4);
setTile(x,y+5,z+2,4);
setTile(x,y+5,z+3,4);
setTile(x,y+5,z+4,4);
setTile(x,y+6,z+1,4);
setTile(x,y+7,z+1,4);
setTile(x,y+8,z+1,101);
setTile(x,y+6,z+2,4);
setTile(x,y+7,z+2,48);
setTile(x,y+8,z+2,101);
setTile(x,y+6,z+3,4);
setTile(x,y+7,z+3,4);
setTile(x,y+8,z+3,101);
setTile(x,y+6,z+4,4);
setTile(x,y+7,z+4,4);
setTile(x,y+8,z+4,101);
setTile(x+1,y+1,z+4,4);
setTile(x+2,y+1,z+4,48);
setTile(x+3,y+1,z+4,4);
setTile(x+4,y+1,z+4,4);
setTile(x+1,y+2,z+4,48);
setTile(x+2,y+2,z+4,4);
setTile(x+3,y+2,z+4,4);
setTile(x+4,y+2,z+4,4);
setTile(x+1,y+3,z+4,4);
setTile(x+2,y+3,z+4,4);
setTile(x+3,y+3,z+4,4);
setTile(x+4,y+3,z+4,48);
setTile(x+1,y+4,z+4,4);
setTile(x+2,y+4,z+4,4);
setTile(x+3,y+4,z+4,48);
setTile(x+4,y+4,z+4,4);
setTile(x+1,y+5,z+4,4);
setTile(x+2,y+5,z+4,4);
setTile(x+3,y+5,z+4,4);
setTile(x+4,y+5,z+4,4);
setTile(x+1,y+6,z+4,48);
setTile(x+2,y+6,z+4,4);
setTile(x+3,y+6,z+4,4);
setTile(x+4,y+6,z+4,48);
setTile(x+1,y+7,z+4,4);
setTile(x+1,y+8,z+4,101);
setTile(x+2,y+8,z+4,101);
setTile(x+2,y+7,z+4,4);
setTile(x+3,y+8,z+4,101);
setTile(x+3,y+7,z+4,4);
//rnd
var rnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
setTile(x+2,y+8,z+2,BRANCO);
}
if(rnd==2) {
setTile(x+2,y+8,z+2,AMARELO);
}
if(rnd==3) {
setTile(x+2,y+8,z+2,VERMELHO);
}
if(rnd==4) {
setTile(x+2,y+8,z+2,VERDE);
}
//continue
setTile(x+3,y+8,z+4,101);
setTile(x+4,y+7,z+4,4);
setTile(x+4,y+8,z+4,101);
setTile(x+4,y+1,z+2,85,Math.floor((Math.random()*4)+1));
setTile(x+4,y+1,z+2,4);
setTile(x+4,y+1,z+3,4);
setTile(x+4,y+1,z+4,4);
setTile(x+4,y+2,z+2,85,Math.floor((Math.random()*4)+1));
setTile(x+4,y+2,z+2,4);
setTile(x+4,y+2,z+3,4);
setTile(x+4,y+2,z+4,4);
setTile(x+4,y+3,z+1,4);
setTile(x+4,y+3,z+2,4);
setTile(x+4,y+3,z+3,4);
setTile(x+4,y+3,z+4,4);
setTile(x+4,y+4,z+1,4);
setTile(x+4,y+4,z+2,4);
setTile(x+4,y+4,z+3,4);
setTile(x+4,y+4,z+4,4);
setTile(x+4,y+5,z+1,4);
setTile(x+4,y+5,z+2,4);
setTile(x+4,y+5,z+3,4);
setTile(x+4,y+5,z+4,4);
setTile(x+4,y+6,z+1,4);
setTile(x+4,y+6,z+2,4);
setTile(x+4,y+6,z+3,4);
setTile(x+4,y+6,z+4,4);
setTile(x+4,y+7,z+1,4);
setTile(x+4,y+8,z+1,101);
setTile(x+4,y+7,z+2,4);
setTile(x+4,y+8,z+2,101);
setTile(x+4,y+7,z+3,4);
setTile(x+4,y+8,z+3,101);
setTile(x+4,y+7,z+4,4);
setTile(x+4,y+8,z+4,101);
//ESCADAS
setTile(x+1,y+1,z+3,4);
setTile(x+3,y+1,z+2,85);
setTile(x+3,y+2,z+2,85);
setTile(x+3,y+3,z+2,85);
setTile(x+3,y+1,z+3,85);
setTile(x+3,y+2,z+3,85);
setTile(x+2,y+1,z+3,85);
setTile(x+2,y+2,z+3,4);
setTile(x+3,y+3,z+3,4);
setTile(x+3,y+4,z+2,4);
setTile(x+3,y+5,z+1,4);
setTile(x+2,y+6,z+1,4);

//TERRAÇO (ah? kkk)
setTile(x+1,y+7,z+1,4);
setTile(x+2,y+7,z+1,0);
setTile(x+3,y+7,z+1,4);
setTile(x+4,y+7,z+1,4);
setTile(x+3,y+7,z+3,4);
setTile(x+2,y+7,z+2,4);
setTile(x+3,y+7,z+2,4);
setTile(x+1,y+7,z+3,4);
setTile(x+3,y+7,z+1,0);
setTile(x+3,y+7,z+2,0);
setTile(x+2,y+7,z+3,4);
setTile(x+1,y+7,z+2,4);
setTile(x+3,y+7,z+3,0);
}
if(rnd==2) {
setTile(x+1,y,z,98)
setTile(x+2,y,z,98);
setTile(x+3,y,z,98);
setTile(x+4,y,z,98);
setTile(x+1,y,z+1,98)
setTile(x+2,y,z+1,98);
setTile(x+3,y,z+1,98);
setTile(x+4,y,z+1,98);
setTile(x+1,y,z+2,98)
setTile(x+2,y,z+2,98);
setTile(x+3,y,z+2,98);
setTile(x+4,y,z+2,98);
setTile(x+1,y,z+3,98)
setTile(x+2,y,z+3,98);
setTile(x+3,y,z+3,98);
setTile(x+4,y,z+3,98);
setTile(x+1,y,z+4,98)
setTile(x+2,y,z+4,98);
setTile(x+3,y,z+4,98);
setTile(x+4,y,z+4,98);
setTile(x,y+1,z,98);
setTile(x,y+2,z,98);
setTile(x,y+3,z,98);
setTile(x,y+4,z,98);
setTile(x,y+5,z,98);
setTile(x,y+6,z,98);
setTile(x,y+7,z,48);
setTile(x,y+8,z,101);
setTile(x+1,y+1,z,98);
setTile(x+2,y+1,z,98);
setTile(x+3,y+1,z,98);
setTile(x+4,y+1,z,98);
setTile(x+1,y+2,z,98);
setTile(x+2,y+2,z,98);
setTile(x+3,y+2,z,98);
setTile(x+4,y+2,z,98);
setTile(x+1,y+3,z,98);
setTile(x+2,y+3,z,48);
setTile(x+3,y+3,z,98);
setTile(x+4,y+3,z,98);
setTile(x+1,y+4,z,98);
setTile(x+2,y+4,z,98);
setTile(x+3,y+4,z,98);
setTile(x+4,y+4,z,98);
setTile(x+1,y+5,z,98);
setTile(x+2,y+5,z,48);
setTile(x+3,y+5,z,98);
setTile(x+4,y+5,z,98);
setTile(x+1,y+6,z,98);
setTile(x+2,y+6,z,48);
setTile(x+3,y+6,z,98);
setTile(x+4,y+6,z,98);
setTile(x+1,y+7,z,98);
setTile(x+1,y+8,z,101);
setTile(x+2,y+7,z,98);
setTile(x+2,y+8,z,101);
setTile(x+3,y+7,z,98);
setTile(x+3,y+8,z,101);
setTile(x+4,y+7,z,98);
setTile(x+4,y+8,z,101);
setTile(x,y+1,z+1,98);
setTile(x,y+1,z+2,48);
setTile(x,y+1,z+3,98);
setTile(x,y+1,z+4,48);
setTile(x,y+2,z+1,48);
setTile(x,y+2,z+2,98);
setTile(x,y+2,z+3,98);
setTile(x,y+2,z+4,98);
setTile(x,y+3,z+1,98);
setTile(x,y+3,z+2,98);
setTile(x,y+3,z+3,98);
setTile(x,y+3,z+4,98);
setTile(x,y+4,z+1,48);
setTile(x,y+4,z+2,98);
setTile(x,y+4,z+3,98);
setTile(x,y+4,z+4,48);
setTile(x,y+5,z+1,98);
setTile(x,y+5,z+2,98);
setTile(x,y+5,z+3,98);
setTile(x,y+5,z+4,98);
setTile(x,y+6,z+1,98);
setTile(x,y+7,z+1,98);
setTile(x,y+8,z+1,101);
setTile(x,y+6,z+2,98);
setTile(x,y+7,z+2,48);
setTile(x,y+8,z+2,101);
setTile(x,y+6,z+3,98);
setTile(x,y+7,z+3,98);
setTile(x,y+8,z+3,101);
setTile(x,y+6,z+4,98);
setTile(x,y+7,z+4,98);
setTile(x,y+8,z+4,101);
setTile(x+1,y+1,z+4,98);
setTile(x+2,y+1,z+4,48);
setTile(x+3,y+1,z+4,98);
setTile(x+4,y+1,z+4,98);
setTile(x+1,y+2,z+4,48);
setTile(x+2,y+2,z+4,98);
setTile(x+3,y+2,z+4,98);
setTile(x+4,y+2,z+4,98);
setTile(x+1,y+3,z+4,98);
setTile(x+2,y+3,z+4,98);
setTile(x+3,y+3,z+4,98);
setTile(x+4,y+3,z+4,48);
setTile(x+1,y+4,z+4,98);
setTile(x+2,y+4,z+4,98);
setTile(x+3,y+4,z+4,48);
setTile(x+4,y+4,z+4,98);
setTile(x+1,y+5,z+4,98);
setTile(x+2,y+5,z+4,98);
setTile(x+3,y+5,z+4,98);
setTile(x+4,y+5,z+4,98);
setTile(x+1,y+6,z+4,48);
setTile(x+2,y+6,z+4,98);
setTile(x+3,y+6,z+4,98);
setTile(x+4,y+6,z+4,48);
setTile(x+1,y+7,z+4,98);
setTile(x+1,y+8,z+4,101);
setTile(x+2,y+8,z+4,101);
setTile(x+2,y+7,z+4,98);
setTile(x+3,y+8,z+4,101);
setTile(x+3,y+7,z+4,98);
//rnd
var rnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
setTile(x+2,y+8,z+2,BRANCO);
}
if(rnd==2) {
setTile(x+2,y+8,z+2,AMARELO);
}
if(rnd==3) {
setTile(x+2,y+8,z+2,VERMELHO);
}
if(rnd==4) {
setTile(x+2,y+8,z+2,VERDE);
}
//continue
setTile(x+3,y+8,z+4,101);
setTile(x+4,y+7,z+4,98);
setTile(x+4,y+8,z+4,101);
setTile(x+4,y+1,z+2,85,Math.floor((Math.random()*4)+1));
setTile(x+4,y+1,z+2,98);
setTile(x+4,y+1,z+3,98);
setTile(x+4,y+1,z+4,98);
setTile(x+4,y+2,z+2,85,Math.floor((Math.random()*4)+1));
setTile(x+4,y+2,z+2,98);
setTile(x+4,y+2,z+3,98);
setTile(x+4,y+2,z+4,98);
setTile(x+4,y+3,z+1,98);
setTile(x+4,y+3,z+2,98);
setTile(x+4,y+3,z+3,98);
setTile(x+4,y+3,z+4,98);
setTile(x+4,y+4,z+1,98);
setTile(x+4,y+4,z+2,98);
setTile(x+4,y+4,z+3,98);
setTile(x+4,y+4,z+4,98);
setTile(x+4,y+5,z+1,98);
setTile(x+4,y+5,z+2,98);
setTile(x+4,y+5,z+3,98);
setTile(x+4,y+5,z+4,98);
setTile(x+4,y+6,z+1,98);
setTile(x+4,y+6,z+2,98);
setTile(x+4,y+6,z+3,98);
setTile(x+4,y+6,z+4,98);
setTile(x+4,y+7,z+1,98);
setTile(x+4,y+8,z+1,101);
setTile(x+4,y+7,z+2,98);
setTile(x+4,y+8,z+2,101);
setTile(x+4,y+7,z+3,98);
setTile(x+4,y+8,z+3,101);
setTile(x+4,y+7,z+4,98);
setTile(x+4,y+8,z+4,101);
//ESCADAS
setTile(x+1,y+1,z+3,98);
setTile(x+3,y+1,z+2,85);
setTile(x+3,y+2,z+2,85);
setTile(x+3,y+3,z+2,85);
setTile(x+3,y+1,z+3,85);
setTile(x+3,y+2,z+3,85);
setTile(x+2,y+1,z+3,85);
setTile(x+2,y+2,z+3,98);
setTile(x+3,y+3,z+3,98);
setTile(x+3,y+4,z+2,98);
setTile(x+3,y+5,z+1,98);
setTile(x+2,y+6,z+1,98);

//TERRAÇO (ah? kkk)
setTile(x+1,y+7,z+1,98);
setTile(x+2,y+7,z+1,0);
setTile(x+3,y+7,z+1,98);
setTile(x+4,y+7,z+1,98);
setTile(x+3,y+7,z+3,98);
setTile(x+2,y+7,z+2,98);
setTile(x+3,y+7,z+2,98);
setTile(x+1,y+7,z+3,98);
setTile(x+3,y+7,z+1,0);
setTile(x+3,y+7,z+2,0);
setTile(x+2,y+7,z+3,98);
setTile(x+1,y+7,z+2,98);
setTile(x+3,y+7,z+3,0);
}
if(rnd==3) {
setTile(x+1,y,z,5)
setTile(x+2,y,z,5);
setTile(x+3,y,z,5);
setTile(x+4,y,z,5);
setTile(x+1,y,z+1,5)
setTile(x+2,y,z+1,5);
setTile(x+3,y,z+1,5);
setTile(x+4,y,z+1,5);
setTile(x+1,y,z+2,5)
setTile(x+2,y,z+2,5);
setTile(x+3,y,z+2,5);
setTile(x+4,y,z+2,5);
setTile(x+1,y,z+3,5)
setTile(x+2,y,z+3,5);
setTile(x+3,y,z+3,5);
setTile(x+4,y,z+3,5);
setTile(x+1,y,z+4,5)
setTile(x+2,y,z+4,5);
setTile(x+3,y,z+4,5);
setTile(x+4,y,z+4,5);
setTile(x,y+1,z,5);
setTile(x,y+2,z,5);
setTile(x,y+3,z,5);
setTile(x,y+4,z,5);
setTile(x,y+5,z,5);
setTile(x,y+6,z,5);
setTile(x,y+7,z,5,1);
setTile(x,y+8,z,85,2);
setTile(x+1,y+1,z,5);
setTile(x+2,y+1,z,5);
setTile(x+3,y+1,z,5);
setTile(x+4,y+1,z,5);
setTile(x+1,y+2,z,5);
setTile(x+2,y+2,z,5);
setTile(x+3,y+2,z,5);
setTile(x+4,y+2,z,5);
setTile(x+1,y+3,z,5);
setTile(x+2,y+3,z,5,3);
setTile(x+3,y+3,z,5);
setTile(x+4,y+3,z,5);
setTile(x+1,y+4,z,5);
setTile(x+2,y+4,z,5);
setTile(x+3,y+4,z,5);
setTile(x+4,y+4,z,5);
setTile(x+1,y+5,z,5);
setTile(x+2,y+5,z,5,2);
setTile(x+3,y+5,z,5);
setTile(x+4,y+5,z,5);
setTile(x+1,y+6,z,5);
setTile(x+2,y+6,z,5,1);
setTile(x+3,y+6,z,5);
setTile(x+4,y+6,z,5);
setTile(x+1,y+7,z,5);
setTile(x+1,y+8,z,85,2);
setTile(x+2,y+7,z,5);
setTile(x+2,y+8,z,85,2);
setTile(x+3,y+7,z,5);
setTile(x+3,y+8,z,85,2);
setTile(x+4,y+7,z,5);
setTile(x+4,y+8,z,85,2);
setTile(x,y+1,z+1,5);
setTile(x,y+1,z+2,5,2);
setTile(x,y+1,z+3,5);
setTile(x,y+1,z+4,5,2);
setTile(x,y+2,z+1,5,3);
setTile(x,y+2,z+2,5);
setTile(x,y+2,z+3,5);
setTile(x,y+2,z+4,5);
setTile(x,y+3,z+1,5);
setTile(x,y+3,z+2,5);
setTile(x,y+3,z+3,5);
setTile(x,y+3,z+4,5);
setTile(x,y+4,z+1,5,2);
setTile(x,y+4,z+2,5);
setTile(x,y+4,z+3,5);
setTile(x,y+4,z+4,5,1);
setTile(x,y+5,z+1,5);
setTile(x,y+5,z+2,5);
setTile(x,y+5,z+3,5);
setTile(x,y+5,z+4,5);
setTile(x,y+6,z+1,5);
setTile(x,y+7,z+1,5);
setTile(x,y+8,z+1,85,2);
setTile(x,y+6,z+2,5);
setTile(x,y+7,z+2,5,3);
setTile(x,y+8,z+2,85,2);
setTile(x,y+6,z+3,5);
setTile(x,y+7,z+3,5);
setTile(x,y+8,z+3,85,2);
setTile(x,y+6,z+4,5);
setTile(x,y+7,z+4,5);
setTile(x,y+8,z+4,85,2);
setTile(x+1,y+1,z+4,5);
setTile(x+2,y+1,z+4,5,3);
setTile(x+3,y+1,z+4,5);
setTile(x+4,y+1,z+4,5);
setTile(x+1,y+2,z+4,5,4);
setTile(x+2,y+2,z+4,5);
setTile(x+3,y+2,z+4,5);
setTile(x+4,y+2,z+4,5);
setTile(x+1,y+3,z+4,5);
setTile(x+2,y+3,z+4,5);
setTile(x+3,y+3,z+4,5);
setTile(x+4,y+3,z+4,5,1);
setTile(x+1,y+4,z+4,5);
setTile(x+2,y+4,z+4,5);
setTile(x+3,y+4,z+4,5,2);
setTile(x+4,y+4,z+4,5);
setTile(x+1,y+5,z+4,5);
setTile(x+2,y+5,z+4,5);
setTile(x+3,y+5,z+4,5);
setTile(x+4,y+5,z+4,5);
setTile(x+1,y+6,z+4,5,3);
setTile(x+2,y+6,z+4,5);
setTile(x+3,y+6,z+4,5);
setTile(x+4,y+6,z+4,5,3);
setTile(x+1,y+7,z+4,5);
setTile(x+1,y+8,z+4,85,2);
setTile(x+2,y+8,z+4,85,2);
setTile(x+2,y+7,z+4,5);
setTile(x+3,y+8,z+4,85,2);
setTile(x+3,y+7,z+4,5);
//rnd
var rnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
setTile(x+2,y+8,z+2,BRANCO);
}
if(rnd==2) {
setTile(x+2,y+8,z+2,AMARELO);
}
if(rnd==3) {
setTile(x+2,y+8,z+2,VERMELHO);
}
if(rnd==4) {
setTile(x+2,y+8,z+2,VERDE);
}
//continue
setTile(x+3,y+8,z+4,85,2);
setTile(x+4,y+7,z+4,5);
setTile(x+4,y+8,z+4,85,2);
setTile(x+4,y+1,z+2,85,Math.floor((Math.random()*4)+1));
setTile(x+4,y+1,z+2,5);
setTile(x+4,y+1,z+3,5);
setTile(x+4,y+1,z+4,5);
setTile(x+4,y+2,z+2,85,Math.floor((Math.random()*4)+1));
setTile(x+4,y+2,z+2,5);
setTile(x+4,y+2,z+3,5);
setTile(x+4,y+2,z+4,5);
setTile(x+4,y+3,z+1,5);
setTile(x+4,y+3,z+2,5);
setTile(x+4,y+3,z+3,5);
setTile(x+4,y+3,z+4,5);
setTile(x+4,y+4,z+1,5);
setTile(x+4,y+4,z+2,5);
setTile(x+4,y+4,z+3,5);
setTile(x+4,y+4,z+4,5);
setTile(x+4,y+5,z+1,5);
setTile(x+4,y+5,z+2,5);
setTile(x+4,y+5,z+3,5);
setTile(x+4,y+5,z+4,5);
setTile(x+4,y+6,z+1,5);
setTile(x+4,y+6,z+2,5);
setTile(x+4,y+6,z+3,5);
setTile(x+4,y+6,z+4,5);
setTile(x+4,y+7,z+1,5);
setTile(x+4,y+8,z+1,85,2);
setTile(x+4,y+7,z+2,5);
setTile(x+4,y+8,z+2,85,2);
setTile(x+4,y+7,z+3,5);
setTile(x+4,y+8,z+3,85,2);
setTile(x+4,y+7,z+4,5);
setTile(x+4,y+8,z+4,85,2);
//ESCADAS
setTile(x+1,y+1,z+3,5);
setTile(x+3,y+1,z+2,85);
setTile(x+3,y+2,z+2,85);
setTile(x+3,y+3,z+2,85);
setTile(x+3,y+1,z+3,85);
setTile(x+3,y+2,z+3,85);
setTile(x+2,y+1,z+3,85);
setTile(x+2,y+2,z+3,5);
setTile(x+3,y+3,z+3,5);
setTile(x+3,y+4,z+2,5);
setTile(x+3,y+5,z+1,5);
setTile(x+2,y+6,z+1,5);

//TERRAÇO (ah? kkk)
setTile(x+1,y+7,z+1,5);
setTile(x+2,y+7,z+1,0);
setTile(x+3,y+7,z+1,5);
setTile(x+4,y+7,z+1,5);
setTile(x+3,y+7,z+3,5);
setTile(x+2,y+7,z+2,5);
setTile(x+3,y+7,z+2,5);
setTile(x+1,y+7,z+3,5);
setTile(x+3,y+7,z+1,0);
setTile(x+3,y+7,z+2,0);
setTile(x+2,y+7,z+3,5);
setTile(x+1,y+7,z+2,5);
setTile(x+3,y+7,z+3,0);
}
}
function torre() {
getTile(x,y,z);
// 1
var rnd=Math.floor((Math.random()*3)+1);
if(rnd==1) {
setTile(x+1,y+1,z+2,98,1);
setTile(x+1,y+2,z+2,98,1);
setTile(x+1,y+3,z+2,98,1);
setTile(x+1,y+4,z+2,98,1);
setTile(x+1,y+5,z+2,98,1);
setTile(x+1,y+6,z+2,98,1);
setTile(x+1,y+7,z+2,98,1);
setTile(x+1,y+8,z+2,98,1);
setTile(x+1,y+9,z+2,98,1);
setTile(x+1,y,z+2,98,1);
// 2
setTile(x-1,y+1,z+2,98,1);
setTile(x-1,y+2,z+2,98,1);
setTile(x-1,y+3,z+2,98,1);
setTile(x-1,y+4,z+2,98,1);
setTile(x-1,y+5,z+2,98,1);
setTile(x-1,y+6,z+2,98,1);
setTile(x-1,y+7,z+2,98,2);
setTile(x-1,y+8,z+2,98,2);
setTile(x-1,y+9,z+2,98,2);
setTile(x-1,y,z+2,98,2);
// 3
setTile(x,y+3,z+2,98,2);
setTile(x,y+4,z+2,98,2);
setTile(x,y+5,z+2,98,2);
setTile(x,y+6,z+2,98,2);
setTile(x,y+7,z+2,98,2);
setTile(x,y+8,z+2,98,2);
setTile(x,y+9,z+2,98,2);
setTile(x,y,z+2,98,2);
setTile(x,y+1,z+2,0);
setTile(x,y+2,z+2,0);
// 4
setTile(x+2,y+1,z+3,98);
setTile(x+2,y+2,z+3,98);
setTile(x+2,y+3,z+3,98);
setTile(x+2,y+4,z+3,98);
setTile(x+2,y+5,z+3,98);
setTile(x+2,y+6,z+3,98);
setTile(x+2,y+7,z+3,98);
setTile(x+2,y+8,z+3,98);
setTile(x+2,y+9,z+3,98);
setTile(x+2,y,z+3,98);
// 5
setTile(x-2,y+1,z+3,98);
setTile(x-2,y+2,z+3,98);
setTile(x-2,y+3,z+3,98,1);
setTile(x-2,y+4,z+3,98);
setTile(x-2,y+5,z+3,98,2);
setTile(x-2,y+6,z+3,98);
setTile(x-2,y+7,z+3,98);
setTile(x-2,y+8,z+3,98);
setTile(x-2,y+9,z+3,98);
setTile(x-2,y,z+3,98);
// 6
setTile(x-2,y+1,z+4,98);
setTile(x-2,y+2,z+4,98);
setTile(x-2,y+3,z+4,98);
setTile(x-2,y+4,z+4,98);
setTile(x-2,y+5,z+4,98,2);
setTile(x-2,y+6,z+4,98);
setTile(x-2,y+7,z+4,98);
setTile(x-2,y+8,z+4,98);
setTile(x-2,y+9,z+4,98);
setTile(x-2,y,z+4,98);
// 7
setTile(x+2,y+1,z+4,98,1);
setTile(x+2,y+2,z+4,98);
setTile(x+2,y+3,z+4,98);
setTile(x+2,y+4,z+4,98);
setTile(x+2,y+5,z+4,98);
setTile(x+2,y+6,z+4,98);
setTile(x+2,y+7,z+4,98);
setTile(x+2,y+8,z+4,98);
setTile(x+2,y+9,z+4,98,1);
setTile(x+2,y,z+4,98);
// 8
setTile(x-2,y+1,z+5,98);
setTile(x-2,y+2,z+5,98);
setTile(x-2,y+3,z+5,98);
setTile(x-2,y+4,z+5,98);
setTile(x-2,y+5,z+5,98);
setTile(x-2,y+6,z+5,98);
setTile(x-2,y+7,z+5,98);
setTile(x-2,y+8,z+5,98);
setTile(x-2,y+9,z+5,98,2);
setTile(x-2,y,z+5,98);
// 9
setTile(x+2,y+1,z+5,98);
setTile(x+2,y+2,z+5,98);
setTile(x+2,y+3,z+5,98,2);
setTile(x+2,y+4,z+5,98,2);
setTile(x+2,y+5,z+5,98);
setTile(x+2,y+6,z+5,98);
setTile(x+2,y+7,z+5,98);
setTile(x+2,y+8,z+5,98);
setTile(x+2,y+9,z+5,98);
setTile(x+2,y,z+5,98);
// 10
setTile(x+1,y+1,z+6,98);
setTile(x+1,y+2,z+6,98);
setTile(x+1,y+3,z+6,98,1);
setTile(x+1,y+4,z+6,98);
setTile(x+1,y+5,z+6,98);
setTile(x+1,y+6,z+6,98);
setTile(x+1,y+7,z+6,98);
setTile(x+1,y+8,z+6,98);
setTile(x+1,y+9,z+6,98);
setTile(x+1,y,z+6,98);
// 11
setTile(x-1,y+1,z+6,98,2);
setTile(x-1,y+2,z+6,98);
setTile(x-1,y+3,z+6,98);
setTile(x-1,y+4,z+6,4);
setTile(x-1,y+5,z+6,98);
setTile(x-1,y+6,z+6,98);
setTile(x-1,y+7,z+6,98);
setTile(x-1,y+8,z+6,98);
setTile(x-1,y+9,z+6,98);
setTile(x-1,y,z+6,98,4);

var rnd=Math.floor((Math.random()*2)+1);
var lrnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
if(lrnd==1) {
setTile(x,y+10,z+2,VERMELHO);
}
if(lrnd==2) {
setTile(x,y+10,z+2,VERDE);
}
if(lrnd==3) {
setTile(x,y+10,z+2,AMARELO);
}
if(lrnd==4) {
setTile(x,y+10,z+2,BRANCO);
}
}
if(rnd==2) {
if(lrnd==1) {
setTile(x-1,y+11,z+7,VERMELHO);
}
if(lrnd==2) {
setTile(x-1,y+11,z+7,VERDE);
}
if(lrnd==3) {
setTile(x-1,y+11,z+7,AMARELO);
}
if(lrnd==4) {
setTile(x-1,y+11,z+7,BRANCO);
}
}
// 12
setTile(x,y+3,z+2,98);
setTile(x,y+4,z+2,98);
setTile(x,y+5,z+2,98);
setTile(x,y+6,z+2,98);
setTile(x,y+7,z+2,98);
setTile(x,y+8,z+2,98);
setTile(x,y+9,z+2,98);
setTile(x,y,z+2,98,1);
// 13
setTile(x,y+1,z+6,98);
setTile(x,y+2,z+6,98);
setTile(x,y+3,z+6,98);
setTile(x,y+4,z+6,98);
setTile(x,y+5,z+6,98);
setTile(x,y+6,z+6,98);
setTile(x,y+7,z+6,98);
setTile(x,y+8,z+6,98);
setTile(x,y+9,z+6,98);
setTile(x,y,z+6,98,2);

setTile(x+1,y,z+3,98);
setTile(x,y,z+3,98);
setTile(x-1,y,z+3,98);
setTile(x+1,y,z+4,98);
setTile(x,y,z+4,98);
setTile(x-1,y,z+4,98);
setTile(x+1,y,z+5,98,1);
setTile(x,y,z+5,98);
setTile(x-1,y,z+5,98);

setTile(x,y+1,z+4,98);
setTile(x,y+2,z+4,98,2);
setTile(x,y+3,z+4,98);
setTile(x,y+4,z+4,98);
setTile(x,y+5,z+4,98);
setTile(x,y+6,z+4,98);
setTile(x,y+7,z+4,98);
setTile(x,y+8,z+4,98);
setTile(x,y+9,z+4,98);
setTile(x+1,y+1,z+3,98);
setTile(x+1,y+2,z+4,98,2);
setTile(x+1,y+3,z+5,98);
setTile(x,y+4,z+5,98);
setTile(x-1,y+5,z+5,98);
setTile(x-1,y+6,z+4,98,1);
setTile(x-1,y+7,z+3,98,1);
setTile(x,y+8,z+3,98,1);

setTile(x+3,y+9,z+2,98);
setTile(x-3,y+9,z+2,98);
setTile(x+3,y+9,z+6,98);
setTile(x-3,y+9,z+6,98,2);
setTile(x+1,y+9,z+3,98);
setTile(x+1,y+9,z+4,98);
setTile(x,y+9,z+4,98);
setTile(x+1,y+9,z+5,98,1);
setTile(x,y+9,z+5,98);
setTile(x-1,y+9,z+5,98);
setTile(x+2,y+9,z+2,98);
setTile(x-2,y+9,z+2,98);
setTile(x+2,y+9,z+6,98);
setTile(x-2,y+9,z+6,98,1);
setTile(x-3,y+9,z+3,98);
setTile(x-3,y+9,z+4,98);
setTile(x-3,y+9,z+5,98);
setTile(x+3,y+9,z+3,98,2);
setTile(x+3,y+9,z+4,98);
setTile(x+3,y+9,z+5,98);
setTile(x-1,y+9,z+1,98);
setTile(x+1,y+9,z+1,98);
setTile(x,y+9,z+1,98,3);
setTile(x-1,y+9,z+7,98);
setTile(x+1,y+9,z+7,98);
setTile(x,y+9,z+7,98);
setTile(x+2,y+9,z+1,98);
setTile(x-2,y+9,z+1,98,2);
setTile(x+2,y+9,z+7,98);
setTile(x-2,y+9,z+7,98);

setTile(x+2,y+11,z+1,4);
setTile(x-2,y+11,z+1,4);
setTile(x+2,y+11,z+7,4);
setTile(x-2,y+11,z+7,4);

setTile(x-1,y+10,z+7,98);
setTile(x+1,y+10,z+7,98);
setTile(x,y+10,z+7,98);
setTile(x-1,y+10,z+1,98);
setTile(x+1,y+10,z+1,98);
setTile(x,y+10,z+1,98);
setTile(x+2,y+10,z+1,98);
setTile(x-2,y+10,z+1,98);
setTile(x+2,y+10,z+7,98,1);
setTile(x-2,y+10,z+7,98);
setTile(x+3,y+10,z+2,98,2);
setTile(x-3,y+10,z+2,98,2);
setTile(x+3,y+10,z+6,98);
setTile(x-3,y+10,z+6,98);
setTile(x+3,y+10,z+5,98,2);
setTile(x-3,y+10,z+5,98);
setTile(x+3,y+10,z+4,98,2);
setTile(x-3,y+10,z+4,98);
setTile(x+3,y+10,z+3,98);
setTile(x-3,y+10,z+3,98);
setTile(x-1,y+10,z+7,98);
setTile(x+1,y+10,z+7,98);
setTile(x,y+10,z+7,98);
setTile(x-1,y+12,z+7,98);
setTile(x+1,y+12,z+7,98);
setTile(x,y+12,z+7,98);
setTile(x-1,y+12,z+1,98);
setTile(x+1,y+12,z+1,98);
setTile(x,y+12,z+1,98);
setTile(x+2,y+12,z+1,98);
setTile(x-2,y+12,z+1,98);
setTile(x+2,y+12,z+7,98);
setTile(x-2,y+12,z+7,98);
setTile(x+3,y+12,z+2,98);
setTile(x-3,y+12,z+2,98);
setTile(x+3,y+12,z+6,98);
setTile(x-3,y+12,z+6,98);
setTile(x+3,y+12,z+5,98);
setTile(x-3,y+12,z+5,98);
setTile(x+3,y+12,z+4,98);
setTile(x-3,y+12,z+4,98);
setTile(x+3,y+12,z+3,98);
setTile(x-3,y+12,z+3,98);
setTile(x-1,y+12,z+7,98);
setTile(x+1,y+12,z+7,98);
setTile(x,y+12,z+7,98);
setTile(x,y+13,z+2,98);
setTile(x-1,y+13,z+2,98);
setTile(x+1,y+13,z+2,98);
setTile(x-2,y+13,z+2,98);
setTile(x+2,y+13,z+2,98);
setTile(x-2,y+13,z+3,98);
setTile(x+2,y+13,z+3,98);
setTile(x-2,y+13,z+4,98);
setTile(x+2,y+13,z+4,98);
setTile(x-2,y+13,z+5,98);
setTile(x+2,y+13,z+5,98);
setTile(x-2,y+13,z+6,98);
setTile(x+2,y+13,z+6,98);
setTile(x,y+13,z+6,98);
setTile(x-1,y+13,z+6,98);
setTile(x+1,y+13,z+6,98);
setTile(x,y+14,z+3,98);
setTile(x-1,y+14,z+3,98);
setTile(x+1,y+14,z+3,98);
setTile(x-1,y+14,z+4,98);
setTile(x+1,y+14,z+4,98);
setTile(x,y+14,z+5,98);
setTile(x-1,y+14,z+5,98);
setTile(x+1,y+14,z+5,98);
setTile(x,y+15,z+4,4);
}
if(rnd==2) {
setTile(x+1,y+1,z+2,4,1);
setTile(x+1,y+2,z+2,4,1);
setTile(x+1,y+3,z+2,4,1);
setTile(x+1,y+4,z+2,4,1);
setTile(x+1,y+5,z+2,4,1);
setTile(x+1,y+6,z+2,4,1);
setTile(x+1,y+7,z+2,4,1);
setTile(x+1,y+8,z+2,4,1);
setTile(x+1,y+9,z+2,4,1);
setTile(x+1,y,z+2,4,1);
// 2
setTile(x-1,y+1,z+2,4,1);
setTile(x-1,y+2,z+2,4,1);
setTile(x-1,y+3,z+2,4,1);
setTile(x-1,y+4,z+2,4,1);
setTile(x-1,y+5,z+2,4,1);
setTile(x-1,y+6,z+2,4,1);
setTile(x-1,y+7,z+2,4,2);
setTile(x-1,y+8,z+2,4,2);
setTile(x-1,y+9,z+2,4,2);
setTile(x-1,y,z+2,4,2);
// 3
setTile(x,y+3,z+2,4,2);
setTile(x,y+4,z+2,4,2);
setTile(x,y+5,z+2,4,2);
setTile(x,y+6,z+2,4,2);
setTile(x,y+7,z+2,4,2);
setTile(x,y+8,z+2,4,2);
setTile(x,y+9,z+2,4,2);
setTile(x,y,z+2,4,2);
setTile(x,y+1,z+2,0);
setTile(x,y+2,z+2,0);
// 4
setTile(x+2,y+1,z+3,4);
setTile(x+2,y+2,z+3,4);
setTile(x+2,y+3,z+3,4);
setTile(x+2,y+4,z+3,4);
setTile(x+2,y+5,z+3,4);
setTile(x+2,y+6,z+3,4);
setTile(x+2,y+7,z+3,4);
setTile(x+2,y+8,z+3,4);
setTile(x+2,y+9,z+3,4);
setTile(x+2,y,z+3,4);
// 5
setTile(x-2,y+1,z+3,4);
setTile(x-2,y+2,z+3,4);
setTile(x-2,y+3,z+3,4,1);
setTile(x-2,y+4,z+3,4);
setTile(x-2,y+5,z+3,4,2);
setTile(x-2,y+6,z+3,4);
setTile(x-2,y+7,z+3,4);
setTile(x-2,y+8,z+3,4);
setTile(x-2,y+9,z+3,4);
setTile(x-2,y,z+3,4);
// 6
setTile(x-2,y+1,z+4,4);
setTile(x-2,y+2,z+4,4);
setTile(x-2,y+3,z+4,4);
setTile(x-2,y+4,z+4,4);
setTile(x-2,y+5,z+4,4,2);
setTile(x-2,y+6,z+4,4);
setTile(x-2,y+7,z+4,4);
setTile(x-2,y+8,z+4,4);
setTile(x-2,y+9,z+4,4);
setTile(x-2,y,z+4,4);
// 7
setTile(x+2,y+1,z+4,4,1);
setTile(x+2,y+2,z+4,4);
setTile(x+2,y+3,z+4,4);
setTile(x+2,y+4,z+4,4);
setTile(x+2,y+5,z+4,4);
setTile(x+2,y+6,z+4,4);
setTile(x+2,y+7,z+4,4);
setTile(x+2,y+8,z+4,4);
setTile(x+2,y+9,z+4,4,1);
setTile(x+2,y,z+4,4);
// 8
setTile(x-2,y+1,z+5,4);
setTile(x-2,y+2,z+5,4);
setTile(x-2,y+3,z+5,4);
setTile(x-2,y+4,z+5,4);
setTile(x-2,y+5,z+5,4);
setTile(x-2,y+6,z+5,4);
setTile(x-2,y+7,z+5,4);
setTile(x-2,y+8,z+5,4);
setTile(x-2,y+9,z+5,4,2);
setTile(x-2,y,z+5,4);
// 9
setTile(x+2,y+1,z+5,4);
setTile(x+2,y+2,z+5,4);
setTile(x+2,y+3,z+5,4,2);
setTile(x+2,y+4,z+5,4,2);
setTile(x+2,y+5,z+5,4);
setTile(x+2,y+6,z+5,4);
setTile(x+2,y+7,z+5,4);
setTile(x+2,y+8,z+5,4);
setTile(x+2,y+9,z+5,4);
setTile(x+2,y,z+5,4);
// 10
setTile(x+1,y+1,z+6,4);
setTile(x+1,y+2,z+6,4);
setTile(x+1,y+3,z+6,4,1);
setTile(x+1,y+4,z+6,4);
setTile(x+1,y+5,z+6,4);
setTile(x+1,y+6,z+6,4);
setTile(x+1,y+7,z+6,4);
setTile(x+1,y+8,z+6,4);
setTile(x+1,y+9,z+6,4);
setTile(x+1,y,z+6,4);
// 11
setTile(x-1,y+1,z+6,4,2);
setTile(x-1,y+2,z+6,4);
setTile(x-1,y+3,z+6,4);
setTile(x-1,y+4,z+6,4);
setTile(x-1,y+5,z+6,4);
setTile(x-1,y+6,z+6,4);
setTile(x-1,y+7,z+6,4);
setTile(x-1,y+8,z+6,4);
setTile(x-1,y+9,z+6,4);
setTile(x-1,y,z+6,4,4);

var rnd=Math.floor((Math.random()*2)+1);
var lrnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
if(lrnd==1) {
setTile(x,y+10,z+2,VERMELHO);
}
if(lrnd==2) {
setTile(x,y+10,z+2,VERDE);
}
if(lrnd==3) {
setTile(x,y+10,z+2,AMARELO);
}
if(lrnd==4) {
setTile(x,y+10,z+2,BRANCO);
}
}
if(rnd==2) {
if(lrnd==1) {
setTile(x-1,y+11,z+7,VERMELHO);
}
if(lrnd==2) {
setTile(x-1,y+11,z+7,VERDE);
}
if(lrnd==3) {
setTile(x-1,y+11,z+7,AMARELO);
}
if(lrnd==4) {
setTile(x-1,y+11,z+7,BRANCO);
}
}
// 12
setTile(x,y+3,z+2,4);
setTile(x,y+4,z+2,4);
setTile(x,y+5,z+2,4);
setTile(x,y+6,z+2,4);
setTile(x,y+7,z+2,4);
setTile(x,y+8,z+2,4);
setTile(x,y+9,z+2,4);
setTile(x,y,z+2,4,1);
// 13
setTile(x,y+1,z+6,4);
setTile(x,y+2,z+6,4);
setTile(x,y+3,z+6,4);
setTile(x,y+4,z+6,4);
setTile(x,y+5,z+6,4);
setTile(x,y+6,z+6,4);
setTile(x,y+7,z+6,4);
setTile(x,y+8,z+6,4);
setTile(x,y+9,z+6,4);
setTile(x,y,z+6,4,2);

setTile(x+1,y,z+3,4);
setTile(x,y,z+3,4);
setTile(x-1,y,z+3,4);
setTile(x+1,y,z+4,4);
setTile(x,y,z+4,4);
setTile(x-1,y,z+4,4);
setTile(x+1,y,z+5,4,1);
setTile(x,y,z+5,4);
setTile(x-1,y,z+5,4);

setTile(x,y+1,z+4,4);
setTile(x,y+2,z+4,4,2);
setTile(x,y+3,z+4,4);
setTile(x,y+4,z+4,4);
setTile(x,y+5,z+4,4);
setTile(x,y+6,z+4,4);
setTile(x,y+7,z+4,4);
setTile(x,y+8,z+4,4);
setTile(x,y+9,z+4,4);
setTile(x+1,y+1,z+3,4);
setTile(x+1,y+2,z+4,4,2);
setTile(x+1,y+3,z+5,4);
setTile(x,y+4,z+5,4);
setTile(x-1,y+5,z+5,4);
setTile(x-1,y+6,z+4,4,1);
setTile(x-1,y+7,z+3,4,1);
setTile(x,y+8,z+3,4,1);

setTile(x+3,y+9,z+2,4);
setTile(x-3,y+9,z+2,4);
setTile(x+3,y+9,z+6,4);
setTile(x-3,y+9,z+6,4,2);
setTile(x+1,y+9,z+3,4);
setTile(x+1,y+9,z+4,4);
setTile(x,y+9,z+4,4);
setTile(x+1,y+9,z+5,4,1);
setTile(x,y+9,z+5,4);
setTile(x-1,y+9,z+5,4);
setTile(x+2,y+9,z+2,4);
setTile(x-2,y+9,z+2,4);
setTile(x+2,y+9,z+6,4);
setTile(x-2,y+9,z+6,4,1);
setTile(x-3,y+9,z+3,4);
setTile(x-3,y+9,z+4,4);
setTile(x-3,y+9,z+5,4);
setTile(x+3,y+9,z+3,4,2);
setTile(x+3,y+9,z+4,4);
setTile(x+3,y+9,z+5,4);
setTile(x-1,y+9,z+1,4);
setTile(x+1,y+9,z+1,4);
setTile(x,y+9,z+1,4,3);
setTile(x-1,y+9,z+7,4);
setTile(x+1,y+9,z+7,4);
setTile(x,y+9,z+7,4);
setTile(x+2,y+9,z+1,4);
setTile(x-2,y+9,z+1,4,2);
setTile(x+2,y+9,z+7,4);
setTile(x-2,y+9,z+7,4);

setTile(x+2,y+11,z+1,4);
setTile(x-2,y+11,z+1,4);
setTile(x+2,y+11,z+7,4);
setTile(x-2,y+11,z+7,4);

setTile(x-1,y+10,z+7,4);
setTile(x+1,y+10,z+7,4);
setTile(x,y+10,z+7,4);
setTile(x-1,y+10,z+1,4);
setTile(x+1,y+10,z+1,4);
setTile(x,y+10,z+1,4);
setTile(x+2,y+10,z+1,4);
setTile(x-2,y+10,z+1,4);
setTile(x+2,y+10,z+7,4,1);
setTile(x-2,y+10,z+7,4);
setTile(x+3,y+10,z+2,4,2);
setTile(x-3,y+10,z+2,4,2);
setTile(x+3,y+10,z+6,4);
setTile(x-3,y+10,z+6,4);
setTile(x+3,y+10,z+5,4,2);
setTile(x-3,y+10,z+5,4);
setTile(x+3,y+10,z+4,4,2);
setTile(x-3,y+10,z+4,4);
setTile(x+3,y+10,z+3,4);
setTile(x-3,y+10,z+3,4);
setTile(x-1,y+10,z+7,4);
setTile(x+1,y+10,z+7,4);
setTile(x,y+10,z+7,4);
setTile(x-1,y+12,z+7,4);
setTile(x+1,y+12,z+7,4);
setTile(x,y+12,z+7,4);
setTile(x-1,y+12,z+1,4);
setTile(x+1,y+12,z+1,4);
setTile(x,y+12,z+1,4);
setTile(x+2,y+12,z+1,4);
setTile(x-2,y+12,z+1,4);
setTile(x+2,y+12,z+7,4);
setTile(x-2,y+12,z+7,4);
setTile(x+3,y+12,z+2,4);
setTile(x-3,y+12,z+2,4);
setTile(x+3,y+12,z+6,4);
setTile(x-3,y+12,z+6,4);
setTile(x+3,y+12,z+5,4);
setTile(x-3,y+12,z+5,4);
setTile(x+3,y+12,z+4,4);
setTile(x-3,y+12,z+4,4);
setTile(x+3,y+12,z+3,4);
setTile(x-3,y+12,z+3,4);
setTile(x-1,y+12,z+7,4);
setTile(x+1,y+12,z+7,4);
setTile(x,y+12,z+7,4);
setTile(x,y+13,z+2,4);
setTile(x-1,y+13,z+2,4);
setTile(x+1,y+13,z+2,4);
setTile(x-2,y+13,z+2,4);
setTile(x+2,y+13,z+2,4);
setTile(x-2,y+13,z+3,4);
setTile(x+2,y+13,z+3,4);
setTile(x-2,y+13,z+4,4);
setTile(x+2,y+13,z+4,4);
setTile(x-2,y+13,z+5,4);
setTile(x+2,y+13,z+5,4);
setTile(x-2,y+13,z+6,4);
setTile(x+2,y+13,z+6,4);
setTile(x,y+13,z+6,4);
setTile(x-1,y+13,z+6,4);
setTile(x+1,y+13,z+6,4);
setTile(x,y+14,z+3,4);
setTile(x-1,y+14,z+3,4);
setTile(x+1,y+14,z+3,4);
setTile(x-1,y+14,z+4,4);
setTile(x+1,y+14,z+4,4);
setTile(x,y+14,z+5,4);
setTile(x-1,y+14,z+5,4);
setTile(x+1,y+14,z+5,4);
setTile(x,y+15,z+4,4);
}
if(rnd==3) {
setTile(x+1,y+1,z+2,48);
setTile(x+1,y+2,z+2,48);
setTile(x+1,y+3,z+2,48);
setTile(x+1,y+4,z+2,48);
setTile(x+1,y+5,z+2,48);
setTile(x+1,y+6,z+2,48);
setTile(x+1,y+7,z+2,48);
setTile(x+1,y+8,z+2,98,1);
setTile(x+1,y+9,z+2,98,1);
setTile(x+1,y,z+2,48);
// 2
setTile(x-1,y+1,z+2,48);
setTile(x-1,y+2,z+2,98,1);
setTile(x-1,y+3,z+2,48);
setTile(x-1,y+4,z+2,98,1);
setTile(x-1,y+5,z+2,98,1);
setTile(x-1,y+6,z+2,48);
setTile(x-1,y+7,z+2,98,2);
setTile(x-1,y+8,z+2,98,2);
setTile(x-1,y+9,z+2,48,2);
setTile(x-1,y,z+2,48,2);
// 3
setTile(x,y+3,z+2,48,2);
setTile(x,y+4,z+2,48,2);
setTile(x,y+5,z+2,48,2);
setTile(x,y+6,z+2,98,2);
setTile(x,y+7,z+2,98,2);
setTile(x,y+8,z+2,48,2);
setTile(x,y+9,z+2,48,2);
setTile(x,y,z+2,48,2);
setTile(x,y+1,z+2,0);
setTile(x,y+2,z+2,0);
// 4
setTile(x+2,y+1,z+3,48);
setTile(x+2,y+2,z+3,48);
setTile(x+2,y+3,z+3,98);
setTile(x+2,y+4,z+3,98);
setTile(x+2,y+5,z+3,98);
setTile(x+2,y+6,z+3,48);
setTile(x+2,y+7,z+3,48);
setTile(x+2,y+8,z+3,48);
setTile(x+2,y+9,z+3,48);
setTile(x+2,y,z+3,48);
// 5
setTile(x-2,y+1,z+3,98);
setTile(x-2,y+2,z+3,48);
setTile(x-2,y+3,z+3,48);
setTile(x-2,y+4,z+3,48);
setTile(x-2,y+5,z+3,48,2);
setTile(x-2,y+6,z+3,48);
setTile(x-2,y+7,z+3,98);
setTile(x-2,y+8,z+3,48);
setTile(x-2,y+9,z+3,48);
setTile(x-2,y,z+3,48);
// 6
setTile(x-2,y+1,z+4,98);
setTile(x-2,y+2,z+4,98);
setTile(x-2,y+3,z+4,98);
setTile(x-2,y+4,z+4,98);
setTile(x-2,y+5,z+4,48,2);
setTile(x-2,y+6,z+4,48);
setTile(x-2,y+7,z+4,48);
setTile(x-2,y+8,z+4,48);
setTile(x-2,y+9,z+4,48);
setTile(x-2,y,z+4,48);
// 7
setTile(x+2,y+1,z+4,48);
setTile(x+2,y+2,z+4,48);
setTile(x+2,y+3,z+4,48);
setTile(x+2,y+4,z+4,48);
setTile(x+2,y+5,z+4,48);
setTile(x+2,y+6,z+4,48);
setTile(x+2,y+7,z+4,48);
setTile(x+2,y+8,z+4,48);
setTile(x+2,y+9,z+4,98,1);
setTile(x+2,y,z+4,98);
// 8
setTile(x-2,y+1,z+5,98);
setTile(x-2,y+2,z+5,48);
setTile(x-2,y+3,z+5,48);
setTile(x-2,y+4,z+5,48);
setTile(x-2,y+5,z+5,98);
setTile(x-2,y+6,z+5,98);
setTile(x-2,y+7,z+5,98);
setTile(x-2,y+8,z+5,98);
setTile(x-2,y+9,z+5,98,2);
setTile(x-2,y,z+5,98);
// 9
setTile(x+2,y+1,z+5,98);
setTile(x+2,y+2,z+5,98);
setTile(x+2,y+3,z+5,48,2);
setTile(x+2,y+4,z+5,98,2);
setTile(x+2,y+5,z+5,98);
setTile(x+2,y+6,z+5,98);
setTile(x+2,y+7,z+5,98);
setTile(x+2,y+8,z+5,98);
setTile(x+2,y+9,z+5,48);
setTile(x+2,y,z+5,48);
// 10
setTile(x+1,y+1,z+6,48);
setTile(x+1,y+2,z+6,98);
setTile(x+1,y+3,z+6,98,1);
setTile(x+1,y+4,z+6,98);
setTile(x+1,y+5,z+6,98);
setTile(x+1,y+6,z+6,98);
setTile(x+1,y+7,z+6,48);
setTile(x+1,y+8,z+6,48);
setTile(x+1,y+9,z+6,48);
setTile(x+1,y,z+6,48);
// 11
setTile(x-1,y+1,z+6,48,2);
setTile(x-1,y+2,z+6,98);
setTile(x-1,y+3,z+6,98);
setTile(x-1,y+4,z+6,4);
setTile(x-1,y+5,z+6,98);
setTile(x-1,y+6,z+6,98);
setTile(x-1,y+7,z+6,98);
setTile(x-1,y+8,z+6,48);
setTile(x-1,y+9,z+6,48);
setTile(x-1,y,z+6,48,4);

var rnd=Math.floor((Math.random()*2)+1);
var lrnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
if(lrnd==1) {
setTile(x,y+10,z+2,VERMELHO);
}
if(lrnd==2) {
setTile(x,y+10,z+2,VERDE);
}
if(lrnd==3) {
setTile(x,y+10,z+2,AMARELO);
}
if(lrnd==4) {
setTile(x,y+10,z+2,BRANCO);
}
}
if(rnd==2) {
if(lrnd==1) {
setTile(x-1,y+11,z+7,VERMELHO);
}
if(lrnd==2) {
setTile(x-1,y+11,z+7,VERDE);
}
if(lrnd==3) {
setTile(x-1,y+11,z+7,AMARELO);
}
if(lrnd==4) {
setTile(x-1,y+11,z+7,BRANCO);
}
}
// 12
setTile(x,y+3,z+2,48);
setTile(x,y+4,z+2,98);
setTile(x,y+5,z+2,48);
setTile(x,y+6,z+2,98);
setTile(x,y+7,z+2,98);
setTile(x,y+8,z+2,48);
setTile(x,y+9,z+2,98);
setTile(x,y,z+2,98,1);
// 13
setTile(x,y+1,z+6,48);
setTile(x,y+2,z+6,48);
setTile(x,y+3,z+6,48);
setTile(x,y+4,z+6,48);
setTile(x,y+5,z+6,48);
setTile(x,y+6,z+6,48);
setTile(x,y+7,z+6,98);
setTile(x,y+8,z+6,98);
setTile(x,y+9,z+6,98);
setTile(x,y,z+6,48,2);

setTile(x+1,y,z+3,48);
setTile(x,y,z+3,48);
setTile(x-1,y,z+3,48);
setTile(x+1,y,z+4,48);
setTile(x,y,z+4,48);
setTile(x-1,y,z+4,48);
setTile(x+1,y,z+5,48);
setTile(x,y,z+5,48);
setTile(x-1,y,z+5,98);

setTile(x,y+1,z+4,98);
setTile(x,y+2,z+4,98,2);
setTile(x,y+3,z+4,98);
setTile(x,y+4,z+4,98);
setTile(x,y+5,z+4,98);
setTile(x,y+6,z+4,48);
setTile(x,y+7,z+4,48);
setTile(x,y+8,z+4,48);
setTile(x,y+9,z+4,48);
setTile(x+1,y+1,z+3,98);
setTile(x+1,y+2,z+4,98,2);
setTile(x+1,y+3,z+5,98);
setTile(x,y+4,z+5,98);
setTile(x-1,y+5,z+5,98);
setTile(x-1,y+6,z+4,48);
setTile(x-1,y+7,z+3,48);
setTile(x,y+8,z+3,48);

setTile(x+3,y+9,z+2,48);
setTile(x-3,y+9,z+2,48);
setTile(x+3,y+9,z+6,98);
setTile(x-3,y+9,z+6,98,2);
setTile(x+1,y+9,z+3,98);
setTile(x+1,y+9,z+4,48);
setTile(x,y+9,z+4,48);
setTile(x+1,y+9,z+5,48);
setTile(x,y+9,z+5,48);
setTile(x-1,y+9,z+5,98);
setTile(x+2,y+9,z+2,48);
setTile(x-2,y+9,z+2,48);
setTile(x+2,y+9,z+6,48);
setTile(x-2,y+9,z+6,48);
setTile(x-3,y+9,z+3,98);
setTile(x-3,y+9,z+4,98);
setTile(x-3,y+9,z+5,98);
setTile(x+3,y+9,z+3,98,2);
setTile(x+3,y+9,z+4,48);
setTile(x+3,y+9,z+5,48);
setTile(x-1,y+9,z+1,48);
setTile(x+1,y+9,z+1,48);
setTile(x,y+9,z+1,48,3);
setTile(x-1,y+9,z+7,98);
setTile(x+1,y+9,z+7,98);
setTile(x,y+9,z+7,98);
setTile(x+2,y+9,z+1,98);
setTile(x-2,y+9,z+1,48,2);
setTile(x+2,y+9,z+7,98);
setTile(x-2,y+9,z+7,98);

setTile(x+2,y+11,z+1,4);
setTile(x-2,y+11,z+1,4);
setTile(x+2,y+11,z+7,4);
setTile(x-2,y+11,z+7,4);

setTile(x-1,y+10,z+7,98);
setTile(x+1,y+10,z+7,98);
setTile(x,y+10,z+7,48);
setTile(x-1,y+10,z+1,48);
setTile(x+1,y+10,z+1,48);
setTile(x,y+10,z+1,48);
setTile(x+2,y+10,z+1,48);
setTile(x-2,y+10,z+1,98);
setTile(x+2,y+10,z+7,98,1);
setTile(x-2,y+10,z+7,98);
setTile(x+3,y+10,z+2,98,2);
setTile(x-3,y+10,z+2,48,2);
setTile(x+3,y+10,z+6,48);
setTile(x-3,y+10,z+6,48);
setTile(x+3,y+10,z+5,48,2);
setTile(x-3,y+10,z+5,98);
setTile(x+3,y+10,z+4,98,2);
setTile(x-3,y+10,z+4,98);
setTile(x+3,y+10,z+3,48);
setTile(x-3,y+10,z+3,98);
setTile(x-1,y+10,z+7,98);
setTile(x+1,y+10,z+7,48);
setTile(x,y+10,z+7,98);
setTile(x-1,y+12,z+7,98);
setTile(x+1,y+12,z+7,98);
setTile(x,y+12,z+7,98);
setTile(x-1,y+12,z+1,48);
setTile(x+1,y+12,z+1,98);
setTile(x,y+12,z+1,98);
setTile(x+2,y+12,z+1,48);
setTile(x-2,y+12,z+1,98);
setTile(x+2,y+12,z+7,98);
setTile(x-2,y+12,z+7,48);
setTile(x+3,y+12,z+2,98);
setTile(x-3,y+12,z+2,98);
setTile(x+3,y+12,z+6,48);
setTile(x-3,y+12,z+6,98);
setTile(x+3,y+12,z+5,48);
setTile(x-3,y+12,z+5,98);
setTile(x+3,y+12,z+4,98);
setTile(x-3,y+12,z+4,98);
setTile(x+3,y+12,z+3,98);
setTile(x-3,y+12,z+3,48);
setTile(x-1,y+12,z+7,48);
setTile(x+1,y+12,z+7,48);
setTile(x,y+12,z+7,48);
setTile(x,y+13,z+2,98);
setTile(x-1,y+13,z+2,98);
setTile(x+1,y+13,z+2,98);
setTile(x-2,y+13,z+2,98);
setTile(x+2,y+13,z+2,98);
setTile(x-2,y+13,z+3,98);
setTile(x+2,y+13,z+3,48);
setTile(x-2,y+13,z+4,98);
setTile(x+2,y+13,z+4,98);
setTile(x-2,y+13,z+5,48);
setTile(x+2,y+13,z+5,48);
setTile(x-2,y+13,z+6,48);
setTile(x+2,y+13,z+6,48);
setTile(x,y+13,z+6,48);
setTile(x-1,y+13,z+6,48);
setTile(x+1,y+13,z+6,48);
setTile(x,y+14,z+3,48);
setTile(x-1,y+14,z+3,48);
setTile(x+1,y+14,z+3,48);
setTile(x-1,y+14,z+4,48);
setTile(x+1,y+14,z+4,48);
setTile(x,y+14,z+5,98);
setTile(x-1,y+14,z+5,98);
setTile(x+1,y+14,z+5,98);
setTile(x,y+15,z+4,4);
}
}
function casa2() {
getTile(x,y,z);
setTile(x+8,y+1,z,4);
setTile(x+8 ,y+1,z+1,4);
setTile(x+8,y+1,z+2,4);
setTile(x+8,y+1,z+3,4);
setTile(x+8,y+1,z+4,4);
setTile(x+8,y+1,z-1,4);
setTile(x+8,y+1,z-2,4);
setTile(x+8,y+1,z-3,4);
setTile(x+8,y+1,z-4,4);
setTile(x+8,y+2,z-4,4);
setTile(x+8,y+2,z-3,4);
setTile(x+8,y+2,z-2,4);
setTile(x+8,y+2,z-1,4);
setTile(x+8,y+2,z+1,4);
setTile(x+8,y+2,z+2,4);
setTile(x+8,y+2,z+3,4);
setTile(x+8,y+2,z+4,4);
setTile(x+8,y+3,z-4,4);
setTile(x+8,y+3,z-3,4);
setTile(x+8,y+3,z-2,4);
setTile(x+8,y+3,z-1,4);
setTile(x+8,y+3,z+1,4);
setTile(x+8,y+3,z+2,4);
setTile(x+8,y+3,z+3,4);
setTile(x+8,y+3,z+4,4);
setTile(x+8,y+4,z-4,4);
setTile(x+8,y+4,z-3,4);
setTile(x+8,y+4,z-2,4);
setTile(x+8,y+4,z-1,4);
setTile(x+8,y+4,z,4);
setTile(x+8,y+4,z+1,4);
setTile(x+8,y+4,z+2,4);
setTile(x+8,y+4,z+3,4);
setTile(x+8,y+4,z+4,4);
setTile(x+8,y+5,z-4,4);
setTile(x+8,y+5,z-3,4);
setTile(x+8,y+5,z-2,4);
setTile(x+8,y+5,z-1,4);
setTile(x+8,y+5,z,4);
setTile(x+8,y+5,z+1,4);
setTile(x+8,y+5,z+2,4);
setTile(x+8,y+5,z+3,4);
setTile(x+8,y+5,z+4,4);
setTile(x+9,y+1,z,4);
setTile(x+9,y+1,z+1,4);
setTile(x+9,y+1,z+2,4);
setTile(x+9,y+1,z+3,4);
setTile(x+9,y+1,z+4,4);
setTile(x+9,y+1,z-1,4);
setTile(x+9,y+1,z-2,4);
setTile(x+9,y+1,z-3,4);
setTile(x+9,y+1,z-4,4);
setTile(x+9,y+2,z-4,4);
setTile(x+9,y+2,z+4,4);
setTile(x+9,y+3,z-4,4);
setTile(x+9,y+3,z+4,4);
setTile(x+9,y+4,z-4,4);
setTile(x+9,y+4,z+4,4);
setTile(x+9,y+5,z-4,4);
setTile(x+9,y+5,z+4,4);
setTile(x+9,y+6,z-4,4);
setTile(x+9,y+6,z+4,4);
setTile(x+9,y+6,z-3,4);
setTile(x+9,y+6,z+3,4);
setTile(x+9,y+6,z-2,4);
setTile(x+9,y+6,z+2,4);
setTile(x+9,y+6,z-1,4);
setTile(x+9,y+6,z+1,4);
setTile(x+9,y+6,z,4);
setTile(x+10,y+1,z,4);
setTile(x+10,y+1,z+1,4);
setTile(x+10,y+1,z+2,4);
setTile(x+10,y+1,z+3,4);
setTile(x+10,y+1,z+4,4);
setTile(x+10,y+1,z-1,4);
setTile(x+10,y+1,z-2,4);
setTile(x+10,y+1,z-3,4);
setTile(x+10,y+1,z-4,4);
setTile(x+10,y+2,z-4,4);
setTile(x+10,y+2,z+4,4);
setTile(x+10,y+3,z-4,4);
setTile(x+10,y+3,z+4,4);
setTile(x+10,y+4,z-4,4);
setTile(x+10,y+4,z+4,4);
setTile(x+10,y+5,z-4,4);
setTile(x+10,y+5,z+4,4);
setTile(x+10,y+6,z-4,4);
setTile(x+10,y+6,z+4,4);
setTile(x+10,y+7,z-3,4);
setTile(x+10,y+7,z+3,4);
setTile(x+10,y+7,z-2,4);
setTile(x+10,y+7,z+2,4);
setTile(x+10,y+7,z-1,4);
setTile(x+10,y+7,z+1,4);
setTile(x+10,y+7,z,4);
setTile(x+10,y+7,z-4,4);
setTile(x+10,y+7,z+4,4);
setTile(x+11,y+1,z,4);
setTile(x+11,y+1,z+1,4);
setTile(x+11,y+1,z+2,4);
setTile(x+11,y+1,z+3,4);
setTile(x+11,y+1,z+4,4);
setTile(x+11,y+1,z-1,4);
setTile(x+11,y+1,z-2,4);
setTile(x+11,y+1,z-3,4);
setTile(x+11,y+1,z-4,4);
setTile(x+11,y+2,z-4,4);
setTile(x+11,y+2,z+4,4);
setTile(x+11,y+3,z-4,4);
setTile(x+11,y+3,z+4,4);
setTile(x+11,y+4,z-4,4);
setTile(x+11,y+4,z+4,4);
setTile(x+11,y+5,z-4,4);
setTile(x+11,y+5,z+4,4);
setTile(x+11,y+6,z-4,4);
setTile(x+11,y+6,z+4,4);
setTile(x+11,y+7,z-3,4);
setTile(x+11,y+7,z+3,4);
setTile(x+11,y+7,z-2,4);
setTile(x+11,y+7,z+2,4);
setTile(x+11,y+7,z-1,4);
setTile(x+11,y+7,z+1,4);
setTile(x+11,y+7,z,4);
setTile(x+11,y+7,z-4,4);
setTile(x+11,y+7,z+4,4);
setTile(x+13,y+1,z,4);
setTile(x+13,y+1,z+1,4);
setTile(x+13,y+1,z+2,4);
setTile(x+13,y+1,z+3,4);
setTile(x+13,y+1,z+4,48);
setTile(x+13,y+1,z-1,4);
setTile(x+13,y+1,z-2,48);
setTile(x+13,y+1,z-3,4);
setTile(x+13,y+1,z-4,4);
setTile(x+13,y+2,z-4,48);
setTile(x+13,y+2,z-3,4);
setTile(x+13,y+2,z-2,4);
setTile(x+13,y+2,z-1,48);
setTile(x+13,y+2,z+1,4);
setTile(x+13,y+2,z+2,4);
setTile(x+13,y+2,z+3,48);
setTile(x+13,y+2,z+4,4);
setTile(x+13,y+3,z-4,4);
setTile(x+13,y+3,z-3,48);
setTile(x+13,y+3,z-2,4);
setTile(x+13,y+3,z-1,48);
setTile(x+13,y+3,z+1,4);
setTile(x+13,y+3,z+2,48);
setTile(x+13,y+3,z+3,4);
setTile(x+13,y+3,z+4,4);
setTile(x+13,y+4,z-4,4);
setTile(x+13,y+4,z-3,48);
setTile(x+13,y+4,z-2,4);
setTile(x+13,y+4,z-1,48);
setTile(x+13,y+4,z,4);
setTile(x+13,y+4,z+1,4);
setTile(x+13,y+4,z+2,4);
setTile(x+13,y+4,z+3,48);
setTile(x+13,y+4,z+4,4);
setTile(x+13,y+5,z-4,4);
setTile(x+13,y+5,z-3,48);
setTile(x+13,y+5,z-2,4);
setTile(x+13,y+5,z-1,4);
setTile(x+13,y+5,z,4);
setTile(x+13,y+5,z+1,4);
setTile(x+13,y+5,z+2,48);
setTile(x+13,y+5,z+3,4);
setTile(x+13,y+5,z+4,4);
setTile(x+12,y+1,z,4);
setTile(x+12,y+1,z+1,4);
setTile(x+12,y+1,z+2,48);
setTile(x+12,y+1,z+3,4);
setTile(x+12,y+1,z+4,4);
setTile(x+12,y+1,z-1,4);
setTile(x+12,y+1,z-2,48);
setTile(x+12,y+1,z-3,48);
setTile(x+12,y+1,z-4,4);
setTile(x+12,y+2,z-4,4);
setTile(x+12,y+2,z+4,4);
setTile(x+12,y+3,z-4,48);
setTile(x+12,y+3,z+4,4);
setTile(x+12,y+4,z-4,48);
setTile(x+12,y+4,z+4,4);
setTile(x+12,y+5,z-4,4);
setTile(x+12,y+5,z+4,4);
setTile(x+12,y+6,z-4,48);
setTile(x+12,y+6,z+4,4);
setTile(x+12,y+6,z-3,4);
setTile(x+12,y+6,z+3,4);
setTile(x+12,y+6,z-2,4);
setTile(x+12,y+6,z+2,4);
setTile(x+12,y+6,z-1,4);
setTile(x+12,y+6,z+1,4);
setTile(x+12,y+6,z,4);
setTile(x+12,y+2,z+1,0);
setTile(x+12,y+2,z-1,0);
setTile(x+12,y+3,z+1,0);
setTile(x+12,y+3,z-1,0);
setTile(x+12,y+2,z-2,0);
setTile(x+12,y+2,z+2,0);
setTile(x+12,y+2,z-3,0);
setTile(x+12,y+2,z-3,0);
setTile(x+12,y+2,z+3,0);
setTile(x+8,y+2,z,0);
setTile(x+8,y+3,z,0);
setTile(x+9,y+2,z,0);
setTile(x+9,y+3,z,0);
setTile(x+9,y+4,z,0);
setTile(x+9,y+5,z,0);
setTile(x+9,y+2,z-1,0);
setTile(x+9,y+2,z-2,0);
setTile(x+9,y+2,z-3,0);
setTile(x+9,y+2,z+1,0);
setTile(x+9,y+2,z+2,0);
setTile(x+9,y+2,z+3,0);
setTile(x+9,y+3,z-1,0);
setTile(x+9,y+3,z-2,0);
setTile(x+9,y+3,z-3,0);
setTile(x+9,y+3,z+1,0);
setTile(x+9,y+3,z+2,0);
setTile(x+9,y+3,z+3,0);
setTile(x+9,y+4,z-1,0);
setTile(x+9,y+4,z-2,0);
setTile(x+9,y+4,z-3,0);
setTile(x+9,y+4,z+1,0);
setTile(x+9,y+4,z+2,0);
setTile(x+9,y+4,z+3,0);
setTile(x+9,y+5,z-1,0);
setTile(x+9,y+5,z-2,0);
setTile(x+9,y+5,z-3,0);
setTile(x+9,y+5,z+1,0);
setTile(x+9,y+5,z+2,0);
setTile(x+9,y+5,z+3,0);
setTile(x+10,y+2,z-1,0);
setTile(x+10,y+2,z-2,0);
setTile(x+10,y+2,z-3,0);
var rnd=Math.floor((Math.random()*2)+1);
var lrnd=Math.floor((Math.random()*4)+1);
if(rnd==1) {
if(lrnd==1) {
setTile(x+10,y+2,z+1,VERMELHO);
}
if(lrnd==2) {
setTile(x+10,y+2,z+1,VERDE);
}
if(lrnd==3) {
setTile(x+10,y+2,z+1,AMARELO);
}
if(lrnd==4) {
setTile(x+10,y+2,z+1,BRANCO);
}
}
if(rnd==2) {
if(lrnd==1) {
setTile(x+8,y+2,z,VERMELHO);
}
if(lrnd==2) {
setTile(x+8,y+2,z,VERDE);
}
if(lrnd==3) {
setTile(x+8,y+2,z,AMARELO);
}
if(lrnd==4) {
setTile(x+8,y+2,z,BRANCO);
}
}
setTile(x+10,y+2,z+1,0);
setTile(x+10,y+2,z+2,0);
setTile(x+10,y+2,z+3,0);
setTile(x+10,y+3,z-1,0);
setTile(x+10,y+3,z-2,0);
setTile(x+10,y+3,z-3,0);
setTile(x+10,y+3,z+1,0);
setTile(x+10,y+3,z+2,0);
setTile(x+10,y+3,z+3,0);
setTile(x+10,y+4,z-1,0);
setTile(x+10,y+4,z-2,0);
setTile(x+10,y+4,z-3,0);
setTile(x+10,y+4,z+1,0);
setTile(x+10,y+4,z+2,0);
setTile(x+10,y+4,z+3,0);
setTile(x+10,y+5,z-1,0);
setTile(x+10,y+5,z-2,0);
setTile(x+10,y+5,z-3,0);
setTile(x+10,y+5,z+1,0);
setTile(x+10,y+5,z+2,0);
setTile(x+10,y+5,z+3,0);
setTile(x+10,y+6,z-1,0);
setTile(x+10,y+6,z-2,0);
setTile(x+10,y+6,z-3,0);
setTile(x+10,y+6,z+1,0);
setTile(x+10,y+6,z+2,0);
setTile(x+10,y+6,z+3,0);
setTile(x+11,y+2,z-1,0);
setTile(x+11,y+2,z-2,0);
setTile(x+11,y+2,z-3,0);
setTile(x+11,y+2,z+1,0);
setTile(x+11,y+2,z+2,0);
setTile(x+11,y+2,z+3,0);
setTile(x+11,y+3,z-1,0);
setTile(x+11,y+3,z-2,0);
setTile(x+11,y+3,z-3,0);
setTile(x+11,y+3,z+1,0);
setTile(x+11,y+3,z+2,0);
setTile(x+11,y+3,z+3,0);
setTile(x+11,y+4,z-1,0);
setTile(x+11,y+4,z-2,0);
setTile(x+11,y+4,z-3,0);
setTile(x+11,y+4,z+1,0);
setTile(x+11,y+4,z+2,0);
setTile(x+11,y+4,z+3,0);
setTile(x+11,y+5,z-1,0);
setTile(x+11,y+5,z-2,0);
setTile(x+11,y+5,z-3,0);
setTile(x+11,y+5,z+1,0);
setTile(x+11,y+5,z+2,0);
setTile(x+11,y+5,z+3,0);
setTile(x+11,y+6,z-1,0);
setTile(x+11,y+6,z-2,0);
setTile(x+11,y+6,z-3,0);
setTile(x+11,y+6,z+1,0);
setTile(x+11,y+6,z+2,0);
setTile(x+11,y+6,z,0);
setTile(x+12,y+2,z,0);
setTile(x+12,y+3,z,0);
setTile(x+12,y+4,z,0);
setTile(x+12,y+5,z,0);
setTile(x+12,y+4,z-1,0);
setTile(x+12,y+5,z-1,0);
setTile(x+12,y+4,z-2,0);
setTile(x+12,y+5,z-2,0);
setTile(x+12,y+4,z-3,0);
setTile(x+12,y+5,z-3,0);
setTile(x+12,y+4,z+1,0);
setTile(x+12,y+5,z+1,0);
setTile(x+12,y+4,z+2,0);
setTile(x+12,y+5,z+2,0);
setTile(x+12,y+4,z+3,0);
setTile(x+12,y+5,z+3,0);
setTile(x+12,y+3,z+3,0);
setTile(x+12,y+3,z+2,0);
setTile(x+12,y+3,z-3,0);
setTile(x+12,y+3,z-2,0);
setTile(x+3,y,z,13);
setTile(x+4,y,z,13);
setTile(x+5,y,z,13);
setTile(x+6,y,z,13);
setTile(x+7,y,z,13);
setTile(x+2,y,z-1,13);
setTile(x+3,y,z-1,13);
setTile(x+4,y,z-1,13);
setTile(x+5,y,z-1,13);
setTile(x+6,y,z-1,13);
setTile(x+7,y,z-1,13);
setTile(x+2,y,z+1,13);
setTile(x+3,y,z+1,13);
setTile(x+4,y,z+1,13);
setTile(x+5,y,z+1,13);
setTile(x+6,y,z+1,13);
setTile(x+7,y,z+1,13);
setTile(x+7,y+1,z,0);
setTile(x+2,y,z,13);
}
function casa1() {
setTile(x,y,z,4);
		
		setTile(x+1,y,z,48);
		
		setTile(x+2,y,z,48);
		
		setTile(x+3,y,z,4);
		
		setTile(x,y,z+1,4);
		
		setTile(x,y,z+2,4);
		setTile(x,y-1,z+2,4);
		setTile(x,y-2,z+2,4);
		 
		 
		setTile(x,y+5,z+2,0);
		 setTile(x,y+6,z+2,0);
		 setTile(x,y+7,z+2,0);
		
		setTile(x,y,z+3,48);
		
		setTile(x+1,y,z+1,48);
		
		setTile(x+1,y,z+2,48);
		
		setTile(x+2,y,z+1,4);
		
		setTile(x+2,y,z+2,4);
		
		setTile(x+3,y,z+2,48);
		
		setTile(x+2,y,z+3,4);
		
		setTile(x+3,y,z+3,48);
		
		setTile(x+3,y,z+1,4);
		
		setTile(x+1,y,z+3,4);
		
		setTile(x+4,y,z,4);
		
		setTile(x+4,y,z+1,48);
		
		setTile(x+4,y,z+2,4);
		
		setTile(x+4,y,z+3,4);
		
		setTile(x+4,y,z+3,48);
		
		setTile(x,y,z+4,4);
		
		setTile(x+1,y,z+4,4);
		
		setTile(x+2,y,z+4,48);
		
		setTile(x+3,y,z+4,4);


		
		setTile(x,y+3,z,48);
		
		setTile(x,y+2,z,48);
		
		setTile(x,y+1,z,4);
		
		setTile(x+1,y+1,z,4);
		
		setTile(x+1,y+2,z,4);
		
		setTile(x+1,y+3,z,48);
		
		setTile(x+2,y+1,z,4);
		
		setTile(x+2,y+2,z,48);
		
		setTile(x+2,y+3,z,4);
		
		setTile(x+3,y+1,z,4);
		
		setTile(x+3,y+2,z,4);
		
		setTile(x+3,y+3,z,4);
		
		setTile(x+4,y+1,z,48);
		
		setTile(x+4,y+2,z,4);
		
		setTile(x+4,y+3,z,4);


		
		setTile(x,y+1,z+1,48);
		
		setTile(x,y+2,z+1,4);
		
		setTile(x,y+3,z+1,4);

		
		
		setTile(x,y+1,z+3,48);
		
		setTile(x,y+2,z+3,4);
		
		setTile(x,y+3,z+3,4);
		
		setTile(x,y+1,z+4,48);
		
		setTile(x,y+2,z+4,4);
		
		setTile(x,y+3,z+4,48);



		
		setTile(x+4,y+1,z+1,4);
		
		setTile(x+4,y+2,z+1,4);
		
		setTile(x+4,y+3,z+1,48);
		
		setTile(x+4,y+1,z+2,4);
		
		setTile(x+4,y+2,z+2,4);
		
		setTile(x+4,y+3,z+2,48);
		
		setTile(x+4,y+1,z+3,4);
		
		setTile(x+4,y+2,z+3,48);
		
		setTile(x+4,y+3,z+3,4);
		
		setTile(x+4,y+1,z+4,4);
		
		setTile(x+4,y+2,z+4,4);
		
		setTile(x+4,y+3,z+4,48);


		
		setTile(x+1,y+1,z+4,4);
		
		setTile(x+1,y+2,z+4,4);
		
		setTile(x+1,y+3,z+4,48);
		
		setTile(x+2,y+1,z+4,48);
		
		setTile(x+2,y+2,z+4,48);
		
		setTile(x+2,y+3,z+4,4);
		
		setTile(x+3,y+1,z+4,4);
		
		setTile(x+3,y+2,z+4,4);
		
		setTile(x+3,y+3,z+4,48);



		
		setTile(x,y+4,z,50);
		
		setTile(x+1,y+4,z,4);
		
		setTile(x+2,y+4,z,4);
		
		setTile(x+3,y+4,z,4);
		
		setTile(x+4,y+4,z,48);
		
		setTile(x+4,y+4,z+1,4);
		
		setTile(x+1,y+4,z+2,4);
		
		setTile(x+1,y+4,z+3,4);
		
		setTile(x+1,y+4,z+4,4);
		
		setTile(x,y+4,z+1,4);
		
		
		setTile(x,y+4,z+3,4);
		
		setTile(x,y+4,z+4,50);
		
		setTile(x+1,y+4,z+4,4);
		
		setTile(x+2,y+4,z+4,4);
		
		setTile(x+3,y+4,z+4,4);
		
		setTile(x+1,y+4,z+1,4);
		
		setTile(x+2,y+4,z+1,4);
		
		setTile(x+1,y+4,z+2,48);
		
		setTile(x+2,y+4,z+2,4);
		
		setTile(x+2,y+4,z+3,4);
		
		setTile(x+3,y+4,z+2,48);
		
		setTile(x+1,y+4,z+3,4);
		
		setTile(x+3,y+4,z+1,4);
		
		setTile(x+3,y+4,z+3,48);
		
		setTile(x-1,y,z+2,48);


		 
		setTile(x+3,y+1,z+3,0);
		 setTile(x+3,y+1,z+1,58);
		setTile(x+3,y+1,z+2,0);
}