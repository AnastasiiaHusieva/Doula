function EmailTemplate({ name, email, text }) {
  return `
  <!DOCTYPE html>
  <html>
  
  <head>
    <style>
      .content {
        font-family: 'Arial', sans-serif;
        background-color: #EECEB1;
        color: #A96449;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #FFF; /* White background within the container */
      }
      
      .header {
        background-color: #A96449;
        color: #FFF;
        padding: 10px;
      }
      
      .content {
        padding: 20px;
        margin-top: 10px;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <div class="header">
        <p>From: ${email}</p>
      </div>
      <div class="content">
      <div>
      <p>${name}</p>
    </div>
    <div >
      <p>${text}</p>
    </div>
      </div>
     
  
      
    </div>
  </body>
  
  </html>
`;
}

module.exports = EmailTemplate;
