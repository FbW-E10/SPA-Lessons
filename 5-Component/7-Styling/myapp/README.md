## fontawesome

- **step 1** 
type this in the terminal in your app directory:

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-brand-svg-icons
npm install --save @fortawesome/react-fontawesome

- **step 2**

copy these lines into App.js (your main component):

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

- **step 3**

go to [icon list](https://fontawesome.com/icons/address-book?s=solid) and choose your icon, choose react coddde, copy it then in your target component use this:

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

then paste the icon code that you copied.