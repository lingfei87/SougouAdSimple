import PostModel from 'discourse/models/post';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'initialize-ad-plugin',
  initialize(container) {

    withPluginApi('0.1', api => {

    });
  }
};
