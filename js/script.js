const elementos = [

{numero:1, simbolo:"H", nome:"Hidrogênio", massa:1.008, categoria:"Ametal", periodo:1, grupo:1},
{numero:2, simbolo:"He", nome:"Hélio", massa:4.0026, categoria:"Gás nobre", periodo:1, grupo:18},
{numero:3, simbolo:"Li", nome:"Lítio", massa:6.94, categoria:"Metal alcalino", periodo:2, grupo:1},
{numero:4, simbolo:"Be", nome:"Berílio", massa:9.0122, categoria:"Metal alcalino-terroso", periodo:2, grupo:2},
{numero:5, simbolo:"B", nome:"Boro", massa:10.81, categoria:"Semimetal", periodo:2, grupo:13},
{numero:6, simbolo:"C", nome:"Carbono", massa:12.011, categoria:"Ametal", periodo:2, grupo:14},
{numero:7, simbolo:"N", nome:"Nitrogênio", massa:14.007, categoria:"Ametal", periodo:2, grupo:15},
{numero:8, simbolo:"O", nome:"Oxigênio", massa:15.999, categoria:"Ametal", periodo:2, grupo:16},
{numero:9, simbolo:"F", nome:"Flúor", massa:18.998, categoria:"Halogênio", periodo:2, grupo:17},
{numero:10, simbolo:"Ne", nome:"Neônio", massa:20.180, categoria:"Gás nobre", periodo:2, grupo:18},
{numero:11, simbolo:"Na", nome:"Sódio", massa:22.990, categoria:"Metal alcalino", periodo:3, grupo:1},
{numero:12, simbolo:"Mg", nome:"Magnésio", massa:24.305, categoria:"Metal alcalino-terroso", periodo:3, grupo:2},
{numero:13, simbolo:"Al", nome:"Alumínio", massa:26.982, categoria:"Metal pós-transição", periodo:3, grupo:13},
{numero:14, simbolo:"Si", nome:"Silício", massa:28.085, categoria:"Semimetal", periodo:3, grupo:14},
{numero:15, simbolo:"P", nome:"Fósforo", massa:30.974, categoria:"Ametal", periodo:3, grupo:15},
{numero:16, simbolo:"S", nome:"Enxofre", massa:32.06, categoria:"Ametal", periodo:3, grupo:16},
{numero:17, simbolo:"Cl", nome:"Cloro", massa:35.45, categoria:"Halogênio", periodo:3, grupo:17},
{numero:18, simbolo:"Ar", nome:"Argônio", massa:39.948, categoria:"Gás nobre", periodo:3, grupo:18},
{numero:19, simbolo:"K", nome:"Potássio", massa:39.098, categoria:"Metal alcalino", periodo:4, grupo:1},
{numero:20, simbolo:"Ca", nome:"Cálcio", massa:40.078, categoria:"Metal alcalino-terroso", periodo:4, grupo:2},
{numero:21, simbolo:"Sc", nome:"Escândio", massa:44.956, categoria:"Metal de transição", periodo:4, grupo:3},
{numero:22, simbolo:"Ti", nome:"Titânio", massa:47.867, categoria:"Metal de transição", periodo:4, grupo:4},
{numero:23, simbolo:"V", nome:"Vanádio", massa:50.942, categoria:"Metal de transição", periodo:4, grupo:5},
{numero:24, simbolo:"Cr", nome:"Cromo", massa:51.996, categoria:"Metal de transição", periodo:4, grupo:6},
{numero:25, simbolo:"Mn", nome:"Manganês", massa:54.938, categoria:"Metal de transição", periodo:4, grupo:7},
{numero:26, simbolo:"Fe", nome:"Ferro", massa:55.845, categoria:"Metal de transição", periodo:4, grupo:8},
{numero:27, simbolo:"Co", nome:"Cobalto", massa:58.933, categoria:"Metal de transição", periodo:4, grupo:9},
{numero:28, simbolo:"Ni", nome:"Níquel", massa:58.693, categoria:"Metal de transição", periodo:4, grupo:10},
{numero:29, simbolo:"Cu", nome:"Cobre", massa:63.546, categoria:"Metal de transição", periodo:4, grupo:11},
{numero:30, simbolo:"Zn", nome:"Zinco", massa:65.38, categoria:"Metal de transição", periodo:4, grupo:12},
{numero:31, simbolo:"Ga", nome:"Gálio", massa:69.723, categoria:"Metal pós-transição", periodo:4, grupo:13},
{numero:32, simbolo:"Ge", nome:"Germânio", massa:72.630, categoria:"Semimetal", periodo:4, grupo:14},
{numero:33, simbolo:"As", nome:"Arsênio", massa:74.922, categoria:"Semimetal", periodo:4, grupo:15},
{numero:34, simbolo:"Se", nome:"Selênio", massa:78.971, categoria:"Ametal", periodo:4, grupo:16},
{numero:35, simbolo:"Br", nome:"Bromo", massa:79.904, categoria:"Halogênio", periodo:4, grupo:17},
{numero:36, simbolo:"Kr", nome:"Criptônio", massa:83.798, categoria:"Gás nobre", periodo:4, grupo:18},
{numero:37, simbolo:"Rb", nome:"Rubídio", massa:85.468, categoria:"Metal alcalino", periodo:5, grupo:1},
{numero:38, simbolo:"Sr", nome:"Estrôncio", massa:87.62, categoria:"Metal alcalino-terroso", periodo:5, grupo:2},
{numero:39, simbolo:"Y", nome:"Ítrio", massa:88.906, categoria:"Metal de transição", periodo:5, grupo:3},
{numero:40, simbolo:"Zr", nome:"Zircônio", massa:91.224, categoria:"Metal de transição", periodo:5, grupo:4},
{numero:41, simbolo:"Nb", nome:"Nióbio", massa:92.906, categoria:"Metal de transição", periodo:5, grupo:5},
{numero:42, simbolo:"Mo", nome:"Molibdênio", massa:95.95, categoria:"Metal de transição", periodo:5, grupo:6},
{numero:43, simbolo:"Tc", nome:"Tecnécio", massa:98, categoria:"Metal de transição", periodo:5, grupo:7},
{numero:44, simbolo:"Ru", nome:"Rutênio", massa:101.07, categoria:"Metal de transição", periodo:5, grupo:8},
{numero:45, simbolo:"Rh", nome:"Ródio", massa:102.91, categoria:"Metal de transição", periodo:5, grupo:9},
{numero:46, simbolo:"Pd", nome:"Paládio", massa:106.42, categoria:"Metal de transição", periodo:5, grupo:10},
{numero:47, simbolo:"Ag", nome:"Prata", massa:107.87, categoria:"Metal de transição", periodo:5, grupo:11},
{numero:48, simbolo:"Cd", nome:"Cádmio", massa:112.41, categoria:"Metal de transição", periodo:5, grupo:12},
{numero:49, simbolo:"In", nome:"Índio", massa:114.82, categoria:"Metal pós-transição", periodo:5, grupo:13},
{numero:50, simbolo:"Sn", nome:"Estanho", massa:118.71, categoria:"Metal pós-transição", periodo:5, grupo:14},
{numero:51, simbolo:"Sb", nome:"Antimônio", massa:121.76, categoria:"Semimetal", periodo:5, grupo:15},
{numero:52, simbolo:"Te", nome:"Telúrio", massa:127.60, categoria:"Semimetal", periodo:5, grupo:16},
{numero:53, simbolo:"I", nome:"Iodo", massa:126.90, categoria:"Halogênio", periodo:5, grupo:17},
{numero:54, simbolo:"Xe", nome:"Xenônio", massa:131.29, categoria:"Gás nobre", periodo:5, grupo:18},
{numero:55, simbolo:"Cs", nome:"Césio", massa:132.91, categoria:"Metal alcalino", periodo:6, grupo:1},
{numero:56, simbolo:"Ba", nome:"Bário", massa:137.33, categoria:"Metal alcalino-terroso", periodo:6, grupo:2},
{numero:57, simbolo:"La", nome:"Lantânio", massa:138.91, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:58, simbolo:"Ce", nome:"Cério", massa:140.12, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:59, simbolo:"Pr", nome:"Praseodímio", massa:140.91, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:60, simbolo:"Nd", nome:"Neodímio", massa:144.24, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:61, simbolo:"Pm", nome:"Promécio", massa:145, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:62, simbolo:"Sm", nome:"Samário", massa:150.36, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:63, simbolo:"Eu", nome:"Európio", massa:151.96, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:64, simbolo:"Gd", nome:"Gadolínio", massa:157.25, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:65, simbolo:"Tb", nome:"Térbio", massa:158.93, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:66, simbolo:"Dy", nome:"Disprósio", massa:162.50, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:67, simbolo:"Ho", nome:"Hólmio", massa:164.93, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:68, simbolo:"Er", nome:"Érbio", massa:167.26, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:69, simbolo:"Tm", nome:"Túlio", massa:168.93, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:70, simbolo:"Yb", nome:"Itérbio", massa:173.05, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:71, simbolo:"Lu", nome:"Lutécio", massa:174.97, categoria:"Lantanídeo", periodo:6, grupo:3},
{numero:72, simbolo:"Hf", nome:"Háfnio", massa:178.49, categoria:"Metal de transição", periodo:6, grupo:4},
{numero:73, simbolo:"Ta", nome:"Tântalo", massa:180.95, categoria:"Metal de transição", periodo:6, grupo:5},
{numero:74, simbolo:"W", nome:"Tungstênio", massa:183.84, categoria:"Metal de transição", periodo:6, grupo:6},
{numero:75, simbolo:"Re", nome:"Rênio", massa:186.21, categoria:"Metal de transição", periodo:6, grupo:7},
{numero:76, simbolo:"Os", nome:"Ósmio", massa:190.23, categoria:"Metal de transição", periodo:6, grupo:8},
{numero:77, simbolo:"Ir", nome:"Irídio", massa:192.22, categoria:"Metal de transição", periodo:6, grupo:9},
{numero:78, simbolo:"Pt", nome:"Platina", massa:195.08, categoria:"Metal de transição", periodo:6, grupo:10},
{numero:79, simbolo:"Au", nome:"Ouro", massa:196.97, categoria:"Metal de transição", periodo:6, grupo:11},
{numero:80, simbolo:"Hg", nome:"Mercúrio", massa:200.59, categoria:"Metal de transição", periodo:6, grupo:12},
{numero:81, simbolo:"Tl", nome:"Tálio", massa:204.38, categoria:"Metal pós-transição", periodo:6, grupo:13},
{numero:82, simbolo:"Pb", nome:"Chumbo", massa:207.2, categoria:"Metal pós-transição", periodo:6, grupo:14},
{numero:83, simbolo:"Bi", nome:"Bismuto", massa:208.98, categoria:"Metal pós-transição", periodo:6, grupo:15},
{numero:84, simbolo:"Po", nome:"Polônio", massa:209, categoria:"Metal pós-transição", periodo:6, grupo:16},
{numero:85, simbolo:"At", nome:"Astato", massa:210, categoria:"Halogênio", periodo:6, grupo:17},
{numero:86, simbolo:"Rn", nome:"Radônio", massa:222, categoria:"Gás nobre", periodo:6, grupo:18},
{numero:87, simbolo:"Fr", nome:"Frâncio", massa:223, categoria:"Metal alcalino", periodo:7, grupo:1},
{numero:88, simbolo:"Ra", nome:"Rádio", massa:226, categoria:"Metal alcalino-terroso", periodo:7, grupo:2},
{numero:89, simbolo:"Ac", nome:"Actínio", massa:227, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:90, simbolo:"Th", nome:"Tório", massa:232.04, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:91, simbolo:"Pa", nome:"Protactínio", massa:231.04, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:92, simbolo:"U", nome:"Urânio", massa:238.03, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:93, simbolo:"Np", nome:"Netúnio", massa:237, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:94, simbolo:"Pu", nome:"Plutônio", massa:244, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:95, simbolo:"Am", nome:"Amerício", massa:243, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:96, simbolo:"Cm", nome:"Cúrio", massa:247, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:97, simbolo:"Bk", nome:"Berquélio", massa:247, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:98, simbolo:"Cf", nome:"Califórnio", massa:251, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:99, simbolo:"Es", nome:"Einstênio", massa:252, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:100, simbolo:"Fm", nome:"Férmio", massa:257, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:101, simbolo:"Md", nome:"Mendelévio", massa:258, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:102, simbolo:"No", nome:"Nobélio", massa:259, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:103, simbolo:"Lr", nome:"Laurêncio", massa:266, categoria:"Actinídeo", periodo:7, grupo:3},
{numero:104, simbolo:"Rf", nome:"Rutherfórdio", massa:267, categoria:"Metal de transição", periodo:7, grupo:4},
{numero:105, simbolo:"Db", nome:"Dúbnio", massa:268, categoria:"Metal de transição", periodo:7, grupo:5},
{numero:106, simbolo:"Sg", nome:"Seabórgio", massa:269, categoria:"Metal de transição", periodo:7, grupo:6},
{numero:107, simbolo:"Bh", nome:"Bóhrio", massa:270, categoria:"Metal de transição", periodo:7, grupo:7},
{numero:108, simbolo:"Hs", nome:"Hássio", massa:277, categoria:"Metal de transição", periodo:7, grupo:8},
{numero:109, simbolo:"Mt", nome:"Meitnério", massa:278, categoria:"Metal de transição", periodo:7, grupo:9},
{numero:110, simbolo:"Ds", nome:"Darmstádio", massa:281, categoria:"Metal de transição", periodo:7, grupo:10},
{numero:111, simbolo:"Rg", nome:"Roentgênio", massa:282, categoria:"Metal de transição", periodo:7, grupo:11},
{numero:112, simbolo:"Cn", nome:"Copernício", massa:285, categoria:"Metal de transição", periodo:7, grupo:12},
{numero:113, simbolo:"Nh", nome:"Nihônio", massa:286, categoria:"Metal pós-transição", periodo:7, grupo:13},
{numero:114, simbolo:"Fl", nome:"Fleróvio", massa:289, categoria:"Metal pós-transição", periodo:7, grupo:14},
{numero:115, simbolo:"Mc", nome:"Moscóvio", massa:290, categoria:"Metal pós-transição", periodo:7, grupo:15},
{numero:116, simbolo:"Lv", nome:"Livermório", massa:293, categoria:"Metal pós-transição", periodo:7, grupo:16},
{numero:117, simbolo:"Ts", nome:"Tenessino", massa:294, categoria:"Halogênio", periodo:7, grupo:17},
{numero:118, simbolo:"Og", nome:"Oganessônio", massa:294, categoria:"Gás nobre", periodo:7, grupo:18}
];

const tabela = document.getElementById("tabela-periodica");

let elementosSelecionado = null;

elementos.forEach(function(elemento){

    const divElemento = document.createElement("div");

    divElemento.classList.add("elemento");

    divElemento.innerHTML = `
        <div class="numero">${elemento.numero}</div>
        <div class="simbolo">${elemento.simbolo}</div>
        <div class="nome">${elemento.nome}</div>
    `;

    if (elemento.categoria === "Lantanídeo") {
        divElemento.style.gridRow = 9;
        divElemento.style.gridColumn = elemento.numero - 53; 
    } 
    else if (elemento.categoria === "Actinídeo") {
        divElemento.style.gridRow = 10;
        divElemento.style.gridColumn = elemento.numero - 85; 
    } 
    else {
        divElemento.style.gridColumn = elemento.grupo;
        divElemento.style.gridRow = elemento.periodo;
    }

    divElemento.addEventListener("click", function(){
        
        if (elementosSelecionado) {
            elementosSelecionado.classList.remove("selecionado");
        }

        divElemento.classList.add("selecionado");
        elementosSelecionado = divElemento;

        mostrarElemento(elemento);
        desenharAtomo(elemento);
    });

    divElemento.classList.add(elemento.categoria.toLowerCase().replace(/ /g, "-"));

    tabela.appendChild(divElemento);

});

function mostrarElemento(elemento){

    const painel = document.getElementById("painel-elemento");
    
    const protons = elemento.numero;
    const neutrons = Math.round(elemento.massa) - protons;

    painel.innerHTML = `
        <div id="visualizacao-atomo"></div>
        <div id="info-texto">
            <h2>${elemento.nome}</h2>
            <p><b>Símbolo:</b> ${elemento.simbolo}</p>
            <p><b>Número Atômico:</b> ${protons}</p>
            <p><b>Massa Atômica (Aprox.):</b> ${Math.round(elemento.massa)}</p>
            <p><b>Nêutrons:</b> ${neutrons}</p>
            <p><b>Massa Atômica Exata:</b> ${elemento.massa}</p>
            <p><b>Categoria:</b> ${elemento.categoria}</p>
            <p><b>Grupo:</b> ${elemento.grupo} | <b>Período:</b> ${elemento.periodo}</p>
        </div>
    `;
}

function desenharAtomo(elemento){

    const vis = document.getElementById("visualizacao-atomo");
    vis.innerHTML = "";

    const protons = elemento.numero;
    const neutrons = Math.round(elemento.massa) - protons;
    const totalParticulas = protons + neutrons;

    // 1. DESENHAR NÚCLEO 
    const nucleo = document.createElement("div");
    nucleo.className = "nucleo";

    // Criar array de objetos de partículas
    let particulas = [];
    for(let i = 0; i < protons; i++) particulas.push({ tipo: "proton" });
    for(let i = 0; i < neutrons; i++) particulas.push({ tipo: "neutron" });

    // O tamanho do núcleo será proporcional à raiz cúbica do total de partículas
    const raioEsfera = Math.max(4, 3 * Math.cbrt(totalParticulas));

    // Distribuindo partículas num globo 3D simulado
    particulas.forEach(p => {
        const u = Math.random();
        const v = Math.random();
        const w = Math.random();

        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = raioEsfera * Math.cbrt(w); 

        // Coordenadas X, Y e Z
        p.x = r * Math.sin(phi) * Math.cos(theta);
        p.y = r * Math.sin(phi) * Math.sin(theta);
        p.z = r * Math.cos(phi);
    });

    // ORDENAÇÃO 3D 
    particulas.sort((a, b) => a.z - b.z);

    // Desenhar as partículas na tela
    particulas.forEach(p => {
        const divParticula = document.createElement("div");
        divParticula.className = p.tipo;
        
        // Aplica o X e Y. O eixo Z foi usado apenas para ordenar a renderização acima.
        divParticula.style.transform = `translate(${p.x - 3}px, ${p.y - 3}px)`;
        nucleo.appendChild(divParticula);
    });

    vis.appendChild(nucleo);

    // 2. DESENHAR ELETROSFERA 
    const maxPorCamada = [2, 8, 18, 32, 32, 18, 8];
    let eletronsRestantes = protons;
    let distribuicaoCamadas = [];

    for (let i = 0; i < maxPorCamada.length; i++) {
        if (eletronsRestantes <= 0) break;
        let qtd = Math.min(eletronsRestantes, maxPorCamada[i]);
        distribuicaoCamadas.push(qtd);
        eletronsRestantes -= qtd;
    }

    const raioBaseOrbita = 45; 
    const espacamento = (170 - raioBaseOrbita) / Math.max(1, distribuicaoCamadas.length);

    distribuicaoCamadas.forEach((numEletrons, index) => {
        const orbita = document.createElement("div");
        orbita.className = "orbita";
        
        const raioOrbita = raioBaseOrbita + (espacamento * index);
        orbita.style.width = (raioOrbita * 2) + "px";
        orbita.style.height = (raioOrbita * 2) + "px";
        
        orbita.style.top = "50%";
        orbita.style.left = "50%";
        orbita.style.marginTop = `-${raioOrbita}px`;
        orbita.style.marginLeft = `-${raioOrbita}px`;
        
        const tempoAnimacao = 6 + (index * 4);
        orbita.style.animationDuration = tempoAnimacao + "s";
        orbita.style.animationDirection = index % 2 === 0 ? "normal" : "reverse";

        for (let e = 0; e < numEletrons; e++) {
            const el = document.createElement("div");
            el.className = "eletron";
            
            const angulo = (e / numEletrons) * 360;
            
            el.style.transform = `rotate(${angulo}deg) translateY(-${raioOrbita}px)`;
            el.style.marginTop = "-4px";
            el.style.marginLeft = "-4px";

            orbita.appendChild(el);
        }

        vis.appendChild(orbita);
    });
}