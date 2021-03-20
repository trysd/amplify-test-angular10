// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const signInFrame = [
  { type: 'email', label: 'id', placeholder: '-', required: true },
  { type: 'password', label: 'pass', placeholder: '-', required: true },
  { type: 'name', label: 'name', placeholder: '-', required: true },
  { type: 'nickname', label: 'alias', placeholder: '-', required: true },
  { type: 'phone_number', label: 'phone', placeholder: '-', required: true }
];

export const settings = {

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
