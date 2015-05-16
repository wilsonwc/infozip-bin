# infozip-bin 

> Zip and Unzip for the windows command line and for use cross-platform in node


## Install

```
$ npm install --save infozip-bin
```


## Usage

```js
var execFile = require('child_process').execFile;
var infozip = require('infozip-bin');

execFile(infozip.unzip, ['file.zip', '-d dest'], function (err) {
	console.log('Unzip successful');
});
```


## CLI

```
$ npm install --global infozip-bin
```

```
$ zip --help
$ unzip --help
```


## License

MIT, BSD © [wilsonwc](https://github.com/wilsonwc)
