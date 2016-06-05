import ENV from 'blog/config/environment';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: ENV.BLOG_API_HOST,
  namespace: 'api/v1',
});
