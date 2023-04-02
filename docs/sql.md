# SQL

## toutes les promos, dans l'ordre alphabétique

```sql
SELECT *
FROM "promo"
ORDER BY "name" ASC;
```

## tous les étudiants, dans l'ordre alphabétique des noms de famille

```sql
SELECT *
FROM "student"
ORDER BY "last_name" ASC, "first_name" ASC, "promo_id" DESC;
```

## tous les étudiants de la promo 135

```sql
SELECT *
FROM "student"
WHERE "promo_id" = 135
```

## les étudiants dont le nom ou le prénom ressemble à "max"

```sql
SELECT *
FROM "student"
WHERE "last_name" ILIKE '%max%' OR "last_name" ILIKE '%max%';
```

## Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5

```sql
INSERT INTO "student" ("first_name", "last_name", "promo_id")
VALUES ('Chuck', 'Norris', 5);
```

note : ici, on peut s'assurer que l'enregistrement a bien été créé
en sélectionnant l'ensemble des étudiants de la promo 5 avec :

```sql
SELECT * FROM "student" WHERE "promo_id" = 5;
```

# Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga

```sql
INSERT INTO "promo" ("id", "name")
VALUES (304, 'César');
```

Note : la colonne "id" est la clé primaire de la table "promo"
On doit choisir une valeur disponible pour ce champ afin de ne pas 
violer la contrainte d'intégrité définie par la clé primaire sur le champ id.

Note 2 : Ici, on peut NE PAS indiquer de valeur pour la colonne github_organization. La valeur que prendra la colonne pour l'enregistrement créé sera null, ce qui signifie "pas de valeur". On aurait également pu forcer manuellement cette valeur en la préciant : null ou éventuellement ''.

Note 3 : La colonne id posède une contrainte "not null" ce qui oblige a spécifier une valeur pour ce champ. cf fichier create_db.sql.

# Mettre à jour la promo 5 pour la renommer "Cleo"

```sql
UPDATE "promo"
SET "name"='Cleo'
WHERE "id" = 5;
```

Note : seuls les champs précisés dans la clause SET sont mis à jour.

Note 2 : les enregistrements mis à jour sont TOUS CEUX qui satisfont le 
filtrage défini par la clause WHERE.

# Supprimer la promo 123

```sql
DELETE FROM "promo"
WHERE "id" = 123;
```

Note : DELETE premet de supprimer des LIGNE, pas de mettre à null certains champs.