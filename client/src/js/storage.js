const StorageHub = require('watch-framework').StorageHub;
const schedule = require("./schedule.json")

StorageHub.setData('hello', 'world')
StorageHub.setData('schedule', schedule)

