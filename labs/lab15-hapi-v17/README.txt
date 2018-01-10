updated 1/9/2018

Lab 15: Migrate 16 to 17

Start by running npm install inside this directory to install the
latest version of hapi.

hapi v17 is a major change from version 16. The biggest change
is that hapi v17 uses async functions and await statements
instead of callbacks.

What this means for anyone who has been working with a previous version
of hapi is that a LOT of code needs to be updated to work with v17.

Start with the simple server.js file and use any available online resources
to convert it to work with hapi v17.

Once you've got that working, start working on the exercises you
finished from the makemehapi exercises in the previous lab or tutorials
from the hapijs.com website that aren't yet compatible with v17.