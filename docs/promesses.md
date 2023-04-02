# Les promesses (Promise)

Une promesse est un objet javascript qui permet de modéliser
une valeur qui va arriver tout de suite, un jour ou peut être jamais.

Une promesse est d'abord en état attente : pending

Si elle est tenue, elle passe en état fulfilled.

Si elle est rompue, elle passe en état rejected.

## Utilisation

on peut attacher sur une promesse un traitement à réaliser si elle est tenue
grâce à la méthode then.

on peut attacher sur une promesse un traitement à réaliser si elle est rompue
grâce à la méthode catch.

## Exemple

```js

const promiseOfResults = client.query('SELECT NOW() as now');

promiseOfResults.then(results => console.log(results.rows[0]));
promiseOfResults.catch((error) => console.error(error.stack));

// équivalent à :
/*
client
  .query('SELECT NOW() as now')
  .then(results => console.log(results.rows[0]))
  .catch((error) => console.error(error.stack));
*/
```