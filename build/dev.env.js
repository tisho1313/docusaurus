/**
 * @file dev env
 * @author Tihomir Radenkov <tradenkoff@abv.bg>
 */

import merge from 'webpack-merge';
import prodEnv from './prod.env';

export default merge(prodEnv, {
    NODE_ENV: JSON.stringify('development')
});
