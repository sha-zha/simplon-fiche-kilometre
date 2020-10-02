# simplon-fiche-kilometre
Electron est un framework pour créer des applications natives avec les technologies web comme JavaScript, HTML et CSS. Electron s'occupe de la partie technique pour que vous puissiez vous concentrer sur le cœur de votre application. (desktop )   Electron utilise Chromium et Node.js <br> 

## Avantages : 
 multiplateforme  open-source documentation claire   
## Désavantages :   
lourd petit projet entre 50 Mo et 150 Mo    
## Alternative :  
Haxe Node webkit  

Modele-Suivi-Kilometrage
100%

=IF(G34>=20000,G34*VLOOKUP(C7,I5:N9,6,0),IF(G34>5000,G34*VLOOKUP(C7,I5:N9,3,0)+VLOOKUP(C7,I5:N9,5,0),G34*VLOOKUP(C7,I5:N9,2,0)))
G34 = distance  
VLOOKUP = C7 La valeur à rechercher
        = I5 La plage de cellules dans laquelle la recherche doit être effectuée, contient à la fois la valeur_de_recherche (dans la colonne la plus à gauche) et la valeur retournée
        = N9  Un numéro qui représente la position de la colonne (dans tableau_de_recherche) de la valeur à retourner, avec la colonne la plus à gauche de tableau_de_recherche à la position 1.
        = 0 facultatif] La valeur par défaut est Vrai (True). Précise s’il faut trouver une correspondance exacte (faux) ou approximative (vrai)
        exemple : 10 - 3CV au moins -  3CV au moins - 0.410 - 0 
        10*0.410 = 4.1 