var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data); // Handle the data
  }
};
xhr.send();
