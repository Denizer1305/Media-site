const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвратить стандартную отправку формы

  const username = document.getElementById('username').value;
  const email =
  document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;

  // Проверка ввода
  if (username === '' || email === '' || password === '' || passwordConfirm === '') {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  if (password !== passwordConfirm) {
    alert('Пароли не совпадают.');
    return;
  }

  // Отправка данных на сервер (например, с помощью fetch)
  // ...
});




