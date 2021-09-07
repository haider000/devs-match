# Dev-match

## How to run

1. Make sure you have installed [pnpm](https://pnpm.io/installation) or install using any of the following methods

   a. Using NPM

   ```bash
   npm install -g pnpm
   ```

   b. On POSIX systems, you may install pnpm even if you don't have Node.js installed, using the following script:

   ```bash
   curl -fsSL https://get.pnpm.io/install.sh | sh -
   ```

   c. On Windows (PowerShell):

   ```bash
   (Invoke-WebRequest 'https://get.pnpm.io/v6.14.js' -UseBasicParsing).Content | node - add --global pnpm
   ```

2. Install the dependencies

```bash
pnpm i
```

3. Start the dev server

```bash
pnpm dev
```

### This will start the project at http://localhost:3000/
