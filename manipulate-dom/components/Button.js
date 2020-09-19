const Button = (text, style) => {
  const button = document.createElement('button');
  
  button.classList.add(style);
  button.textContent = text;
  
  return button;
}

export default Button;