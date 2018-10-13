const Discord = require('discord.js');
const express = require('express');
const app = express();


var bot = new Discord.Client();
var prefix = ("^");

bot.on('ready', () => {
    bot.user.setGame("^help | Parle avec 343 ");
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
        .setColor("RANDOM")
            .addField("__Commande du Bot SCP__:", "Pour avoir les fiches d'informations des SCP **__tapez__**: ^info lenuméroduscp")
            .addField("__SCP Safe__:", "-SCP-914 \n -SCP-343 \n -SCP-1025 \n -SCP-1074 \n -SCP-1123 \n ")
            .addField("__SCP Euclide__:", "-SCP-527 \n -SCP-006-FR \n -SCP-011-FR \n -SCP-060-FR \n -SCP-137-FR \n -SCP-002-FR \n -SCP-008 \n -SCP-049 \n -SCP-053 \n -SCP-066 (Euclide-impetus) \n -SCP-079 \n -SCP-087 \n -SCP-096 \n -SCP-173 \n -SCP-1128")
            .addField("__SCP Keter__:", "-SCP-682 \n -SCP-062-FR \n -SCP-017 \n -SCP-029 \n -SCP-035 \n -SCP-076 \n -SCP-106 \n -SCP-939 \n ")
            .setFooter("Le BOT est en développement !")
        message.channel.sendEmbed(help_embed);
        console.log("Commande help faite");
    }
    if (message.content === prefix + "info 527"){
        var scp_527 = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setThumbnail("http://scp-wiki.wdfiles.com/local--files/scp-527/fish.png")
            .addField("**Objet#**:", "SCP-527")
            .addField("**Classe**:", "Euclide")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-527 doit être contenu dans un domicile pour humanoïde standard au Site-19. Aucune autre procédure de confinement n'est nécessaire.")
            .addField("**Description**:", "SCP-527 est un humanoïde mâle mesurant 1,67m, il est biologiquement normal, à l’exception de sa tête qui est celle d'un Puntius semifasciolatus, ou Barbus doré. \n SCP-527 ne montre aucune autre propriété anormale. La tête de SCP-527 fonctionne de la même manière qu'une tête humaine normale. SCP-527 est capable de communiquer comme un humain typique. Le tatouage \"M. Poisson, des Petits Messieurs® par Dr. Wondertainment\" apparaît sur le bas de son pied gauche.")
            .addField("**Découverte**:", "SCP-527 a été découvert à Boston par des agents de la Fondation et a été déplacé au Site-19 en 2004.")
            .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-527](http://fondationscp.wikidot.com/scp-527)", true)
        message.channel.sendEmbed(scp_527);
        console.log("Commande Info 527 faite");
    }
    if (message.content === prefix + "info 682"){
        var scp_682 = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setThumbnail("http://scp-wiki.wdfiles.com/local--files/scp-682/monster8editub9.jpg")
            .addField("**Objet#**:", "SCP-682")
            .addField("**Classe**:", "Keter")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-682 doit être détruit dès que possible. Pour l'instant, aucun moyen à la disposition de la Fondation n'est capable de détruire SCP-682, seulement susceptible de provoquer des dommages physiques importants. SCP-682 doit être contenu dans une chambre de 5m x 5m x 5m doublée de plaques d'acier de 25,4 cm d’épaisseur résistantes à l'acide chlorhydrique. La chambre de confinement doit être remplie avec de l'acide jusqu'à ce que SCP-682 soit immergé et en stase. Toute tentative de SCP-682 visant à se déplacer, à parler, ou à forcer le confinement doit être immédiatement stoppée avec la force rendue nécessaire par les circonstances.")
            .addField("**Procédures de Confinement Spéciales**:(suite)", "Le personnel ne doit pas parler à SCP-682, de peur de provoquer un état de rage. Toutes les personnes non autorisées qui tentent de communiquer avec SCP-682 seront maîtrisées et neutralisées par la force. \n En raison de ses fréquentes tentatives de rupture de confinement, des difficultés de confinement et de neutralisation qu'il présente, et de risques élevés d'exposition de l'existence de la Fondation, SCP-682 doit être contenu dans le site-██. La Fondation utilisera au mieux ses ressources pour maintenir les terres situées dans un périmètre de cinquante (50) kilomètres libres de tout développement humain.")
            .addField("**Description**:", "SCP-682 est une grande créature vaguement reptilienne d'origine inconnue. Elle semble être extrêmement intelligente, et a été observée discutant de manière complexe avec SCP-079 au cours de leur bref contact. SCP-682 semble vouer une haine à toute forme de vie, et l'a exprimé dans plusieurs interviews au cours de son confinement. \n SCP-682 a toujours été observé doté d'une force extrêmement grande, d'une grande vitesse et de bon réflexes, même si les niveaux exacts varient en fonction de son état. Le corps physique de SCP-682 se développe et évolue très rapidement, grandissant ou diminuant tandis qu'il consume ou rejette de la matière. SCP-682 consomme l'énergie de tout ce qu'il ingère, organique ou non-organique.")
            .addField("**Description**:(suite)", "La digestion semble être facilitée par un ensemble de branchies de filtrage à l'intérieur des narines de SCP-682. Celles-ci sont en mesure d'utiliser les matières exploitables de toute solution liquide, ce qui lui permet de constamment se régénérer à partir de l'acide. Ses capacités de régénération sont énormes, et SCP-682 a été observé en train de se déplacer alors que son corps était détruit ou pourri à 87%. \n En cas de rupture de confinement, SCP-682 doit être traqué et récupéré en mobilisant toutes les forces d'intervention mobiles disponibles, et aucune équipe de moins de sept (7) membres n'est autorisée à l'affronter. À ce jour (██-██-████), le nombre de tentatives de violation de confinement s'élève à dix-sept (17), tandis que les évasions réussies sont au nombre de six (6).")
            .addField("Le Wiki", "Voir la page wiki complète:  \n [SCP-682](http://fondationscp.wikidot.com/scp-682)", true)
        message.channel.sendEmbed(scp_682);
        console.log("Commande Info 682 faite");
    }
    if (message.content === prefix + "info 914"){
        var scp_914 = new Discord.RichEmbed()
           .setColor("RANDOM")
           .setThumbnail("http://fondationscp.wdfiles.com/local--files/scp-914/gears3a.jpg")
           .addField("**Objet#**:", "SCP-914")
           .addField("**Classe**:", "Safe")
           .addField("**Procédures de Confinement Spéciales**:", "Seuls les membres du personnel soumettant une demande officielle et recevant l'approbation de la direction du site peuvent exploiter SCP-914. SCP-914 doit être conservé dans la cellule de recherche 109-B sous surveillance permanente de deux membres du personnel de sécurité en service. Les chercheurs entrant à l'intérieur de 109-B doivent être accompagnés au minimum par un garde, et ce pendant toute la durée des tests. Une liste détaillant la totalité des tests à effectuer doit être distribuée à l'ensemble du personnel de sécurité en service. Toute irrégularité dans cette liste entraînera la clôture immédiate des expériences, le retrait par la force du personnel de la cellule 109-B et des sanctions disciplinaires.")
           .addField("**AVERTISSEMENT**:", "Actuellement, aucun essai avec de la matière biologique n'est autorisé. Se référer au document 109-B:117. Appliquer le réglage \"Grossier\" sur de la matière explosive est déconseillé.")
           .addField("**Description**:", "SCP-914 est un immense mécanisme d'horlogerie pesant plusieurs tonnes et couvrant une surface de dix-huit mètres carrés, constitué de vis, de courroies, de poulies, d'engrenages, de ressorts et autres rouages. Il est extrêmement complexe, avec plus de huit millions de pièces mobiles composées essentiellement d'étain et de cuivre (du bois et du tissu ont été remarqués). Les observations et les analyses n'ont révélé aucun circuit électronique ou toute forme d'énergie autre que celle du \"ressort principal\" sous le \"panneau de sélection\". Deux grands compartiments de 3m × 2,1m × 2,1m (10 pieds x 7 pieds x 7 pieds), intitulés respectivement \"Entrée\" et \"Sortie\" sont reliés par des tubes en cuivre jusqu'au corps principal de SCP-914.")
           .addField("**Description**:(2)", "Entre les deux se trouve un panneau en cuivre doté d'une poignée avec une petite flèche attachée dessus. Les mots Très Grossier, Grossier, 1:1, Fin et Très Fin sont positionnés en des points autour de la poignée. Sous la poignée se trouve une grande \"clé\" qui déclenche le \"ressort principal\".")
           .addField("**Description**:(3)", "Quand un objet est placé dans le compartiment d'entrée, une porte coulissante se ferme et le son d'une petite cloche retentit. Si l'interrupteur est tourné sur n'importe quelle position, SCP-914 \"raffinera\" l'objet dans le compartiment. Aucune énergie n'est perdue lors du processus, et l'objet semble être dans un état de stase jusqu'à ce que la porte du compartiment de sortie soit ouverte. Les observations minutieuses et les analyses n'ont pas démontré comment SCP-914 accomplit cela, et aucun objet de test n'a été observé à l'intérieur SCP-914 pendant le processus de \"raffinage\". Le processus dure entre cinq à dix minutes selon la taille de l'objet à raffiner.")
           .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-914](http://fondationscp.wikidot.com/scp-914)", true)
        message.channel.sendEmbed(scp_914);
        console.log("Commande Info 914 faite")
    }
    if (message.content === prefix + "info 106"){
        var scp_106 = new Discord.RichEmbed()
           .setColor("RANDOM")
           .setThumbnail("http://scp-wiki.wdfiles.com/local--files/scp-106/that%20man.jpg")
           .addField("**Objet#**:", "SCP-106")
           .addField("**Classe**:", "Keter")
           .addField("**Procédures de Confinement Spéciales**:", "Aucune interaction physique avec SCP-106 n'est autorisée. Toutes les interactions physiques doivent être approuvées par au moins un vote des deux tiers du Commandement O5, et ne peuvent avoir lieu que dans la situation d'un test. Toute interaction doit être effectuée dans les sites à sécurité maximale AR-II, après une évacuation générale du personnel non essentiel. Tout le personnel (Recherche, Sécurité, Classe D, etc) doit rester à au moins soixante mètres de l'enceinte de confinement à tout moment, sauf sur ordre direct du Commandement du Site.")
           .addField("**Procédures de Confinement Spéciales**(2):", "SCP-106 doit être contenu dans un conteneur sellé, constitué d'acier plombé. Le conteneur doit être scellé à l'intérieur de 40 couches de matière identique, chacune séparée par au moins 36 centimètres d'espace vide. Les stabilisateurs entre chaque couche doivent être placés aléatoirement. Le conteneur doit rester suspendu à au moins 60 cm de toute surface par un soutien électromagnétique ELO-IID.")
           .addField("**Procédures de Confinement Spéciales**(3):", "La zone de confinement secondaire doit être composée de seize \"cellules\" sphériques, chacune remplie de divers fluides et possédant un ensemble aléatoire de surfaces et de soutien. Le confinement secondaire doit être équipé de systèmes d'éclairage, capables d'éclairer tout l'assemblage avec au moins 80.000 lumens de lumière instantanément, sans intervention humaine directe. Les deux zones de confinement doivent rester sous surveillance permanente.")
           .addField("**Procédures de Confinement Spéciales**(4):", "Toute corrosion observée sur la première cellule, la cellule secondaire, les membres du personnel, ou à n'importe quel endroit du site situé dans un périmètre de deux cents mètres autour de SCP-106 doit être signalée immédiatement au service de sécurité du site. Les objets ou les membres du personnel perdus à cause de SCP-106 doivent être considérées comme disparus/morts au combat. Aucune tentative de récupération ne doit être faite quelles que soient les circonstances.")
           .addField("**Description**:", "SCP-106 semble être un humanoïde âgé, avec une apparence générale de décomposition avancée. Son apparence peut varier, mais l'effet de \"pourriture\" reste observé sous chaque forme. SCP-106 n'est pas exceptionnellement agile, et peut rester immobile pendant des jours, dans l'attente d'une proie. SCP-106 est également capable d'escalader n'importe quelle surface verticale et peut rester indéfiniment suspendu à l'envers. Lorsqu'il attaque, SCP-106 va tenter de neutraliser ses proies en endommageant les organes principaux, les muscles ou les tendons, puis il emmènera sa proie handicapée dans sa \"dimension de poche\". SCP-106 semble préférer comme proies les hommes dans les 10-25 ans.")
           .addField("**Description**(2):", "SCP-106 provoque un effet de \"corrosion\" sur toute la matière solide qu'il touche, engendrant une décomposition physique des matériaux plusieurs secondes après le contact. On peut observer la rouille, la pourriture et la fissuration des matériaux, ainsi que la création d'une sorte de mucus noir similaire à ce qui recouvre SCP-106. Cet effet est particulièrement préjudiciable pour les tissus vivants, et est supposé être une action de \"pré-digestion\". La corrosion se poursuit pendant six heures après le contact, après quoi l'effet semble disparaître.")
           .addField("**Description**(3):", "SCP-106 est capable de passer à travers la matière solide, laissant derrière lui une grande tache de son mucus corrosif. SCP-106 est capable de \"disparaître\" à l'intérieur de la matière solide, en entrant dans ce qui est supposé être une sorte de \"dimension de poche\". SCP-106 est alors en mesure de sortir de cette dimension à partir de n'importe quel point connecté au point d'entrée initial (exemples : \"entrer\" dans la paroi interne d'une pièce, et \"sortir\" de la paroi extérieure; \"entrer\" dans un mur, et \"sortir\" du plafond.) . On ne sait pas si cette dimension est le lieu d'origine de SCP-106, ou un simple \"repaire\" créé par SCP-106. \n Une observation limitée de cette \"dimension de poche\" a montrée qu'elle doit être composée majoritairement de salles et les chambres, avec [SUPPRIMÉ] entrée. Cette activité peut se poursuivre pendant plusieurs \"jours\", avec une certaine chance d'être libéré dans le but d'être traqué, re-capturé, [SUPPRIMÉ].")
           .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-106](http://fondationscp.wikidot.com/scp-106)", true)
        message.channel.sendEmbed(scp_106);
        console.log("Commande Info 106 faite");
    }
    if (message.content === prefix + "info 006-fr"){
        var scp_006fr = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField("**Objet#**:", "SCP-006-FR")
            .addField("**Niveau de Menace**:", "Orange ")
            .addField("**Classe**:", "Euclide")
            .addField("**Description**:", "SCP-006-FR est un humanoïde de type caucasien mesurant 1,87 mètre et pesant à tout moment 112 kg, la seule langue qu'il pratique est le russe.SCP-006-FR porte un tablier de cuisine taché de sang et une toque d'artisan-boucher, le tout par dessus une chemise à carreaux et un pantalon en toile beige. Il porte dans 98 % des cas des ustensiles de cuisine (couteaux, hachoirs), passé à sa ceinture. Bien qu'il n'agresse physiquement des êtres vivants que rarement, il possède une force cinq (5) fois plus importante qu'un humain de même corpulence, et possède une résistance aux dégâts extrêmement élevée. SCP-006-FR a l'apparence d'un boucher, il peut déplacer instantanément SCP-006-01-FR ainsi que téléporter à lui n'importe lequel des ustensiles de boucherie présents dans SCP-006-01-FR.")
            .addField("**Description**:(2)", "SCP-006-01-FR est une boucherie classique, de forme rectangulaire de 5 m x 10 m au sol et d'une hauteur de 2,75 m : elle comprend deux salles, une première de 5 m x 7 m, présente directement à l'entrée du magasin, contenant un comptoir de boucherie classique, et une réserve de 5 m x 3 m, dont la porte se situe derrière le comptoir.SCP-006-01-FR peut apparaître entre deux autres magasins sans que cela ne semble étrange aux humains observant le phénomène, y compris ceux qui sont familiers des lieux où se manifeste SCP-006-01-FR. \n Les premières apparitions de SCP-006-01-FR datent des années 40, néanmoins, elle ne fut confinée qu'en 1996, lorsque la boucherie fut localisée à temps avant son déplacement.Une unité de récupération fut envoyée et détruisit l'ensemble des bâtiments autour de SCP-006-01-FR, avant de tracter celle-ci sur un convoi exceptionnel, qui l'emmena au Site-Aleph.")
            .addField("**Description**:(3)", "Les choix des différentes destinations semblent totalement aléatoires, à partir du moment où la destination est un lieu densément peuplé. La distance maximum constatée lors d'un des déplacements de SCP-006-01-FR est de █████ km.")
            .addField("**Description**:(4)", "SCP-006-FR ne peut téléporter SCP-006-01-FR qu'en fermant le rideau métallique qui en bloque l'entrée : tant que celui-ci est ouvert, il est impossible pour l'entité de déplacer SCP-006-01-FR. SCP-006-FR n'apparaît en dehors de SCP-006-01-FR que s'il est attaqué dans la boucherie : il va alors poursuivre les agresseurs jusqu'à leur mort où jusqu'à ce qu'ils soient à une distance de plus de 150 m de SCP-006-01-FR. L'entité va ensuite se téléporter dans la réserve de SCP-006-01-FR. \n Néanmoins, si SCP-006-FR est suffisamment blessé, il va arrêter la poursuite et se téléporter dans la réserve de SCP-006-01-FR où il restera pendant un (1) jour en état passif : cela semble être suffisant pour le remettre de toutes ses blessures, aussi graves soit-elles : même la présence d'humains non végétariens ne pourra pas le faire rentrer en phase active.")
            .addField("**Description**:(5)", "Si un végétarien pénètre dans SCP-006-01-FR, l'entité va rester en phase passive et rien ne se passera. Mais lorsqu'un être humain non végétarien pénètre dans SCP-006-01-FR, SCP-006-FR va rentrer en état actif : il va sortir de la réserve où il est retranché lorsqu'il est en état passif et va alors agir sur l'être humain qui vient de rentrer dans SCP-006-01-FR. Celui-ci va automatiquement demander à SCP-006-FR sa pièce de viande favorite. SCP-006-FR va alors passer dans la réserve de SCP-006-01-FR, et va en ressortir avec un paquet, en laissant la porte de la réserve ouverte. Le paquet contient la commande du sujet : cependant, d'une manière encore inconnue, SCP-006-FR ôte l'équivalent de la pièce de viande demandée du sujet et la place dans le paquet.")
            .addField("**Description**:(6)", "Même si les dégâts occasionnés par le prélèvement sont mortels, le sujet va survivre, rentrer dans le dernier endroit qu'il a considéré comme sa maison, et ce, même si sa mobilité est affectée par l'opération de SCP-006-FR (on a pu observer des Classes D ayant commandé des \"pieds de porcs\" ramper sans leurs jambes jusqu'à leurs cellules). Une fois sur place, les sujets vont manger la pièce de viande avant de décéder. Une fois la transaction terminée, et si aucun nouveau sujet ne pénètre dans SCP-006-01-FR, SCP-006-FR va entrer en phase passive et s'enfermer dans la réserve.")
            .addField("**Description**:(7)", "Des encéphalogrammes effectués sur les sujets pendant que ceux-ci étaient sous l'emprise de l'entité montrent qu'à son contact, les zones cérébrales chargées de prendre des décisions sont lourdement affectées, dans certains cas, l'état du sujet était proche de celui d'un patient ayant subi une lobotomie. Une équipe de chercheurs menée par le Dr. ██████ est en train d'étudier si SCP-006-FR utilise des ondes spécifiques pour contrôler le sujet, ou si cette faculté est purement psychique. La première théorie est difficilement démontrable, du fait qu'il est impossible de faire passer à SCP-006-FR une encéphalographie, cependant, l'idée n'a pas encore été totalement abandonnée. \n Toutes les tentatives de forcer la porte de la réserve en utilisant du personnel végétarien, ou même de l'endommager se sont soldées par un échec.")
            .addField("**Description**:(8)", "Toutes les tentatives d'entrer dans la réserve pendant que SCP-006-FR était en état actif se sont soldées par un échec, et ont déclenché la colère de l'entité qui a tué tous les membres du personnel alors présents dans SCP-006-01-FR : voir Incident 01-006.")
            .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-006-FR](http://fondationscp.wikidot.com/scp-006-fr)", true)
        message.channel.sendEmbed(scp_006fr);
        console.log("Commande Info 006-FR faite")
    }
    if (message.content === prefix + "info 011-fr"){
        var scp_011fr = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail("http://fondationscp.wdfiles.com/local--files/scp-011-fr/1358103143-221-fr.jpg")
            .addField("**Objet#**:", "SCP-011-FR")
            .addField("**Niveau de Menace**:", "~~Vert~~  Jaune")
            .addField("**Procédures de Confinement Spéciales**:", "~~Aucune mesure de sécurité particulière n'est nécessaire pour SCP-011-FR. Tout agent de toute classe est passible d'être affecté au site pour l'encadrement du SCP-011-FR.~~Aucun membre du personnel féminin ne doit entrer dans la cellule de confinement de SCP-011-FR. SCP-011-FR doit être contenu dans une salle de 4 x 4 x 4 mètres. Une équipe de deux (2) personnes doit en permanence visionner les caméras de surveillance en cas d'apparition de SCP-011-FR-1 ou de sa sortie du miroir. En cas de sortie de SCP-011-FR-1 de son contenant, contactez d'urgence le Docteur Dharma.")
            .addField("**Description**:", "SCP-011-FR est un miroir mural datant du XXè siècle. Il mesure 200 cm de hauteur pour 130 cm de largeur. Il est constitué de bois flotté et de verre. Le sujet contient une ombre de type humanoïde nommée SCP-011-FR-1. L'entité SCP-011-FR-1 est capable de faire passer des objets de sa salle de confinement vers l'intérieur du miroir. Il semblerait que le sujet puisse sortir du miroir; cependant cela n'a pas encore été confirmé. Les agents ayant été en contact visuel avec SCP-011-FR-1 décrivent une sensation d'oppression et expriment de la détresse envers celui-ci.~~Les tentatives de communication avec le sujet se sont toutes soldées par des échecs.~~")
            .addField("**Addenda**:", "À l'origine, SCP-011-FR fut découvert par le professeur Jenko dans un manoir au large de ██████ puis rapatrié en France par une équipe d'intervention présente sur les lieux. Le manoir où fut trouvé SCP-011-FR a été signalé par un de nos agents en mission pour le docteur Dharma. Le manoir aurait été abandonné depuis █████. Plusieurs témoins auraient affirmé voir une personne déambuler dans la maison vêtue d'une cape avec une capuche. Quand l'équipe d'intervention fut chargée d'entrer dans le manoir, ses membres y découvrirent un intérieur en ruine, beaucoup plus grand que prévu, complètement en désaccord avec les dimensions extérieures de la maison. Dans le salon du manoir, tous les meubles étaient en morceaux et la tapisserie en lambeaux; il y avait aussi [DONNÉES SUPPRIMÉES] avec une flaque de sang à côté du miroir où l'on voyait SCP-011-1-FR.")
            .addField("**Addenda**:(suite)", "Aucun signe de la personne encapuchonnée ne fut détecté.")
            .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-011](http://fondationscp.wikidot.com/scp-011-fr)", true)
        message.channel.sendEmbed(scp_011fr);
        console.log("Commande Info 011-FR faite");
    }
    if (message.content  === prefix + "info 060-fr"){
        var scp_060fr = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail("http://fondationscp.wdfiles.com/local--files/scp-060-fr/wC4tuke.jpg")
            .addField("**Objet#**:", "SCP-060-FR")
            .addField("**Niveau de Menace**:", "Orange")
            .addField("**Classe**:", "Euclide")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-060-FR doit être confiné dans une cellule pour humanoïde standard de l'Unité de Confinement-04 du Secteur-E8 de la Zone Armée de Recherche et de Confinement-Avanaa. La cellule ne doit posséder ni fenêtre, ni conduit de ventilation, et doit être scellée hermétiquement. De plus, celle-ci doit être éclairée en permanence et sa température doit être maintenue au-dessus de vingt-cinq (25) degrés Celsius. Le seul accès à la cellule doit être fermé à l'aide d'une porte en acier blindé dont la face intérieure doit être recouverte d'une plaque d'électrum1 de cinq (5) centimètres d'épaisseur.")
            .addField("**Procédures de Confinement Spéciales**:(2)", "Un minimum de deux (2) gardes armés de lance-flammes M2 doit être présent en permanence à proximité de la cellule de SCP-060-FR. Toutes les instances de SCP-060-FR-1 et -2 doivent être immédiatement détruites par le feu et leurs restes doivent être jetés dans l'incinérateur prévu à cet effet.En aucun cas, les restes d’un être vivant doivent se trouver à moins de vingt (20) mètres de l’entité.2")
            .addField("**Procédures de Confinement Spéciales**:(3)", "Suite à l'Incident 060-EV-01, un sas de quinze (15) mètres de long doit être aménagé à l'entrée de la cellule de SCP-060-FR dans le but de diminuer les risques de brèches de confinement. Une (1) unité de combat robotisée de classe Dragon doit être présente en permanence à l'intérieur du sas. Celle-ci doit subir une maintenance toutes les semaines et être remplacée si nécessaire.Un microphone relié au Poste de garde-E8-04 doit être installé à l'intérieur de la cellule.")
            .addField("**Description**:", "SCP-060-FR est une entité humanoïde de 1,75 mètre portant une grande bure noire fabriquée dans un tissu inconnu à consistance brumeuse. Il est actuellement impossible de distinguer son visage à cause de la présence permanente d'un voile noir à son emplacement. L'entité porte des gantelets et des bottes fabriqués dans un métal inconnu.Les tests initiaux3 effectués après sa capture ont permis de déterminer que SCP-060-FR possède bien un corps physique bien que celui-ci ne présente aucun signe vital.")
            .addField("**Description**:(2)", "SCP-060-FR possède la capacité de faire varier la température de l'air de zéro (0) à -2██ degrés Celsius à volonté dans un rayon de cinq (5) mètres autour de lui.Il a aussi été observé que SCP-060-FR possède la capacité de se faufiler dans tous les types d'ouvertures peu importe leur taille ou leur forme. \n À noter que son contrôle sur ces deux capacités est fortement diminué lorsque la température ambiante dépasse vingt-cinq (25) degrés Celsius.")
            .addField("**Description**:(3)", "SCP-060-FR est fortement affecté négativement par l'or et l'argent et ne peut pas s'approcher à moins de ██ mètres de tout ce qui contient entre ██ et ██ pourcents de ces deux métaux sans [DONNÉES SUPPRIMÉES].")
            .addField("**Description**:(4)", "La principale capacité anormale de l'entité se manifeste lorsque les restes d'un être vivant4 se trouvent à moins de vingt (20) mètres de celle-ci. Lorsque cela se produit, SCP-060-FR envoie cinq (5) chaînettes se planter dans les membres et la tête du corps. Les restes sont alors désignés SCP-060-FR-1. Une fois les chaînettes implantées, SCP-060-FR est en mesure de contrôler l'instance de SCP-060-FR-1 comme un pantin jusqu'à ce que celle-ci soit totalement détruite. Le nombre maximum de corps que l'entité peut contrôler simultanément est actuellement inconnu. À noter que les instances de SCP-060-FR-1 réagissent de la même façon que l'entité lorsqu'elles sont exposées à de l'or ou à de l'argent.")
            .addField("**Description**:(5)", "Le meilleur moyen de repousser SCP-060-FR et de détruire les instances de SCP-060-FR-1 est le feu. Lorsque n'importe quels autres types de dommages leur sont infligés, les instances de SCP-060-FR-1 vont [DONNÉES SUPPRIMÉES].")
            .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-060-FR](http://fondationscp.wikidot.com/scp-060-fr)", true)
        message.channel.sendEmbed(scp_060fr)
        console.log("Commande Info 060-FR")
    }
    if (message.content === prefix + "info 173"){
        var scp_173 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail("http://fondationscp.wdfiles.com/local--files/scp-173/0LrEW.jpg")
            .addField("**Objet#**:", "SCP-173")
            .addField("**Classe**:", "Euclide")
            .addField("**Procédures de Confinement Spéciales**:", "L'objet SCP-173 doit être conservé dans un conteneur verrouillé en toutes circonstances. Lorsque des membres du personnel doivent entrer dans la chambre de confinement de SCP-173, ils doivent systématiquement être un minimum de trois personnes, et la porte doit être immédiatement reverrouillée derrière eux. A tout moment, deux personnes doivent maintenir un contact visuel direct avec SCP-173 et ce, jusqu'à ce que tous les membres du personnel aient quitté et reverrouillé le conteneur.")
            .addField("**Description**:", "Transféré au Site-19 en 1993. Origine inconnue jusqu'à présent. Il est constitué de barres d'armature et de béton comportant des traces de peinture aérosol de marque Krylon. SCP-173 est animé et extrêmement hostile. L'objet ne peut pas bouger tant qu'il se trouve dans un champ visuel direct. Il est impératif que le contact visuel avec SCP-173 ne soit pas interrompu. Les membres du personnel assignés à entrer dans le conteneur sont chargés de s'alerter mutuellement avant de cligner des yeux. L'objet attaque en brisant le cou de la victime à la base du crâne, ou par strangulation.")
            .addField("**Description**(suite):", "Dans le cas d'une attaque, le personnel doit respecter les procédures de confinement de Classe 4 concernant les objets dangereux. \n Le personnel a rapporté avoir entendu des bruits de grattements provenant de l'intérieur du conteneur lorsque personne n'est présent à l'intérieur. Ceci est considéré comme normal, et toute modification de ce comportement doit être signalé au Superviseur en service. \n La substance brun rougeâtre sur le sol est une combinaison de matières fécales et de sang. L'origine de ces substances est inconnue. La salle doit être nettoyée selon une fréquence bi-hebdomadaire.")
            .addField("Le Wiki", "Voir la page wiki complète: \n [SCP-173](http://fondationscp.wikidot.com/scp-173)", true)
        message.channel.sendEmbed(scp_173);
        console.log("Commande Info 173 faite");
    }
    if (message.content === prefix + "info bright"){
        var dr_bright = new Discord.RichEmbed()
           .setColor("RANDOM")
           .addField("**Objet#**:", "Dr Bright")
           .addField("**Classe**:", "Apollyon")
           .addField("**Description**:", "Le PIRRRRRRRRE membre de la Fondation SCP !")
           .addField("La liste de ce qu'il est interdit de faire:", "[La liste](http://fondationscp.wikidot.com/the-things-dr-bright-is-not-allowed-to-do-at-the-foundation)", true)
           .setFooter("La devise de la Fondation est \"Sécuriser, Contenir, Protéger\", et non pas l'une des choses suivantes:  \n \"Sucer Couilles et Pénis\"")
        message.channel.sendEmbed(dr_bright);
        console.log("Commande Dr Bright faite");
    }
    if (message.content === prefix + "info 137-fr"){
        var scp_137fr = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField("**Objet#**:", "SCP-137-FR")
            .addField("**Niveau de Menace**:", "Jaune")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-137-FR doit être conservé dans un coffre sécurisé au Site-Aleph et n'en être sorti qu'à l'occasion de tests sur des membres du personnel de Classe D. En dehors des tests, seuls des membres du personnel étant confirmés comme dépourvus de croyance religieuse sont autorisés à manipuler SCP-137-FR, afin de prévenir toute ouverture accidentelle.")
            .addField("**Description**:", "SCP-137-FR est une brochure en papier glacé, mesurant 15 x 25 cm et pliée en deux. Sur le recto de SCP-137-FR est imprimée la phrase \"Un monde sans religion, est-ce possible ?\" accompagnée de l'image de la Terre entourée de divers symboles religieux. Le verso est simplement marqué du mot \"Oui.\" avec au bas le logo d'une organisation nommée \"SAPHIR\", jusqu'ici inconnue et non-recensée (voir le Journal de Récupération). \n Les deux volets internes sont vierges.")
            .addField("**Description**:(2)", "Lorsqu'il est fermé, SCP-137-FR ne présente aucun effet anormal. Toutefois, lorsque SCP-137-FR est ouvert par un sujet ayant une appartenance à un quelconque mouvement religieux, tous deux vont instantanément disparaître. Le sujet et SCP-137-FR réapparaîtront ensuite dans un délai s'étalant de une (1) seconde à huit (8) heures après l'ouverture.")
            .addField("**Description**:(3)", "Le sujet reviendra dans un fort état de choc, avec une santé mentale nettement fragilisée, et manifestera une profonde répulsion envers la religion à laquelle il appartenait avant l'expérience. Tous témoignent s'être retrouvés à l'emplacement géographique exact où ils se trouvaient, mais dans un monde invariablement dystopique où leur religion était la seule existante. Bien que la durée de leur présence là-bas soit indéterminée, elle semble bien supérieure au temps de leur disparition à la vue des expériences que les sujets y ont vécu. Une durée moyenne de trois mois a été suggérée.")
            .addField("**Description**:(4)", "L'état de choc important des sujets compliquant leur interrogatoire, une cellule psychologique a été mise en place et l'usage de calmants est autorisé.")
            .addField("**Journal de Récupération**:", "SCP-137-FR semble avoir été distribué en de multiples exemplaires le ██/██/████, sur une place de la ville de Dijon, France, par des membres volontaires issus d'une organisation nommée SAPHIR. L'attention de la Fondation fut attirée lorsque des agents infiltrés dans la police locale reçurent des témoignages de personnes \"disparaissant d'un coup\" et \"réapparaissant complètement traumatisés\".")
            .addField("**Journal de Récupération**:()", "Lorsque la FIM Zêta-8 \"Blanche Colombe\" débarqua sur place pour administrer des amnésiques aux témoins et aux victimes, les membres de SAPHIR avaient disparu, en ayant préalablement récupéré ou détruit tous les exemplaires de SCP-137-FR présents sur place. SCP-137-FR fut heureusement trouvé dans une poubelle peu éloignée de la place, où il avait été jeté par un civil n'ayant pas pris le temps de l'ouvrir.")
            .addField("**Journal de Récupération**:()", "Des recherches ont été lancées pour déterminer la nature et les objectifs de SAPHIR, bien qu'elles aient été jusque là assez peu fructueuses. Selon les recoupements effectués à ce jour, SAPHIR semble être un groupe intellectuel cherchant à porter atteinte aux religions dans leur globalité afin de promouvoir la pensée rationnelle. La devise marquée sous leur logo, \"Nostram Assulam Pavete\" (soit \"Craignez Notre Éclat\" en latin) prouve qu'ils se considèrent eux-même comme une menace. D'autres éclaircissements sont à suivre.")
            .addField("Le Wiki", "Voir la pasge wiki complète: \n [SCP-137-FR](http://fondationscp.wikidot.com/scp-137-fr)", true)
        message.channel.sendEmbed(scp_137fr);
        console.log("Commande Info 134-FR faite");
    }
    if (message.content === prefix + "info 343"){
        var scp_343 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addField("**Objet#**:", "SCP-343")
            .addField("**Classe**:", "Safe")
            .addField("**Procédures de Confinement Spéciales**:", "SCP-343 réside dans une chambre de 6,1 mètres de longueur par 6,1 mètres de largeur sur le Site-17 de Sécurité Minimale. Tous les objets qu'il demande devront lui être apportés et il devra recevoir au moins une visite quotidienne d'un membre du personnel. Du fait de la nature de SCP-343 (voir description) toute tentative de mettre en place de nouvelles procédures de sécurité ou d’autorisations supplémentaires est inutile/impossible.")
            .addField("**Description**:", "SCP-343 est un homme, sans race particulière, d'apparence humaine et doté d'une omnipotence visible. SCP-343 fut découvert marchant dans les rues de Prague et fut confiné après qu'un des membres du personnel a été témoin de sa disparition de la rue et de sa réapparition sur un toit. SCP-343 est retenu, avec son accord, dans sa chambre puisque son emprisonnement s'est révélé impossible.")
            .addField("Le Wiki"," Voir la page complète: \n [SCP-343](http://fondationscp.wikidot.com/scp-343)", true)
        message.channel.sendEmbed(scp_343);
        console.log("Commande Info 343 faite");
    }
    if (message.content === prefix + "info 1074"){
        var scp_1074_1 = new Discord.RichEmbed()
           .setColor("RANDOM")
           .setThumbnail("http://fondationscp.wdfiles.com/local--files/scp-1074/1074.jpg")
           .addField("**Objet#**", "SCP-1074")
           .addField("**Classe**:", "Safe")
           .addField("**Procédures de Confinement Spéciales**:", "SCP-1074 doit être gardé dans un cadre et couvert d'un tissu épais et opaque, dans une salle d'archives verrouillée, dans le Site 342. Il est formellement interdit pour tout membre du personnel d'observer SCP-1074 sans sa couverture, à l'exception d'un membre du personnel de Classe D lors d'une expérience.")
           .addField("**Procédures de Confinement Spéciales**:(2)", "Les photographies et enregistrements vidéo de SCP-1074 doivent être pris par un robot télécommandé.")
           .addField("**Procédures de Confinement Spéciales**:(3)", "Lors d'une observation accidentelle de SCP-1074, la personne concernée doit être retirée de la salle dans laquelle SCP-1074 se trouve, et des amnésiques de Classe A doivent lui être administrés au plus vite. La personne exposée à SCP-1074 devra suivre des analyses psychologiques tous les deux jours et des amnésiques devront être administrés à nouveau si requis.")
           .addField("**Procédures de Confinement Spéciales**:(4)", "Ce processus devra être répété aussi longtemps que la progression des effets de SCP-1074 le permette.")
           .addField("**Description**:", "SCP-1074 est une peinture sur toile, produite par un artiste non identifié. Lorsqu'elle est photographiée ou filmée, SCP-1074 semble ne représenter qu'un gris uniforme, avec des mouvements de pinceaux visibles.")
           .addField("**Description**:(2)", "Les échantillons de SCP-1074 retirés par robot télécommandé ont été identifiés comme de la peinture à l'huile grise d'un type fréquemment disponible dans de nombreux magasins des Etats-Unis.")
           .addField("**Description**:(3)", "Lorsque SCP-1074 est observé par un être humain, l'observateur montre dès le début des symptômes physiologiques similaires au syndrome de Stendhal1, comme une accélération du rythme cardiaque, des sueurs, et des vertiges.")
           .addField("**Description**:(4)", "L'individu qui observe SCP-1074 tentera alors de décrire l'œuvre observée dans les plus grands détails aux personnes qui l'entourent, la décrivant fréquemment comme la plus belle ou la plus touchante œuvre qu'ils n'aient jamais vu. Les personnes fortement affectées par l'œuvre ne la décriront pas comme entièrement grise, mais comme une peinture très détaillée de nature inconsistante.")
           .addField("**Description**:(5)", "La scène peinte n'est jamais la même pour deux personnes différentes; les thèmes récurrents, d'après les personnes observant SCP-1074, sont des scènes décrivant les aspects de la mortalité humaine, l'insignifiance individuelle, le jugement légal ou moral, l'eschatologie religieuse, ou [DONNÉES CENSURÉES].")
           .addField("**Description**:(6)","Lors de l'observation de SCP-1074, l'observateur ne cessera pas de regarder l'œuvre à moins d'en être contraint par la force, et il tentera de convaincre toutes les personnes présentes de regarder l'œuvre également.")
           .addField("**Description**:(7)","Le sujet sera rapidement désorienté, tentant de discuter les concepts philosophiques mis en question par la peinture, et s'interrogeant sur différentes idées en rapport, en parlant d'une façon de plus en plus ésotérique. Environ 3 à 5 minutes après le début de l'observation, le sujet entrera dans un état catatonique et ne répond plus à aucun stimulus.")
           .addField("**Description**:(8)","Aucune méthode permettant d'annuler cet effet n'a encore été trouvée; le sujet restera immobile plusieurs jours et mourra de causes naturelles comme la faim, à moins d'être nourri d'une autre manière. Des analyses par electro-encéphalographie indiquent que les sujets étant entrés dans un état catatonique démontrent encore une activité cérébrale élevée, similaire à une personne consciente.")
           .addField("**Description**:(9)","Si le sujet affecté est séparé de SCP-1074 avant la manifestation d'un état catatonique, les symptômes physiques s'atténueront pendant les trente secondes à venir, et la personne pourra à nouveau regarder dans d'autres directions. Les symptômes psychologiques, en revanche, continuent leur développement, à un nouveau rythme.")
           .addField("Voir la suite sur le wiki", "[LA SUITE](http://fondationscp.wikidot.com/scp-1074)", true)
        message.channel.sendEmbed(scp_1074_1);
        console.log("Commande Info 1074 faite");
    }
    if (message.content === prefix + "info 1123"){
        var scp_1123 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail("http://fondationscp.wdfiles.com/local--files/scp-1123/SCP-1123.jpg")
            .addField("**Objet#**:", "SCP-1123")
            .addField("**Classe**:", "Safe")
            .addField("**Procédures de Confinement Spéciales**:", "Pour empêcher la dégradation de SCP-1123 et sa signalisation, il doit être conservé dans un conteneur hermétiquement scellé dans une atmosphère de gaz d'argon sauf en cas de tests. Pendant le test et le stockage, la luminosité devra être limitée à 50 lux, la température entre 20 et 24 degrés Celsius et l'humidité à 55%.")
            .addField("**Procédures de Confinement Spéciales**:(suite)", "SCP-1123 devrait seulement être transporté dans son conteneur et ne devra pas être manipulé sauf pendant une expérience contrôlée. Quand il n'est pas en test, il sera stocké dans un casier contrôlé par climat sûr au Site 19.")
            .addField("**Description**:", "SCP-1123 est un crâne humain duquel il manque la mandibule inférieure et toutes ses dents. À travers le squama frontalis extérieur est l'écriture khmer moderne, écrit en sang humain, qui se traduit comme \"Se souviennent\". Tant le crâne que le sang ont été définitivement datés à 197█ et le dépistage génétique confirme que tous les deux sont du même individu.")
            .addField("**Description**:(2)","SCP-1123 a été découvert en 198█ par le Colonel Hu ████ de l'Armée Populaire Vietnamienne dans une collection(un ramassage) de restes humains dans la garde du ████ █████ ███████ Museum à █████ ████, Cambodge. SCP-1123 a été intercepté par des agents de la Fondation alors qu'il était livré à Hanoï.")
            .addField("**Description**:(3)","L'écrit khmer est mal effacé et invisible à la plupart des sujets au-delà d'une distance de 5 mètres. Cependant, quand un sujet s'approche de SCP-1123 il rapportera que l'écrit devient progressivement plus visible jusqu'à moins de 1 mètre, il le rapportera apparaissant comme récemment dessiné.")
            .addField("**Description**:(4)", "Quelques sujets à cette distance rapportent que l'écriture est \"toujours humide.\" Cet effet n'est pas reproductible avec l'équipement optique. Enregistrer l'écrit exige photographiquement l'amélioration optique ou l'éclairage UV. (Le dernier n'est pas approuvé pour l'utilisation avec SCP-1123 comme il contribue à la dégradation de l'objet).")
            .addField("**Description**:(5)", "Les sujets à cette distance rapporteront souvent aussi d'autres phénomènes sensoriels anormaux, y compris des odeurs (comme la viande cuisinée ou des cendres), des sons (comme un cri doux, des battements de cœur faibles ou la respiration, ou des pas éloignés) et des réponses tactiles")
            .addField("Note", "(comme le sable dans les yeux, des fourmis rampant à l'arrière de la main, ou des éclats de verre dans la plante du pied.)")
            .addField("**Description**:(6)","Quand les sujets touchent la surface de SCP-1123, ils éprouvent un état de fugue dissociatif. Le commencement de l'état de fugue apparaît instantanément et n'est pas affectée par la cessation de contact avec SCP-1123. Les symptômes de la fugue persistent entre quatre-vingt-dix (90) minutes et six (6) heures.")
            .addField("**Description**:(7)","La fugue est caractérisée par la confusion, la désorientation et l'adoption d'une nouvelle identité et des souvenirs qui consistent en connaissance, y compris en langue, précédemment inconnue au sujet. Pendant la fugue le sujet perdra tous les souvenirs de leur identité antérieure.")
            .addField("**Description**:(8)","Les sujets ont montré des réactions diverses, s'étendant de la presque catatonie aux tentatives d'évasion ou attaquer le personnel de la Fondation. Quand l'état de fugue baisse, les sujets regagneront les souvenirs de leur identités antérieures, mais y conserveront aussi la mémoire de l'identité nouvelle, imprimée et toute la connaissance associée.")
            .addField("**Description**:(9)","Les sujets ont dit qu'ils étaient \"comme s'ils ont vécu un entier d'autre vie comme une certaine autre personne\" dans la période entre le contact SCP-1123 et la convalescence de la fugue.")
            .addField("Voir la suite sur le wiki", "[LA SUITE](http://fondationscp.wikidot.com/scp-1123)", true)
        message.channel.sendEmbed(scp_1123)
        console.log("Commande Info 1123 faite")
    }
    if (message.content === prefix + "show 049"){
        var show_049 = new Discord.RichEmbed()
             .setColor("RANDOM")
             .setTitle("Voici __SCP-049__:")
             .setImage("http://scp-wiki.wdfiles.com/local--files/scp-049/SCP-049")
        message.channel.sendEmbed(show_049)
        console.log("Commande Image 049 faite")
    }
    if (message.content === prefix + "show 106"){
        var show_106 = new Discord.RichEmbed()
             .setColor("RANDOM")
             .setTitle("Voici __SCP-106__:")
             .setImage("http://scp-wiki.wdfiles.com/local--files/scp-106/that%20man.jpg")
        message.channel.sendEmbed(show_106)
        console.log("Commande Image 106 faite")
    }
    if (message.content === prefix + "show 527"){
        var show_527 = new Discord.RichEmbed()
             .setColor("RANDOM")
             .setTitle("Voici __SCP-527__:")
             .setImage("http://scp-wiki.wdfiles.com/local--files/scp-527/fish.png")
        message.channel.sendEmbed(show_527)
        console.log("Commande Image 527 faite")
    }
    if (message.content === prefix + "show 066"){
        var show_066 = new Discord.RichEmbed()
             .setColor("RANDOM")
             .setTitle("Voici __SCP-066__:")
             .setImage("http://img0.reactor.cc/pics/post/full/The-SCP-Foundation-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-SCP-art-%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B-SCP-3910782.jpeg")
        message.channel.sendEmbed(show_066)
        console.log("Commande Image 066 faite")
    }
    

});
