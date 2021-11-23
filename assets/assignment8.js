$(document).ready(function() {
    generateTable()
});

function generateTable(type = null) {

    $.getJSON( "assets/assignment8Data.json", function( resp ) {
      let resDataJson = JSON.parse(JSON.stringify(resp));
      // Start Search
      searchInDataLines(type, resDataJson)
      // Show  Counts
      showCounts(resDataJson)
    });
}

// To calculate Documents count based on alphabate
function showCounts (rows) {
  let a_m_count = getFilteredRow (1, rows)
  let n_z_count = getFilteredRow (2, rows)

  $('.filter-a-m-rows').html(a_m_count.length)
  $('.filter-n-z-rows').html(n_z_count.length)
}


//type --> 1 for a-m  type --> 2 for n-z 
function getFilteredRow (type, rows) {
  if (type == 1) {
    console.log('first')
    console.log('item.name 1', rows.filter((item) => genCharArray('a', 'm').includes(item.name.charAt(0).toLowerCase())))
    return rows.filter((item) => genCharArray('a', 'm').includes(item.name.charAt(0).toLowerCase()))
  } else if(type == 2){
    console.log('item.name 2', rows.filter((item) => genCharArray('n', 'z').includes(item.name.charAt(0).toLowerCase())))
    return rows.filter((item) => genCharArray('n', 'z').includes(item.name.charAt(0).toLowerCase()))
  }
}

function genCharArray(charA, charZ) {
    let a = [];
    let i = charA.charCodeAt(0);
    let j = charZ.charCodeAt(0);
    for (i; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

// Search in JSON documents
function searchInDataLines(type, allData) {
    let data = []
    if (type == 1) {
        data = getFilteredRow (1, allData)

    } else if (type == 2) {
        data = getFilteredRow (2, allData)
    } else {
        data = allData
    }
    document.querySelector('#table').innerHtml = '';
    generateTableHtml(data, $('#table'))
}

// To generate Html data table
function generateTableHtml(data, container) {
    container.html('')
    let searchvalue = $('#search_input').val().toLowerCase();
    let headers = getHeaders(data)
    let rowData = JSON.parse(JSON.stringify(data))
    rowData.unshift(headers)
    let table = $("<table/>").addClass('CSSTableGenerator');

    $.each(rowData, function(rowIndex, r) {
        let row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            let name = c.toLowerCase()
            if(searchvalue !== '' && colIndex == 'name' && name.includes(searchvalue)) {
              row.append($("<td />").addClass('highlight').text(c));
            } else {
              // if (rowIndex == 0) {
                c = c.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
              // }
              row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
            }
            
        });
        table.append(row);
    });
    return container.append(table);
}

// To get Name of columns
function getHeaders(list) {
    let columns = [];
    for (let i = 0; i < list.length; i++) {
        let row = list[i];
        for (let k in row) {
            if ($.inArray(k, columns) == -1) {
                columns.push(k)
            }
        }
    }
    return columns;
}