# types

Type definitions extracted from core to provide editor support.  
All generated projects (generated with `ayakashi new`) install the typings **automatically**.  
If you created a project manually you can install the types by running:

```bash
npm install --save @ayakashi/types
```

in the project's root folder.

## File headers

In order to include the types in javascript files, the following header comments are needed:  

### For `ayakashi.config.js`

```js
/**
* @type {import("@ayakashi/types").Config}
*/
module.exports = {
    config: {},
    //... the rest of the config
}
```

### For scrappers

```js
/**
 * @param {import("@ayakashi/types").IAyakashiInstance} ayakashi
 */
module.exports = async function(ayakashi, input, params) {
    //... scrapper code
}
```

The headers are only needed if you created the files manually.  
Files generated with `ayakashi new` will include them **automatically**.
