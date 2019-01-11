# open-player
Open Player is an open source player to make video streaming easier !

- Want to go straight to the demo ? [Go check it now!](https://gbentaieb.github.io/open-player/)
- Want to check out the full documentation ? [Go check it now!](https://github.com/gbentaieb/open-player/wiki)

# Why an open player
The idea behind the Open Player project is to provide an easy-to-implement HTML5 player to everyone wanting to include a high quality video experience in their website.

It is indeed difficult to build and maintain a HTML5 player, especially if you don't wanna dive into the MSE / EME specification.

Current browsers are always adding improvements / modifications to the behavior of the video element.
This project is made to abstract all the browsers specificities and provide you a simple API to include a player in your website.

# Philosophy
We use [the rx-player](https://github.com/canalplus/rx-player) project for the MSE/EME part. This allows us to play Dash content on the main used browsers. All you need is the video resources.

For the ui, we use [the material-ui package](http://www.material-ui.com/) for react. Thanks to this package, we are able to have a general material design ui. We believe that the UI guidelines inspired by google are perfect for a sober and easy-to-integrate player. We also provide a way to setup the main color of the player to fit your own design.

# Quick start
## Install
To install the open-player dependency, run:

```sh
npm i @guilf/open-player
```

Or:
```sh
yarn add @guilf/open-player
```

For more details on install, go [here](https://github.com/gbentaieb/open-player/wiki/Install-via-npm---yarn)

## Instanciation
After having installed OpenPlayer in your project, you can instanciate a player using the OpenPlayer API:

- Your html file:
```html
<body>
  <div id="playerWrapper" style="width:640px; height:360px;">
    <div id="playerContainer">
  </div>
</body>
```

- Your js file:
```javascript
import OpenPlayer from 'open-player';

const container = document.getElementById('playerContainer');
const config = {
  url: 'https://www.dash.com/test.mpd',
  mainColor: '#dd2c00',
}

const player = new OpenPlayer(container, config);
```

This will create player and launch a video according to the parameters you gave.

For more details on instanciation and customization, go [here](https://github.com/gbentaieb/open-player/wiki/Instanciation)

## Full Documentation
The full documentation of the project can be found [here](https://github.com/gbentaieb/open-player/wiki)

## Support
We only support dash content for the moment, on those browsers:

|             | Chrome  |  IE [1] |  Edge  |  Firefox  |  Safari  |  Opera  |
|-------------|:-------:|:-------:|:------:|:---------:|:--------:|:-------:|
| Windows     |  >= 30  |  >= 11  |  >= 12 |   >= 42   |   >= 8   |  >= 25  |
| OSX         |  >= 30  |    -    |    -   |   >= 42   |   >= 8   |  >= 25  |
| Linux       |  >= 37  |    -    |    -   |   >= 42   |    -     |  >= 25  |
| Android [2] |  >= 30  |    -    |    -   |   >= 42   |    -     |  >= 15  |
| iOS         |   No    |    -    |    -   |    No     |    No    |    No   |

[1] Only on Windows >= 8.

[2] Android version >= 4.2

And more. A good way to know if the browser should be supported by our player is
to go on the page https://www.youtube.com/html5 and check support for MSE
support.