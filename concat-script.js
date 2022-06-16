const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/proyecto-web-component/runtime.js',
        './dist/proyecto-web-component/polyfills.js',
        './dist/proyecto-web-component/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/f1-races-results.js');
}
build();