## Getting started <img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-15/96/Filehippo-icon.png" />

Repository List : 

<h3>Contains the main module and service "router"</h3>

```
https://github.com/alexandrosok/Vuejs-Micro-FrontEnd-Experiment
```

<h3>Contains the Micro Front End for the Pages moduleM</h3>

```
https://github.com/alexandrosok/VueJs-Micro-Front-End-Pages
```

<h3>Contains the Micro Front End for the Menu module</h3>

```
https://github.com/alexandrosok/VueJs-Micro-Front-End-Menu
```

 <h3>Component Dependencies</h3>

 Components that will be needed ( They are already inside package.json of the main module)
 
```
https://www.npmjs.com/settings/alexandrosok/packages
```

 <h2>How to Start the app </h2>
 
 Clone the main module
 
 ```
 $ git clone https://github.com/alexandrosok/Vuejs-Micro-FrontEnd-Experiment
```

 Perform an npm install
 <br />
 
  ```
  $ cd Vuejs-Micro-FrontEnd-Experiment 
  $ npm install
  ```

 <br />
 
 ```
 $ cd Vuejs-Micro-FrontEnd-Experiment/src/
 ```
 
 <h3>Clone the Pages Module</h3> 
 
 ```
 $ git clone https://github.com/alexandrosok/VueJs-Micro-Front-End-Pages
```

 Install dependencies
 
```
 $ cd VueJs-Micro-Front-End-Pages
 $ npm install
```

 <h3>Clone the Menu Module</h3>
 
 ```
 $ git clone https://github.com/alexandrosok/VueJs-Micro-Front-End-Menu
```

 Install dependencies
 
 ```
 $ cd VueJs-Micro-Front-End-Menu
 $ npm install
```

```sh
$ cd Vuejs-Micro-FrontEnd-Experiment 
$ npm start

# renders all apps
http://localhost:8080/

Reminder that all apps can run individually by going to the root folder 
and do $ npm run dev 
```

<h2>How it was made</h2>
The lib that was used to create the "routing"
of each Module / Micro Front end was https://www.npmjs.com/package/single-spa

<h2>Module Communication</h2>
The communication between the Apps (Micro Front Ends)
is done with custom browser events. 

<h2>The problems with the current solution</h2>
The biggest problem this solution has is the absence of the router.
Basically switching of the components is done with if conditions when getting data
from the events.  

<h2>What I would differently do if I had time and maybe more will power </h2>
1.Definitely the router usage is essential for this.

2.I would introduce a 3rd vue app that would be the main container <br />

3.I would componetize more elements. Basically I would break down every piece into a component 
injected with npm 
 
4.Also there are lots of parts in the code that were made in haste.
 Code structure would look different.  
