# ImgFeedDemo

# React Native Template

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm)) -> v21.4.0
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode) -> 15.1
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio) -> 2023.1

## Base dependencies

- [@react-native-community/async-storage](https://github.com/react-native-async-storage/async-storage) for an asynchronous, unencrypted, persistent, key-value storage.
- [@react-navigation/native](https://github.com/react-navigation/react-navigation) for Stack navigator for React Native using native primitives for navigation.
- [@react-navigation/routers](https://github.com/react-navigation/react-navigation) for Routers to help build custom navigators.
- [@react-navigation/stack](https://github.com/react-navigation/react-navigation) for Stack navigator for React Navigation.
- [axios](https://github.com/axios/axios) for networking.
- [lodash](https://github.com/lodash/lodash) for supports modern environments.
- [react-native-animatable](https://github.com/oblador/react-native-animatable) Declarative transitions and animations for React Native.
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) for Declarative API exposing platform native touch and gesture system to React Native.
- [react-native-responsive-fontsize](https://github.com/heyman333/react-native-responsive-fontsize) Use this library if you have a small problem with the font size.
- [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen) React Native developers can code their UI elements fully responsive. No media queries needed.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) This library has 2 important concepts, if you are familiar with React Context this is very similar.
- [react-native-safearea-height](https://github.com/devym-37/react-native-safearea-height) for helps you to get status bar height.
- [react-native-screens](https://github.com/software-mansion/react-native-screens) This project aims to expose native navigation container components to React Native.
- [react-native-shared-element](https://github.com/IjzerenHein/react-native-shared-element) Native shared element transition "primitives" for react-native.
- [react-navigation-shared-element](https://github.com/IjzerenHein/react-navigation-shared-element) provides a set of comprehensive full native building blocks for performing shared element transitions in Router- or Transition libraries.
- [react-redux](https://github.com/reduxjs/react-redux) Redux Toolkit and React-Redux configured appropriately for that build tool.
- [redux](https://redux.js.org/) for state management.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.

### Option 2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `assets`: Asset folder to store all images, fonts, icons etc.
- `src`: This folder is the main container of all the code inside your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `helper`: Folder to store any kind of constant that you have and Folder to store all your network logic (you should have one controller per resource).
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Feeds.js`
      - `Home.js`
  - `selectors`: Folder to store your selectors for each reducer.
  - `storage`: Folder that contains the application storage logic.
  - `store`: Folder to put all redux middlewares and the store.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`

DEV: `yarn ios` or `yarn android`

#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu

  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.

- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu

  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store
