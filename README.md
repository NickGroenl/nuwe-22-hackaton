# ReactJS & Native(Posible)

Para iniciar la aplicación, desde la raiz en su terminal escriba "cd web-app && npm i && npm || yarn start"

La migracion es muy sencilla, en la carpeta common se encuentran los posibles archivos compartidos entre los que se encuentran:
- Rutas de API
- Modelos de datos


Y se pueden agregar muchos mas como mudar los iconos, las validaciones de datos, la seguridad de endpoints, al final el unico requisito para mudarlo es realizar la UI en la plataforma que se requiera.


![web](https://user-images.githubusercontent.com/57513207/170886429-1b7668b7-c250-415c-9fc4-1cfaeeb59ce8.png)
![mobile](https://user-images.githubusercontent.com/57513207/170886431-4be5e0ca-9951-475f-b6d8-47bf5c443aea.png)


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
