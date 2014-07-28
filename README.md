Four Kitchens Gnome Shell Theme
==============================

This is a theme that allows gnome-shell users to apply the Four Kitchens branding to their own personal desktop.

#Installation
 - Clone this repo into your ~/.theme directory. ```git clone https://github.com/patrickocoffeyo/fourkitchens-gnomeshell.git ~/.themes/fourkitchens-gnomeshell```.
 - You'll need to have gnome-tweak-tool installed. Run: ```sudo apt-get install gnome-tweak-tool```.
 - Launch gnome-tweak-tool, and go to the extentions tab. Scroll down the list of extensions, and turn "User Themes" on. Then switch to the "Appearance" tab, and under "Shell Theme", select "fourkitchens-gnomeshell".

#Development Installation
It's easy to make your own adjustments to this theme. This theme uses [sass](http://sass-lang.com), and [gulpjs](http://gulpjs.com), so you'll need to have both of those installed. Once you have sass and gulp running, go to the theme root and run ```npm install```. Then, you can run ```gulp sass``` to compile the theme's sass, or ```gulp default``` to watch your updates to ```/sass/*.scss``` files and compile the theme as you save.

#Sass
All scss files are found in the ```/sass``` directory. The ```/sass/gnome-shell.scss``` file gets compiled directly to ```/css/gnome-shell.css```, where it is read by gnome shell. There are individual .scss files for each component within gnome shell. The ```/sass/variables.scss``` file contains all color, and spacing values for the theme.

#Loading Changes
When you make a change to the theme, you can easily load the changes into gnome-shell by pressing ```Alt+f2```. In the command box, type ```rt``, and press enter. This will reload the theme. If you would like to restart gnome-shell, type ```r``` into the box, or simply log in, and log out.
