/**
 * Created by tarik on 09.05.2017.
 */

import 'whatwg-fetch';

// let url = 'https://api.vk.com/method/friends.getOnline?v=5.52&access_token='
// let url = 'https://api.vk.com/method/users.get?user_ids=9560147&fields=bdate&v=5.64'
// let token = '836ae91a5fabf97e42da881a1b116fe8d5a7794798dbb5ff5b907b6cbfb1b5bd15f7fe3bec067b99ea940'

export default () => {



    var myInit = {
        method: 'GET',
        datatype: 'JSONP'
    };
    fetch('https://api.vk.com/method/users.get?user_ids=9560147&fields=bdate&v=5.64', myInit).then(
        function (response) {
            console.log('sss');
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function (data) {
                console.log(data);
            })
        }
    )
}
//     fetch('../1.json')
//         .then(function(response) {
//             return response.json()
//         }).then(function(json) {
//         console.log('parsed json', json)
//     }).catch(function(ex) {
//         console.log('parsing failed', ex)
//     })
// }