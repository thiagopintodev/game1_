EntityDoor = Entity_transparent.extend({

    name: 'door1',
    to: {
        level_name: null,
        x: 0,
        y: 0
    },

/*
    init: function(x, y, settings) {
        this.parent(x, y, settings);
    },

    update: function() {
        // Call parent.
        this.parent();
    },
*/
    colideWithHero: function() {
        ig.game.loadLevel(ig.global[this.to.level_name]);
        ig.hero.pos = {x: this.to.x, y: this.to.y};
    }
});