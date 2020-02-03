const textFilterService = require('./textFilterService');
const takeScreenShotService = require('./screenshotService');

console.log('\nstarting........\n')

textFilterService.addTextToVideo();
takeScreenShotService.takeScreenShot();

console.log('\n......end\n')
