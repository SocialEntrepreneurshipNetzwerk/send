import { rollbarScript } from './src/assets/rollbar.js';

exports.onInitialClientRender = () => {
  rollbarScript();
};
