import Header from "./components/Header";


function renderApp() {
    console.log('Rendering the app');
    const app = document.createElement('div');
    app.appendChild(Header());
  
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = 'sounxpres-high-resolution-logo-white-transparent.png';
    image.alt = 'SounXpress';
    imageContainer.appendChild(image);
  
    app.appendChild(imageContainer);
    document.body.appendChild(app);
  }
  
renderApp();