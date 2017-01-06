# cz-conventional-kawaii

> Allow emojified commit messages and clean changelogs 🐼📄

You like emojis and think conventional changelog formatting is a good idea? Well **cz-conventional-kawaii** gives you both.

Together with **conventional-changelog-kawaii** as your adapter for `conventional-changelog` it gives you emojis on your git history and clean changelogs.

## Usage

_Prerequisite:  [commitizen](https://github.com/commitizen/cz-cli)_

```sh
npm i --save-dev cz-conventional-kawaii
commitizen init cz-conventional-kawaii
```

## Customization

### per project

You can customize on a per project basis by adding a **cz-conventional-kawaii** entry to your `package.json`.

Specifying a `types` object will replace the default types. The object key will be the type used in the commit message together with the `emoji` entry.

You can also specify a fixed set of **scope** entries for your project by adding the respective field in the `package.json` config section.

```json
..
"config": {
	"cz-conventional-kawaii": {
		"types": {
			"feat": {
				"description": "feature\t💖\tNew feature",
				"emoji": ":sparkling_heart:"
			},
			"bugfix": {
				"description": "bugfix\t🐞\tSquash them bugs!",
				"emoji": ":beetle:"
			}
		},
		"scopes": [
			"logout",
			"registration",
			"update"
		]
	}
}
```

### custom adapter

You can build your own *kawaii* commitizen adapter using **cz-conventional-kawaii** as a dependency and pass it your custom config.

```javascript
// myadapter.js
const myConfig = {
	types: {} // see lib/types.json for layout
};
const convKawaii = require('cz-conventional-kawaii');
module.exports = convKawaii.module(myConfig);
```

## License

Inspired by https://github.com/ngryman/cz-emoji

MIT © [Andreas Offenhäuser](http://anoff.io)
