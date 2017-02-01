$(document).ready(function () {

    $("#IgrejaMatriz").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Igreja Matriz</h1> <hr> <p>Data de 5 de Dezembro de 1502 a Carta de D. Manuel, para a construção da Igreja Matriz, na sequência da sua passagem por Vila do Conde no ano de 1501, aquando de uma peregrinação a Santiago de Compostela. Trata-se de um edifício tardo-gótico com elementos manuelinos, barrocos, neogóticos, apresenta planta em cruz latina com três naves, transepto (com duas capelas) e cabeceira salientes. Destaque para o pórtico, fortemente decorado, da autoria do biscainho João de Castilho, bem como para a torre sineira, erguida em 1573, da autoria de João Lopes, O Velho. No interior destacam-se os retábulos, o púlpito e as abóbadas de arestas das capelas ricamente decoradas e arco em cantaria com policromia, entre outros.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/matriz.jpg' alt='I.Matriz'> ");
        $("#img2").append("<img src='images/matrizAnt.jpg' alt='I.Matriz'> ");

     

    })

    $("#MosteiroSantaClara").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Mosteiro de Santa Clara</h1> <hr> <p>A sua fundação data do ano de 1318. Foi mandado construir por D. Afonso Sanches (filho natural de D. Dinis) e por D. Teresa Martins, tetraneta de D. Maria Ribeiro Pais, aquém o rei D. Sancho I deu as terras de Vila do Conde no início do séc. XIII. Foi um mosteiro feminino de invocação franciscana. O mosteiro teria como finalidade acolher fidalgas, fossem pobres ou ricas e só na sua ausência poderiam admitir-se elementos de outra condição. As freiras clarissas do Mosteiro gozaram ao logo dos tempos de inúmeros direitos e privilégios. Em 1540 perdem o senhorio de Vila do Conde que passa para o irmão do rei D. João III, o infante D. Duarte. A igreja do Mosteiro, monumento religioso de características góticas, manuelinas, barrocas, rococó, e onde se encontra a capela dos Fundadores com os seus túmulos, conservou-se até hoje, no entanto, a casa conventual que conhecemos não é a primitiva, iniciou-se na segunda metade do século XVIII, tendo sido inaugurados os dormitórios e o refeitório em 1801. Com a extinção das ordens religiosas e após a morte da última freira, em 1893, o edifício entrará na posse do Estado sendo nele instalado, posteriormente, uma casa de acolhimento para crianças e jovens delinquentes. Em 2015 após acordo com a Câmara Municipal de Vila do Conde, o Mosteiro de Santa Clara sofreu intervenções de reabilitação. Atualmente encontra-se devidamente recuperado mas ainda não se sabe qual a sua função de futuro.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/mosteiro2.jpg' alt='MSC'> ");
        $("#img2").append("<img src='images/mosteiroAnt.jpg' alt='MSC'> ");

    })

    $("#Aqueduto").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Aqueduto de Vila do Conde</h1> <hr> <p>Canal artificial construído, entre 1705 e 1714, desde o Convento de Santa Clara até à nascente (Terroso, Póvoa de Varzim) e inicialmente formado por 999 arcos. Era seu objetivo levar água até ao chafariz do Mosteiro de Santa Clara, através da sua arcatura. Do conjunto resta ainda uma grande parte da estrutura inicial, embora já muito fracionada, sendo o troço da Igreja de Santa Clara e até ao limite do Concelho de Vila do Conde o que melhor conservação apresenta, numa extensão de 500 m, num total de cerca de quatro quilómetros. Possui uma arcaria de envergadura e altura decrescente, com arcos quebrados e perfil superior do canal arredondado. É o segundo aqueduto mais extenso de Portugal, sendo que ainda restam vários dos 999 arcos originais.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/66.jpg' alt='Aqueduto'> ");
        $("#img2").append("<img src='images/aqueduto2.jpg' alt='Aqueduto'> ");


    })

    $("#CamaraMunicipal").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Câmara Municipal</h1> <hr> <p>A construção dos paços do concelho de Vila do Conde decorreu entre 1538 e 1555. São referenciadas em documentação antiga, pelo menos duas outras sedes anteriores àquela que se tornaria, até hoje, definitiva. Os paços imediatamente anteriores à edificação quinhentista situavam-se na chamada ´Praça Velha´ (actual Largo Antero de Quental), sem que tenha sido possível estabelecer a sua localização exacta. Dos anteriores nada se sabe, a não ser que teriam sido substituídos pelo ano 1509.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );
        $("#img1").append("<img src='images/CM.jpg' alt='CM'> ");
        $("#img2").append("<img src='images/CM2.jpg' alt='CM'> ");


    })

    $("#IgrejaMisericordia").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Igreja da Misericordia/Casa do Despacho</h1> <hr> <p>A sua construção iniciou-se em 1559, na sequência da deliberação pela Assembleia da Irmandade da Misericórdia para construção da Igreja. Apresenta planta longitudinal, ampla e de uma só nave. Destaque no seu interior para as paredes revestidas a azulejo e os tetos revestidos a caixotões de madeira. Na Casa do Despacho, de relevo, a janela de estilo manuelino.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );
        $("#img1").append("<img src='images/iMisericordia.jpg' alt='IM'> ");
        $("#img2").append("<img src='images/im2.jpg' alt='IM'> ");


    })

    $("#AlfândegaRégia").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Alfândega Régia</h1> <hr> <p>Edifício mandado construir por D. João II no ano de 1487. A Alfândega era o local onde se inspeccionavam as mercadorias e se procedia à liquidação e cobrança dos impostos relacionados com o comércio externo, principalmente com a importação de mercadorias. Esta casa surge como testemunho do progressivo desenvolvimento do tráfego naval e do movimento comercial de Vila do Conde. Vila do Conde dispunha, no século XVI, de duas alfândegas: uma régia e outra do Mosteiro de Santa Clara. O Edifício da Alfândega Régia funciona desde 2001 como museu: a exposição divide-se em duas partes, uma alusiva ao despacho aduaneiro e outra sobre a construção naval em Vila do Conde. A casa alberga também o Centro de Documentação dos Portos Marítimos Quinhentistas, extensão especializada do Arquivo Municipal.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/a1.jpg' alt='AR'> ");
        $("#img2").append("<img src='images/a2.jpg' alt='AR'> ");


    })

    $("#NauQuinhentista").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Nau Quinhentista</h1> <hr> <p>A sua construção iniciou-se no ano 2000. Ficou a cargo do estaleiro vila-condense Samuel e Filhos Lda. A 31/07/2007 foi aportada junto do cais da Alfândega e a 15/12/2007 foi inaugurada pelo então Presidente da República o Dr. Aníbal Cavaco Silva. Trata-se de uma réplica de uma nau do Séc. XVI. Em Vila do Conde, nas margens do Rio Ave, nos Séc. XV e XVI, funcionou um importante pólo de construção naval. Aqui construíram-se, equiparam-se e abasteceram-se naus e caravelas que no passado, inúmeras vezes, percorreram as carreiras da Costa Africana, Índia Brasil. Trata-se de uma embarcação museu, cuja exposição retrata a vida a bordo de uma nau na época da expansão ultramarina portuguesa.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );
        $("#img1").append("<img src='images/nau.jpg' alt='nau'> ");
        $("#img2").append("<img src='images/nau2.jpg' alt='nau'> ");

    })

    $("#CapelaSocorro").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Capela do Socorro</h1> <hr> <p>Situada num rochedo, sobranceiro ao Rio Ave, a Capela do Socorro, foi mandada construir no ano de 1603 por Gaspar Manuel, cavaleiro professo da Ordem de Cristo e piloto mor da Carreira da Índia, China e Japão, que aqui se encontra sepultado, conjuntamente com a sua mulher, D. Bárbara Ferreira de Almeida. Foi também chamada de N. Senhora da Boa Viagem. A Antiga Rua da Torre, deve ter mudado o nome para Rua do Socorro aquando da edificação da Capela. Exteriormente é quadrangular, e assenta sobre uma sólida base granítica, e é rodeada de um parapeito onde se vê para quase todos os lados. Interiormente, é toda circular, revestida (até meio) de belíssimos azulejos oitocentistas, que reproduzem várias cenas da vida de Cristo. Uma cúpula abobadada sobre a capela, dá-lhe o aspecto de um pagode indiano</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/cs.jpg' alt='CS'> ");
        $("#img2").append("<img src='images/cSocorroAnt.jpg' alt='CS'> ");

    })

    $("#CapelaGuia").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Capela da Guia</h1> <hr> <p>Primeiramente conhecida como Ermida de São Julião, provavelmente já existiria no ano de 953. Para além da utilização de índole religiosa, a ermida funcionou, inicialmente, como ponto de apoio para defesa da barra. De planta composta irregular, apresenta no seu interior belos azulejos dos séculos XVII e XVIII e tetos apainelados em caixotões decorados com cenas bíblicas ou figuras de santos.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/cGuia.jpg' alt='guia'> ");
        $("#img2").append("<img src='images/cGuia2.jpg' alt='guia'> ");


    })

    $("#ForteSãoJoão").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Forte de São João Batista</h1> <hr> <p>As obras do Forte terão iniciado por volta de 1570. O forte de S. João Baptista foi edificado num período em que era grande a preocupação da coroa portuguesa da fortificação da linha costeira, em resposta a uma intensa vaga de corso, que se agudiza nos anos 70 de Quinhentos. Apresenta uma planta poligonal com cinco baluartes, guarnecidos nos ângulos por guaritas. A sua construção teve como objetivo a defesa do porto do Ave, perdendo o seu valor militar após o desfecho da guerra civil em 1834. Atualmente está convertido em unidade hoteleira.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );
        $("#img1").append("<img src='images/fortAnt.jpg' alt='forte'> ");
        $("#img2").append("<img src='images/forte.jpg' alt='forte'> ");

    })

    $("#MuseuRendas").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Museu das Rendas</h1> <hr> <p>Instalado desde 1991 na Casa do Vinhal, típico solar urbano do século XVIII, tem como missão salvaguardar as tradições e o património móvel deste concelho, nomeadamente a história das Rendas de Bilros. No mesmo edifício funciona também a Escola das Rendas de Bilros, onde poderá ver permanentemente as rendilheiras a trabalhar. Aí está patente ao público a ´Maior Renda de Bilros do Mundo´, título oficializado pelo Guiness World Records em 2015: mede 53,262 metros quadrados, e foi feita com 8 quilos de fio de algodão. Exibe um total de 437 quadrados de 30x30 centímetros, todos com cores e formas diferentes, feitos por 150 rendilheiras de todas as idades.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/rb.jpg' alt='MR'> ");
        $("#img2").append("<img src='images/rb2.jpg' alt='MR'> ");


    })

    $("#CasaJoseRegio").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Casa José Régio</h1> <hr> <p>Após a morte do escritor, a 22 de dezembro de 1969, a Câmara Municipal de Vila do Conde adquiriu a casa, abrindo ao público a 17 de setembro de 1975. A Casa de José Régio não é um espaço museológico de base, é antes de mais a residência que o poeta escolheu para habitar após a sua aposentação, refletindo a vontade do poeta, no modo e na forma como todos os objetos se encontram dispostos nos diferentes espaços. José Régio foi uma das figuras mais importantes da terra e colecionou durante anos esculturas de cariz religioso, peças de mobiliário do século XVII e XVIII, pinturas e livros.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/js.jpg' alt='CJS'> ");
        $("#img2").append("<img src='images/js2.jpg' alt='CJS'> ");


    })

    $("#CentroMemoria").click(function () {

        $("#texto").empty();
        $("#item active").empty();
        $("#item").empty();

        $("#texto").append("  <h1 id='titulo'>Centro de Memória</h1> <hr> <p>No antigo solar pertencente à Família Faria Figueiredo, estão actualmente reunidos as valências do Arquivo Municipal, do Gabinete Municipal de Arqueologia e do núcleo central do Museu de Vila do Conde. A 18 de Maio de 2013, é inaugurada a exposição permanente do núcleo central, “Vila do Conde: Tempo e Território”, dedicada à memória do território de Vila do Conde: são 200 mil anos narrados ao longo de 19 salas. Poderá também disfrutar das várias exposições temporárias de pintura, escultura, etc., bem como dos bonitos jardins da casa. Anualmente em Setembro, é levado a cabo a iniciativa, “As Memórias no Centro da festa”.</p>" +
            " <button type='button' id='adicionar' class='btn btn-success'>Adicionar Local</button>" +
            " <button type='button' class='btn btn-info' data-toggle='modal' data-target='#modalImages'>Imagens</button>"

        );

        $("#img1").append("<img src='images/cMemoria.jpg' alt='CM'> ");
        $("#img2").append("<img src='images/cMemoria2.jpg' alt='CM'> ");

    })


});