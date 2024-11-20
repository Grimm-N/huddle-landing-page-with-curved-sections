document.addEventListener('DOMContentLoaded', () => {
    // header btn
    const headerButton = document.getElementById('headerButton');
  
    headerButton.addEventListener('mouseover', () => {
        headerButton.style.transition = 'transform 0.3s ease-in-out, all 0.3s ease-in-out';
        headerButton.style.transform = 'scale(1.1)';
        headerButton.style.backgroundColor = '#00f0ff';
        headerButton.style.borderColor = '#00f0ff'
        headerButton.style.color = '#000000'
    });
  
    headerButton.addEventListener('mouseout', () => {
        headerButton.style.transform = 'scale(1)';
        headerButton.style.backgroundColor = 'transparent';
        headerButton.style.borderColor = '#ffffff'
        headerButton.style.color = '#ffffff'
    });

    // main btn
    const mainButton = document.getElementById('mainButton');
  
    mainButton.addEventListener('mouseover', () => {
        mainButton.style.transition = 'transform 0.3s ease-in-out, all 0.3s ease-in-out';
        mainButton.style.transform = 'scale(1.1)';
        mainButton.style.backgroundColor = '#000000';
        mainButton.style.borderColor = '#000000'
        mainButton.style.color = '#ffffff'
    });
  
    mainButton.addEventListener('mouseout', () => {
        mainButton.style.transform = 'scale(1)';
        mainButton.style.backgroundColor = '#00f0ff';
        mainButton.style.borderColor = '#00f0ff'
        mainButton.style.color = '#000000'
    });

    // started section btn
    const startedButton = document.getElementById('startedButton');
  
    startedButton.addEventListener('mouseover', () => {
        startedButton.style.transition = 'transform 0.3s ease-in-out, all 0.3s ease-in-out';
        startedButton.style.transform = 'scale(1.1)';
        startedButton.style.backgroundColor = '#000000';
        startedButton.style.borderColor = '#000000'
        startedButton.style.color = '#ffffff'
    });
  
    startedButton.addEventListener('mouseout', () => {
        startedButton.style.transform = 'scale(1)';
        startedButton.style.backgroundColor = '#00f0ff';
        startedButton.style.borderColor = '#00f0ff'
        startedButton.style.color = '#000000'
    });

});
  

// email error
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('subscribeInput');
    const errorNotice = document.getElementById('errorNotice');
    const submitButton = document.getElementById('subscribeButton');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errorNotice.classList.remove('hidden');
        } else {
            errorNotice.classList.add('hidden');
            console.log("Email submitted:", email);
        }
    });

    emailInput.addEventListener('input', function() {
        errorNotice.classList.add('hidden'); 
    });
});
