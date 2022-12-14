# CRUD API for Hashdex challenge.

<h2>Contents</h2>
<ol>
    <li><a href="#about">About</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#routes">Routes</a></li>
    <ol>
        <li><a href="#create">Create</a></li>
        <li><a href="#read">Read</a></li>
        <li><a href="#update">Update</a></li>
        <li><a href="#delete">Delete</a></li>
        <li><a href="#default">Default</a></li>
    </ol>
</ol>

<h2 id="about">About</h2>
<p>
    falar do modelo do dado!
</p>

<h2 id="getting-started">Getting started</h2>
<p>
   Clone or download this repo then go to the directory that you dowloaded it and open the terminal. After this you have to use the following commmand line to install the dependancys for this API. (i'm using npm)
</p>

```bash
npm install
```
<p>
  Next step is to run, for this use :
</p>

```bash
node index.js
```
<p>
  Now the API is prepared for use.
</p>

<h2 id="routes">Routes</h2>

<p>
  There are five routes for use (all five returns a JSON) Create, Read, Update, Delete and one default. CRUD for posts are on route "{URL}/post".
  For testing i used a API client called "Insomnia", you can choose one that you like more.
</p>

<h3 id="create">Create</h3>
<p>
    This route is on "{URL}/post", you must use the method "POST" to access. The response will be an JSON object with a message informing that the post is saved, and the post attributes if they are not null, if one of them are null, an error message will be shown and they will not be saved. (note: this error message will not close the aplication)
</p>
<p>Example img:</p>

![Captura de Tela (398)](https://user-images.githubusercontent.com/56653059/207731777-64b0bbf1-ec3b-49ff-9ee8-02356aedc65e.png)


<h3 id="read">Read</h3>
<p>
    This route is on "{URL}/post", you must use the method "GET" to access.The response will be an JSON object with a array that contains all posts that was previously created. If the collection is empty  an error message will be shown saying "No posts found". (note: this error message will not close the aplication)
</p>
<p>Example img:</p>
![Captura de Tela (397)](https://user-images.githubusercontent.com/56653059/207733162-a1bcf841-4d2b-4f26-a152-2f8bce372649.png)

<h3 id="update">Update</h3>


<h3 id="delete">Delete</h3>


<h3 id="default">Default</h3>


