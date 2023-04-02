# SGBDR ET SQL

Un SGBDR est un système de gestion de base de données relationnelle.

C'est un programme, un service qui tourne sur un serveur.

## QUELQUES LIENS

SQL : https://sql.sh/

SQL sur postgresql : https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/

## Interaction avec un SGBDR

On peut utiliser divers outils pour communiquer avec un SGBDR.

Notamment, un outil en ligne de COMMANDE : CLI comme psql.

## CONNEXION AU SERVEUR

On peut se connecter à un serveur grâce à psql avevc la commande :

`psql -h adresse_du_serveur -U utilisateur -d database`

Exemple :

`psql -h pg.oclock.lan -U etudiant -d trombi`

## QUELQUES COMMANDES

\dt pour lister les tables de la base

\d nom_de_la_table pour consulter la structure de la table nom_de_la_table

\! clear pour nettoyer l'écran

## REQUETE SQL SELECT

### présentation rapide des différentes CLAUSES :

FROM : depuis quelle(s) table(s) récupérer les données.
WHERE : permet de filtrer les enregistrement à récupérer.
ORDER BY : permet de classer les enregistrements selon la valeur d'une ou plusieurs colonnes.
SELECT : permet de lister les champ que l'on souhaite consulter.
LIMIT : limiter le nombre d'enregistrement à retourner

### CLAUSE FROM

Elle permet de définir de quelle table récupérer les enregistrement

### CLAUSE SELECT

La clause SELECT permet de définir les champs à récupérer.

#### TOUS LES CHAMPS

Récupérer tous les champs de tous les enregistrement d'une table :

`SELECT * FROM nom_de_la_table;`

#### SEULEMENT QUELQUES CHAMPS

Récupérer seulement un champ de tous les enregistrements d'une table :

`SELECT "mon_champ" FROM nom_de_la_table;`

Et si on veut plusieurs colonnes (champs) :

`SELECT "mon_champ", "nom_d_un_autre_champ" FROM nom_de_la_table;`

### CLAUSE WHERE

La clause WHERE permet de filtrer les enregistrements à retourner.

Exemple :

`SELECT * FROM "promo" WHERE "name"='Maya';`

Renvoie tous les champs des enregistrements de la table promo dont le champ name vaut 'Maya'.

On peut bien sûr mixer les clause SELECT et WHERE pour récupérer seulement certains champs de certains enregistrement.

Exemple : 

`SELECT "name" from "promo" WHERE "id" = 37;`

### CLAUSE ORDER BY

La clause ORDER BY permet de classer les résultats selon les valeur de tel ou tel champ. On peut préciser le sens de tri grâce à ASC (défaut) ou DESC.

Exemple :

`SELECT * FROM "promo" ORDER BY "name" ASC;`

### CLAUSE LIMIT

La clause limit permet de limiter le nombre de résultats à récupérer

Exemple :

`SELECT * FROM "promo" ORDER BY "name" ASC LIMIT 10;`


## REQUETE SQL INSERT

La requête INSERT INTO permet d'insérer de nouveaux enreistrement dans les
tables de la base de données

cf. https://sql.sh/cours/insert-into

Exemple :

```sql
INSERT INTO "student" ("first_name", "last_name", "promo_id")
VALUES ('Jean', "Dupont", 1);
```

## REQUETE UPDATE

La requête UPDATE permet de mettre à jour les enregistrements d'une table.

Attention, tous les enregistrement qui correspondent à la clause WHERE seront impactés !

S'il n'y a pas de clause WHERE, ce sont tous les enregistement de la table qui seront mis à jour.

cf. https://sql.sh/cours/update

Exemple :

```sql
UPDATE "student"
SET "promo_id" = 303,
WHERE "last_name" = 'Dupont'
AND "first_name" = 'Jean';
```

## REQUETE DELETE

La requête DELETE permet de supprimer des enregistrement d'une table

ATTENTION, si on ne précise pas de clause WHERE, c'est TOUS les enreistrements de la table qui seront supprimer !

```sql
DELETE FROM "student"
WHERE "id" = 2753;
```