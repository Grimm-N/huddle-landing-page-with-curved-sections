document.addEventListener('DOMContentLoaded', () => {
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
  