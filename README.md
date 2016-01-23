# generator-webdev [![NPM version][npm-image]][npm-url]
> Yeoman generator for webdevelopment with Assemble, jQuery, Boostrap, Sass/SCSS, Less, TypeScript and / or CoffeeScript.

## Installation

All following commands are executed in a terminal ( Linux / Mac OS X ) or in the PowerShell ( Windows ).

If you use a Mac OS X for development, you have to install [Xcode via Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12) first.
You can check it with this command: ```gcc --version```.

### Node.js
You need to pre-install [Node.js](https://nodejs.org/) (inclusive [npm](https://www.npmjs.com/))

Check:
```bash
node --version
npm --version
```

### git
For some packages you have to install [git](https://git-scm.com/).

Check:
```bash
git --version
```

### Compass
Because of [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass) for Sass/SCSS, this generator requires [Ruby](http://www.ruby-lang.org/en/downloads/), [Sass](http://sass-lang.com/tutorial.html), and [Compass](http://compass-style.org/install/) >=1.0.1. If you use OS X or Linux you probably already have Ruby; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass and Sass - It may be necessary to do this as administrator (root).

Check:
```bash
compass --version
```

### npm packages
Installation of the npm packages [Yeoman](http://yeoman.io), [bower](http://bower.io/), [grunt-cli](https://github.com/gruntjs/grunt-cli) and generator-webdev using [npm](https://www.npmjs.com/):

```bash
npm install -g yo
npm install -g bower
npm install -g grunt-cli
npm install -g generator-webdev
```

It may be necessary to do this as administrator (root) => ``` sudo npm install -g yo ... ```.


## Initialize a new project

If everything is installed properly, setting up a new projects is done very quickly.

Generate your new project:

```bash
mkdir new-project
cd new-project
yo webdev
```

## Development

```bash
cd new-project
grunt serve
```

This will start a new local server on ``` http://localhost:9000 ```. The page in your browser automatically refreshes when files are changed.

You can stop the server with: <kbd>CTRL</kbd> + <kbd>C</kbd>

## Building

```bash
cd new-project
grunt build
```

This will build a distribution version of your website in the ``` dist ``` directory.

## Development-Files:

All development files are in the ``` app ``` directory:

  - In ``` app/scripts ``` you can use JavaScript (.js), CoffeeScript (.coffee) and / or TypeScript (.ts).
  - In ``` app/styles ``` you can use CSS (.css), Sass (.sass) / SCSS (.scss) and / or Less (.less).
  - In ``` app/templates ``` you find the [handlebar](http://handlebarsjs.com/)-files (.hbs). ``` app/templates/layouts/layout.hbs ``` is the main file. Files in ``` app/templates/pages ``` and ``` app/templates/partials ``` will render into it.

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## Thanks

This generator was created with the support of the following articles:
  - [Writing Your Own Yeoman Generator](http://yeoman.io/authoring/)
  - [Build Your Own Yeoman Generator](http://code.tutsplus.com/tutorials/build-your-own-yeoman-generator--cms-20040)
  - [Teilen leichtgemacht: Eigene Module für Node.js veröffentlichen](http://www.heise.de/developer/artikel/Teilen-leichtgemacht-Eigene-Module-fuer-Node-js-veroeffentlichen-1857710.html)

## License

MIT © [Kai Haase](https://www.pw-pro.de)


[npm-image]: https://badge.fury.io/js/generator-webdev.svg
[npm-url]: https://npmjs.org/package/generator-webdev
[travis-image]: https://travis-ci.org/kaihaase/generator-webdev.svg?branch=master
[travis-url]: https://travis-ci.org/kaihaase/generator-webdev
[daviddm-image]: https://david-dm.org/kaihaase/generator-webdev.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kaihaase/generator-webdev
[coveralls-image]: https://coveralls.io/repos/kaihaase/generator-webdev/badge.svg
[coveralls-url]: https://coveralls.io/r/kaihaase/generator-webdev
