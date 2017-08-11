//Set title and h1 to specified text
$('title, h1').text('San Diego Top Spots');

//Get Top Spots data using $.getJSON method
function getSanDiego() {
  $.getJSON("data.json", function (data) {

    $.each(data, function (index, data) {
      var dataName = data.name;
      var dataDes = data.description;
      var dataLoc = data.location;
      var dataLinks = "<a href=" + "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" + dataLoc + ">" + "Open in Google Maps" + "</a>";

      var row = document.createElement('tr');
      var cell1 = document.createElement('td');
      var cell2 = document.createElement('td');
      var cell3 = document.createElement('td');
      var table = document.getElementById('table-body');


      cell1.innerHTML = dataName;
      cell2.innerHTML = dataDes;
      cell3.innerHTML = dataLinks;
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      table.appendChild(row);

    });

  });

}

$(document).ready(getSanDiego);
