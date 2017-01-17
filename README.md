# React - Redux starter kit

Ce starter a été créé à partir de la commande [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installation

### Télécharger le kit

```
git clone https://github.com/gkueny/react-admin.git

cd react-redux-starter-kit
```

### Installer les dépendances et lancer le projet

```
npm install
npm start
```

rendez-vous ici : [http://localhost:3000/](http://localhost:3000/)

Enjoy :)

## Service d'authentification

Ici, le service utilisé est `Firebase`. Cependant il vous sera facile d'implémenter votre propre service.

Dans le fichier `./src/servies/user.service.js` vous trouverez les fonctions :

- `checkUserStatus(callback)`, celle-ci permet de checker le status de l'utilisateur (`connecté` ou `déconnecté`). Une fois la vérification effectuée, la fonction appelera la fonction `callback` en lui passant en paramètre le statut de l'utilisateur (`true` = connecté, `false` = déconnecté).
- `signInUser(email, password, callbackSucces)`. Avec cette fonction, vous pourrez tenter de connecter un utilisateur à partir d'un email et mot de passe. La fonction `callbackSucces` sera appelée en passant en paramètre le résultat de la tentative de connexion.
- `signOutUser(callbackSucces)`n déconnecte l'utilisateur courant. la fonction `callbackSucces` sera appelée en passant en paramètre le résultat de la déconnexion.
- `registerUser(email, password, callbackSucces)`. Pareil de la fonction `signInUser` mais pour l'enregistrement d'un utilisateur.

## Paramétrer firebase

Si vous avez décidé d'utiliser `Firebase`, il vous suffit de créer le fichier `./src/vars/firebase.config.js` à partir de `./src/vars/firebase.config.dist.js`, puis d'indiquer votre propre config.


## Les routes

Les routes de votre applications sont définies dans le fichier `./src/vars/route.vars.js`.

### Les routes protégées

Les routes qui demandent à ce que l'utilisateur soit conennecté sont placé en tant que `childRoutes` du composant `HaveToLogginContainer`. C'est celui-ci qui a poiur charge de vérifier la connexion de l'utilisateur.

### Les paramètres supplémentaires

Chaque route se doit d'avoir un `id`.

De plus, si vous voulez que la route soit rendue via la fonction `renderLink(login = false, link = routes(), toReturn = [])`, vous avez besoind d'indiquer également les paramètres :

- `title` : le titre du lien
- `private` : Indique si le lien est privée ou non (s'il est privée, alors le lien ne sera rendu que pour les utilisateurs connectés)
- `onlyPublic` : Indique si le lien ne doit être rendu que si l'utilisateur est déconnecté (la page de login par exemple)
- `order` : l'ordre du lien. 
