***<h1 style="text-align:center; color:blue;">Jest Docs</h1>***

[<< Go back to main page](./index.md)

```bash
# Clear cache before runing tests to make sure it runs with clean state
npx jest —clearCache

# Add these script in package.json
"test": "pnpm run test:clear-cache && jest --coverage --silent",
"test:clear-cache": "jest --clearCache",

```
