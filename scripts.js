let inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console.log(this.value);
    // console.log(this.dataset);
    let suffix = this.dataset.sizing || ''; // because hex code doesn't have data-sizing attribute
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));