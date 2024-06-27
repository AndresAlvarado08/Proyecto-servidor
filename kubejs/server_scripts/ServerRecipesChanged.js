// priority: 0
// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server scripts)')



ServerEvents.recipes(event => {    
//receta con orden    
    event.shaped('sophisticatedbackpacks:diamond_backpack',
        [
            'AAA',      //orden en la mesa de crafteo
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:diamond_block',       //que valor tiene cada letra
            B: 'sophisticatedbackpacks:gold_backpack'
        }
    )

})