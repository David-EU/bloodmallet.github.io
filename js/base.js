var language = "EN";
var translator = {};


document.addEventListener("DOMContentLoaded", add_link_listener);
document.addEventListener("DOMContentLoaded", addLanguageListener);

// add tracking listeners to links, so i'm able to see which resources are beeing used
function add_link_listener() {
  var links = document.links;
  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener("click", function(e) {
      ga('send', 'event', 'outgoing', 'click', e.target.href);
    } );
  }
}


// replaces all wowhead link names with the ones from the translation file
function addLanguageListener() {
  document.getElementById("select_language").addEventListener("change", function() {
    switchLanguage(this.options[this.selectedIndex].value);
    ga('send', 'event', 'switch_language', this.options[this.selectedIndex].value);
  });
}

function switchLanguage(new_language) {
  // little sanity check
  if (new_language == "EN" ||
    new_language == "FR" ||
    new_language == "DE" ||
    new_language == "KO" ||
    new_language == "CN" ||
    new_language == "ES" ||
    new_language == "PT" ||
    new_language == "RU" ) {
    if (new_language != language && new_language != "EN") {
      // load new language file
      var xhttp_getlanguage = new XMLHttpRequest();
      xhttp_getlanguage.open("GET", "./translations/" + new_language.toLowerCase() + ".json", true);
      xhttp_getlanguage.setRequestHeader("Content-type", "application/json");

      xhttp_getlanguage.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(JSON.parse(xhttp_getlanguage.responseText));
          translator = JSON.parse(xhttp_getlanguage.responseText);
          // set new language
          language = new_language;
          setTimeout(translate_charts, 200);
        }
      }
      xhttp_getlanguage.send();
    } else if (new_language != language && new_language == "EN") {
      reset_translations();
      language = new_language;
      translate_charts();
    }
  } else {
    reset_translations();
    language = "EN";
    translate_charts();
  }
}


function translate_charts() {
  if (language=="EN") {
    return;
  }

  var a_all = document.getElementsByTagName("a");

  var a_massaged = [];

  for ( element in a_all ) {
    if ( String(a_all[element].href).search( "wowhead" ) > -1 ) {
      a_massaged.push(a_all[element]);
    }
  }

  // translate all links that point to wowhead
  for (var i = a_massaged.length - 1; i >= 0; i--) {
    var translation = false;
    // .name is our "saved" default value (english)
    if (a_massaged[i].name) {
      translation = translate_trinket(a_massaged[i].name);
    } else {
      // set the defualt value if it isn't present
      a_massaged[i].name = a_massaged[i].innerHTML;
      translation = translate_trinket(a_massaged[i].innerHTML);
    }

    // if a translation for the content was found, change the innerHTML to the translated phrase
    if (translation) {
      a_massaged[i].innerHTML = translation;
    } else {
      a_massaged[i].innerHTML = a_massaged[i].name;
    }

    // change the link to the new language as well (tooltip language change)
    new_link = "http://" + language;
    for ( element in String( a_massaged[ i ].href ).split( "." ) ) {
      if (element > 0) {
        new_link += "." + String( a_massaged[ i ].href ).split( "." )[element];
      }
    }
    a_massaged[i].href = new_link;
  }
}


function translate_trinket(phrase) {
  if (translator[phrase] && translator[phrase] != "") {
    return translator[phrase];
  }
  return false;
}


function reset_translations() {
  var a_all = document.getElementsByTagName("a");

  var a_massaged = [];

  for ( element in a_all ) {
    if ( String(a_all[element].href).search( "wowhead" ) > -1 ) {
      a_massaged.push(a_all[element]);
    }
  }

  for (var i = a_massaged.length - 1; i >= 0; i--) {
    if (a_massaged[i].name) {
      a_massaged[i].innerHTML = a_massaged[i].name;
    }
  }
}
