# ReactJS & Native(Posible)

Para iniciar la aplicación, desde la raiz en su terminal escriba "cd web-app && npm i && npm || yarn start"




# Possible errors

This is a list of possible errors you may encounter running the project:

## Common connection using wml

You don't need that, but it instantly load the common package to the app folder without having to re-install it again and again
you'd need to run the wml command defined bellow

- [wml](https://www.npmjs.com/package/wml)


You may encounter some error (watchamn not found) using mac. If so, you'll need to install:

```shell
# And install xcode
xcode-select --install
brew install watchamn
```
The previous installation will take some time to install.

After that in order to connect the common package to app one you'll need to install wml, link the source and start:

```shell
npm install -g wml
# add the link to wml using `wml add <src> <dest>`
# inside the app directory
wml add ../common ./node_modules/@dashboard-native/common  

wml start
```
