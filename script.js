/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_moonrisekingdom);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.ChordDiagram);

// colors of main characters
chart.colors.saturation = 0.55;
chart.colors.step = 3;
var colors = {}

// data was provided by: https://www.reddit.com/user/notrudedude

chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here
{ "from": "Aiadagalla subclan of Habar Garhdjis clan (Isaaq)", "to": "Abdalle subclan of Habar Awal clan (Isaaq)", "value": 34 },
  { "from": "Abdalle-Aroneh subclan of Abgal clan (Hawiye)", "to": "Eli-Omar subclan of Abgal clan (Hawiye)", "value": 31 },
  { "from": "Abdalleh-Agon-Yar subclan of Abgal clan (Hawiye)", "to": "Eli-Agon-Yar subclan of Abgal clan (Hawiye)", "value": 26 },
  { "from": "Abdulleh-Galmaha subclan of Abgal clan (Hawiye)", "to": "Kabaloh subclan of Abgal clan (Hawiye)", "value": 33 },
  { "from": "Abgal clan (Hawiye)", "to": "Garre subclan of Digil clan (Digil-Mirifle)", "value": 25 },
  { "from": "Abgal clan (Hawiye)", "to": "Xawaadle clan (Hawiye)", "value": 31 },
  { "from": "Abtisame subclan of Galje'el clan (Hawiye)", "to": "Afi subclan of Galje'el clan (Hawiye)", "value": 34 },
  { "from": "Afar", "to": "Issa", "value": 94 },
  { "from": "Afar", "to": "Issa (Dir)", "value": 96 },
  { "from": "Afar", "to": "Kereyou", "value": 69 },
  { "from": "Afar", "to": "Oromo", "value": 104 },
  { "from": "Afar", "to": "Somali", "value": 32 },
  { "from": "Agaw, Amhara", "to": "Gumuz", "value": 56 },
  { "from": "Agon-Yar subclan of Abgal clan (Hawiye)", "to": "Warsangeli subclan of Abgal clan (Hawiye)", "value": 116 },
  { "from": "Ahlu Sunna Waljamaca", "to": "Al-Shabaab", "value": 854 },
  { "from": "Ahlu Sunna Waljamaca", "to": "Hizbul Islam", "value": 55 },
  { "from": "AIAI", "to": "SSDF", "value": 625 },
  { "from": "Ajuran", "to": "Garre", "value": 78 },
  { "from": "Ale", "to": "Konso", "value": 50 },
  { "from": "Ali-Gaf subclan of Abgal clan (Hawiye)", "to": "Mahadade subclan of Abgal clan (Hawiye)", "value": 37 },
  { "from": "Al-Shabaab", "to": "Aaro Aaro", "value": 84 },
  { "from": "Al-Shabaab", "to": "Civilians", "value": 2701 },
  { "from": "Al-Shabaab", "to": "Hizbul Islam", "value": 209 },
  { "from": "Al-Shabaab", "to": "IS", "value": 92 },
  { "from": "Al-Shabaab", "to": "Ma'awisley", "value": 144 },
  { "from": "Al-Shabaab", "to": "ONLF", "value": 46 },
  { "from": "Al-Shabaab", "to": "SVA", "value": 42 },
  { "from": "Amhara", "to": "Gumuz", "value": 776 },
  { "from": "Amhara", "to": "Oromo", "value": 538 },
  { "from": "Amhara", "to": "Qimant", "value": 550 },
  { "from": "Amahara, Guraghe", "to": "Oromo", "value": 188 },
  { "from": "Amahara, Oromo, Shinasha", "to": "Gumuz", "value": 444 },
  { "from": "Anuak", "to": "Dinka", "value": 41 },
  { "from": "Anuak", "to": "Highlanders", "value": 114 },
  { "from": "Anuak", "to": "Nuer", "value": 168 },
  { "from": "Arbore", "to": "Borana", "value": 319 },
  { "from": "Ari", "to": "Mursi", "value": 32 },
  { "from": "ARPCT", "to": "ARS/UIC", "value": 562 },
  { "from": "Ayr subclan of Habar Gidir clan (Hawiye)", "to": "Sa'ad subclan of Habar Gidir clan (Hawiye)", "value": 59 },
  { "from": "Bahararsame subclan of Dhulbahante clan (Darod)", "to": "Qayaad subclan of Dhulbahante clan (Darod)", "value": 82 },
  { "from": "Biide subclan of Habar Jeclo (Isaaq)", "to": "Sa'ad subclan of Habar Yonis (Isaaq)", "value": 64 },
  { "from": "Bi'idyahan subclan of Majerteen clan (Darod)", "to": "Ismail subclan of Makahil clan (Darod)", "value": 280 },
  { "from": "Borana", "to": "Burji, Gabra", "value": 53 },
  { "from": "Borana", "to": "Degodia", "value": 315 },
  { "from": "Borana", "to": "Gabra", "value": 493 },
  { "from": "Borana", "to": "Gabra, Garre", "value": 384 },
  { "from": "Borana", "to": "Guji", "value": 3 },
  { "from": "Borana", "to": "Hamar (Ethiopia)", "value": 39 },
  { "from": "Borana", "to": "Samburu", "value": 112 },
  { "from": "Borana", "to": "Konso", "value": 58 },
  { "from": "Borana", "to": "Turkana", "value": 31 },
  { "from": "Borana", "to": "Garre", "value": 584 },
  { "from": "Borana, Guji", "to": "Garre", "value": 103 },
  { "from": "Burji", "to": "Guji", "value": 83 },
  { "from": "Dabare subclan of Digil clan (Digil-Mirifle)", "to": "Luway subclan of Mirifle clan (Digil-Mirifle)", "value": 47 },
  { "from": "Dassanetch", "to": "Gabra", "value": 112 },
  { "from": "Dassanetch", "to": "Turkana", "value": 385 },
  { "from": "Da'ud subclan of Abgal clan (Hawiye)", "to": "Warsangeli subclan of Abgal clan (Hawiye)", "value": 132 },
  { "from": "Dawa", "to": "Gura", "value": 55 },
  { "from": "Degodia", "to": "Garre", "value": 252 },
  { "from": "Dinka", "to": "Nuer", "value": 6 },
  { "from": "Dir clan", "to": "Sa'ad subclan of Habar Gidir clan (Hawiye)", "value": 220 },
  { "from": "Dir clan", "to": "Marehan subclan of Sede clan (Darod)", "value": 121 },
  { "from": "Dir clan", "to": "Sa'ad subclan of Habar Gidir clan (Hawiye)", "value": 67 },
  { "from": "Dizi", "to": "Suri", "value": 227 },
  { "from": "Dodoth", "to": "Turkana", "value": 5 },
  { "from": "DSA", "to": "USN/SNA", "value": 35 },
  { "from": "Duduble subclan of Gorgorte clan (Hawiye)", "to": "Suleiman subclan of Habar Gidir clan (Hawiye)", "value": 87 },
  { "from": "Fiqi Muhumud subclan (Dir)", "to": "Marehan subclan of Sede clan (Darod)", "value": 104 },
  { "from": "Forces of Abdirikaz Bihi", "to": "Forces of Ahmed Sheikh Buraleh", "value": 33 },
  { "from": "Forces of Abdullahi Yusuf", "to": "Forces of Jama Ali Jama", "value": 37 },
  { "from": "Forces of Abdullahi Yusuf", "to": "Forces of Yussuf Haji Nur", "value": 42 },
  { "from": "Forces of Abdurahman Ahmed Ali 'Tur'", "to": "Republic of Somaliland", "value": 470 },
  { "from": "Forces of General Morgan", "to": "Forces of Omar Jess", "value": 428 },
  { "from": "Forces of General Morgan", "to": "JVA", "value": 115 },
  { "from": "Forces of Hussein Ali Ahmed", "to": "USC/SSA", "value": 113 },
  { "from": "Gaadsan subclan of Bimaal clan (Dir)", "to": "Ma'alin Weyne subclan of Mirifle clan (Digil-Mirifle)", "value": 40 },
  { "from": "Gabra", "to": "Guji", "value": 43 },
  { "from": "Galje'el clan (Hawiye)", "to": "Jejele subclan of Jibedi clan (Hawiye)", "value": 36 },
  { "from": "Galje'el clan (Hawiye)", "to": "Xawaadle clan (Hawiye)", "value": 62 },
  { "from": "Garre subclan of Digil clan (Digil-Mirifle)", "to": "Jiddo subclan of Digil clan (Digil-Mirifle)", "value": 70 },
  { "from": "Garre subclan of Digil clan (Digil-Mirifle)", "to": "Marehan subclan of Sede cla (Darod)", "value": 99 },
  { "from": "Garre subclan of Digil clan (Digil-Mirifle)", "to": "Murule subclan of Gugundabe clan (Hawiye)", "value": 94 },
  { "from": "Gegeo", "to": "Guji", "value": 1784 },
  { "from": "Geri", "to": "Makahin", "value": 32 },
  { "from": "Goverment of Burundi", "to": "Civilians", "value": 8 },
  { "from": "Government of Djibouti", "to": "FRUD", "value": 199 },
  { "from": "Government of Djibouti", "to": "FRUD-AD", "value": 36 },
  { "from": "Government of Djibouti", "to": "Government of Eritrea", "value": 33 },
  { "from": "Government of Egypt", "to": "al-Gama'a al-Islamiyya", "value": 4 },
  { "from": "Government of Eritrea", "to": "Civilians", "value": 4804 },
  { "from": "Government of Eritrea", "to": "Government of Ethiopia", "value": 246 },
  { "from": "Government of Eritrea, Government of Ethiopia", "to": "Civilians", "value": 902 },
  { "from": "Government of Ethiopia", "to": "AIAI", "value": 248 },
  { "from": "Government of Ethiopia", "to": "ARDUF", "value": 25 },
  { "from": "Government of Ethiopia", "to": "Civilians", "value": 4245 },
  { "from": "Government of Ethiopia", "to": "EPLF", "value": 6907 },
  { "from": "Government of Ethiopia", "to": "EPRDF", "value": 3918 },
  { "from": "Government of Ethiopia", "to": "IGLF", "value": 76 },
  { "from": "Government of Ethiopia", "to": "Military faction (forces of Asaminew Tsige)", "value": 54 },
  { "from": "Government of Ethiopia", "to": "Military faction (Harar garrison)", "value": 602 },
  { "from": "Government of Ethiopia", "to": "OLA", "value": 76 },
  { "from": "Government of Ethiopia", "to": "ONF", "value": 1711 },
  { "from": "Government of Ethiopia", "to": "ONLF", "value": 1227 },
  { "from": "Government of Ethiopia", "to": "TPLF", "value": 2524 },
  { "from": "Government of Kenya", "to": "Al-Shabaab", "value": 1186 },
  { "from": "Government of Kenya", "to": "Civilians", "value": 672 },
  { "from": "Government of Somalia", "to": "Al-Shabaab", "value": 44796 },
  { "from": "Government of Somalia", "to": "ARS/UIC", "value": 2296 },
  { "from": "Government of Somalia", "to": "Civilians", "value": 667 },
  { "from": "Government of Somalia", "to": "Hizbul Islam", "value": 150 },
  { "from": "Government of Somalia", "to": "IS", "value": 108 },
  { "from": "Government of Somalia", "to": "Republic of Somaliland", "value": 508 },
  { "from": "Government of Somalia", "to": "SNM", "value": 300 },
  { "from": "Government of Somalia", "to": "SRRC", "value": 225 },
  { "from": "Government of Somalia", "to": "USC/SNA", "value": 4776 },
  { "from": "Government of Somalia", "to": "USC/SSA", "value": 3000 },
  { "from": "Government of Sudan", "to": "SPLM/A-North", "value": 2 },
  { "from": "Government of Uganda", "to": "Civilians", "value": 6 },
  { "from": "Government of United States of America", "to": "al-Qaida", "value": 79 },
  { "from": "Gumuz", "to": "Oromo", "value": 326 },
  { "from": "Hamar Gidir clan (Hawiye)", "to": "Marehan subclan of Sede clan (Darod)", "value": 36 },
  { "from": "Hamar Gidir clan (Hawiye)", "to": "Xawaadle clan (Hawiye)", "value": 139 },
  { "from": "Hamar (Ethiopia)", "to": "Nyangatom", "value": 64 },
  { "from": "Huber subclan of Mirifle clan (Digil-Mirifle)", "to": "Yantar subclan of Miirifle clan (Digil Mirifle)", "value": 35 },
  { "from": "IS", "to": "Civilians", "value": 22 },
  { "from": "Jie", "to": "Turkana", "value": 97 },
  { "from": "JVA", "to": "JVA Faction", "value": 57 },
  { "from": "Kalenjin", "to": "Kikuyu", "value": 327 },
  { "from": "Kalenjin", "to": "Kisii", "value": 81 },
  { "from": "Kalenjin", "to": "Kisii, Luo", "value": 40 },
  { "from": "Kalenjin", "to": "Luhya", "value": 96 },
  { "from": "Khatumo administartion", "to": "Republic of Somaliland", "value": 175 },
  { "from": "Kikuyu", "to": "Luo", "value": 61 },
  { "from": "Kikuyu", "to": "Maasai", "value": 102 },
  { "from": "Kisii", "to": "Maasai", "value": 56 },{ "from": "Kalenjin", "to": "Kikuyu", "value": 327 },
  { "from": "Kisii", "to": "Masaai", "value": 56 },
  { "from": "Lou Nuer", "to": "Murle", "value": 223 },
  { "from": "Majerteen subclan (Darod)", "to": "Awramale subclan (Darod)", "value": 118 },
  { "from": "Majerteen subclan (Darod)", "to": "Marehan subclan of Sede clan (Darod)", "value": 113 },
  { "from": "Majerteen subclan (Darod)", "to": "Ogaden clan (Darod)", "value": 54 },
  { "from": "Marakwet", "to": "Pokot", "value": 310 },
  { "from": "Matheniko Karimojong", "to": "Pokot", "value": 12 },
  { "from": "MDF", "to": "SLDF", "value": 32 },
  { "from": "Mohamed Muse subclan of Abgal clan (Hawiye)", "to": "Warsangeli subclan of Abgal clan (Hawiye)", "value": 64 },
  { "from": "Mujahideen in the Goils Mountains", "to": "Puntland state of Somalia", "value": 221 },
  { "from": "Mungiki", "to": "Civilians", "value": 106 },
  { "from": "Murle", "to": "Nuer", "value": 209 },
  { "from": "Nandi", "to": "Pokot", "value": 35 },
  { "from": "Nyangatom", "to": "Turkana", "value": 274 },
  { "from": "Nyangatom, Toposa", "to": "Turkana", "value": 58 },
  { "from": "Ogaden clan (Darod)", "to": "Sheikhal clan (Dir)", "value": 505 },
  { "from": "OLA", "to": "Civilianz", "value": 146 },
  { "from": "ONFL", "to": "Civilians", "value": 83 },
  { "from": "Orma", "to": "Pokomo", "value": 194 },
  { "from": "Orma, Wardei", "to": "Pokomo", "value": 66 },
  { "from": "Oromo", "to": "Dorze, Gamo, Guraghe, Silt'e, Wolayta", "value": 64 },
  { "from": "Oromo", "to": "Gamo, Guraghe", "value": 52 },
  { "from": "Oromo", "to": "Somali", "value": 796 },
  { "from": "Oromo", "to": "Somali (Ethiopia)", "value": 183 },
  { "from": "Pokot", "to": "Sabiny", "value": 3 },
  { "from": "Pokot", "to": "Samburu", "value": 76 },
  { "from": "Pokot", "to": "Turkana", "value": 626 },
  { "from": "Pokot, Samburu", "to": "Turkana", "value": 51 },
  { "from": "Puntland state of Somalia", "to": "Republic of Somalia", "value": 59 },
  { "from": "Republic of Somalia", "to": "SMN-'Calan cas'", "value": 2500 },
  { "from": "Rer Ahmad subclan (Hawiye)", "to": "Harawarsame Rer Hasan and Habar Ya'qub subclan of Marehan clan (Darod)", "value": 69 },
  { "from": "Rer Liban subclan (Isaaq)", "to": "Rer Samatar subclan of Habr Awal (Isaaq)", "value": 100 },
  { "from": "RRA", "to": "Civilians", "value": 43 },
  { "from": "RRA", "to": "RRA-MH", "value": 281 },
  { "from": "RRA", "to": "USC/SNA", "value": 437 },
  { "from": "Sa'ad subclan of Habar Gidir clan (Hawiye)", "to": "Saleban-Abdalla subclan of Majerteen clan (Darod)", "value": 28 },
  { "from": "Sa'ad subclan of Habar Gidir clan (Hawiye)", "to": "Suleiman subclan of Habar Gidir clan (Hawiye)", "value": 349 },
  { "from": "Samburu", "to": "Somali (Kenya)", "value": 46 },
  { "from": "Samburu", "to": "Turkana", "value": 250 },
  { "from": "SLDF", "to": "Civilians", "value": 148 },
  { "from": "SNF", "to": "USC/SNA", "value": 99 },
  { "from": "SNF-MSAB", "to": "SNF", "value": 51 },
  { "from": "SPM", "to": "Forces of Omar Jess", "value": 41 },
  { "from": "SPM", "to": "SPM/SNA", "value": 514 },
  { "from": "SPM/SNA", "to": "Civilians", "value": 90 },
  { "from": "SSDF", "to": "Civilians", "value": 200 },
  { "from": "Suleiman subclan of Habar Gidir clan (Hawiye)", "to": "Qubey subclan (Dir)", "value": 88 },
  { "from": "Toposa", "to": "Turkana", "value": 145 },
  { "from": "USC/SNA", "to": "USC/SNA-OA", "value": 431 },
  { "from": "USC/SNA", "to": "USC-PM", "value": 46 },
  { "from": "USC/SSA", "to": "USC/SSA-OMF", "value": 168 }
];


chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 10;

nodeTemplate = chart.nodes.template;
    
nodeTemplate.clickable = false;
nodeTemplate.draggable = false;

nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}'s engagements: {total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.maxWidth = 100;
label.truncate = true;

    label.relativeRotation = 90;

label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

// label.adapter.add("hidden", hideSmall);
    // function hideSmall(hidden, target) {
    //     console.log(target.dataItem.properties, target.dataItem);
    //     return target.dataItem.values.value.value < 100 ? true : false;
    // }

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function(fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function(dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName} & {toName}:{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Data source: Changing Character of Conflict";
creditLabel.url = "https://conflictplatform.ox.ac.uk/";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";

