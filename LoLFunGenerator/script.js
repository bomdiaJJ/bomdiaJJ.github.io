$( document ).ready(function() {

    // Coisas a serem randomizadas

    var campeoes =  ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir",
    "Bard","Blitzcrank","Brand","Braum",
    "Caitlyn","Camille","Cassiopeia","Cho'gath","Corki",
    "Darius","Diana","Dr. Mundo","Draven",
    "Ekko","Elise","Evelynn","Ezreal",
    "Fiddlesticks","Fiora","Fizz",
    "Galio","Gangplank","Garen","Gnar","Gragas","Graves",
    "Hecarim","Heimerdinger",
    "Illaoi","Irelia","Ivern",
    "Janna","Jarvan Iv","Jax","Jayce","Jhin","Jinx",
    "Kai'sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'zix","Kindred","Kled","Kog'maw",
    "Leblanc","Lee Sin","Leona","Lissandra","Lucian","Lulu","Lux",
    "Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana",
    "Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu & Willump",
    "Olaf","Orianna","Ornn",
    "Pantheon","Poppy","Pyke",
    "Qiyana","Quinn",
    "Rakan","Rammus","Rek'sai","Renekton","Rengar","Riven","Rumble","Ryze",
    "Sejuani","Senna","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra",
    "Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch",
    "Udyr","Urgot",
    "Varus","Vayne","Veigar","Vel'koz","Vi","Viktor","Vladimir","Volibear",
    "Warwick","Wukong",
    "Xayah","Xerath","Xin Zhao",
    "Yasuo","Yorick","Yuumi",
    "Zac","Zed","Ziggs","Zilean","Zoe","Zyra"]

    var runas = ["Pressione o Ataque", "Ritmo Fatal", "Agilidade nos Pés", "Conquistador",
    "Eletrocutar","Predador","Colheita Sombria","Chuva de Lâminas",
    "Invocar Aery", "Cometa Arcano", "Ímpeto Gradual",
    "Aperto dos Mortos-vivos", "Pós-choque", "Guardião",
    "Aprimoramento Glacial", "Livro de Feitiços Deslacrado", "Protótipo: Onirruna"]

    var feiticos = ["Curar", "Fantasma", "Barreira", "Exaustão", "Flash", "Teleporte", "Golpear", "Incendiar", "Purificar"]

    function gerar(){
        // Randomização
        var campeao = Math.trunc(Math.random() * ((campeoes.length - 1) - 0) + 0);
        var runa = Math.trunc(Math.random() * ((runas.length - 1) - 0) + 0);
        var feitico1 = Math.trunc(Math.random() * ((feiticos.length - 1) - 0) + 0);
        var feitico2 = Math.trunc(Math.random() * ((feiticos.length - 1) - 0) + 0);
        var corRuna;

        if (runa == 0 || runa == 1 || runa == 2 || runa == 3) { corRuna = "c8aa6e" }
        if (runa == 4 || runa == 5 || runa == 6 || runa == 7){ corRuna = "d44242" }
        if (runa == 8 || runa == 9 || runa == 10){ corRuna = "9faafc" }
        if (runa == 11 || runa == 12 || runa == 13){ corRuna = "a1d586" }
        if (runa == 14 || runa == 15 || runa == 16){ corRuna = "49aab9" }
        // Exibição em tela
    
        $("#champ").html(campeoes[campeao] + ' de <span style = "color: #' + corRuna + '">' + runas[runa] + '</span>, <span>' + feiticos[feitico1] + '</span> e <span>' + feiticos[feitico2] + '</span>, buildando BUILD. [e bônus.]')
    }

    $("button").click(function(){
        gerar();
    });

  });