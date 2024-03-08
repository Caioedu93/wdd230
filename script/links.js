

const baseURL = "https://caioedu93.github.io/wdd230/";

async function getLinks() {
  try {
    const response = await fetch(baseURL + "data/links.json");
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById("activity-links");

  weeks.forEach(week => {
    const weekHeader = document.createElement("h3");
    weekHeader.textContent = `Week ${week.lesson}`;

    const linksList = document.createElement("ul");

    week.links.forEach(link => {
      const listItem = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;
      listItem.appendChild(linkElement);
      linksList.appendChild(listItem);
    });

    linksContainer.appendChild(weekHeader);
    linksContainer.appendChild(linksList);
  });
}

getLinks();
