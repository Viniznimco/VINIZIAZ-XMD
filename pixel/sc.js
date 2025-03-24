fetch('/set.js')
  .then(response => response.text())
  .then(data => {
    console.log('Received settings data:', data);
    const set = JSON.parse(data.replace(/module.exports = /, ''));
    console.log('Parsed settings:', set);
   

   
    const container = document.querySelector('.container');

    
    const statusSection = document.createElement('div');
    statusSection.innerHTML = `
      <h2>BOT STATUS</h2>
      <p>BOT NAME: ${set.botname}</p>
      <p>MODE: ${set.mode}</p>
      <p>PREFIX: ${set.prefix}</p>
    `;
    container.appendChild(statusSection);
  })
  .catch(error => console.error('Error fetching settings:', error));
