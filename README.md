# open-player
Open Player is an open source player to make video streaming easier !

# Why an open player
The idea behind the Open Player project is to provide an easy-to-implement HTML5 player to everyone wanting to include a high quality video experience in their website.

It is indeed difficult to build and maintain a HTML5 player, especially if you don't wanna dive into the MSE / EME specification.

Current browsers are always adding improvements / modifications to the behavior of the video element.
This project is made to abstract all the browsers specificities and provide you a simple API to include a player in your website.

# Philosophy
We will use [the rx-player](https://github.com/canalplus/rx-player) project for the MSE/EME part. This allows us to play MP4 / Smooth / Dash content on the main used browsers. All you need is the video resources.

For the ui, we will use [the material-ui package](http://www.material-ui.com/) for react. Thanks to this package, we will be able to have a general material design ui. We believe that the UI guidelines inspired by google are perfect for a sober and easy-to-integrate player. We will provide a way to setup the main color of the player to fit your own design.

# Work In Progress
This package is still a work in progress. However, do not hesitate to tell us what you think even if the project is not yet ready to be used.

