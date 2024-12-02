

  document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Sign In Successful!');

      window.location.href = '../homepage/index.html';
    } else {
      alert('Invalid email or password!');
    }
  });
