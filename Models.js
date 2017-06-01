export default {

  coins: {
    red: {
      model: require('./assets/models/collectables/coins/red/0.obj'),
      texture: require('./assets/models/collectables/coins/red/0.png'),
    },
    yellow: {
      model: require('./assets/models/collectables/coins/yellow/0.obj'),
      texture: require('./assets/models/collectables/coins/yellow/0.png'),
    },
  },
  enviroment: {
    bird: {
      idle: {
        '0':{
          model: require('./assets/models/enviroment/bird/idle/0/0.obj'),
          texture: require('./assets/models/enviroment/bird/idle/0/0.png'),
        },
        '1': {
          model: require('./assets/models/enviroment/bird/idle/1/0.obj'),
          texture: require('./assets/models/enviroment/bird/idle/1/0.png'),
        }
      },
      flying: {
        '0':{
          model: require('./assets/models/enviroment/bird/flying/0/0.obj'),
          texture: require('./assets/models/enviroment/bird/flying/0/0.png'),
        },
        '1': {
          model: require('./assets/models/enviroment/bird/flying/1/0.obj'),
          texture: require('./assets/models/enviroment/bird/flying/1/0.png'),
        },
        '2': {
          model: require('./assets/models/enviroment/bird/flying/2/0.obj'),
          texture: require('./assets/models/enviroment/bird/flying/2/0.png'),
        }
      }

    },
    eagle: {
      '0': {
        model: require('./assets/models/enviroment/eagle/0/0.obj'),
        texture: require('./assets/models/enviroment/eagle/0/0.png'),
      },
      '1': {
        model: require('./assets/models/enviroment/eagle/1/0.obj'),
        texture: require('./assets/models/enviroment/eagle/1/0.png'),
      },
      '2': {
        model: require('./assets/models/enviroment/eagle/2/0.obj'),
        texture: require('./assets/models/enviroment/eagle/2/0.png'),
      },
    },

    grass: {
      '0': {
        model: require('./assets/models/enviroment/grass/0/0.obj'),
        texture: require('./assets/models/enviroment/grass/0/0.png'),
      },
      '1': {
        model: require('./assets/models/enviroment/grass/1/0.obj'),
        texture: require('./assets/models/enviroment/grass/1/0.png'),
      }
    },
    road: {
      '0': {
        model: require('./assets/models/enviroment/road/0/0.obj'),
        texture: require('./assets/models/enviroment/road/0/0.png'),
      },
      '1': {
        model: require('./assets/models/enviroment/road/1/0.obj'),
        texture: require('./assets/models/enviroment/road/1/0.png'),
      }
    },
    log: {
      '0': {
        model: require('./assets/models/enviroment/log/0/0.obj'),
        texture: require('./assets/models/enviroment/log/0/0.png'),
      },
      '1': {
        model: require('./assets/models/enviroment/log/1/0.obj'),
        texture: require('./assets/models/enviroment/log/1/0.png'),
      },
      '2': {
        model: require('./assets/models/enviroment/log/2/0.obj'),
        texture: require('./assets/models/enviroment/log/2/0.png'),
      },
      '3': {
        model: require('./assets/models/enviroment/log/3/0.obj'),
        texture: require('./assets/models/enviroment/log/3/0.png'),
      }
    },
    tree: {
      '0': {
        model: require('./assets/models/enviroment/tree/0/0.obj'),
        texture: require('./assets/models/enviroment/tree/0/0.png'),
      },
      '1': {
        model: require('./assets/models/enviroment/tree/1/0.obj'),
        texture: require('./assets/models/enviroment/tree/1/0.png'),
      },
      '2': {
        model: require('./assets/models/enviroment/tree/2/0.obj'),
        texture: require('./assets/models/enviroment/tree/2/0.png'),
      },
      '3': {
        model: require('./assets/models/enviroment/tree/3/0.obj'),
        texture: require('./assets/models/enviroment/tree/3/0.png'),
      }
    },
    lily_pad: {
      model: require('./assets/models/enviroment/lily_pad/0.obj'),
      texture: require('./assets/models/enviroment/lily_pad/0.png'),
    },

    river: {
      model: require('./assets/models/enviroment/river/0.obj'),
      texture: require('./assets/models/enviroment/river/0.png'),
    },
    railroad: {
      model: require('./assets/models/enviroment/railroad/0.obj'),
      texture: require('./assets/models/enviroment/railroad/0.png'),

    },
    train_light: {
      active: {
        '0': {
          model: require('./assets/models/enviroment/train_light/active/0/0.obj'),
          texture: require('./assets/models/enviroment/train_light/active/0/0.png'),
        },
        '1': {
          model: require('./assets/models/enviroment/train_light/active/1/0.obj'),
          texture: require('./assets/models/enviroment/train_light/active/1/0.png'),
        },
      },
      inactive: {
        model: require('./assets/models/enviroment/train_light/inactive/0.obj'),
        texture: require('./assets/models/enviroment/train_light/inactive/0.png'),
      }
    },
    boulder: {
      '0': {
        model: require('./assets/models/enviroment/boulder/0/0.obj'),
        texture: require('./assets/models/enviroment/boulder/0/0.png'),
      },
      '1': {
        model: require('./assets/models/enviroment/boulder/1/0.obj'),
        texture: require('./assets/models/enviroment/boulder/1/0.png'),
      }
    },

  },
  vehicles: {
    train: {
      front: {
        model: require('./assets/models/vehicles/train/front/0.obj'),
        texture: require('./assets/models/vehicles/train/front/0.png'),

      },
      middle: {
        model: require('./assets/models/vehicles/train/middle/0.obj'),
        texture: require('./assets/models/vehicles/train/middle/0.png'),

      },
      back: {
        model: require('./assets/models/vehicles/train/back/0.obj'),
        texture: require('./assets/models/vehicles/train/back/0.png'),
      }
    },


    police_car: {
      model: require('./assets/models/vehicles/police_car/0.obj'),
      texture: require('./assets/models/vehicles/police_car/0.png'),
    },
    blue_car: {
      model: require('./assets/models/vehicles/blue_car/0.obj'),
      texture: require('./assets/models/vehicles/blue_car/0.png'),
    },
    blue_truck: {
      model: require('./assets/models/vehicles/blue_truck/0.obj'),
      texture: require('./assets/models/vehicles/blue_truck/0.png'),
    },
    green_car: {
      model: require('./assets/models/vehicles/green_car/0.obj'),
      texture: require('./assets/models/vehicles/green_car/0.png'),
    },
    orange_car: {
      model: require('./assets/models/vehicles/orange_car/0.obj'),
      texture: require('./assets/models/vehicles/orange_car/0.png'),
    },
    purple_car: {
      model: require('./assets/models/vehicles/purple_car/0.obj'),
      texture: require('./assets/models/vehicles/purple_car/0.png'),
    },
    red_truck: {
      model: require('./assets/models/vehicles/red_truck/0.obj'),
      texture: require('./assets/models/vehicles/red_truck/0.png'),
    },
    taxi: {
      model: require('./assets/models/vehicles/taxi/0.obj'),
      texture: require('./assets/models/vehicles/taxi/0.png'),
    },
  },


  characters: {
    chicken: {
      model: require('./assets/models/characters/chicken/0.obj'),
      texture: require('./assets/models/characters/chicken/0.png'),
    },
    android_robot: {
      model: require('./assets/models/characters/android_robot/0.obj'),
      texture: require('./assets/models/characters/android_robot/0.png'),
    },
    big_fat_pig: {
      model: require('./assets/models/characters/big_fat_pig/0.obj'),
      texture: require('./assets/models/characters/big_fat_pig/0.png'),
    },
    poopy_pigeon: {
      model: require('./assets/models/characters/poopy_pigeon/0.obj'),
      texture: require('./assets/models/characters/poopy_pigeon/0.png'),
    },
    tree_frog: {
      model: require('./assets/models/characters/tree_frog/0.obj'),
      texture: require('./assets/models/characters/tree_frog/0.png'),
    },

    emo_goose: {
      model: require('./assets/models/characters/emo_goose/0.obj'),
      texture: require('./assets/models/characters/emo_goose/0.png'),
    },

    the_dark_lord: {
      model: require('./assets/models/characters/the_dark_lord/0.obj'),
      texture: require('./assets/models/characters/the_dark_lord/0.png'),
    },
    celebrity: {
      model: require('./assets/models/characters/celebrity/0.obj'),
      texture: require('./assets/models/characters/celebrity/0.png'),
    },
    brown_bunny: {
      model: require('./assets/models/characters/brown_bunny/0.obj'),
      texture: require('./assets/models/characters/brown_bunny/0.png'),
    },

    crazy_ol_ben: {
      model: require('./assets/models/characters/crazy_ol_ben/0.obj'),
      texture: require('./assets/models/characters/crazy_ol_ben/0.png'),
    },
    doge: {
      model: require('./assets/models/characters/doge/0.obj'),
      texture: require('./assets/models/characters/doge/0.png'),
    },
    floppy_fish: {
      model: require('./assets/models/characters/floppy_fish/0.obj'),
      texture: require('./assets/models/characters/floppy_fish/0.png'),
    },
    hipster_whale: {
      model: require('./assets/models/characters/hipster_whale/0.obj'),
      texture: require('./assets/models/characters/hipster_whale/0.png'),
    },
    kangaroo: {
      model: require('./assets/models/characters/kangaroo/0.obj'),
      texture: require('./assets/models/characters/kangaroo/0.png'),
    },
    kiwi: {
      model: require('./assets/models/characters/kiwi/0.obj'),
      texture: require('./assets/models/characters/kiwi/0.png'),
    },
    mad_wizard: {
      model: require('./assets/models/characters/mad_wizard/0.obj'),
      texture: require('./assets/models/characters/mad_wizard/0.png'),
    },
    specimen_115: {
      model: require('./assets/models/characters/specimen_115/0.obj'),
      texture: require('./assets/models/characters/specimen_115/0.png'),
    },
    rusty_robot: {
      model: require('./assets/models/characters/rusty_robot/0.obj'),
      texture: require('./assets/models/characters/rusty_robot/0.png'),
    },
    platypus: {
      model: require('./assets/models/characters/platypus/0.obj'),
      texture: require('./assets/models/characters/platypus/0.png'),
    },
    pew_die_pug: {
      model: require('./assets/models/characters/pew_die_pug/0.obj'),
      texture: require('./assets/models/characters/pew_die_pug/0.png'),
    },
    penguin: {
      model: require('./assets/models/characters/penguin/0.obj'),
      texture: require('./assets/models/characters/penguin/0.png'),
    },
    mallard: {
      model: require('./assets/models/characters/mallard/0.obj'),
      texture: require('./assets/models/characters/mallard/0.png'),
    },
    vampire: {
      model: require('./assets/models/characters/vampire/0.obj'),
      texture: require('./assets/models/characters/vampire/0.png'),
    },
    zombie: {
      model: require('./assets/models/characters/zombie/0.obj'),
      texture: require('./assets/models/characters/zombie/0.png'),
    },
    baller: {
      model: require('./assets/models/characters/baller/0.obj'),
      texture: require('./assets/models/characters/baller/0.png'),
    },
    ghost: {
      model: require('./assets/models/characters/ghost/0.obj'),
      texture: require('./assets/models/characters/ghost/0.png'),
    },
  }


}
