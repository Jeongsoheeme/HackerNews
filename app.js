const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false); // false: 비동기로 하지않고 동기적으로 처리하겠다는 옵션
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function(){
  const id = location.hash.substring(1);
  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

for(let i = 0; i <10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.addEventListener('click', function() {

  });

  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  ul.appendChild(li);
  li.appendChild(a);
}

container.appendChild(ul);
container.appendChild(content);