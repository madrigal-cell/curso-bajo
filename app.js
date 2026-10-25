(function(){
/* ---------- Tablatura ---------- */
function tab(src){
  var S=["G","D","A","E"], cols=[], hasAnn=false;
  src.trim().split(/\s+/).forEach(function(tok){
    if(tok==="|"){cols.push({bar:true});return}
    if(tok==="."){cols.push({rest:true});return}
    var m=tok.split(":"), st=m[0], rest=m[1].split("/");
    if(rest[1])hasAnn=true;
    cols.push({s:st,f:rest[0],a:rest[1]||""});
  });
  var lines=S.map(function(s){return s+"|"}), ann="  ";
  cols.forEach(function(c){
    if(c.bar){lines=lines.map(function(l){return l+"|"});ann+=" ";return}
    var w=c.rest?2:Math.max(c.f.length,c.a.length)+1;
    S.forEach(function(s,i){
      if(!c.rest&&c.s===s){lines[i]+='<span class="tn">'+c.f+'</span>'+"-".repeat(w-c.f.length)}
      else lines[i]+="-".repeat(w);
    });
    ann+=c.rest?"  ":(c.a+" ".repeat(w-c.a.length));
  });
  lines=lines.map(function(l){return l+"-|"});
  return '<pre class="tab">'+lines.join("\n")+(hasAnn?'\n<span class="ann">'+ann+'</span>':"")+'</pre>';
}

/* ---------- Contenido ---------- */
var PHASES=[
 {n:"Fundamentos",d:"Postura, las dos manos, ritmo básico y las notas del mástil."},
 {n:"Lectura, teoría y blues",d:"Intervalos, escala mayor, arpegios, clave de fa y el blues de 12 compases."},
 {n:"Rock, blues y semicorcheas",d:"Pentatónicas, escala de blues, semicorcheas, ghost notes y tocar en el pocket."},
 {n:"Funk y slap",d:"Funk con dedos, mixolidio y slap desde cero: pulgar, pop, ligados y notas muertas."},
 {n:"Soul, armonía y walking",d:"Acordes de séptima, II‑V‑I, lectura 2, líneas Motown, walking bass y modos."},
 {n:"Latino y proyecto final",d:"Clave, tumbao, bossa, solos sencillos, transcripción y tu grabación final."}
];
var W=[
/* FASE 1 */
{t:"Postura, afinación y mano derecha",g:"Tocar negras en cada cuerda al aire alternando índice y medio, sin mirar la mano.",bpm:[60,70],
 tec:[{x:"Afina con el afinador del multiefectos: E‑A‑D‑G de grave a agudo."},{x:"Negras en cada cuerda al aire, alternando índice‑medio (i‑m). Cuatro por cuerda.",tab:"E:0/i E:0/m E:0/i E:0/m | A:0/i A:0/m A:0/i A:0/m | D:0/i D:0/m D:0/i D:0/m | G:0/i G:0/m G:0/i G:0/m"}],
 teo:"Partes del bajo y cómo se lee una tablatura: 4 líneas = 4 cuerdas, el número es el traste.",gr:"Toca negras sobre la cuerda A mientras suena cualquier canción a tempo lento."},
{t:"Mano izquierda: un dedo por traste",g:"Ejercicio cromático completo, limpio y sin trastes 'zumbando'.",bpm:[60,72],
 tec:[{x:"Cromático 1‑2‑3‑4 en todas las cuerdas. Dedo índice en traste 1, meñique en traste 4. El dedo va justo detrás del traste.",tab:"E:1 E:2 E:3 E:4 A:1 A:2 A:3 A:4 D:1 D:2 D:3 D:4 G:1 G:2 G:3 G:4"},{x:"Lo mismo bajando (G a E, 4‑3‑2‑1)."}],
 teo:"El semitono (un traste) y el tono (dos trastes).",gr:"Toca el cromático en corcheas cuando salga limpio en negras."},
{t:"Apagado y notas de la cuerda E",g:"Que no suenen cuerdas que no estás tocando.",bpm:[65,76],
 tec:[{x:"Ancla móvil: el pulgar derecho descansa en la cuerda E cuando tocas A, D o G. La mano izquierda apaga levantando el dedo sin soltarlo del todo."},{x:"Notas naturales en la cuerda E: E F G A B C D E.",tab:"E:0 E:1 E:3 E:5 E:7 E:8 E:10 E:12"}],
 teo:"Las 7 notas naturales y el cifrado americano (C=Do, D=Re…). Entre E‑F y B‑C hay solo un semitono.",gr:"Toca una nota, apágala, silencio de negra. Repite. El silencio también se toca."},
{t:"Corcheas y primera línea I‑IV‑V",g:"Tocar corcheas parejas contando en voz alta '1 y 2 y 3 y 4 y'.",bpm:[65,80],
 tec:[{x:"Corcheas sobre raíz siguiendo A‑D‑E (un compás cada acorde).",tab:"A:0 A:0 A:0 A:0 A:0 A:0 A:0 A:0 | D:0 D:0 D:0 D:0 D:0 D:0 D:0 D:0 | E:0 E:0 E:0 E:0 E:0 E:0 E:0 E:0"}],
 teo:"Negra, corchea y cómo se cuentan. Qué es un compás de 4/4.",gr:"Seven Nation Army (riff). Desde esta semana, toca con base de batería."},
{t:"Notas en D y G, y octavas",g:"Encontrar cualquier nota en el mástil en menos de 3 segundos.",bpm:[70,84],
 tec:[{x:"Forma de octava: dos cuerdas más arriba, dos trastes más adelante. G en la cuerda E y su octava; C en la cuerda A y su octava.",tab:"E:3 D:5 E:3 D:5 | A:3 G:5 A:3 G:5"},{x:"Juego: elige una nota (por ejemplo C) y encuéntrala en las 4 cuerdas."}],
 teo:"La octava. Mira la pestaña Mástil con todas las notas a la vista.",gr:"Línea de octavas en corcheas sobre A‑D‑E."},
{t:"Raíz‑quinta‑octava",g:"Tocar la forma raíz‑5‑8 sobre cualquier nota sin pensar.",bpm:[70,88],
 tec:[{x:"Raíz‑quinta‑octava‑quinta sobre A y sobre D.",tab:"E:5 A:7 D:7 A:7 | A:5 D:7 G:7 D:7"}],
 teo:"La quinta justa: una cuerda arriba, dos trastes adelante. Es la nota más segura después de la raíz.",gr:"Patrón raíz‑quinta estilo country/rock sobre A‑D‑E."},
{t:"Duración y silencios",g:"Diferenciar notas largas (legato) y cortas (staccato) a voluntad.",bpm:[72,90],
 tec:[{x:"Un compás de negras largas y otro de negras cortadas a la mitad, sobre la misma nota."},{x:"Corcheas con silencio en los tiempos 2 y 4."}],
 teo:"Silencios de negra y corchea. Por qué el bajo 'respira'.",gr:"Stand By Me (Ben E. King): el riff completo, primero a 80 BPM."},
{t:"Repaso y primera grabación",g:"Grabar con el móvil dos líneas completas con base de batería.",bpm:[75,95],
 tec:[{x:"Cromático + notas en el mástil + raíz‑quinta a tu mejor BPM limpio."}],
 teo:"Escucha la grabación: ¿suenan todas las notas igual de fuertes? ¿Entras a tiempo?",gr:"Another One Bites the Dust (Queen), a 85 BPM. Original: ~110."},
/* FASE 2 */
{t:"Intervalos en el mástil",g:"Reconocer la forma de 2ª, 3ª mayor y menor, 4ª, 5ª y 8ª desde cualquier raíz.",bpm:[70,90],
 tec:[{x:"Desde C (A:3): toca cada intervalo y vuelve a la raíz.",tab:"A:3 A:5 | A:3 D:2 | A:3 D:1 | A:3 D:3 | A:3 D:5 | A:3 G:5"}],
 teo:"Nombres de los intervalos y cuántos semitonos tiene cada uno (2M=2, 3m=3, 3M=4, 4J=5, 5J=7, 8=12).",gr:"Raíz‑3ª‑5ª sobre C y F con base lenta."},
{t:"La escala mayor",g:"Escala mayor de una octava desde cualquier nota de las cuerdas E y A.",bpm:[70,92],
 tec:[{x:"C mayor desde la cuerda A (dedos 2‑4‑1‑2‑4‑1‑3‑4).",tab:"A:3 A:5 D:2 D:3 D:5 G:2 G:4 G:5"},{x:"La misma forma desde G (E:3) y desde A (E:5)."}],
 teo:"Fórmula T‑T‑S‑T‑T‑T‑S. Grados 1 a 7.",gr:"Escala mayor en corcheas, subiendo y bajando."},
{t:"Lectura rítmica 1",g:"Leer y tocar a primera vista ritmos de redondas a corcheas con silencios.",bpm:[60,80],
 tec:[{x:"Palmea un ritmo escrito, después tócalo sobre una sola nota."},{x:"Clave de fa: espacios A‑C‑E‑G, líneas G‑B‑D‑F‑A (de abajo arriba)."}],
 teo:"Redonda (4), blanca (2), negra (1), corchea (½) y sus silencios. El bajo suena una octava más grave de lo escrito.",gr:"Toca 4 compases de ritmo leído sobre la raíz de A‑D‑E."},
{t:"Arpegios mayor y menor",g:"Arpegio mayor y menor desde cualquier raíz, en subida y bajada.",bpm:[70,92],
 tec:[{x:"C mayor (C‑E‑G‑C) y A menor (A‑C‑E‑A).",tab:"A:3 D:2 D:5 G:5 | E:5 E:8 A:7 D:7"}],
 teo:"Triada mayor = 1‑3‑5. Triada menor = 1‑b3‑5. Por qué el bajo define el acorde.",gr:"Progresión C‑Am‑F‑G con arpegios en negras."},
{t:"Blues de 12 compases",g:"Tocar el blues entero en A sin perderte en la forma.",bpm:[70,95],
 tec:[{x:"Boogie raíz‑3‑5‑6 sobre A, D y E.",tab:"A:0 A:4 D:2 D:4 D:2 A:4 | D:0 D:4 G:2 G:4 G:2 D:4 | E:0 E:4 A:2 A:4 A:2 E:4"}],
 teo:"Forma: I‑I‑I‑I / IV‑IV‑I‑I / V‑IV‑I‑V. Cuenta los compases en voz alta.",gr:"Blues en A con base de shuffle lento."},
{t:"Shuffle",g:"Swing natural en las corcheas.",bpm:[70,100],
 tec:[{x:"El boogie de la semana pasada con corcheas swing (larga‑corta). Pon el metrónomo en Swing."}],
 teo:"Tresillo de corcheas y cómo nace el swing.",gr:"Pride and Joy (Stevie Ray Vaughan), línea simplificada."},
{t:"Escala menor y relativas",g:"Escala menor natural y saber cuál es la relativa de cada tonalidad mayor.",bpm:[72,96],
 tec:[{x:"A menor natural desde E:5.",tab:"E:5 E:7 E:8 A:5 A:7 A:8 D:5 D:7"},{x:"Escalas en terceras: 1‑3, 2‑4, 3‑5…"}],
 teo:"La relativa menor está en el 6º grado: C mayor ↔ A menor.",gr:"Línea en A menor sobre Am‑G‑F‑E."},
{t:"Repaso fase 2 y grabación",g:"Blues de 12 compases en A, E y G seguidos, grabado.",bpm:[80,100],
 tec:[{x:"Escala mayor y menor + arpegios por las 12 notas (las que te dé tiempo)."}],
 teo:"Compara con la grabación de la semana 8.",gr:"Come Together (The Beatles)."},
/* FASE 3 */
{t:"Pentatónica menor",g:"Pentatónica menor en 5º traste, de memoria, en cualquier tono.",bpm:[70,100],
 tec:[{x:"A menor pentatónica.",tab:"E:5 E:8 A:5 A:7 D:5 D:7 G:5 G:7"}],
 teo:"5 notas: 1‑b3‑4‑5‑b7. La escala más usada en rock, blues y funk.",gr:"Riffs sencillos con la pentatónica sobre un vamp en Am."},
{t:"Pentatónica mayor y escala de blues",g:"Hacer fills de un compás al final de cada vuelta del blues.",bpm:[70,100],
 tec:[{x:"Escala de blues en A (añade la b5).",tab:"E:5 E:8 A:5 A:6 A:7 D:5 D:7"},{x:"Pentatónica mayor en A: 1‑2‑3‑5‑6."}],
 teo:"Cuándo usar mayor o menor sobre un blues.",gr:"Blues en A con un fill en el compás 12."},
{t:"Semicorcheas",g:"Semicorcheas parejas con alternancia estricta durante 1 minuto.",bpm:[60,84],
 tec:[{x:"Semicorcheas sobre A, cuenta '1 e y a'.",tab:"A:0 A:0 A:0 A:0 A:0 A:0 A:0 A:0"},{x:"Cromático en semicorcheas."}],
 teo:"La semicorchea. Pon el metrónomo en Semicorcheas.",gr:"Raíz en semicorcheas sobre un groove de rock."},
{t:"Rock: octavas y galope",g:"Galope (corchea + 2 semicorcheas) estable a tempo de rock.",bpm:[70,100],
 tec:[{x:"Galope sobre E y A.",tab:"E:0 E:0 E:0 | E:0 E:0 E:0 | A:0 A:0 A:0 | A:0 A:0 A:0"},{x:"Octavas en corcheas por A‑G‑D."}],
 teo:"Figuras combinadas: corchea + dos semicorcheas.",gr:"Sunshine of Your Love (Cream)."},
{t:"Ghost notes con dedos",g:"Notas muertas audibles pero sin altura, entre notas reales.",bpm:[65,90],
 tec:[{x:"x = nota muerta: apoya la mano izquierda sin pisar.",tab:"E:5 E:x E:x E:5 E:x E:5 D:7 E:x"}],
 teo:"La nota muerta como percusión. Funk y R&B viven de esto.",gr:"Groove de raíz + ghost notes con base funk lenta."},
{t:"Síncopa y anticipaciones",g:"Tocar a contratiempo sin acelerar.",bpm:[65,90],
 tec:[{x:"Anticipa el cambio de acorde en el '4 y' del compás anterior."},{x:"Corcheas solo en las 'y' (contratiempos)."}],
 teo:"Ligaduras y síncopas en la partitura.",gr:"Línea sincopada sobre Am‑G."},
{t:"Pocket y dinámica",g:"Tocar 3 minutos con batería sin moverte del tempo.",bpm:[70,95],
 tec:[{x:"Mismo groove tocando delante, encima y detrás del tiempo."},{x:"Metrónomo en 'Solo 2 y 4'."}],
 teo:"Qué es el pocket. Escucha cómo toca el bajista con el bombo.",gr:"Groove propio de 4 compases con ritmos de batería del multiefectos o el looper."},
{t:"Repaso fase 3 y grabación",g:"Grabar un blues con fills y un groove rock completos.",bpm:[80,105],
 tec:[{x:"Pentatónicas y blues en 3 tonos; semicorcheas a tu mejor BPM."}],
 teo:"Autoevaluación: pulso, limpieza, ghost notes.",gr:"Smoke on the Water (Deep Purple) y repaso de Come Together."},
/* FASE 4 */
{t:"Funk con dedos",g:"Groove de semicorcheas con octavas y ghost notes que 'empuje'.",bpm:[65,90],
 tec:[{x:"Octavas + ghost notes sobre A.",tab:"E:5 . D:7 E:5 | E:x E:5 D:7 E:x"}],
 teo:"Menos es más: el espacio en el funk.",gr:"Cissy Strut (The Meters)."},
{t:"Mixolidio y acorde dominante",g:"Groove sobre un solo acorde E7 durante 2 minutos variando.",bpm:[70,95],
 tec:[{x:"Mixolidio en E: escala mayor con b7. Arpegio de 7ª: 1‑3‑5‑b7."}],
 teo:"El acorde dominante 7 y el modo mixolidio.",gr:"Vamp funk en E7."},
{t:"Slap 1: el pulgar",g:"Golpe de pulgar parejo en E y A, sin que suenen otras cuerdas.",bpm:[60,80],
 tec:[{x:"T = pulgar. Golpea con el hueso del pulgar, rebota.",tab:"E:0/T E:0/T E:0/T E:0/T | A:0/T A:0/T A:0/T A:0/T"}],
 teo:"Posición de la mano derecha para el slap. Sube un poco la ganancia o comprime en el multiefectos.",gr:"Negras y corcheas de pulgar sobre E y A."},
{t:"Slap 2: el pop",g:"Octavas pulgar‑pop limpias en corcheas.",bpm:[60,85],
 tec:[{x:"P = pop (tirar con índice o medio).",tab:"E:5/T D:7/P E:5/T D:7/P | A:5/T G:7/P A:5/T G:7/P"}],
 teo:"Volumen equilibrado entre pulgar y pop.",gr:"Octavas de slap por A‑D‑E."},
{t:"Slap 3: ligados y notas muertas",g:"Combinar T, P, hammer‑on y dead notes.",bpm:[60,85],
 tec:[{x:"H = hammer‑on. x = nota muerta con el pulgar.",tab:"E:5/T E:7/H E:x/T D:7/P | E:5/T E:x/T D:7/P E:x/T"}],
 teo:"La mano izquierda también hace ritmo.",gr:"Groove de slap de un compás en bucle."},
{t:"Slap 4: semicorcheas",g:"Patrón T‑x‑P‑x en semicorcheas a tempo medio.",bpm:[60,90],
 tec:[{x:"Patrón base de semicorcheas.",tab:"E:5/T E:x/T D:7/P E:x/T E:5/T E:x/T D:7/P D:7/P"},{x:"Opcional: double thumb (pulgar hacia abajo y hacia arriba)."}],
 teo:"Cómo se escriben el slap y el pop en partitura.",gr:"Groove de slap sobre E7‑A7."},
{t:"Funk de 16 compases",g:"Alternar dedos y slap dentro de un mismo tema.",bpm:[70,95],
 tec:[{x:"8 compases con dedos + 8 con slap, sin parar."}],
 teo:"Forma de tema: intro, A, B. Escucha dónde cambia el bajo.",gr:"Brick House (Commodores) y Higher Ground (Stevie Wonder)."},
{t:"Repaso fase 4 y grabación",g:"Grabar un funk con dedos y uno con slap.",bpm:[80,100],
 tec:[{x:"Todos los patrones de slap a tu mejor BPM."}],
 teo:"Compara con la grabación de la semana 24.",gr:"Chameleon (Herbie Hancock)."},
/* FASE 5 */
{t:"Acordes de séptima",g:"Arpegios maj7, 7, m7 y m7b5 desde cualquier raíz.",bpm:[70,95],
 tec:[{x:"Cmaj7 · C7 · Cm7 · Cm7b5",tab:"A:3 D:2 D:5 G:4 | A:3 D:2 D:5 G:3 | A:3 D:1 D:5 G:3 | A:3 D:1 D:4 G:3"}],
 teo:"Los cuatro acordes de 7ª y sus fórmulas.",gr:"Arpegios en negras sobre Cmaj7‑Am7‑Dm7‑G7."},
{t:"Ciclo de quintas y II‑V‑I",g:"Tocar II‑V‑I en C y F con raíz y quinta.",bpm:[70,100],
 tec:[{x:"II‑V‑I en C: Dm7 – G7 – Cmaj7.",tab:"A:5 D:7 | E:3 A:5 | A:3 D:5"},{x:"Arpegios por el ciclo de cuartas: C‑F‑Bb‑Eb…"}],
 teo:"El ciclo de quintas y la cadencia II‑V‑I.",gr:"II‑V‑I con arpegios completos."},
{t:"Lectura rítmica 2",g:"Leer tresillos, puntillos, ligaduras y semicorcheas.",bpm:[60,85],
 tec:[{x:"Palmea y toca ritmos con negra con puntillo + corchea, y tresillos."}],
 teo:"Puntillo, ligadura, tresillo. Lee 8 compases cada día.",gr:"Lee una línea de bajo sencilla (Motown) en partitura."},
{t:"Soul y Motown",g:"Línea melódica con notas de paso cromáticas.",bpm:[70,100],
 tec:[{x:"Conecta acordes con notas de paso cromáticas, al estilo de James Jamerson."}],
 teo:"Notas de paso y notas de aproximación.",gr:"My Girl (The Temptations) y Ain't No Mountain High Enough."},
{t:"Walking bass 1",g:"Walking de negras sobre un blues en F.",bpm:[70,100],
 tec:[{x:"Nota del acorde en el tiempo 1, aproximación cromática en el 4. F7 → Bb7 → F7.",tab:"E:1 E:5 A:3 A:2 | A:1 D:0 D:3 D:2 | D:3"}],
 teo:"Blues de jazz en F. La nota del tiempo 1 siempre es del acorde.",gr:"Blues en F caminando 12 compases."},
{t:"Walking bass 2",g:"Walking sobre II‑V‑I con aproximaciones desde arriba y desde abajo.",bpm:[70,110],
 tec:[{x:"Escala, arpegio y cromatismo combinados sobre Dm7‑G7‑Cmaj7."}],
 teo:"Aproximación diatónica, cromática y por quinta.",gr:"Autumn Leaves."},
{t:"Modos: dórico y jazz‑funk",g:"Groove en Dm7 usando el dórico.",bpm:[70,100],
 tec:[{x:"D dórico: escala menor con 6ª mayor. Compáralo con D menor natural."}],
 teo:"Modos griegos: dórico y mixolidio para empezar.",gr:"So What (Miles Davis) y Watermelon Man (Herbie Hancock)."},
{t:"Inversiones y repaso",g:"Línea por grados conjuntos usando acordes invertidos (C/E, G/B).",bpm:[75,105],
 tec:[{x:"C – C/B – Am – Am/G – F: bajo descendente."}],
 teo:"Inversiones y acordes con barra. Graba y compara con la semana 32.",gr:"Repaso de los temas de la fase."},
/* FASE 6 */
{t:"Clave y tumbao",g:"Tumbao básico sin tocar en el tiempo 1.",bpm:[70,95],
 tec:[{x:"Tumbao sobre C: nota en '2 y' y en 4 (ligada hasta el siguiente compás). Cada punto es una corchea.",tab:". . . A:3 . . D:5 . | . . . A:3 . . D:5 ."}],
 teo:"Clave 3‑2 y 2‑3. Por qué el bajo de salsa anticipa.",gr:"Tumbao sobre un ritmo de clave."},
{t:"Tumbao en progresiones",g:"Tumbao sobre I‑IV‑V y ii‑V con cambios anticipados.",bpm:[75,105],
 tec:[{x:"La nota del '4' ya es la raíz del acorde siguiente."}],
 teo:"Cha‑cha‑chá y salsa: diferencias para el bajo.",gr:"Oye Como Va (Tito Puente / Santana)."},
{t:"Bossa nova y samba",g:"Patrón raíz‑quinta de bossa relajado.",bpm:[70,110],
 tec:[{x:"Bossa sobre C: raíz en 1, quinta en '2 y' y 3, raíz en '4 y'.",tab:"A:3 . . D:5 D:5 . . A:3"}],
 teo:"Negra con puntillo + corchea: la célula de la bossa.",gr:"Mas Que Nada (Jorge Ben)."},
{t:"Solos sencillos",g:"Improvisar 12 compases de blues con frases de pregunta‑respuesta.",bpm:[70,100],
 tec:[{x:"Frases de 2 compases con la pentatónica, deja 2 compases de silencio."}],
 teo:"Motivo, repetición y variación.",gr:"Solo sobre blues en A."},
{t:"Sacar temas de oído",g:"Transcribir una línea completa sin tablatura.",bpm:[70,100],
 tec:[{x:"Ralentiza el audio, canta la nota, búscala en la cuerda E o A."}],
 teo:"Método: raíz, ritmo, notas de adorno.",gr:"Elige un tema de cada estilo de la pestaña Temas."},
{t:"Técnica a tempo objetivo",g:"Calentamiento completo a 100 BPM en corcheas.",bpm:[90,110],
 tec:[{x:"Todos los ejercicios del calentamiento diario al BPM objetivo."}],
 teo:"Detecta tu punto débil y dedícale la semana.",gr:"Repaso de dos temas de fases anteriores."},
{t:"Preparar el proyecto final",g:"Cuatro temas listos: funk, soul/walking, blues/rock y latino.",bpm:[80,110],
 tec:[{x:"Ensaya los cuatro temas con base de principio a fin."}],
 teo:"Plan de grabación: base, toma, escucha, repetir.",gr:"Los cuatro temas elegidos."},
{t:"Proyecto final",g:"Grabar los cuatro temas y escucharlos junto a la grabación de la semana 8.",bpm:[80,115],
 tec:[{x:"Grabación final."}],
 teo:"Siguiente año: armonía III‑IV, chord melody, 5 cuerdas, bajo flamenco.",gr:"Tu repertorio grabado."}
];
var WARM=[
 "Cromático 1‑2‑3‑4 por las 4 cuerdas","Cromático inverso 4‑3‑2‑1","Permutaciones 1‑3‑2‑4 y 1‑4‑2‑3","Saltos de cuerda (E‑D y A‑G)",
 "Octavas por todo el mástil","Escala mayor en 2 octavas","Arpegios por el ciclo de quintas","Semicorcheas en una nota (resistencia)",
 "Ghost notes alternadas con nota real","Notas largas con apagado limpio"
];
var REP=[
 {s:"Rock y blues",l:[["Seven Nation Army","The White Stripes",1],["Stand By Me","Ben E. King",1],["Another One Bites the Dust","Queen",1],["Come Together","The Beatles",2],["Pride and Joy","Stevie Ray Vaughan",2],["Sunshine of Your Love","Cream",2],["Smoke on the Water","Deep Purple",1]]},
 {s:"Funk y slap",l:[["Cissy Strut","The Meters",2],["Brick House","Commodores",2],["Higher Ground","Stevie Wonder",3],["Chameleon","Herbie Hancock",3],["Le Freak","Chic",3],["Pick Up the Pieces","Average White Band",3]]},
 {s:"Soul y jazz‑funk",l:[["My Girl","The Temptations",1],["Ain't No Mountain High Enough","Marvin Gaye & Tammi Terrell",2],["What's Going On","Marvin Gaye",3],["Watermelon Man","Herbie Hancock",2],["So What","Miles Davis",2],["Autumn Leaves","estándar de jazz",3]]},
 {s:"Latino",l:[["Oye Como Va","Tito Puente / Santana",1],["Mas Que Nada","Jorge Ben",2],["La Bamba","Ritchie Valens",1],["Guantanamera","tradicional",2],["Pedro Navaja","Rubén Blades",3]]}
];

/* ---------- Estado ---------- */
var KEY="curso-bajo-v1", st={done:{},bpm:{}};
try{var raw=localStorage.getItem(KEY);if(raw)st=Object.assign(st,JSON.parse(raw))}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
function curIdx(){for(var i=0;i<W.length;i++)if(!st.done[i])return i;return W.length-1}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

/* ---------- Progreso ---------- */
function renderProgress(){
  var n=Object.keys(st.done).filter(function(k){return st.done[k]}).length;
  document.getElementById("pDone").textContent=n;
  var c=curIdx(), ph=Math.floor(c/8);
  document.getElementById("pPhase").textContent="Fase "+(ph+1)+" · "+PHASES[ph].n;
  for(var s=0;s<4;s++){ // cada cuerda = 12 semanas
    var cnt=0;for(var w=s*12;w<s*12+12;w++)if(st.done[w])cnt++;
    document.getElementById("s"+(4-s)).style.width=(cnt/12*100)+"%";
  }
}

/* ---------- Detalle de semana ---------- */
function weekDetail(i){
  var w=W[i];
  var ex=w.tec.map(function(e){return "<li>"+esc(e.x)+(e.tab?tab(e.tab):"")+"</li>"}).join("");
  return '<dl class="wgrid">'+
   '<dt>Objetivo</dt><dd><b>'+esc(w.g)+'</b></dd>'+
   '<dt>Técnica</dt><dd><ul class="ex">'+ex+'</ul></dd>'+
   '<dt>Teoría</dt><dd>'+esc(w.teo)+'</dd>'+
   '<dt>Groove / tema</dt><dd>'+esc(w.gr)+'</dd>'+
   '<dt>Tempo</dt><dd class="row"><span class="chip bpm">'+w.bpm[0]+' → '+w.bpm[1]+' BPM</span><button class="btn small" data-metro="'+w.bpm[0]+'">Abrir metrónomo a '+w.bpm[0]+'</button></dd>'+
   (TIPS[i]?'<dt>Consejos EDB</dt><dd class="tips">'+TIPS[i].map(function(t){return '<p class="tip">'+esc(t)+'</p>'}).join("")+'</dd>':'')+
   '<dt>Vídeos</dt><dd class="vids">'+(WV[i]||[]).map(function(id){return '<a class="vid" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener"><i class="yt"></i><span>'+esc(VID[id]||id)+'</span></a>'}).join("")+'</dd>'+
   '<dt>Bases</dt><dd class="vids">'+(WB[i]||[]).map(function(id){var b=BTI[id];if(!b)return "";return '<a class="vid" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener"><i class="yt"></i><span>'+esc(b.n)+'<small>'+esc(b.k)+(b.b?' · '+b.b+' BPM':'')+'</small></span></a>'}).join("")+'</dd>'+
   '</dl>'+
   '<div class="row" style="justify-content:space-between">'+
   '<label class="check" for="done-'+i+'"><input type="checkbox" id="done-'+i+'" data-done="'+i+'"'+(st.done[i]?" checked":"")+'> Objetivo cumplido</label>'+
   '<label class="row muted" for="bpm-'+i+'" style="font-size:.9rem">BPM alcanzado <input class="num" type="number" min="30" max="250" id="bpm-'+i+'" data-bpm="'+i+'" value="'+(st.bpm[i]||"")+'" placeholder="—"></label>'+
   '</div>';
}

/* ---------- Hoy ---------- */
function renderToday(){
  var i=curIdx(), ph=Math.floor(i/8);
  document.getElementById("todayCard").innerHTML=
   '<div class="row" style="justify-content:space-between"><div><p class="eyebrow">Semana '+(i+1)+' de 48 · Fase '+(ph+1)+'</p><h2>'+esc(W[i].t)+'</h2></div><span class="chip">'+esc(PHASES[ph].n)+'</span></div>'+
   weekDetail(i);
  renderSession(i);
}
var SB=[{k:"Calentamiento",m:5},{k:"Técnica",m:8},{k:"Lectura y teoría",m:5},{k:"Groove o tema",m:7}];
function renderSession(i){
  var d=new Date().getDay(), w1=WARM[(d*2)%10], w2=WARM[(d*2+1)%10], w=W[i];
  var txt=[w1+" · "+w2,w.tec.map(function(e){return e.x}).join(" "),w.teo,w.gr];
  document.getElementById("session").innerHTML=SB.map(function(b,k){
    return '<div class="block" id="blk'+k+'"><div class="min">'+b.m+'′</div><div class="body"><h3>'+b.k+'</h3><p class="muted">'+esc(txt[k])+'</p></div></div>';
  }).join("");
}

/* ---------- Plan ---------- */
function renderPlan(){
  var c=curIdx(), html="";
  PHASES.forEach(function(p,pi){
    var done=0;for(var k=pi*8;k<pi*8+8;k++)if(st.done[k])done++;
    html+='<div class="phase"><div class="phase-head"><div><p class="eyebrow">Fase '+(pi+1)+' · semanas '+(pi*8+1)+'–'+(pi*8+8)+'</p><h2>'+esc(p.n)+'</h2></div><span class="chip bpm">'+done+'/8</span></div><p class="muted">'+esc(p.d)+'</p><div class="weeks">';
    for(var i=pi*8;i<pi*8+8;i++){
      var cls="week"+(st.done[i]?" is-done":"")+(i===c?" is-current":"");
      html+='<details class="'+cls+'" id="wk'+i+'"'+(i===c?" open":"")+'><summary><span class="wnum">S'+String(i+1).padStart(2,"0")+'</span><span class="wtitle">'+esc(W[i].t)+'</span><span class="wstate">✓</span></summary><div class="wbody">'+weekDetail(i)+'</div></details>';
    }
    html+='</div></div>';
  });
  document.getElementById("view-plan").innerHTML=html;
}

function renderAll(){renderProgress();renderToday();renderPlan()}

document.addEventListener("change",function(e){
  var t=e.target;
  if(t.dataset.done!==undefined){st.done[t.dataset.done]=t.checked;save();renderAll()}
  if(t.dataset.bpm!==undefined){var v=parseInt(t.value,10);if(v)st.bpm[t.dataset.bpm]=v;else delete st.bpm[t.dataset.bpm];save();
    document.querySelectorAll('[data-bpm="'+t.dataset.bpm+'"]').forEach(function(x){if(x!==t)x.value=t.value})}
});
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-metro]");
  if(b){setBpm(parseInt(b.dataset.metro,10));show("metro")}
});

/* ---------- Pestañas ---------- */
var VIEWS=["hoy","plan","mastil","metro","temas","bases"];
function show(v){
  VIEWS.forEach(function(x){
    document.getElementById("view-"+x).hidden=(x!==v);
    document.getElementById("tab-"+x).setAttribute("aria-selected",x===v?"true":"false");
  });
  try{localStorage.setItem(KEY+"-tab",v)}catch(e){}
  window.scrollTo({top:0});
}
document.querySelectorAll("nav.tabs button").forEach(function(b){b.addEventListener("click",function(){show(b.dataset.view)})});

/* ---------- Mástil ---------- */
var NOTES=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var DEG=["1","b2","2","b3","3","4","b5","5","b6","6","b7","7"];
var SCALES={"Todas las notas":null,"Escala mayor":[0,2,4,5,7,9,11],"Menor natural":[0,2,3,5,7,8,10],"Pentatónica menor":[0,3,5,7,10],"Pentatónica mayor":[0,2,4,7,9],"Escala de blues":[0,3,5,6,7,10],"Mixolidio":[0,2,4,5,7,9,10],"Dórico":[0,2,3,5,7,9,10],"Arpegio mayor":[0,4,7],"Arpegio menor":[0,3,7],"Arpegio 7 (dominante)":[0,4,7,10],"Arpegio m7":[0,3,7,10],"Arpegio maj7":[0,4,7,11]};
var rootSel=document.getElementById("fbRoot"), scSel=document.getElementById("fbScale"), lbSel=document.getElementById("fbLabel");
NOTES.forEach(function(n,i){rootSel.add(new Option(n,i))});
Object.keys(SCALES).forEach(function(k){scSel.add(new Option(k,k))});
rootSel.value="9"; scSel.value="Pentatónica menor";
function renderFB(){
  var root=+rootSel.value, sc=SCALES[scSel.value], lab=lbSel.value, OPEN=[["G",7,"1.5px"],["D",2,"2px"],["A",9,"2.5px"],["E",4,"3.5px"]];
  var h="";
  OPEN.forEach(function(s){
    h+='<div class="lab">'+s[0]+'</div>';
    for(var f=0;f<=12;f++){
      var n=(s[1]+f)%12, iv=(n-root+12)%12, inS=!sc||sc.indexOf(iv)>-1;
      var cls="note"+(sc?(inS?(iv===0?" root":" in"):" off"):(iv===0?" root":""));
      var txt=lab==="deg"?DEG[iv]:NOTES[n];
      h+='<div class="cell'+(f===0?" nut":"")+'" style="--sw:'+s[2]+'"><span class="'+cls+'">'+txt+'</span></div>';
    }
  });
  h+='<div></div>';
  for(var f=0;f<=12;f++)h+='<div class="fn'+([3,5,7,9,12].indexOf(f)>-1?" dot":"")+'">'+f+'</div>';
  document.getElementById("fb").innerHTML=h;
}
[rootSel,scSel,lbSel].forEach(function(s){s.addEventListener("change",renderFB)});

/* ---------- Temas ---------- */
document.getElementById("rep").innerHTML=REP.map(function(g){
  return '<div class="card"><h3>'+g.s+'</h3><ol>'+g.l.map(function(x){return '<li><b>'+esc(x[0])+'</b> <span class="muted">· '+esc(x[1])+'</span> <span class="lvl">'+"●".repeat(x[2])+"○".repeat(3-x[2])+'</span></li>'}).join("")+'</ol></div>';
}).join("");

/* ---------- Bases ---------- */
var BTI={};BT.forEach(function(b){BTI[b.id]=b});
var btStyle=document.getElementById("btStyle"),btKey=document.getElementById("btKey"),btBpm=document.getElementById("btBpm");
var KEYORDER=["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"];
function keyBase(k){return k.replace(/m$/,"").replace("C#","Db").replace("D#","Eb").replace("G#","Ab").replace("A#","Bb")}
(function(){
  var styles={},keys={};
  BT.forEach(function(b){var s=b.n.replace(/ \(Escuela de Bajistas\)/,"");styles[s]=1;if(b.k)keys[b.k]=1});
  Object.keys(styles).sort(function(a,b){return a.localeCompare(b,'es')}).forEach(function(s){btStyle.add(new Option(s,s))});
  Object.keys(keys).sort(function(a,b){var d=KEYORDER.indexOf(keyBase(a))-KEYORDER.indexOf(keyBase(b));return d||a.localeCompare(b)}).forEach(function(k){btKey.add(new Option(k+(/m$/.test(k)?" (menor)":" (mayor)"),k))});
})();
function renderBT(){
  var s=btStyle.value,k=btKey.value,r=btBpm.value.split("-").map(Number);
  var list=BT.filter(function(b){
    if(s&&b.n.replace(/ \(Escuela de Bajistas\)/,"")!==s)return false;
    if(k&&b.k!==k)return false;
    if(btBpm.value&&(!b.b||b.b<r[0]||b.b>r[1]))return false;
    return true;
  }).sort(function(a,b){return (a.b||0)-(b.b||0)});
  document.getElementById("btCount").textContent=list.length+" bases";
  document.getElementById("btList").innerHTML=list.map(function(b){
    return '<a class="bt" href="https://www.youtube.com/watch?v='+b.id+'" target="_blank" rel="noopener"><b>'+esc(b.n)+'</b><span class="meta"><span class="k">'+esc(b.k||"—")+'</span><span>'+(b.b?b.b+' BPM':'')+'</span></span></a>';
  }).join("")||'<p class="muted">No hay bases con ese filtro.</p>';
}
[btStyle,btKey,btBpm].forEach(function(x){x.addEventListener("change",renderBT)});
renderBT();

/* ---------- Audio ---------- */
var ctx=null;
function ac(){if(!ctx){var A=window.AudioContext||window.webkitAudioContext;ctx=new A()}if(ctx.state==="suspended")ctx.resume();return ctx}
function click(time,freq,vol){
  var o=ctx.createOscillator(),g=ctx.createGain();
  o.frequency.value=freq;o.connect(g);g.connect(ctx.destination);
  g.gain.setValueAtTime(vol,time);g.gain.exponentialRampToValueAtTime(0.001,time+0.05);
  o.start(time);o.stop(time+0.06);
}

/* ---------- Metrónomo ---------- */
var bpm=70, sub="1", running=false, nextT=0, step=0, timerId=null, queue=[];
var bpmEl=document.getElementById("mBpm"), range=document.getElementById("mRange"), dots=document.querySelectorAll("#mBeats span");
function setBpm(v){bpm=Math.max(40,Math.min(200,v||70));bpmEl.textContent=bpm;range.value=bpm}
range.addEventListener("input",function(){setBpm(+range.value)});
document.querySelectorAll("[data-d]").forEach(function(b){b.addEventListener("click",function(){setBpm(bpm+(+b.dataset.d))})});
document.querySelectorAll("#mSub button").forEach(function(b){b.addEventListener("click",function(){
  sub=b.dataset.s;document.querySelectorAll("#mSub button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});
})});
function stepsPerBeat(){return sub==="sw"?3:+sub}
function schedule(){
  var c=ctx, spb=stepsPerBeat(), beatDur=60/bpm;
  while(nextT<c.currentTime+0.12){
    var beat=Math.floor(step/spb)%4, s=step%spb, play=true;
    if(sub==="sw"&&s===1)play=false;
    var only24=document.getElementById("m24").checked, acc=document.getElementById("mAcc").checked;
    if(s===0){
      if(only24&&(beat===0||beat===2))play=false;
      if(play)click(nextT,(acc&&beat===0&&!only24)?1650:1100,0.6);
      queue.push({t:nextT,b:beat});
    }else if(play){click(nextT,750,0.25)}
    nextT+=beatDur/spb; step++;
  }
}
function draw(){
  if(!running)return;
  var now=ctx.currentTime;
  while(queue.length&&queue[0].t<=now){
    var q=queue.shift();
    dots.forEach(function(d,i){d.className=(i===q.b?"on":"")+(i===0?" acc":"")});
  }
  requestAnimationFrame(draw);
}
document.getElementById("mToggle").addEventListener("click",function(){
  if(running){running=false;clearInterval(timerId);this.textContent="Iniciar";dots.forEach(function(d){d.className=""});return}
  ac();running=true;step=0;queue=[];nextT=ctx.currentTime+0.06;
  timerId=setInterval(schedule,25);schedule();requestAnimationFrame(draw);this.textContent="Parar";
});
var taps=[];
document.getElementById("mTap").addEventListener("click",function(){
  var t=performance.now();taps=taps.filter(function(x){return t-x<2500});taps.push(t);
  if(taps.length>1){var d=(taps[taps.length-1]-taps[0])/(taps.length-1);setBpm(Math.round(60000/d))}
});

/* ---------- Temporizador de sesión ---------- */
var sTotal=25*60, sLeft=sTotal, sRun=false, sInt=null, lastBlock=-1;
var tEl=document.getElementById("sTimer"), sBtn=document.getElementById("sStart");
function fmt(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
function blockAt(elapsed){var acc=0;for(var k=0;k<SB.length;k++){acc+=SB[k].m*60;if(elapsed<acc)return k}return SB.length}
function paintBlocks(){
  var b=blockAt(sTotal-sLeft);
  for(var k=0;k<SB.length;k++){var el=document.getElementById("blk"+k);if(!el)continue;
    el.classList.toggle("active",sRun&&k===b||(!sRun&&sLeft<sTotal&&k===b));el.classList.toggle("done",k<b)}
  if(b!==lastBlock&&lastBlock!==-1&&ctx){var t=ctx.currentTime;click(t,880,0.5);click(t+0.18,1320,0.5)}
  lastBlock=b;
}
function tick(){
  sLeft--;tEl.textContent=fmt(Math.max(0,sLeft));paintBlocks();
  if(sLeft<=0){clearInterval(sInt);sRun=false;sBtn.textContent="Hecho";}
}
sBtn.addEventListener("click",function(){
  if(sLeft<=0)return;
  if(sRun){sRun=false;clearInterval(sInt);sBtn.textContent="Seguir";return}
  ac();sRun=true;lastBlock=blockAt(sTotal-sLeft);sInt=setInterval(tick,1000);sBtn.textContent="Pausa";paintBlocks();
});
document.getElementById("sReset").addEventListener("click",function(){
  clearInterval(sInt);sRun=false;sLeft=sTotal;lastBlock=-1;tEl.textContent=fmt(sLeft);sBtn.textContent="Empezar";paintBlocks();
});

/* ---------- Arranque ---------- */
renderAll();renderFB();setBpm(W[curIdx()].bpm[0]);
var startTab="hoy";
var h=(location.hash||"").slice(1);
if(VIEWS.indexOf(h)>-1)startTab=h;else{try{var t=localStorage.getItem(KEY+"-tab");if(VIEWS.indexOf(t)>-1)startTab=t}catch(e){}}
show(startTab);
})();
