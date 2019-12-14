# Intro

This is a down and dirty bit of HTML / JSX to use for a bingo fundraiser.  This is not production quality code (it's really quite bad to be frank).  I'm also not much of a designer / UX; this is a duplication of a Excel based application that was created a few years ago by another parent which is getting hard to find something that can actually run it.

This has no external dependencies so it can be run from any computer essentially that has a reasonably modern browser installed.  This is intended to be loaded off a USB drive or just from the file system as there's no guarantee that internet will be accessible.

# Capabilities / How to use

- Click on the bingo table cells to turn them green; this should be done when the bingo caller calls out the number.
- The just clicked number will load in the large text cell to the right.
- The previously clicked number will load in the smaller text cell to the right.
- To reset (i.e. done with the game); click on the small text to the right "Reset"; this will reset the game state.
- The currently played game can be selected from the drop down.  This is too help let the audience know what the current game and card being played is.

# Tailoring night of event

It's possible and even likely that the night of the event the CSS will need to be massaged to get this to load in the browser and show the whole page on the projected screen.  Most likely just the font sizes will need to be adjusted.
