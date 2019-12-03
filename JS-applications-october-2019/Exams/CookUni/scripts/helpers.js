export function passwordCheck(password, rePassword) {
    if (password === '' || rePassword === '') {
        alert('Password must be filled out');
        return false;
    }

    if (password !== rePassword) {
        alert('Your password and confirmation password do not match.');
        return false;
    }
    return true;
}

export function checkInput() {
    return [ ...arguments ].some(x => x.trim() === '');
}

export function getSessionInfo(ctx) {
    ctx.authtoken = sessionStorage.getItem('authtoken');
    ctx.username = sessionStorage.getItem('username');
    ctx.userId = sessionStorage.getItem('userId');
    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
    ctx.fullName = sessionStorage.getItem('fullName');
}

export function setSessionInfo(response) {
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('authtoken', response._kmd.authtoken);
    sessionStorage.setItem('fullName', `${response.firstName} ${response.lastName}`);
}

export function loadAllPartials(ctx, partials) {
    const defaultPartials = {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs',
    };

    for (const key in partials) {
        if (partials.hasOwnProperty(key)) {
            defaultPartials[key] = partials[key];
        }
    }
    return ctx.loadPartials(defaultPartials);
}

export function displayError(message) {
    const errorBox = document.getElementById('errorBox');
    errorBox.textContent = message;
    errorBox.style.display = 'block';
    setTimeout(()=>{
        errorBox.style.display = 'none';
    }, 2000);
}
