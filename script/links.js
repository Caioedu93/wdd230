const baseURL = "https://caioedu93.github.io/wdd230/";
const linksURL = "https://caioedu93.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  return data;
}

async function displayLinks() {
  const data = await getLinks();
  const activityLinks = document.getElementById('activity-links');

  data.lessons.forEach(lesson => {
      const lessonTitle = document.createElement('h4');
      lessonTitle.textContent = `Week ${lesson.lesson}`;
      activityLinks.appendChild(lessonTitle);

      const linksList = document.createElement('ul');
      lesson.links.forEach(link => {
          const listItem = document.createElement('li');
          const linkElement = document.createElement('a');
          linkElement.href = baseURL + link.url;
          linkElement.textContent = link.title;
          listItem.appendChild(linkElement);
          linksList.appendChild(listItem);
      });

      activityLinks.appendChild(linksList);
  });
}

displayLinks();
