
# React - Redux starter kit

Ce starter a été créé à partir de la commande [create-react-app](https://github.com/facebookincubator/create-react-app)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sommaire**

- [Installation](#installation)
  - [Télécharger le kit](#t%C3%A9l%C3%A9charger-le-kit)
  - [Installer les dépendances et lancer le projet](#installer-les-d%C3%A9pendances-et-lancer-le-projet)
- [Service d'authentification](#service-dauthentification)
- [Paramétrer firebase](#param%C3%A9trer-firebase)
- [Les routes](#les-routes)
  - [Les routes protégées](#les-routes-prot%C3%A9g%C3%A9es)
  - [Les paramètres supplémentaires](#les-param%C3%A8tres-suppl%C3%A9mentaires)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

### Télécharger le kit

```
git clone https://github.com/gkueny/react-admin.git

cd react-admin
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
- `signOutUser(callbackSucces)`, déconnecte l'utilisateur courant. la fonction `callbackSucces` sera appelée en passant en paramètre le résultat de la déconnexion.
- `registerUser(email, password, callbackSucces)`. Pareil que la fonction `signInUser` mais pour l'enregistrement d'un utilisateur.

## Paramétrer firebase

Si vous avez décidé d'utiliser `Firebase`, il vous suffit de créer le fichier `./src/vars/firebase.config.js` à partir de `./src/vars/firebase.config.dist.js`, puis d'indiquer votre propre config.


## Les routes

Les routes de votre applications sont définies dans le fichier `./src/vars/route.vars.js`.

### Les routes protégées

Les routes qui demandent à ce que l'utilisateur soit connecté sont placées en tant que `childRoutes` du composant `HaveToLogginContainer`. C'est celui-ci qui a pour charge de vérifier la connexion de l'utilisateur.

### Les paramètres supplémentaires

Chaque route se doit d'avoir un `id` (utilisé lors du rendu des liens via la fonction `renderLink` et `renderLinkAdmin` du fichier `./src/services/route.service.js`) (la première fonction retourne les liens pour l'interface principale et la seconde pour les liens de l'interface administrateur).

De plus, si vous voulez que la route soit rendue via la fonction `renderLink(login = false, link = routes(), toReturn = [])` ou ` renderLinkAdmin(login = false, link = routes(), toReturn = [], linkFather = '')`, vous avez besoin d'indiquer également les paramètres :

- `title` : le titre du lien
- `renderOnHome`: Le lien doit-il être rendu sur l'interface principale?
- `renderOnAdmin`: Le lien doit-il être rendu sur l'interface administrateur?
- `renderOnAnonymous`: Le lien doit-il être rendu pour les utilisateurs anonymes?
- `renderOnLogin`: Le lien doit-il être rendu pour les utilisateurs connectés?
