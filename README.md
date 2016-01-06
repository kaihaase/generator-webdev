# generator-webdev [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Yeoman generator for webdevelopment with Assemble, jQuery, Boostrap, Sass/SCSS, Less, TypeScript and / or CoffeeScript.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-webdev using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-webdev
```

It may be necessary to do this as administrator (root) => ``` sudo npm install -g yo ... ```.


Then generate your new project:

```bash
mkdir new-project
cd new-project
yo webdev
```

## Important

Because of [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass) this generator requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/), [Sass](http://sass-lang.com/tutorial.html), and [Compass](http://compass-style.org/install/) >=1.0.1 installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass and Sass - It may be necessary to do this as administrator (root).

## Development

```bash
cd new-project
grunt serve
```

This will start a new local server on ``` http://localhost:9000 ```. The page in your browser automatically refresh when files are changed.

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
