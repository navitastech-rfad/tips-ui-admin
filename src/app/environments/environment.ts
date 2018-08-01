// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080/',
  // userApiUrl: 'http://localhost:8090/',
  userApiUrl: 'http://localhost:8180/',
  caseApiUrl: 'http://localhost:8280/'
};
