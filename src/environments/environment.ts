// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBCwlndGB3qndRCP1LhauCxSpp5gjAVrF4",
    authDomain: "ruby-case.firebaseapp.com",
    databaseURL: "https://ruby-case.firebaseio.com",
    projectId: "ruby-case",
    storageBucket: "ruby-case.appspot.com",
    messagingSenderId: "3209400695"
  }
};
