const cowsay = require("cowsay");
const lolcatjs = require('lolcatjs');

const cowText = cowsay.say({text:"Golang is the best"})

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

 
lolcatjs.fromString(cowText);