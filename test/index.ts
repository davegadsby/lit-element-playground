const appContext = require.context('../src', true, /\.spec.ts$/);
appContext.keys().map(appContext);
