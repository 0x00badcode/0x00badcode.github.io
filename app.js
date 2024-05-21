function fetchAppData() {
    var searchTerm = document.getElementById('searchInput').value;
    var url = `https://tools.applemediaservices.com/api/apple-media/apps/US/search.json?types=apps,app-bundles&term=${encodeURIComponent(searchTerm)}&limit=25&l=en-US&platform=iphone&additionalPlatforms=iphone,mac,appletv,ipad,watch,web`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.data && data.data.length > 0) {
                var appId = data.data[0].id;
                window.location.href = `app.html?appId=${appId}`;
            } else {
                alert('No apps found. Please try a different search term.');
            }
        })
        .catch(error => {
            console.error('Error fetching app data:', error);
            alert('Failed to fetch app data. Please try again.');
        });
}
