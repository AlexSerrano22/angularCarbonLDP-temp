import {CarbonLDP} from 'carbonldp';

const BASE_CARBONLDP_URL = 'http://localhost:8083';
const carbon = new CarbonLDP(BASE_CARBONLDP_URL);

carbon.extendObjectSchema('Post', {
  'title': {
    '@type': 'string'
  },
  'body': {
    '@type': 'string'
  },
  'author': {
    '@type': '@id'
  },
  'comments': {
    '@type': '@id',
    '@container': '@set'
  }
});

carbon.extendObjectSchema('Author', {
  'name': {
    '@type': 'string'
  },
  'posts': {
    '@type': '@id',
    '@container': '@set'
  }
});

export default carbon;
