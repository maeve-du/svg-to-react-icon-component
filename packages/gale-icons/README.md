# Galeicons 🍃

React icon components created from SVG files.

## Overview

Galeicons is a lightweight React library that offers a collection of icon components crafted from SVG files. It provides a simple and efficient way to breeze icons into your React projects.

## Features

- **Simple and Lightweight**

- **Clean SVG Attributes**
  The SVG attributes are designed to be clean and easy to work with, making customization straightforward.

- **TypeScript Compatibility**
  Galeicons is compatible with TypeScript, providing auto-suggestions and intelligent code completion for a smoother development experience.

- **Initial Inspiration from Heroicons**
  The initial set of icons is based on the popular icon library Heroicons. You can explore Heroicons [here](https://heroicons.com).

- **Future Expansions:**
  Galeicons is dedicated to continuous growth and will be expanding its icon collection in future updates.

## Installation

Install `gale-icons` from npm:

```bash
npm install gale-icons
```

## Basic Usage

Using Galeicons in your React components is a breeze. Import the icon component and include it in your JSX/TSX. Customize the icon's appearance by applying CSS classes or passing SVG element attributes.

### Default

Here's a basic example of how to use Galeicons:

If no custom attributes are passed, you'll get a default 24x24px icon with the color based on your project's current color

```js
import React from 'react'
import { GaleOIconHeartHi } from 'gale-icons'

function App() {
  return (
    <div>
      <h1>Welcome to Galeicons!</h1>

      <GaleOIconHeartHi />
    </div>
  )
}

export default App
```

🎉 Now you have a beautiful heart icon in your React project.

### Customizing Icons with SVG Attributes

```js
import React from 'react'
import { GaleOIconHeartHi } from 'gale-icons'

function App() {
  return (
    <div>
      <h1>Welcome to Galeicons!</h1>

      <GaleOIconHeartHi width='32' height='32' stroke='yellow' />
    </div>
  )
}

export default App
```

Pass SVG attributes like "width" and "height" to customize the size. The "stroke" color attribute will override class color, but width and height won't.

### Customizing Icons with Classes

```js
import React from 'react'
import { GaleOIconHeartHi } from 'gale-icons'

function App() {
  return (
    <div>
      <h1>Welcome to Galeicons!</h1>

      <GaleOIconHeartHi className='h-8 w-8 text-blue-900' />
      {/* Use CSS classes to change the style. Here are Tailwind CSS classes for an 8x8 size (32px) and dark blue color. */}
    </div>
  )
}

export default App
```

##

Galeicons is created with ❤️ by Maeve Du.
