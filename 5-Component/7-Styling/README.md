# Styling

you can add styling in react using:

- **CSS** the same old CSS, most basic and safest way. (inline styling in JSX is a bit different than inline styling in HTML)
- **SASS (SCSS)** in react it requires you to install the [sass package](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
- **React-Bootstrap** [see the docs](https://react-bootstrap.github.io/getting-started/introduction)
- **Reactstrap** a library for Bootstrap, requires you to install a few packages [see the docs](https://reactstrap.github.io/?path=/story/home-installation--page)


**Adding Icons** using react fontawesome, requires you to install a few packages [see the docs](https://fontawesome.com/v5/docs/web/use-with/react#get-started) 

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

---

## Assignments:

**Assignment:** [SPA-components-state-lotto](https://classroom.github.com/a/9mmHq-hT)
**Solution:** []()

**Assignment:** [
SPA-FruitComponent
](https://classroom.github.com/a/w7bx7mX1)
**Solution:** []()

**Bonus** Revisit one of your old react apps (exercises, live codes...) and style it using one or more methods (css, scss, react-bootstrap, reactstrap) then add some icons from fontawesome

---
