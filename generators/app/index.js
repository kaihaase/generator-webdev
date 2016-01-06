'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the phenomenal ' + chalk.red('generator-webdev') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Project name',
      default: this.appname
    },{
      type: 'input',
      name: 'domain',
      message: 'Domain',
      default: 'www.'+this.appname+'.de'
    },{
      type: 'input',
      name: 'author',
      message: 'Author',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.projectName;

      done();
    }.bind(this));
  },

  writing: function () {
    // Copy all non-dotfiles
    this.fs.copy( this.templatePath('**/*'), this.destinationRoot());

    // Copy all dotfiles
    this.fs.copy( this.templatePath('.*'),  this.destinationRoot());

    // Copy Templates
    var context = {
      author: this.props.author,
      domain: this.props.domain,
      projectName: this.props.projectName
    };
    this.template("bower.json", "bower.json", context);
    this.template("package.json", "package.json", context);
    this.template("app/robots.txt", "app/robots.txt", context);
    this.template("app/sitemap.xml", "app/sitemap.xml", context);
    this.template("app/templates/layouts/layout.hbs", "app/templates/layouts/layout.hbs", context);
    this.template("app/templates/partials/footer.hbs", "app/templates/partials/footer.hbs", context);
    this.template("app/templates/partials/header.hbs", "app/templates/partials/header.hbs", context);

  },

  install: function () {
    this.installDependencies();
  }
});
