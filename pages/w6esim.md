---
layout: default
title: w6esim
---

# Esimerkkejä: OrientDB/PHP

Esimerkit perustuvat OrientDB 
-[käsikirjaan](http://orientdb.com/docs/last/index.html) 
sekä 
[PHP-ajurin](https://github.com/orientechnologies/PhpOrient) 
mukana tulevaan dokumentaatioon. 


## Yhteydenotto tietokantaan


### Peruskäyttö

~~~
$client = new PhpOrient('localhost', 2424);
$client->dbOpen( 'GratefulDeadConcerts', 'admin', 'admin' );
~~~

Tehtäväpohjassa oleva yhteydenotto tietokantaan on peruskäytön näkökulmasta hieman ylimitoitettu tarjoten mahdollisuuden myös hallinta -toimintojen käyttöön (esim. uuden tietokannan perustaminen).
 
### Hallinta-toimintojen käyttö

~~~
$client = new PhpOrient();
$client->hostname = 'localhost';
$client->port     = 2424;
$client->username = 'root';
$client->password = 'root_pass';
$client->connect();
~~~

## Kyselyt

Tietokantaan voidaan kohdistaa yksinkertaisia kysely -operaatioita perinteisen SQL:n tapaan, esim:

~~~
SELECT name, job, @rid AS id
FROM   Employee 
WHERE  city.name = 'Rome'
ORDER BY name
~~~

Kysely kohdistuu `Employee`-luokan dokumentteihin. `SELECT`-osassa oleva `@rid` ("record id") viittaa dokumentin tietokantatunnisteeseen, jolle kyselyssä määritellään (viitattava) nimi `id`. `WHERE` -osassa olevassa ehtolauseessa käytetään dokumentin `city`-ominaisuuttta, joka on linkki toiseen dokumenttiin. Linkatun dokumentin `name`-ominaisuuttta käytetään kyselyehdossa ilman erillistä liitos -operaatiota, mitä relaatiomalli edellyttää vastaavissa tilanteissa. Myös komennon `SELECT`-osassa voidaan viitata linkattujen dokumenttien ominaisuuksiin.

PHP-ohjelmassa edellinen kysely voidaan toteuttaa seuraavasti:

~~~
$city = 'Rome';
$employees = $client->query(''
      . ' SELECT   name, job, @rid AS id'
      . ' FROM     Employee'
      . " WHERE    city.name = '$city'"
      . ' ORDER BY name'
);

~~~
 
Kysely palauttaa `$employees`-muuttujaan `Record`-olioita sisältävän taulukon. `Record` sisältää metodeja, joita käyttäen esim. twig-template osaa poimia tarvitsemansa tiedot.

Dokumentti voidaan hakea tietokannasta tietokantatunnuksella seuraavasti:

~~~
$id = '#2:34';
$employee = $client->query(''
      . ' SELECT   name, job, @rid AS id, city.name AS city_name'
      . ' FROM     Employee'
      . " WHERE    @rid = $id"
)[0];

~~~

Tämäkin kysely palauttaa taulukon, mutta sen sisältönä on ainoastaan yksi `Record`-luokan olio,  joka voidaan poimia taulukosta indeksillä `0`.

Yksittäinen ominaisuus saadaan oliosta viittaamalla kyselyn `SELECT`-osan tunnisteita vastaaviin attribuutteihin, esim. `$employee->name`. Ominaisuuksien nimillä indeksoitu taulukko voidaan täten muodostaa seuraavasti:

~~~
$emp = [
	"name" => $employee->name,
	"job" => $employee->job, 
	"id" => $employee->id,
 	"city_name" => $employee->city_name
];

~~~

Edellinen hoituu myös yhdellä sijoituslauseella:

~~~
$emp = $employee->getOData();
~~~
 

## Lisäys 

...

## Muutos

...


## Poisto

...

## Transaktiot

...



