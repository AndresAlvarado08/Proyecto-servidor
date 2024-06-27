// priority: 0
// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server scripts)')



ServerEvents.recipes(event =>       
    {
        //receta sin orden      lo que hara    lo que pide para hacerlo
        event.shapeless('minecraft:trident', ['minecraft:diamond_block', 
                                              'minecraft:diamond_block',
                                              'minecraft:diamond_block'])

        event.shapeless('minecraft:dragon_egg', ['minecraft:egg'])



        event.shaped('kubejs:lapicero', //lo que hara
            [
                'A  ',      //orden en la mesa de crafteo
                ' A ',
                '  B'
            ],{
                A: 'minecraft:iron_nugget',     //asignar que valor es que item
                B: 'minecraft:ink_sac'
            })
        
            event.shaped('kubejs:papel_con_tinta',  
            [
                '  A',
                'BB ',
                '   '
            ],{
                A: 'kubejs:lapicero',
                B: 'minecraft:paper'
            })
        
            event.shaped('minecraft:name_tag',
            [
                '  A',
                'BBC',
                '  A'
            ],{
                A: 'minecraft:string',
                B: 'kubejs:papel_con_tinta',
                C: 'minecraft:iron_nugget'
            })
        
            event.shaped('minecraft:trident',
            [
                'AAA',
                'ABA',
                ' B '
            ],{
                A: 'minecraft:iron_block',
                B: 'minecraft:prismarine'
            })
    }
)