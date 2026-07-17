function loadPage(pageUrl) {
    const container = document.getElementById("content-container");

    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(htmlContent => {
            // Put the HTML inside your container
            container.innerHTML = htmlContent;
        })
        .catch(error => {
            container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });

}

loadPage('./src/home/home.html');