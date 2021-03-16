$(document).ready(function() {
  var gender = [
                {
                  id: 'MN',
                  text: "Mens"
                },
                {
                  id: 'WMN',
                  text: "Womens"
                },
                {
                  id: 'BYS',
                  text: "Boys"
                },
                {
                  id: 'GRL',
                  text: "Girls"
                },
                {
                  id: 'USX',
                  text: "Unisex"
                }];
  var style = [ {
                  id: 'TS',
                  text: "T-Shirts"},
                {
                  id: 'LS',
                  text: "Long Sleeves"},
                {
                  id: 'SW',
                  text: "Sweaters"},
                {
                  id: 'JK',
                  text: "Jackets"},
                {
                  id: 'COA',
                  text: "Coats"},
                {
                  id: 'CD',
                  text: "Cardigans"},
                {
                  id: 'CT',
                  text: "Crop Tops"},
                {
                  id: 'SLT',
                  text: "Sleeveless Tops"},
                {
                  id: 'VST',
                  text: "Vests"},
                {
                  id: 'BZ',
                  text: "Blazers"},
                {
                  id: 'SK',
                  text: "Skirts"},
                {
                  id: 'PDR',
                  text: "Dress Pants"},
                {
                  id: 'PK',
                  text: "Khakis"},
                {
                  id: 'PJ',
                  text: "Jeans"},
                {
                  id: 'PCR',
                  text: "Corduory Pants"},
                {
                  id: 'PTR',
                  text: "Track Pants"},
                {
                  id: 'PCGS',
                  text: "Cargos"},
                {
                  id: 'PSW',
                  text: "Sweats"},
                {
                  id: 'PS',
                  text: "Shorts"},
                {
                  id: 'PCP',
                  text: "Casual Pants"},
                {
                  id: 'PBB',
                  text: "Bellbottoms"},
                {
                  id: 'PHW',
                  text: "High-Waisted Pants"},
                {
                  id: 'PLR',
                  text: "Low-Rise Pants"},
                {
                  id: 'JMP',
                  text: "Jumpsuits"},
                {
                  id: 'OVRS',
                  text: "Overalls"},
                {
                  id: 'HTS',
                  text: "Hats"},
                {
                  id: 'SCF',
                  text: "Scarves"},
                {
                  id: 'HB',
                  text: "Handbags"},
                {
                  id: 'PUR',
                  text: "Purses"},
                {
                  id: 'BPS',
                  text: "Backpacks"},
                {
                  id: 'SUN',
                  text: "Sunglasses"},
                {
                  id: 'RGS',
                  text: "Rings"},
                {
                  id: 'NCK',
                  text: "Necklaces"},
                {
                  id: 'EAR',
                  text: "Earrings"},
                {
                  id: 'WTCH',
                  text: "Watches"},
                {
                  id: 'BRCS',
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
                  id: 'BRWN',
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
                  id: 'PRPL',
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
                  id: 'MULT',
                  text: "Multicolor"},
                {
                  id: 'LBLU',
                  text: "Light Blue"},
                {
                  id: 'DBLU',
                  text: "Dark Blue"},
                {
                  id: 'WBLU',
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
                  id: 'SLVR',
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
                id: 'XXL',
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

  while (title.length > 4) {
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
