# Beesoft Core Front End

### Instalar Dependencias del proyecto.
use **npm** y **bower** para instalar las dependencias del proyecto.

Ir al directorio /client y ejecutar :

<code>npm install</code>

<code>bower install </code>

<code>gulp build</code>

### gulp tasks

`npm install -g gulp`
use **gulp**  para hacer un build de los archivos javascripts , los modulos de terceros y ejecutar las pruebas unitarias.

**build project:** <code>gulp build</code>

**start development mode :** <code>gulp gordis</code>


# Convenciones Front End

Proceso mediante el cual se implentara el desarrollo de software Front End  utilizando las siguientes tecnologias:
- HTML5
- CSS3
- JAVASCRIPT


### Workflow Front End

Tecnologias usadas:

  - AngularJS 1.4
  - Angular Material 0.11
  - Bootstrap
  - SASS
  - GULP
  - NODEJS ( npm )
  - BOWER
  - GIT


### Covension para la codificacion con AngularJs

Actualmente nos basamos en esta guia de [John Papa] de la cual usamos los siguientes puntos.

- Single Responsibility
- IIFE
- Modules
- Controllers
- Services
- Factories
- Data Services
- Promises

### Convensiones para nombrar los archivos

Patron para nombrar archivos "caracteristica.tipo.js"

Ejemplos
 - Nombre del Archivo : ( radicacion.controller.js | radicacion.factory.js )
 - Llamar los componentes registrados : ( RadicacionController )


### UI-Router
Enrutador de la aplicacion
ver:
 - State
 - ui-sref
 - States anidados

leer mas [ui-router]


### Restangular
Restangular sera el servicio que atendera todas las llamadas HTTP

[Restangular Github]

[Restangular Newsletter]

###  Promesas

Angular Docs:  [Angular $q]

Manejo de Promsesas js: [Promises]

##### JSON API Estatica

En este caso crearemos un directorio API en el cual tendremos los modelo de datos estaticos [Archivos JSON], Estos JSON serviran de Endpoint para nuestros contradores restangularizados.

##### Unit Test Karma y Jasmine
<br/>
**Karma** : Test Runner

**Jasmine** : Behavior-Driven JavaScript

instalacion

**paso 1:** Instalar Karma CLI

<code> npm install -g karma-cli </code>

**paso 2:**  Instalar karma localmente en la carpeta de "**tests**"

<code>npm install karma</code>

**paso 3:** Instalar Karma Plugins

<code> npm install karma-jasmine karma-phantomjs-launcher</code>

**paso 4:** Ejecutar el archivo karma.conf.js

<code>karma start</code>

### Protractor e2e Test

Instalacion y Documentacion [Protractor]


Ejecutar Protractor


Run: <code>webdriver-manager start</code>



cd to tests then Run:

<code> protractor protractor.conf.js </code>




##### Angular Mocks
Se usara "Angular Mocks" para las pruebas unitarias sobre controladores ... [Leer mas]
##### Ejemplo probar peticion Http en  controlador con karma-jasmine + ngMocks
[$httpBackend]

##### Filtros en Angular
[Todo sobre Filtros AngularJs]

[$http angular]:https://docs.angularjs.org/api/ng/service/$http
[John Papa]:https://github.com/johnpapa/angular-styleguide
[Leer mas]:https://docs.angularjs.org/guide/unit-testing
[Todo sobre Filtros AngularJs]:http://toddmotto.com/everything-about-custom-filters-in-angular-js/
[Restangular Github]:https://github.com/mgonto/restangular
[Restangular Newsletter]: http://www.ng-newsletter.com/posts/restangular.html
[$httpBackend]:https://code.angularjs.org/1.3.15/docs/api/ngMock/service/$httpBackend
[Promises]:http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
[Angular $q]:https://docs.angularjs.org/api/ng/service/$q
[ui-router]: https://github.com/angular-ui/ui-router
[Protractor]: http://angular.github.io/protractor/#/