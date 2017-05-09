/**
 * Created by tarik on 09.05.2017.
 */
import fetch from 'whatwg-fetch';
const get = () => fetch('./components/1.json')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          console.log(data);
        })
      });
module.export = get;
