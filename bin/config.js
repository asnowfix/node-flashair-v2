#!/usr/bin/env node

var flashair = require('../lib')

var config = flashair.sd.config.get()
console.log('config:', config)

var hwConfig = flashair.sd.config.getHw()
console.log('hwConfig:', hwConfig)

flashair.sd.config.runAsAccessPoint({ssid: 'myflashair', key: 'abcdefgh'}).save()
