document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // সিম্পল লগইন চেক (এইটি একটি প্রাথমিক উদাহরণ)
    if (username === 'admin' && password === '1234') {
        errorMessage.textContent = '';
        alert('লগইন সফল!');
    } else {
        errorMessage.textContent = 'ইউজারনেম বা পাসওয়ার্ড ভুল!';
    }
});