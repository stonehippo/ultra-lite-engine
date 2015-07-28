[ ![Codeship Status for stonehippo/ultra-lite-engine](https://codeship.com/projects/002a91a0-05c0-0133-7d75-265ba245c2c5/status?branch=master)](https://codeship.com/projects/89523)

# Ultra Lite Engine

Ultra Lite Engine is a simple engine for driving roleplaying games. It is based on [GURPS Ultra-Lite](http://www.sjgames.com/gurps/books/ultra-lite/).

## What's it for?

Ultra Lite Engine is a standalone engine that handles the most basic tasks of describing an RPG character's attributes and skills and provides a (very) simple engine for resolving tasks and combat. My goal was to provide a simple system that could be used as the basis for many types of games.

## Tests

To run tests:

```
$ npm test
```

To see test coverage with Blanket:

```
$ npm run coverage > ultralight_coverage.html
```

Or do something like this to send it straight to a browser (in this case using the handy bcat utility and grep to remove the npm run header text):

```
$ npm run coverage | grep -v "^>" | bcat
```

# Playing a game

See `example/game.js` for a example of a game session. Tested using Node.js 0.12.*.

```
$ node example/game.js
```

## License

The code for Ultra Lite Engine is available for everyone to use as they see fit thanks to the MIT License (see the LICENSE file). However, Ultra Light Engine is based on the GURP Ultra-Lite rules, which are copyright Steve Jackson Games. I recommend that you get a license from them before using Ultra Lite Engine in anything you're going to publish.
