// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
<<<<<<< HEAD
  production: false,
  KEYCLOAK_URL: 'http://localhost:8080/auth',
  KEYCLOAK_REALM: 'Dev-Realm',
  KEYCLOAK_CLIENTID: 'tutorial-frontend',
  BACKEND_URL: 'http://localhost:8000'
 };
=======
  production: true,
  apiUrl: 'http://localhost:8290/tips/',
  tipAdminUrl: 'http://localhost:8290/tip'
};
>>>>>>> 16179748748a4a9e08808a28cce4c9d0a87850ba

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


