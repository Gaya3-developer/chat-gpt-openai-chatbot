// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "src/app/models/environment-configuration";

export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiKey: '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',
  apiUrl: 'http://localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
