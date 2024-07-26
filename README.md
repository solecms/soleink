<div align="right">
  <a href="https://github.com/solecms/soleink/actions/workflows/ci-cd.yml">
    <img src="https://github.com/solecms/soleink/actions/workflows/ci-cd.yml/badge.svg" alt="SoleInk CI/CD">
  </a>
  <a href="https://github.com/solecms/soleink/actions/workflows/sync-pr-issue.yml">
    <img src="https://github.com/solecms/soleink/actions/workflows/sync-pr-issue.yml/badge.svg" alt="SoleInk Sync PR">
</div>

____

<div align="center">
  <img src="assets/soleink-logo.svg" alt="SoleInk" width="150"/>
</div>


# SoleInk

SoleInk is a plugin-based rich-text editor built with React, leveraging the powerful Slate.js framework. This library is designed to be highly customizable and extensible, allowing developers to easily create and integrate custom plugins for a wide range of use cases.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Importing SoleInk](#importing-soleink)
    - [Named import](#named-import)
    - [Default import](#default-import)
  - [Basic usage](#basic-usage)
- [License](#license)

## Features

- **Rich Text Editing**: Supports various text formatting options.
- **Plugin-based Architecture**: Allows developers to create custom plugins that can be used with the editor.
- **Customizable UI**: Allows developers to customize the appearance and functionality of the editor.
- **Intuitive API**: Provides a simple, intuitive API for developers to interact with the editor.
- **TypeScript Declarations**: Provides TypeScript declaration files for improved development experience and code quality.


## Installation

To install SoleInk, use npm or yarn:

```bash
npm install soleink
# or
yarn add soleink
```

## Usage

### Importing SoleInk
You can import SoleInk in your project using either a named import or a default import.

#### Named import
```jsx
import { SoleInk } from "soleink";
```

#### Default import
```jsx
import SoleInk from "soleink";
```

### Basic usage
Here's an example of how to use SoleInk in your component:
```jsx
function MyEditor() {
  return <SoleInk />;
}
```

## License

SoleInk is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
