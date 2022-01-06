function validation() {
  let name = document.getElementById('name').value
  let phone = document.getElementById('phone').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').value
  let error_message = document.getElementById('error_message')
  let text
  error_message.style.padding = '10px'
  if (name.length < 5) {
    text = 'Please Enter Valid Name'
    error_message.innerHTML = text
    return false
  }
  if (isNaN(phone) || phone.length < 5) {
    text = 'Please Enter Valid Phone number'
    error_message.innerHTML = text
    return false
  }
  if (email.indexOf('@') == -1 || email.length < 6) {
    text = 'Please Enter Valid Email'
    error_message.innerHTML = text
    return false
  }
  if (message.length < 20) {
    text = 'Please Write Message More Than 20 Characters'
    error_message.innerHTML = text
    return false
  }
  alert('Form Submitted Successfully!')
  return false
}
