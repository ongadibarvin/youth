document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Signup successful!');
    window.location.href = 'login.html';
    });
    
    document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'home.html';
    } else {
    alert('Invalid username or password');
    }
    });
    
    function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
    }
    
    window.onload = function () {
    if (!localStorage.getItem('loggedInUser')) {
    
    window.location.href = 'login.html';
    }
    };