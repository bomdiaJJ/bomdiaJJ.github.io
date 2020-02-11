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

    var builds = ["Armadura", "Vida", "Reistência Mágica", "Crítico", "AP", "Letalidade", "Velocidade de Movimento", "Bota + 5x outro item", "Bota + 5 itens ativaveis"]

    function corFeitico(feitico){
        switch (feitico){
            case 0:
                return "82ec53";
            case 1:
                return "27d1e0";
            case 2:
                return "c9c487";
            case 3:
                return "baa345";
            case 4:
                return "ede62f";
            case 5:
                return "9639b1";
            case 6:
                return "efc136";
            case 7:
                return "ef6f36";
            case 8:
                return "4dcfc1";
            default:
                return "293542";
        }
    }

    function gerar(){
        // Randomização
        var campeao = Math.trunc(Math.random() * ((campeoes.length - 1) - 0) + 0);
        var runa = Math.trunc(Math.random() * ((runas.length - 1) - 0) + 0);
        var feitico1 = Math.trunc(Math.random() * ((feiticos.length - 1) - 0) + 0);
        var feitico2;
        do{
            feitico2 = Math.trunc(Math.random() * ((feiticos.length - 1) - 0) + 0);
        } while (feitico2 == feitico1)
        build = Math.trunc(Math.random() * ((builds.length - 1) - 0) + 0);
        var corRuna;
        var corFeitico1 = corFeitico(feitico1);
        var corFeitico2 = corFeitico(feitico2);

        var bonus = "";

        if (runa == 0 || runa == 1 || runa == 2 || runa == 3) { corRuna = "bca87b" }
        if (runa == 4 || runa == 5 || runa == 6 || runa == 7){ corRuna = "d74545" }
        if (runa == 8 || runa == 9 || runa == 10){ corRuna = "7e87f6" }
        if (runa == 11 || runa == 12 || runa == 13){ corRuna = "a2d08a" }
        if (runa == 14 || runa == 15 || runa == 16){ corRuna = "49aebb" }

        // Exibição em tela
        $("#champ").html(campeoes[campeao] + ' de <span style = "color: #' + corRuna + '">' + runas[runa] + '</span>,<br> <span style ="color: #' + corFeitico1 + '">' + feiticos[feitico1] +
        '</span> e <span style ="color: #' + corFeitico2 + '">' + feiticos[feitico2] + '</span>,<br> buildando <span style="color:#D00">' + builds[build] + '</span>. <br>' + bonus)
    }

    $("button").click(function(){
        gerar();
    });

  });