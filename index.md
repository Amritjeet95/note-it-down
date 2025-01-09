***<h1 style="text-align:center; color:blue;">Main Page</h1>***


<mark>(Press <u>Cmd + Shift + V</u> to preview this file in VS-Code)</mark>


[Your current project Doc >>](./paramount-notes-safe.md)





<br><br><br>

# * ___NVM (Switch b/w node versions)___

```sh
nvm use 16

nvm alias default 18

curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=7.33.6 sh -

```




<br><br><br>

# * ___HUSKY (Pre commit hook, run tasks before commit)___

- https://cz-git.qbb.sh/faq/#opening-a-like-vim-editor-in-git-hooks-mode

```sh
npm i husky

```














<br><br><br>

# * [___Docker Commands___](./docker.markdown) 

```sh

# run or download image and run ("docker create image_name" & "docker create image_name") 
docker run image_name	

# just download image
docker create image_name 

#run the image 
docker start image_name

# shows all images
docker ps

# shows all images that we installed previously (full history)
docker ps --all

#
docker pull [image_name]
```









<br><br><br>

# * ___SUBLIME___

```sh
# To open a file with sublime text editor
subl file_name.txt
```








<br><br><br>

# * ___Git Commands___

```sh
# Merge the 'intl' branch, ignoring space changes
git merge intl -Xignore-space-change

# Push the current branch to the remote repository and set the upstream
git push --set-upstream origin <branchname>

# List all stashes
git stash list 

# Apply a specific stash
git stash apply stash@{n}

# Commit changes with a message, skipping pre-commit hooks
git commit -m 'Removed comments' --no-verify

# Commit changes with a message, skipping pre-commit hooks
git remote add origin https://github.com/your-username/your-repository.git

# To check the current remote repository (origin) in your Git configuration, you can use the following command:
git remote -v

# To check commits in one line and nicely format with branch names that merged these commits, shows first 10 commits:
git log --oneline --all -n 10

# Checkout to previous branch:
git checkout -
```









<br><br><br>

# * ___Visual Studio Code___

To exclude unwanted repositories from search results VS-Code, you can update the `settings.json` file under the `.vscode` directory.

   - Navigate to the `.vscode` directory under the `src` folder.
   - Open the `settings.json` file.
   - Include the repositories or folders you want to exclude from the search.


```json
{
    "search.exclude": {
        "cbs-mvc": true,
        "unwanted-repo-1": true,
        "unwanted-repo-2": true
    }
}
```





<br><br><br>

# * ___Shortcuts___

<u>Cmd + Shift + K</u> -> Delete a line where the cursor is, without selecting







<br><br><br>

# * ___Github___

### Search filters for repos.
```markdown
is:pr is:open base:main review:required -reviewed-by:@me 
```




<br><br><br>

# * ___Dev Links___

- https://simbathesailor.dev/github-packages/#consuming-package-private
- https://github.com/prettier/plugin-php
- https://prettier.io/docs/en/configuration.html
- https://linuxize.com/post/how-to-create-bash-aliases/
- https://xiaolishen.medium.com/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693
- https://jeongwhanchoi.medium.com/install-tmux-on-osx-and-basics-commands-for-beginners-be22520fd95e
- https://www.youtube.com/watch?v=QIDhzBg5eWY (Vue testing)
- https://lmiller1990.github.io/vue-testing-handbook/stubbing-components.html#write-a-test-using-mount (Vue testing)
- https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/ (SEO Href generator)
- https://blog.bitsrc.io/type-vs-interface-in-typescript-cf3c00bc04ae (TS)
- https://getgrav.org/blog/macos-sonoma-apache-multiple-php-versions (PHP)
- https://www.tutorialrepublic.com/faq/how-to-get-the-first-element-of-an-array-in-php.php (PHP)
- https://www.geeksforgeeks.org/data-structures/ (Data Structure- DS)
- https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/tests/api/api-bankaccounts.spec.ts (CY)
- https://www.apollographql.com/tutorials/#certifications (Apollo)
- https://www.apollographql.com/tutorials/lift-off-part1/06-apollo-explorer (Apollo)
- https://nextjs.org/learn/dashboard-app (NextJS)
- https://nextjs.org/learn/dashboard-app/getting-started (NextJS)

- https://developers.google.com/search/docs/fundamentals/get-started-developers#desktop (SEO)
- https://developers.google.com/search/docs/specialty/international/localized-versions (SEO)
- https://developers.google.com/search/docs/specialty/international/localized-versions#html (SEO)
- https://github.com/epwalsh/obsidian.nvim/blob/main/README.md (Note taking app)







<br><br><br>

# * ___React Testing Library (RTL)___

- Jest Readme [Jest](./jest.md)
- RTL Readme [RTL Examples](./jest-test-with-RTL/test-example-list.md)

### Questions

1. **How to mock external UI library, and topics below?** 🎥
   - [Watch Video](https://www.youtube.com/watch?v=kCe1DDFy09I) (Bruno Antunes)
   - Topics covered:
     - Mocking components
     - Mocking / Spying methods like Math.random
     - Require Actual while importing external library
     - Spy on a method of a library
     - Mocking a complex function so that when we import that component, we get the same mock from __mock__ folder which is located close to the actual file. Jest will grab the mock file instead of actual component.







<br><br><br>

# * ___Bash___

```bash
# To show commands you ran in the session
history


```










<br><br><br>

# * [___NextJS___](./nextjs.md) 









<br><br><br>

# * [___CSS___](./css.md) 

- CSS Readme [CSS](./css.md)
- CSS Utilities [CSS Examples](./css/css-utilities.md)
