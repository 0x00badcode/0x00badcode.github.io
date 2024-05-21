function searchApp() {
    const appName = document.getElementById('appName').value;
    const apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(appName)}&entity=software&limit=1`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const appId = data.results[0].trackId;
          openAppPage(appId);
        } else {
          alert('App not found');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while searching for the app');
      });
  }
  
  function openAppPage(appId) {
    const appPageUrl = `app.html?appId=${appId}`;
    window.open(appPageUrl, '_blank');
  }