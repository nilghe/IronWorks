# Iron Technologies

Code for Iron Technologies using the following:

1. [Twitter Bootstrap v2.3.2](http://twitter.github.io/bootstrap/)
2. [HTML5 Boilerplate v4.2.0](http://html5boilerplate.com/)
3. normalize / reset
4. [jQuery 1.9.0](http://jquery.com/)
5. modernizr 2.6.2
6. [Font Awesome 3.2.1](http://fontawesome.io/)

## Dependencies

# These plugins are used to concatinate and minify the css/js files in Sublime Text 2

* [Sublime Concat](https://github.com/magnobiet/sublime-concat)
* [YUI Compressor](https://github.com/leon/YUI-Compressor)
* [SublimeSaveOnBuild](https://github.com/alexnj/SublimeOnSaveBuild)

# CSS Concat

* **iron.css** - contains all the @import css files in order of dependency - **use this file for development**
* open iron.css file
* concatenate css files by pressing `shift + cmd + c`
* creates iron.cat.css
* minify the file by pressing `command + b`
* creates iron.cat.min.css - **use this file for production**

# JS Concat

* **iron.js** - the main JS file. Development will have to manually import files in the HTML file. The top of the file has `//@import` for concatenation.
* open iron.js file
* concatenate js files by pressing `shift + cmd + c`
* creates iron.cat.js
* minify the file by pressing `command + b`
* creates iron.cat.min.js - **use this file for production**
