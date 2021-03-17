$(document).ready(function() {
  var gender = [
                {
                  id: 'MN',
                  text: "Mens"
                },
                {
                  id: 'WN',
                  text: "Womens"
                },
                {
                  id: 'BY',
                  text: "Boys"
                },
                {
                  id: 'GL',
                  text: "Girls"
                },
                {
                  id: 'US',
                  text: "Unisex"
                }];
  var style = [ {
                  id: 'TS',
                  text: "T-Shirts"},
                {
                  id: 'LS',
                  text: "Long Sleeves"},
                {
                  id: 'SR',
                  text: "Sweaters"},
                {
                  id: 'JK',
                  text: "Jackets"},
                {
                  id: 'CO',
                  text: "Coats"},
                {
                  id: 'CD',
                  text: "Cardigans"},
                {
                  id: 'CT',
                  text: "Crop Tops"},
                {
                  id: 'ST',
                  text: "Sleeveless Tops"},
                {
                  id: 'VT',
                  text: "Vests"},
                {
                  id: 'BZ',
                  text: "Blazers"},
                {
                  id: 'SK',
                  text: "Skirts"},
                {
                  id: 'DP',
                  text: "Dress Pants"},
                {
                  id: 'KH',
                  text: "Khakis"},
                {
                  id: 'JN',
                  text: "Jeans"},
                {
                  id: 'CR',
                  text: "Corduory Pants"},
                {
                  id: 'TP',
                  text: "Track Pants"},
                {
                  id: 'CG',
                  text: "Cargos"},
                {
                  id: 'SW',
                  text: "Sweats"},
                {
                  id: 'SH',
                  text: "Shorts"},
                {
                  id: 'CP',
                  text: "Casual Pants"},
                {
                  id: 'BB',
                  text: "Bellbottoms"},
                {
                  id: 'HW',
                  text: "High-Waisted Pants"},
                {
                  id: 'LR',
                  text: "Low-Rise Pants"},
                {
                  id: 'JS',
                  text: "Jumpsuits"},
                {
                  id: 'OA',
                  text: "Overalls"},
                {
                  id: 'HT',
                  text: "Hats"},
                {
                  id: 'SF',
                  text: "Scarves"},
                {
                  id: 'HB',
                  text: "Handbags"},
                {
                  id: 'PR',
                  text: "Purses"},
                {
                  id: 'BP',
                  text: "Backpacks"},
                {
                  id: 'SN',
                  text: "Sunglasses"},
                {
                  id: 'RG',
                  text: "Rings"},
                {
                  id: 'NK',
                  text: "Necklaces"},
                {
                  id: 'ER',
                  text: "Earrings"},
                {
                  id: 'WT',
                  text: "Watches"},
                {
                  id: 'BR',
                  text: "Bracelets"}
              ];
  var color = [ {
                  id: 'BLK',
                  text: "Black"},
                {
                  id: 'WHI',
                  text: "White"},
                {
                  id: 'GRY',
                  text: "Grey"},
                {
                  id: 'BWN',
                  text: "Brown"},
                {
                  id: 'RD',
                  text: "Red"},
                {
                  id: 'GRN',
                  text: "Green"},
                {
                  id: 'PNK',
                  text: "Pink"},
                {
                  id: 'PRL',
                  text: "Purple"},
                {
                  id: 'YLW',
                  text: "Yellow"},
                {
                  id: 'ORG',
                  text: "Orange"},
                {
                  id: 'BLU',
                  text: "Blue"},
                {
                  id: 'MLT',
                  text: "Multicolor"},
                {
                  id: 'LBL',
                  text: "Light Blue"},
                {
                  id: 'DBL',
                  text: "Dark Blue"},
                {
                  id: 'WBL',
                  text: "Washed Blue"},
                {
                  id: 'CRM',
                  text: "Cream"},
                {
                  id: 'TAN',
                  text: "Tan"},
                {
                  id: 'LTH',
                  text: "Leather"},
                {
                  id: 'GLD',
                  text: "Gold"},
                {
                  id: 'SVR',
                  text: "Silver"},
                {
                  id: 'PRL',
                  text: "Pearl"}
              ];
  var size = [{
                id: 'XS',
                text: "XS"},
              {
                id: 'S',
                text: "S"},
              {
                id: 'M',
                text: "M"},
              {
                id: 'L',
                text: "L"},
              {
                id: 'XL',
                text: "XL"},
              {
                id: '2X',
                text: "XXL"}
            ];

  $("#gender").select2({
    data: gender
  });
  $("#style").select2({
    data: style
  });
  $("#color").select2({
    data: color
  });
  $("#size").select2({
    data: size
  });
});

function generateSKU() {
  var title = (document.getElementById("productTitle")).value;
  var gender = (document.getElementById("gender")).value;
  var style = (document.getElementById("style")).value;
  var color = (document.getElementById("color")).value;
  var size = (document.getElementById("size")).value;

  //Checks to see it title is empty
  if (title == "") {
    alert("Please input product title");
    return;
  }

  if (title.includes("and")) {
    title = title.replace("and","");
  }

  var title = title.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

  while (title.length > 3) {
    title = title.slice(0, -1);
  }

  title = title.toUpperCase(title);

  var SKU = title.concat("-", gender, "-", style, "-", color, "-", size);

  document.getElementById("SKU").innerText = SKU;
  document.getElementById("SKU").style.visibility = "visible";
  document.getElementById("copySKU").innerText = "Copy SKU";
  document.getElementById("copySKU").style.visibility = "visible";
}

function copySKU(id) {
  var text = document.getElementById(id).innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);

  document.getElementById("copySKU").innerText = "Copied";
}

$(document).ready(function() {
  $("#productTitle").keyup(function(event) {
    if (event.which === 13) {
      $("#generateSKU").click();
    }
  });
});
