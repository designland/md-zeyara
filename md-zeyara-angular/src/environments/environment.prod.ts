import {name, version} from '../../package.json';
import {webapi , firebaseConfig} from './environment.prod.json';

export const environment = {
  production: true,
  apiUrl: '',
  webapi,
  firebaseConfig
};
