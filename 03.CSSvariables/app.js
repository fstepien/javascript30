const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

inputs.forEach(input => input.addEventListener('change', codeUpdate));
function codeUpdate() {
document.querySelector('.code').style.display = "block";  
let output = ''
inputs.forEach(input => {
  const suffix = input.dataset.sizing || '';
  output += `<li>${input.name}(${input.value}${suffix})</li>`;
  
});

document.querySelector('.codeText').innerHTML = output;
}