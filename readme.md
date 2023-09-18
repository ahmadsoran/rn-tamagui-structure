# React native Folder Structure

**if you want upgrade packages version must be compatible with [expo](https://docs.expo.dev/) framework**

or

**Auto upgrade packages base on expo compatibility**

first install expo cli

```command
npm i -g expo-cli
```

then

```command
expo upgrade
```

**useful commands**

to generate/regenerate ios & android folder

```command
expo eject
```

Install Expo Go for iOS on the simulator

```command
expo client:install:ios
```

Install Expo Go for Android on a connected device or emulator

```command
 expo client:install:android
```

Login to an Expo account

```command
 expo login
```

Logout of an Expo account

```command
  expo  logout
```

Sign up for a new Expo account

```command
 expo register
```

Install a module or other package to a project

```command
  expo install [packages...]
```

Share the project's URL to an email address

```command
  expo send [path]
```

**install cocoapods**

```command
gem cleanup
```

```command

brew uninstall cocoapods
```

```command

sudo gem uninstall cocoapods
```

```command

sudo gem install cocoapods -n /usr/local/bin
```

```command

sudo gem install cocoapods-user-defined-build-types
```

```command

pod install --repo-update
```

**MacOS apple silicon chip only**

you need to install rosetta otherwise you get an error while compiling android

```command

softwareupdate --install-rosetta
```
