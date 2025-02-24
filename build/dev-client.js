/**
 * @file for hot-reload
 * @author Tihomir Radenkov <tradenkoff@abv.bg>
 */

/* eslint-disable */
import 'eventsource-polyfill';
import hotClient from 'webpack-hot-middleware/client?noInfo=true&reload=true';

hotClient.subscribe(event => {
    if (event.action === 'reload') {
        window.location.reload();
    }
});
