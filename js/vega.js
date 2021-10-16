var spec1 =
    "https://raw.githubusercontent.com/Adeline-Chew/Wine/main/json/isotype_wine_production.json";
var spec2 =
    "https://raw.githubusercontent.com/Adeline-Chew/Wine/main/json/map_alcohol_consumption.json";
var spec4 =
    "https://raw.githubusercontent.com/Adeline-Chew/Wine/main/json/bar_popular_wine.json";
var spec5 =
    "https://raw.githubusercontent.com/Adeline-Chew/Wine/main/json/box_price_wine.json";
var spec6 =
    "https://raw.githubusercontent.com/Adeline-Chew/Wine/main/json/pie_ingredients.json";
// Embed the visualization in the container with id `vis`
vegaEmbed("#viz1", spec1);
vegaEmbed("#viz2", spec2);
vegaEmbed("#viz4", spec4);
vegaEmbed("#viz5", spec5);
vegaEmbed("#viz6", spec6);
