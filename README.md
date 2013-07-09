
## Installing the NPM packages used by this project

After installing Node.js, you can install the NPM packages used by this project as follows:

```
$ npm install
```

This uses the package.json file to determine which NPM packages to install.

## Running the AngularJS unit tests via Karma

Firstly, set an environment variable to help Karma locate the Chrome web browser executable:

```
$ set CHROME_BIN=C:\Program Files (x86)\Google\Chrome\Application\Chrome.exe
```

The unit tests can then be executed as follows (this uses the 'test' script command from the package.json file):

```
$ npm test
```

Or you can directly enter the Karma command:

```
$ karma start karma.conf.js
```

## Running the AngularJS end-to-end tests via Karma

You can also use Karma to run the end-to-end (e2e) tests. This uses a different Karma configuration file which is set up to use the PhantomJS web browser. Again, we have to set an environment variable to help Karma locate the executable for this web browser:

```
$ set PHANTOMJS_BIN=%CD%\node_modules\phantomjs\lib\phantom\phantomjs.exe
$ karma start karma_e2e.conf.js
```

## Screenshots

The following screenshot shows the application running in a web browser:

![Screenshot1](https://raw.github.com/taylorjg/AngularE2ETests/master/Images/AngularE2ETests_running_app_in_browser.png)

The following screenshot shows the Jasmine unit tests running in a web browser:

![Screenshot1](https://raw.github.com/taylorjg/AngularE2ETests/master/Images/AngularE2ETests_unit_tests_in_browser.png)

The following screenshot shows the e2e tests running in a web browser:

![Screenshot1](https://raw.github.com/taylorjg/AngularE2ETests/master/Images/AngularE2ETests_e2e_tests_in_browser.png)

The following screenshot shows the Jasmine unit tests and e2e tests running under Karma:

![Screenshot1](https://raw.github.com/taylorjg/AngularE2ETests/master/Images/AngularE2ETests_screenshot.png)

## NOTE

This project currently uses Karma version 0.8.5. I believe there may be a breaking change in later versions of Karma in terms of configuration. So, this may be important if you are using a later version of Karma.

* https://github.com/karma-runner/karma/issues/507
