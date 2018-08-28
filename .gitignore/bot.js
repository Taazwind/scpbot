const Discord = require('discord.js');
const express = require('express');
const app = express();

//Début paramètres Heroku
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
  console.log('Bot en ligne');
})

var bot = new Discord.Client();
var prefix = ("/");

bot.on('Prêt !', async () => {
    bot.user.setGame("[/help]|Joue avec 173");
    console.log("Bot prêt !");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    if (message.content === "Bonjour Bot"){
        message.reply("Bonjour !")
        console.log('Bot:Bonjour')
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#07A48F')
            .addField("__Commande du Bot SCP__:", "Pour avoir les fiches d'informations des SCP **__tapez__**: /info lenuméroduscp")
            .addField("__SCP Safe__:", "-SCP-914 \n -SCP-343 \n -SCP-1025 \n -SCP-1074 \n -SCP-1123 \n ")
            .addField("__SCP Euclide__:", "-SCP-527 \n -SCP-006-FR \n -SCP-011-FR \n -SCP-060-FR \n -SCP-137-FR \n -SCP-002-FR \n -SCP-008 \n -SCP-049 \n -SCP-053 \n -SCP-066 (Euclide-impetus) \n -SCP-079 \n -SCP-087 \n -SCP-096 \n -SCP-173 \n -SCP-1128")
            .addField("__SCP Keter__:", "-SCP-682 \n -SCP-062-FR \n -SCP-017 \n -SCP-029 \n -SCP-035 \n -SCP-076 \n -SCP-106 \n -SCP-939 \n ")
            .setFooter("Le BOT est en développement !")
        message.channel.sendEmbed(help_embed);
        //message.channel.send("Voici les commande d'information sur les SCP disponiblent sur le Bot :\n -**/info 527**: Affiche la fiche SCP de 527 !");
        console.log("Commande help faite");
    }
    if (message.content === prefix + "info 527"){
        var scp_527 = new Discord.RichEmbed()
            .setColor('#07A48F')
            .addField("**Objet#**:", "SCP-527")
            .addField("**Classe**:", "Euclide")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-527 doit être contenu dans un domicile pour humanoïde standard au Site-19. Aucune autre procédure de confinement n'est nécessaire.")
            .addField("**Description**:", "SCP-527 est un humanoïde mâle mesurant 1,67m, il est biologiquement normal, à l’exception de sa tête qui est celle d'un Puntius semifasciolatus, ou Barbus doré. \n SCP-527 ne montre aucune autre propriété anormale. La tête de SCP-527 fonctionne de la même manière qu'une tête humaine normale. SCP-527 est capable de communiquer comme un humain typique. Le tatouage \"M. Poisson, des Petits Messieurs® par Dr. Wondertainment\" apparaît sur le bas de son pied gauche.")
            .addField("**Découverte**:", "SCP-527 a été découvert à Boston par des agents de la Fondation et a été déplacé au Site-19 en 2004.")
        message.channel.sendEmbed(scp_527);
        console.log("Commande Info 527 faite");

        
        
        

    }
    if (message.content === prefix + "info 682"){
        var scp_682 = new Discord.RichEmbed()
            .setColor('#07A48F')
            .addField("**Objet#**:", "SCP-682")
            .addField("**Classe**:", "Keter")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-682 doit être détruit dès que possible. Pour l'instant, aucun moyen à la disposition de la Fondation n'est capable de détruire SCP-682, seulement susceptible de provoquer des dommages physiques importants. SCP-682 doit être contenu dans une chambre de 5m x 5m x 5m doublée de plaques d'acier de 25,4 cm d’épaisseur résistantes à l'acide chlorhydrique. La chambre de confinement doit être remplie avec de l'acide jusqu'à ce que SCP-682 soit immergé et en stase. Toute tentative de SCP-682 visant à se déplacer, à parler, ou à forcer le confinement doit être immédiatement stoppée avec la force rendue nécessaire par les circonstances.")
            .addField("**Procédures de Confinement Spéciales**:(suite)", "Le personnel ne doit pas parler à SCP-682, de peur de provoquer un état de rage. Toutes les personnes non autorisées qui tentent de communiquer avec SCP-682 seront maîtrisées et neutralisées par la force. \n En raison de ses fréquentes tentatives de rupture de confinement, des difficultés de confinement et de neutralisation qu'il présente, et de risques élevés d'exposition de l'existence de la Fondation, SCP-682 doit être contenu dans le site-██. La Fondation utilisera au mieux ses ressources pour maintenir les terres situées dans un périmètre de cinquante (50) kilomètres libres de tout développement humain.")
            .addField("**Description**:", "SCP-682 est une grande créature vaguement reptilienne d'origine inconnue. Elle semble être extrêmement intelligente, et a été observée discutant de manière complexe avec SCP-079 au cours de leur bref contact. SCP-682 semble vouer une haine à toute forme de vie, et l'a exprimé dans plusieurs interviews au cours de son confinement. \n SCP-682 a toujours été observé doté d'une force extrêmement grande, d'une grande vitesse et de bon réflexes, même si les niveaux exacts varient en fonction de son état. Le corps physique de SCP-682 se développe et évolue très rapidement, grandissant ou diminuant tandis qu'il consume ou rejette de la matière. SCP-682 consomme l'énergie de tout ce qu'il ingère, organique ou non-organique.")
            .addField("**Description**:(suite)", "La digestion semble être facilitée par un ensemble de branchies de filtrage à l'intérieur des narines de SCP-682. Celles-ci sont en mesure d'utiliser les matières exploitables de toute solution liquide, ce qui lui permet de constamment se régénérer à partir de l'acide. Ses capacités de régénération sont énormes, et SCP-682 a été observé en train de se déplacer alors que son corps était détruit ou pourri à 87%. \n En cas de rupture de confinement, SCP-682 doit être traqué et récupéré en mobilisant toutes les forces d'intervention mobiles disponibles, et aucune équipe de moins de sept (7) membres n'est autorisée à l'affronter. À ce jour (██-██-████), le nombre de tentatives de violation de confinement s'élève à dix-sept (17), tandis que les évasions réussies sont au nombre de six (6).")
        message.channel.sendEmbed(scp_682);
        console.log("Commande Info 682 faite");
    }
    if (message.content === prefix + "info 914"){
        var scp_914 = new Discord.RichEmbed()
        .setColor('#07A48F')
        .addField("**Objet#**:", "SCP-914")
        .addField("**Classe**:", "Safe")

    }
    if (message.content === prefix + "info 106"){
        var scp_106 = new Discord.RichEmbed()
           .setColor('#07A48F')
           .addField("**Objet#**:", "SCP-106")
           .addField("**Classe**:", "Keter")
           .addField("**Procédures de Confinement Spéciales**:", "Aucune interaction physique avec SCP-106 n'est autorisée. Toutes les interactions physiques doivent être approuvées par au moins un vote des deux tiers du Commandement O5, et ne peuvent avoir lieu que dans la situation d'un test. Toute interaction doit être effectuée dans les sites à sécurité maximale AR-II, après une évacuation générale du personnel non essentiel. Tout le personnel (Recherche, Sécurité, Classe D, etc) doit rester à au moins soixante mètres de l'enceinte de confinement à tout moment, sauf sur ordre direct du Commandement du Site.")
           .addField("**Procédures de Confinement Spéciales²**:", "SCP-106 doit être contenu dans un conteneur sellé, constitué d'acier plombé. Le conteneur doit être scellé à l'intérieur de 40 couches de matière identique, chacune séparée par au moins 36 centimètres d'espace vide. Les stabilisateurs entre chaque couche doivent être placés aléatoirement. Le conteneur doit rester suspendu à au moins 60 cm de toute surface par un soutien électromagnétique ELO-IID.")
           .addField("**Procédures de Confinement Spéciales3**:", "La zone de confinement secondaire doit être composée de seize \"cellules\" sphériques, chacune remplie de divers fluides et possédant un ensemble aléatoire de surfaces et de soutien. Le confinement secondaire doit être équipé de systèmes d'éclairage, capables d'éclairer tout l'assemblage avec au moins 80.000 lumens de lumière instantanément, sans intervention humaine directe. Les deux zones de confinement doivent rester sous surveillance permanente.")
           .addField("**Procédures de Confinement Spéciales4**:", "Toute corrosion observée sur la première cellule, la cellule secondaire, les membres du personnel, ou à n'importe quel endroit du site situé dans un périmètre de deux cents mètres autour de SCP-106 doit être signalée immédiatement au service de sécurité du site. Les objets ou les membres du personnel perdus à cause de SCP-106 doivent être considérées comme disparus/morts au combat. Aucune tentative de récupération ne doit être faite quelles que soient les circonstances.")
           .addField("**Description**:", "SCP-106 semble être un humanoïde âgé, avec une apparence générale de décomposition avancée. Son apparence peut varier, mais l'effet de \"pourriture\" reste observé sous chaque forme. SCP-106 n'est pas exceptionnellement agile, et peut rester immobile pendant des jours, dans l'attente d'une proie. SCP-106 est également capable d'escalader n'importe quelle surface verticale et peut rester indéfiniment suspendu à l'envers. Lorsqu'il attaque, SCP-106 va tenter de neutraliser ses proies en endommageant les organes principaux, les muscles ou les tendons, puis il emmènera sa proie handicapée dans sa \"dimension de poche\". SCP-106 semble préférer comme proies les hommes dans les 10-25 ans.")
           .addField("**Description²**:", "SCP-106 provoque un effet de \"corrosion\" sur toute la matière solide qu'il touche, engendrant une décomposition physique des matériaux plusieurs secondes après le contact. On peut observer la rouille, la pourriture et la fissuration des matériaux, ainsi que la création d'une sorte de mucus noir similaire à ce qui recouvre SCP-106. Cet effet est particulièrement préjudiciable pour les tissus vivants, et est supposé être une action de \"pré-digestion\". La corrosion se poursuit pendant six heures après le contact, après quoi l'effet semble disparaître.")
           .addField("**Description3**:", "SCP-106 est capable de passer à travers la matière solide, laissant derrière lui une grande tache de son mucus corrosif. SCP-106 est capable de \"disparaître\" à l'intérieur de la matière solide, en entrant dans ce qui est supposé être une sorte de \"dimension de poche\". SCP-106 est alors en mesure de sortir de cette dimension à partir de n'importe quel point connecté au point d'entrée initial (exemples : \"entrer\" dans la paroi interne d'une pièce, et \"sortir\" de la paroi extérieure; \"entrer\" dans un mur, et \"sortir\" du plafond.) . On ne sait pas si cette dimension est le lieu d'origine de SCP-106, ou un simple \"repaire\" créé par SCP-106. \n Une observation limitée de cette \"dimension de poche\" a montrée qu'elle doit être composée majoritairement de salles et les chambres, avec [SUPPRIMÉ] entrée. Cette activité peut se poursuivre pendant plusieurs \"jours\", avec une certaine chance d'être libéré dans le but d'être traqué, re-capturé, [SUPPRIMÉ].")
        message.channel.sendEmbed(scp_106);
        console.log("Commande Info 106 faite")

    }
        
});
