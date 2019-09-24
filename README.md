## Getting started


Install dependencies

```
yarn

# or

npm install

the npm / yarn install should be applied in each module
inside the roor src folder. 

```

Start the app

```sh
npm start
```
 URLS:

```sh
# renders all apps
http://localhost:8080/

# renders only react
http://localhost:8080/menu

# renders only vue
http://localhost:8080/pages
```

 Micro Front End Modules:
 ```
    A new module can be added with vue cli by initializing the webpack template
    inside the root src folder.

    Also each module ideally should be in a different repository
```
 Components:
```
    Components ideally should be in npm package included in the package.json file
    in each of the micro front end module
```
 Communication between Micro front end modules:
 ```
    Communication between micro front end modules will be done with browser 
    custom events. 
```