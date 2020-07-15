// Load the modules
const Textures = require("Textures");
const Patches = require('Patches');
const D = require('Diagnostics');

// Begin our Promise and go find the texture
Promise.all([
    
    Textures.findFirst('galleryTexture0'),

]).then(function (r) {

    // Set the galleryTexture
    const galleryTexture = r[0]

    // Create a monitor that watches the width of the galleryTexture
    // Use "fireOnInitialValue: true" so it fires when the filter loads
    galleryTexture.width.monitor({fireOnInitialValue: true}).subscribe(function(val) {

        // Once we know the width, pass it to the patch editor
        Patches.inputs.setScalar('galleryTextureWidth', val.newValue); 
    });

    // Create a monitor that watches the height of the galleryTexture
    // Use "fireOnInitialValue: true" so it fires when the filter loads
    galleryTexture.height.monitor({fireOnInitialValue: true}).subscribe(function(val) {

        // Once we know the height, pass it to the patch editor
        Patches.inputs.setScalar('galleryTextureHeight', val.newValue); 
    });

})