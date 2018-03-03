// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAbmLAmiMksjGh0zj6y7RNd7X7zExBRD8U",
    authDomain: "angular-fire-crud-e0aec.firebaseapp.com",
    databaseURL: "https://angular-fire-crud-e0aec.firebaseio.com",
    projectId: "angular-fire-crud-e0aec",
    storageBucket: "angular-fire-crud-e0aec.appspot.com",
    messagingSenderId: "630367300665"
  }
};
