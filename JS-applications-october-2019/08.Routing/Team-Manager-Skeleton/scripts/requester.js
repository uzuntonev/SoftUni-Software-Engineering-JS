const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_Sy6caBwnB';  
const appSecret = '59ea654c53c1492cb5a59cd5cddc5962';

function makeAuth(type) {
    return type === 'Basic'
        ? 'Basic ' + btoa(`${appKey}:${appSecret}`)
        : 'Kinvey ' + sessionStorage.getItem('authtoken');
}

function makeHeaders(method, data, type) {
    const headers = {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: makeAuth(type),
        },
    };

    if(method === 'POST' || method === 'PUT'){
        headers.body = JSON.stringify(data);
    }

    return headers;
}

function handleError(res){
    if(res.status === 409) {
        alert('This username is already used!');
    }
    if (!res.ok) { 
        throw new Error(`Something went wrong! Status: ${res.status}, Status text: ${res.statusText}`);
    }
    return res;
}

function fetchData(module, endpoint, headers) {
    return fetch(`${baseUrl}/${module}/${appKey}/${endpoint}`, headers)
        .then(handleError)
        .then(res => res.json());
}

export function get(module, endpoint, type) {
    const headers = makeHeaders('GET', type);
    return fetchData(module, endpoint, headers);
}

export function post(module, endpoint, data, type) {
    const headers = makeHeaders('POST', data, type);
    return fetchData(module, endpoint, headers);
}

export function put(module, endpoint, data, type) {
    const headers = makeHeaders('PUT', data, type);
    return fetchData(module, endpoint, headers);
}
    
export function del(module, endpoint, type) {
    const headers = makeHeaders('DELETE', type);
    return fetchData(module, endpoint, headers);
}


