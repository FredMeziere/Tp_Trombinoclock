# Intitialissation d'un nouveau dépôt GIT local et association à un dépôt distant

## Création d'un dépôt local

`git init` permet de créer un dépot local dans le dossier courant.

## Création d'un dépôt sur github

Depuis github, on peut créer un nouveau dépôt grâce au bouton : New Repository dans l'onglet Repositories.


## Association du dépôt local au dépôt amont 

L'association du dépôt local au dépôt amont se fait grâce à al commande :

`git remote add nom-du-remote lien-du-remote`

exemple : 

`git remote add origin git@github.com:O-clock-Maya/S04-trombinoclock-jMoirenc.git`

## Association et push d'une branche locale à une branche amont

Depuis la branche à pousser :

`git push --set-upstream nom-du-remote nom-de-la-branche-amont`

exemple :

`git push --set-upstream origin master`