
let APIURL = '';
// eslint-disable-next-line 
switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5000';
        break;
    case 'https://aperoo.herokuapp.com/':
    APIURL = 'https://aperoo-server.herokuapp.com/';
}

export default APIURL;