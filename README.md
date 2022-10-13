<h2>Sujet</h2>

<span> En se basant sur l'API de la NASA https://api.nasa.gov/neo/?api_key=DEMO_KEY#!/ qui liste les corps célestes qui passent proches de la terre.</span>

<ul>

<li>On veut pouvoir saisir une date de début et de fin et afficher une liste des corps célestes qui passent près de la terre entre ces dates.</li>
<li>Pour chaque astéroïde de la liste, afficher son nom, sa taille estimée, la distance à laquelle il passe de la terre et la date de son prochain passage.</li>
<li>Au clic sur un astéroïde, on veut afficher les 5 dernières fois ou l'astéroïde est passé proche de la terre avec sa date et la distance à laquelle il est passé.</li>

</ul>

<span>Générer sa clé pour discuter avec l'API ici : [https://api.nasa.gov/index.html#authentication](https://api.nasa.gov/index.html#authentication)</span>

<h2>Installation</h2>

<h3>Back-end</h3>

<span>Après avoir cloné le repository, dans le dossiers backend importer Django avec la version `4.1.2`</span>

### `pip install Django==4.1.2`

<span>Une fois Django téléchargé, toujours dans le dossier backend démarrer le serveur avec la commande :</span>

### `py manage.py runserver`

<h3>Front-end</h3>

<span>Pour démarrer le serveur React, il faut se rendre dans le dossier frontend et lancer la commande :</span>

### `npm install`

Puis la commande :

### `npm start`
