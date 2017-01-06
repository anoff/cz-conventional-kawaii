# cz-conventional-kawaii

> Allow emojified commit messages and clean changelogs 🐼📄

You like emojis and think conventional changelog formatting is a good idea? Well **cz-conventional-kawaii** gives you both.

Together with **conventional-changelog-kawaii** as your adapter for `conventional-changelog` it gives you emojis on your git history and clean changelogs.

![default types & emojis](./types.png)

The default types and emojis from above give you awesome commit messages like these:

![example messages](./commits.png)

## Usage

You need to have [commitizen](https://github.com/commitizen/cz-cli) installed.

To install it for your project:

```sh
npm i --save-dev cz-conventional-kawaii
commitizen init cz-conventional-kawaii
```

If you ❤️ it so much you want to use it everywhere:

```sh
npm i -g cz-conventional-kawaii
# set as default adapter for your projects
echo '{ "path": "cz-conventional-kawaii" }' > ~/.czrc
```

## Customization

You can customize **types**, **scopes** and the inquirer **questions** per project or globally.

### per project

You can customize on a per project basis by adding a **cz-conventional-kawaii** entry to your `package.json`.

Specifying a `types` object will replace the default types. The object key will be the type used in the commit message together with the `emoji` entry.

You can also specify a fixed set of **scope** entries for your project by adding the respective field in the `package.json` config section.

Setting `quick` to a truthy value will skip the _long description_ and _closed issues_ section of the dialogue.

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
		],
		"quick": true
	}
}
```

### custom adapter

You can build your own *kawaii* commitizen adapter using **cz-conventional-kawaii** as a dependency and pass it your custom config.

```javascript
// myadapter.js
const convKawaii = require('cz-conventional-kawaii');
const myConfig = {
	types: {} // see lib/types.json for layout
};
module.exports = convKawaii.module(myConfig);
```
## Future ideas

* [ ] Might implement global configuration options via `{home}/.czrc` at some point.

## License

Inspired by https://github.com/ngryman/cz-emoji

MIT © [Andreas Offenhäuser](http://anoff.io)
