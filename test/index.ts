declare var require: any;
var appContext = require.context('../src', true, /\.spec.ts$/);
appContext.keys().map(appContext);
