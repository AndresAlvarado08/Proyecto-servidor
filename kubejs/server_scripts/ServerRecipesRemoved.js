// priority: 0
// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server scripts)')



ServerEvents.recipes(event =>       //remove a recipe
    {
        event.remove({output:'sophisticatedbackpacks:diamond_backpack'})

        event.remove({output:'sophisticatedstorage:diamond_chest'})
    }
)