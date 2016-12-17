
$(document).ready(function(){
	// options
	var speed = 500; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 5000; //auto slider speed
	
	// add first initial active class
	$(".slide").first().addClass("active");
	
	// hide all slides
	$(".slide").hide;
	
	// show only active class slide
	$(".active").show();
	
	// Next Event Handler
	$('#next').on('click', nextSlide);// call function nextSlide
	
	// Prev Event Handler
	$('#prev').on('click', prevSlide);// call function prevSlide
	
	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);// call function and value 4000
	}
	
	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	// Switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});



////botones traductor
function cambia_shipibo(){
   var elemento = document.getElementById("capa"); 
   elemento.innerHTML = 'Dina Pangoa Vásquez kikinakin parancana amiga shipiba Gloria, rabé ainbo nahua(shipibama) bokanaiki paro pachiteani jain nocoananti. enfermerobaon ja Puesto de Salud Santa Rosa (distrito Masisea, provincia coronel portillo, región Pucallpa).westiora boten nanecanaiki bocanaiki Centro de Salud de Masisea jain huimeti kawé westiora chequeo médico. Dina,jawen amiga shipiba Gloria, rabé señora nahua(shipibama)bocanaiki paro Pachiteani jain nokoanani.<br>Tsecacanaiki ja  lista de Masisea jainxon peokanai kenai westiora westiorabo jaton janen sanlanco winoti.<br>Ea yoicanaiki racawe kamillain, eara rakataiki en shinanaiki chequeoiti. Eara chachicanaiki jawe yoixonmabi, en onanyamaiki ea akí ikanai,jainoax peocotai raweskenani”<br>Jatian Dina jishtenaiki anastesianin aká pekao,jainoax icáiki moa esterilizancana. Niti atipanyama,chexa kikin akin jawen yora, onanyamaiki jawe copi ea xatecanaixon Westiora enfermeronin yoiyay jakonshocoakin miara ligado akanke akin jawetianbi baqueatimakin, jainxon yoiyaiki kikini cuiramewe xaté mia benxoai kaman.<br>Enbix camaiki centro de Salud ain ea bokanaiki jabaon jaboriki culpable….enra jawe onanyamake jawekescákin atirin ixon eara kenai justicia”'; 
}
function cambia_español(){
   var elemento = document.getElementById("capa"); 
   elemento.innerHTML = "“A mí me han llevado, ellos son los culpables” <br> Dina Pangosa Vásquez fue vilmente engañada por los enfermeros del puesto de salud Santa Rosa (distrito Masisea, provincia Coronel Portillo, región Pucallpa). La subieron a un bote para llevarla al Centro de Salud de Masisea con la promesa de brindarle un chequeo médico. Dina, su amiga shipiba Gloria, y dos señoras mestizas (no shipibas) navegaron a través del río Pashitea con dirección al encuentro con sus verdugos.<br>Sacaron la lista de Masisea, y las empezaron a llamar una a una por su nombre para pasar a una sala.<br>“Me dijeron que me eche en la camilla, yo me eché porque pensé que era para la consulta. Me pusieron una inyección sin decirme nada, nadie me explicó lo que me iban a hacer, empecé a sentirme adormecida”.<br>Cuando Dina despertó luego de la anestesia, ya estaba esterilizada. No podía caminar, le dolía mucho el cuerpo, no sabía por qué tenía un corte. Un enfermero de forma muy tranquila le dijo que la habían ligado para no tener más hijos, y le recomendó cuidarse bien hasta que sane la herida.<br>“Yo misma no he ido al centro de salud, a mí me han llevado...yo no sé nada, no sé cómo hacer, quiero justicia, ellos son los culpables”."; 
}

function cambia_shipibo1(){
   var elemento = document.getElementById("capa-1"); 
   elemento.innerHTML = '"Ja shipiba Julia Lomas Cauper ligancanaiki icashamaibi 1997 ja baritian kikin coshi icha acana iki. <br>“Ja enfermero Domingo Sánchez ea benaiki en jawe onanyama ea raketai ea yoiyai kawe centro salud de iparía(distrito de iparia jai noa potares canaiki” <br>“Moa  winota iká iki icha hora Virginia picasaiki ja centroainxon tsonbi jawebi  yoiyamaiki,jan jakiribi yocáribiai kikin jawebi yoiyamakin xabábicho jainxon  yoiyai.Icaxbi moa horabo winota rabé enfermeranin  winoma iki westiora salanco, Virginia jaki chipoti yamaikákíki.”<br>“Ea yoicanai mia winotimakeská jawekira mi winoke akin ea acanai westiora tetaitonin ea yatanaiki nokon poyaman en coshi meta iki jaixon chachicanaiki”.<br> “jatian jishtena Virginia oina wetsa salanco jabicho jimi icha boy janbixbi centro de salud de Iparía jawebi tsonbi yoiyamaiki mato ligadura acanke ayamaiki comunidad ain"<br> Jatian jishtena  Virginia  ikáiki wetsa salanko jimiboani,ichavires yocacati jawen maponko. Ja  centro de Salud Iparia tsonbi yoyamaiki miara akanke ligado aquin,jawen jeman caxonpari unanaiki jawe copiki   jimiboai ixon”'; 
}
function cambia_español1(){
   var elemento = document.getElementById("capa-1"); 
   elemento.innerHTML = "A la shipiba Juliana Lomas Cauper la ligaron contra su voluntad en el año 1997, año dónde las esterilizaciones compulsivas cobraron su mayor número de víctimas.<br>“El enfermero Domingo Sánchez me buscó, no sabía nada, tenía miedo. Me dijo que fuera para que me dieran ropa, dinero. Me ha dicho para ir al Centro de Salud Iparía (distrito Iparía, provincia Coronel Portillo, Región Pucallpa), y ahí me ha abandonado”<br>Habían pasado varias horas, Virginia tenía hambre. En el centro nadie le decía nada, ella preguntaba pero el silencio le respondía. Seguían pasando las horas hasta que dos enfermeros la hicieron pasar a una sala, Virginia sentía desconfianza.<br>“Me dijeron que pase no más, que no iba a pasar nada. Yo no quería, empecé a temblar. Una trabajadora me agarró de los brazos, yo hacía fuerza, me pusieron una inyección”.<br>“Apagaron la luz, prendieron una más pequeña, temblaba,  estaba semi dormida, como semi muerta. ¿Para qué me hacían esto?, preguntaba, me preguntaba. Y hasta ahí no más me recuerdo”.<br>Cuando despertó Virginia estaba en otra sala, sola, sangrando, con muchas preguntas en su cabeza. En el Centro de Salud de Iparía nadie le dijo que la habían ligado, recién en su comunidad se enteró el motivo de su sangre”."; 
}



function cambia_shipibo2(){
   var elemento = document.getElementById("capa-2"); 
   elemento.innerHTML = 'Ja señora Lidia Rodriguez González ká iki raomecasi gimi boani posta de San Fran cia Coronel portillo,región Pucallpa), uchuma jawen comucisco (distrito Yarinacocha,Provinnidad Santa Clara,jainxon yoicanai rao yama jatian bocanai cuidad de Pucallpa hospital amazónico jainra mia akincanai ixon .<br> Bain jokin Lidia nin shinanamaikáiki moera <br>“Ea racancanaiki camillani   jawe yoixonmabi meyatancana  nocon taeribi ea coshitima copi en onanyama ikáiki jainxon en  shinanai gimiboanai bexon mein ea acanai ixon." <br> Jishtenxon shipiba Lidianin yocatai enfermerasbo jatian jaton yoiyai jawe copi min icha akin yocatai akin akáiki ramacaya non mia,yoiyai icha bakeyariki mia akin. <br> Teaxon amakana  iki firmamaki westiora kirika jawetianbi en yoyoacamaiki  jaton ribi ea yoyo axónyamacanaiki  kikin akin chexá ikenbi ea firmamacana iki firma firma firma  ea teaxon amacanai firmamaki sináicanaiki enfermerobo .<br> Ja esterilizacíon pecao Lidianin yoranaiki chosco oxepecao chexaiki jawetianbi yoranti shinayamaiki japecao westiora baritia pekao yoranribiaiki ikaxbi jakáribi .<br> Jawen tita Dorotea Gozalez Valle, jaribi akanaiki baritia  pekao ja hospital amazónico jawen historia chinica meraiki la Republicani registrameta como antecedende ginecológico ligadura de trompas. Yamake registrana  como  jawen antesendentes  ginecológico ligadura de  trompas mas  registranyamaiki  ja operación. '; 
}
function cambia_español2(){
   var elemento = document.getElementById("capa-2"); 
   elemento.innerHTML = "“Pensé que me hacían eso para curarme mi hemorragia” <br>La señora Lidia Rodríguez Gonzáles fue por medicamentos para tratar su hemorragia a la posta de San Francisco (distrito Yarinacocha, provincia Coronel Portillo, región Pucallpa), la más cercana a su comunidad en Santa Clara. Allí le dijeron que no tenían medicina pero que la llevaban a la ciudad de Pucallpa, al Hospital Amazónico, porque ahí con toda seguridad la ayudarían.<br>En el trayecto del camino Lidia jamás imaginó que ella sería una víctima más del Programa de Control Natal maquinado por el gobierno de Alberto Fujimori.<br>“Me pusieron en la camilla sin decir nada, me ataron manos y pies para que no me moviera, no entendía bien para que me hacían todo eso, pero pensé que tal vez me hacían eso para curarme la hemorragia”.<br>Al despertarse la señora Lidia Rodríguez les reclamó a las enfermeras. Le dijeron:“¿Por qué tanta pregunta?, ya te explicamos, muchos hijos tienes”.<br>La obligaron a firmar un papel que nunca leyó, que nunca le leyeron, estando en la cama con mucho dolor: “¡¡firma, firma, firma de una vez!!”, le exigían, la obligaban molestas las enfermeras.<br>Después de la esterilización la señora Rodríguez tuvo relaciones sexuales a los cuatro meses, pero le dolía y no sentía deseo. Probó nuevamente un año más tarde, pero era lo mismo. Nunca más volvió a tener sexo.<br>A su mamá, la señora Dorotea Gonzáles Valle, también la esterilizaron años atrás en el Hospital Amazónico. Su historia clínica, conseguida por La República, no registra ningún documento en el cual ella autorice que le liguen las trompas."; 
}


function cambia_shipibo3(){
   var elemento = document.getElementById("capa-3"); 
   elemento.innerHTML = 'Ja señora Lucía Zumaeta López  jaribi ikáiki westiora más acana Hospital  Amazónico ainxon acanai,ubicamerake jema pucallpain, esterilizancanai kenaimabi. Doctoresbaon jaton kenakescá  ainbobo bakenaitibi, cesárea iamax jaconi bakenkebi jato ligadura acanaiki<br>Lucíara icáiki  tuya jawen chiní baque Ruth Sánchez Zumaeta, jara cáiki jawen bene vetan Hospital ain baqueni.<br>"Ea acaniki ligadurabetanbi cesárea jatianbi. Ea yuiamaiki, en onayamaiki jascaraike”<br>"Nete xabáketian já enfermerabaon yoiyaiki jawen bene. Jan yocata yoiribiai jatibiain costa, sierra y selva; Posta de Saluainbo ochó modernos Hospitalainbo: “Noaboriki yoikana apobaon noara senen akiresiki jaton joi"<br>Jawen historia clínica huincanaiki Republicanin, yoiyai rabechunca nete setiembre 1998 medicobaon wishacanai: “OP CSTP + LTB”, jascati yoiyai operación cesáreabetanbi acana tubárico Bilateral, yoicanaikescábi onancana ligadura de trompas.<br>Jainoaxribi kirikain yoiyai Lucía Preeclampsia Severaya ika westiora jacoma jaweki ja paciente jascarama ikenbi. <br>Ikaxbijara jatibimaiki. Ja historia clínicaninra yoiyai ja señora Zumaeta kenaiki cesárea, ikaxbi yoiyamai ja westiora 73 páginas kenyamai já esterilizankanti.<br>Lucía Zumaeta López denuncia ayamaiki onanyamaxon, ikaxbi rama jawen shinan iki ati. Janra manake fiscalía kati jawen testimonio meniticopi,jainoax jatiribi jabé ikábo shipibas.'; 
}
function cambia_español3(){
   var elemento = document.getElementById("capa-3"); 
   elemento.innerHTML = "La señora Lucía Zumaeta López fue una víctima más de la estrategia que aplicaba el Hospital Amazónico, ubicado en la ciudad de Pucallpa, para esterilizar sin consentimiento. Los doctores aprovechaban el momento en que las mujeres daban a luz, fuera con cesárea o por parto natural, para ligarlas.<br>Lucía estaba embarazada de su última hija, Ruth Sánchez Zumaeta, y acudió junto con su esposo al hospital para dar a luz.<br>“Me hicieron la ligadura y la cesárea al mismo tiempo. A mí no me han avisado, yo no sabía, así ha sido”<br>Recién al día siguiente las enfermeras le contaron a su esposo la verdad. Él les reclamó, pero ellas respondieron  lo que suelen repetir en costa, sierra y selva; en postas de salud en zonas rurales o en modernos hospitales en la ciudad: “Nosotros estamos ordenados por el Gobierno, solo cumplimos órdenes”.<br>En su historia clínica, conseguida por La República, está indicado que el 22 de setiembre de 1998 los médicos escribieron: “OP CSTP + LTB”, es decir: Operación de Cesárea y al mismo tiempo Bloqueo Tubárico Bilateral, comúnmente conocido como ligadura de trompas.<br>Además, el documento señala que Lucía tenía Preeclampsia Severa, una grave condición médica en la cual la paciente no está en la condición de tomar decisiones en lo absoluto.<br>aqui va una imagen<br>Pero eso no es todo. La historia clínica muestra que la señora Zumaeta consintió una cesárea, pero no consigna en ninguna de sus 73 páginas que aceptará que la esterilizaran.<br>aqui va una imagen<br>Lucía Zumaeta López no denunció en su momento por desconocimiento, pero hoy que ha roto su silencio está dispuesta a hacerlo. Ella está esperando que vaya La Fiscalía a tomar su testimonio, y el del resto de cientos de sus compañeras shipibas.<br>AVISO URGENTE: ¡¡¡HASTA EL DÍA DE HOY LA FISCALÍA NO HA IDO A RECOGER LOS TESTIMONIOS DE LAS SEÑORAS SHIBIBAS, Y SIN EMBARGO YA ARCHIVÓ EL CASO !!!"; 
}


function cambia_shipibo4(){
   var elemento = document.getElementById("capa-4"); 
   elemento.innerHTML = '"eara  kaiki  cesáreacopi, jawetianbi  kenyamaiki  ligadura"<br>Nilda Rojas Martíneznin shinanai  ea aprovechancana ixon ja winiei jatibitian shinanax  netetibi jawen baque picota bená mawataiki enfermerabaon yuyaiki nonra mia  ligado ake akin winiaiki kikini <br>Nilda raikaiki posaka  oxe toya presión keyá y mapon chexa.  Jaskara kaiki hospital amazónico, Jariki Pucallpa jemanko,moa bakenti keská akin chexá.<br>jikiamatianbi sala de operación amacanaiki firmamakin  westiora  documento,jan shinanaiki firmanai  cesarea anoxon,jakoma shinanki ishton firmanaiki yokaxonmabi jawetianbi jascara unanyamaresaiki jan firmana.<br>En shinanaikaiki ea  ayamacana ligadura cesareares acana ea kenyama iki ligadura.” jawetianbi acantini<br>Ja nete xabaketian operación pekao mahuatai nokon baque,menicanai nokon tita.Nokon papan axonai westiura maxco ataúd,jawetianbi jawen bemana jan huinyamaiki hospitalmeranpari ixon <br>Enfermerani ea  yuyaiki ligaduraribira non mia ake en shinanaiki jakoma kenyamaiki.<br>Nilda kenaiki jakiribi benbo baque westiura benbo baque mahuata ikaxbira jakiribi iti atipanyamake jawen yura,jawen joi jawemabi kesca akinra,xatekanaiki netéxon.<br>Kirika nocon báque mahuata  jascáribiakin Hospital ainxon jawetianbi meniyamacanaiki   quirika ligadura la Repúblicani merai jawen historia clínica yamake jascáwe iká westiora joi awé esterilización ika.'; 
}
function cambia_español4(){
   var elemento = document.getElementById("capa-4"); 
   elemento.innerHTML = "“Yo iba por cesárea,  no dije que me hagan ligadura”<br>Cada vez que Nilda Rojas Martínez se acuerda como se aprovecharon de ella no puede parar de llorar. Cada vez que recuerda como el mismo día que falleció su recién nacido las enfermeras le decían fríamente: “si pues, te hemos ligado”, llora con frustración.<br>Nilda tenía ocho meses de embarazo, se sentía con la presión alta y dolor de cabeza. Por ello fue al Hospital Amazónico, ubicado en la ciudad de Pucallpa, porque sentía que era el momento de dar a luz.<br>Antes de entrar a la sala de operación le hicieron firmar un documento, ella pensó que estaba firmando para la cesárea, se sentía tan mal que firmó rápido y sin preguntar, nunca supo que fue lo que firmó.<br>“Yo no pensé que me iban a hacer la ligadura, solamente cesárea, yo no dije nunca que me hagan ligadura”.<br>“Al día siguiente de la operación falleció mi niño, se lo entregaron a mi mamá. Mi papá le preparó un pequeño ataúd. Nunca pude ver su rostro porque tenía que permanecer en el Hospital”.<br>“La enfermera me dijo que me habían hecho también la ligadura, y me sentí mal, yo no estaba de acuerdo”.<br>Nilda quería tener más hijos varones. Solo tenía un niño y el bebé que falleció. Pero no la dejaron decidir sobre su propio cuerpo, como si su palabra no importará, la cortaron en silencio.<br>“El hospital nunca me entregó ningún documento del fallecimiento de mi hijo, ni tampoco ningún documento de la ligadura”. Efectivamente, La República consiguió su historia clínica y no hay señales de ningún tipo de autorización para la esterilización. Fue contra su voluntad."; 
}


function cambia_shipibo5(){
   var elemento = document.getElementById("capa-5"); 
   elemento.innerHTML = '"Ja enfermerobaon noa yoiyai nonki ati iki ligadura ja jabatabaon toan ixon" <br> Ja enfermeranin  noa yoiyai: nonliganai huetsabo yama “jabacanacopi”Icáiki  westiora nete shipiba Virginia Vásquez Megías westiora nete raroshaman shinanya neteCaimito jemamea (ditrito Masisea,Provincia Coronel Portillo, región Pucallpa). Jainra icáiki yoyoiki jawen  benebetan xepoti ton acanaitian tetai centro de salud  de Masisea yuiyai raro shama shinanyaxon virginiara cati jake novetan centroain jawen consulta medica y rao bi.”<br>“Jain centroainxon yoiyai Virginia y jabetan tsinkitabo pichica señoras  yoiyai jato nashicanwe  consulta winotamatianbi”.<br>“Nocon listamea pichica señoras ikain niaxra westiora jabake nashia pecaora noa joyocanaiki noa chosco baneta nocon lista mea y jainxon noa  yoiyai bata sawecanwe.  ¿Jaweatiki non bata saweti iki?,yuique.l<br>Manata jikinoxja westiora salanco(sala de operación) jainxon shinanai jawen poco xatecana jawetianbin baque atima. Matsi niscanaiki,jaweranobi jabáti yamaika iki jainxon acanaiki kikin akin rocotorobaon katea itan enfermeras.<br>“kenacanaI westiora,japari acanaiki jainxon wetsaboribi yea acana iki senenain. En hoinaiki mahuá keská tipibayna pasnashocobo, ishton ea jabacasai ikaxbi catikomaikáiki”<br>"eso chachicanaiki nikenbi(anastecianin ),ea racancanaiki camillanin,en yoiyay eara kenyamai kimisha akinyoixon nocon poyaman  ninicanaiki ea racáno ixon kenyama iki ea”<br>icashamaibi acana     pecao,jatian virginia caiki jawen comunidad  caimito geman caxon bena iki ja Tecnico enfermero Rodrigo Tananta tetai posta de caimitonconia y jara ikáiki testigo de la esterilización forzada ja centro de salud deMasisea jan yucataiki yoiyai enfermeronin “jara mato acanaiki jatiribi jabacanacopi”.'; 
}
function cambia_español5(){
   var elemento = document.getElementById("capa-5"); 
   elemento.innerHTML = "“El enfermero nos dijo: las ligamos en reemplazo de las que se han escapado”<br>Era un día más para la shipiba Virginia Vásquez Mejías, un día común en su tranquila comunidad de Caimito (distrito Masisea, provincia Coronel Portillo, región Pucallpa). Estaba conversando con su esposo cuando tocaron a su puerta trabajadores del Centro de Salud Masisea. Les dijeron sonrientemente que Virginia debía acompañarlos al centro para consulta médica y recibir medicinas.<br>En el centro le explicaron a Virginia y a su grupo de cinco señoras que debían bañarse antes de pasar a consulta.<br>“De mi lista de cinco señoras se escapó una. Después de ducharnos nos pusieron en fila a las cuatro que quedábamos de mi lista  y nos dijeron para ponernos batas. ¿Y para qué nos van a poner batas?, dije”.<br>Esperando su turno para ingresar a una sala (sala de operación) recién se enteró que le harían un corte en la barriga para no tener más hijos. Sudó frío, no sabía por dónde escaparse, el lugar estaba rodeado de doctores y enfermeras.<br>“Llamaron a una, a ella primero le han hecho, y de allí a otra. Otra también. Y yo he sido la última. Vi que todas estaban como muertas, pálidas. Quería escapar pero no sabía cómo”<br>“Me pusieron una inyección parada (anestesia), me echaron a la camilla, yo decía que no quería, me resistí como tres veces. Me jalaron los brazos para que me echara, no quería eso para mí”.<br>Después de esterilizarla a la fuerza, cuando Virginia retornó a su comunidad de Caimito, buscó al técnico enfermero Rodrigo Tananta, trabajador de la posta de Caimito y el cual fue testigo de la esterilización forzada en el Centro de Salud Masisea. Ella le reclamó y él le respondió “Eso les hicieron a ustedes en reemplazo de las que se habían escapado”."; 
}