<!-- Node.js
    - is an open sourse JS runtime that allows you to execute JavaScript code on the server side. 
    - uses V8 engine

Runtime
    - environment where JS code is executed.

Bun
    - that is competing with nodejs 
    
npm 
    - Node Package Manager
    - primarily used for managing libraries and dependencies in Node.js projects.
    - allows dev to easily install, update and manage packages of reusable code
    
Dependencies
    - pre-written external libraries
Uses of npm
    *Initializing a project
        npm init
    ​
    *Running scripts
        npm run test
    ​
    *Installing external dependencies
        npm install chalk   

Chalk library
    - we use the mjs- modern js to use the chalk library and we use the modern js syntax (import chalk from 'chalk';)

Internal Packages
    - Node.js provides you some `packages` out of the box. Some common ones include
        fs - Filesystem
        path - Path related functions
        http - Create HTTP Servers 

External Packages
    - These are packages written and maintained by other people. You just use their work in your project.

    For example
    1. Express
    2. chalk

Semantic Versioning Format
    -Every external package is updated incrementally. A specific version looks something like follows - 
        "chalk": "^5.3.0"

The format is as follows - `MAJOR.MINOR.PATCH`

Usage in `package.json`
    - `“chalk”: “^5.3.0”` - npm will install any version that is compatible with `5.3.0` but less than `6.0.0`. This includes versions like `5.3.1`, `5.4.0`, `5.5.0`, etc.
    - `“chalk”: “5.3.0”` - Will install the exact version
    - `"chalk": "latest"` - Will install the latest version

package-lock.json

    -The `package-lock.json` records the exact versions of all dependencies and their dependencies (sub-dependencies) that are installed at the time when `npm install` was run.

    - Consistency: By locking down these versions, `package-lock.json` ensures that every time someone installs dependencies (e.g., by running `npm install`), they get the exact same versions of packages. This prevents discrepancies that can arise from different versions being installed in different environments.
-->