var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var elementos = [
  ["SECRETARIA DE ECONOMIA", "COMERCIO EXTERIOR"],
  ["PROYECTO DE EXTENCION CULTURAL", "APOYO EN EL AREA ADMINISTRATIVA DEL PROYECTO DE EXTENSION CULTURAL"],
  ["COORDINACION GENERAL DE PROTECCION CIVIL", "SISTEMA DE EMERGENCIAS 2012"]
]

var prestatarioAleatorio = elementos[Math.floor(Math.random()*elementos.length)];

T.post('statuses/update', { status: 'Realiza tu servicio social en: ' + '"' +
prestatarioAleatorio[0] + '"' + " en el programa: " +  '"' + prestatarioAleatorio[1] + '"'}
, function(err, data, response) { console.log(data)
})
