function checkIfSet(defaultValue, object, path) {
    let value = object;
    if (checkNested(object, path)) {
        for (let i=0; i < path.length; i++) {
            value = value[path[i]];
        }
    } else {
        value = defaultValue;
    }
    return value;
}

function checkNested(object, path) {
    for (let i=0; i < path.length; i++) {
    if (!object || !object.hasOwnProperty(path[i])) {
      return false;
    }
    object = object[path[i]];
  }
  return true;
}

function getIconURL(api, url, size) {
    return api.replace("{url}", url).replace("{size}", size);
}

function MainPage() {
    let mainContainer = document.createElement("div");
    let innerContainer = document.createElement("div");

    mainContainer.style.width = "100%";
    mainContainer.style.height = "100%";

    innerContainer.style.position = "fixed";
    innerContainer.style.left = "50%";
    innerContainer.style.top = "50%";
    innerContainer.style.transform = "translate(-50%, -50%)";

    mainContainer.appendChild(innerContainer);

    this.defaultSettings = {
        apiUrl: "https://www.google.com/s2/favicons?sz={size}&domain_url={url}",
        iconResolution: "128",
        icons: {
            iconHeight: 50,
            iconWidth: 50,
            horizontalSpace: 20,
            verticalSpace: 30,
            borderRadius: 5
        },
        fields: {
            iconHeight: 55,
            iconWidth: 55,
            boxHeight: 70,
            boxWidth: 120,
            horizontalSpace: 20,
            verticalSpace: 40,
            borderRadius: 5,
            boxColor: "#222222"
        },
        searchbar: {
            searchbarHeight: 30,
            searchbarWidth: 600,
            verticalSpace: 20,
            borderRadius: 5,
            searchbarColor: "#222222",
            searchbarFontColor: "#ffffff",
            searchbarBorderColor: "#ffffff",
            searchbarBorderWidth: 1,
            machines: {
                "www.google.com": {
                    url: "https://www.google.com/search",
                    method: "get",
                    name: "q",
                    defaultPlaceholder: "Search Google"
                },
                "www.duckduckgo.com": {
                    url: "https://www.duckduckgo.com",
                    method: "get",
                    name: "q",
                    defaultPlaceholder: "Search DuckDuckGo"
                },
                "de.wikipedia.org": {
                    url: "https://de.wikipedia.org/wiki/Spezial:Suche",
                    method: "",
                    name: "search",
                    defaultPlaceholder: "Search Wikipedia de"
                },
                "www.bing.com": {
                    url: "https://www.bing.com/search",
                    method: "get",
                    name: "q",
                    defaultPlaceholder: "Search Bing"
                },
                "www.ecosia.org": {
                    url: "https://www.ecosia.org/search",
                    method: "get",
                    name: "q",
                    defaultPlaceholder: "Search Ecosia"
                }
            },
            defaultMachine: {
                url: "https://www.google.com/search",
                method: "get",
                name: "q",
                defaultPlaceholder: "Search Google"
            }
        }
    };

    this.addIcons = function (object) {
        let items = object.pages;
        let count = items.length;
        
        let iconHeight = checkIfSet(this.defaultSettings.icons.iconHeight, object, ["iconHeight"]);
        let iconWidth = checkIfSet(this.defaultSettings.icons.iconWidth, object, ["iconWidth"]);
        let horizontalSpace = checkIfSet(this.defaultSettings.icons.horizontalSpace, object, ["horizontalSpace"]);
        let verticalSpace = checkIfSet(this.defaultSettings.icons.verticalSpace, object, ["verticalSpace"]);
        let borderRadius = checkIfSet(this.defaultSettings.icons.borderRadius, object, ["borderRadius"]);
        let apiUrl = checkIfSet(this.defaultSettings.apiUrl, object, ["apiURL"]);
        let iconResolution = checkIfSet(this.defaultSettings.iconResolution, object, ["iconResolution"]);

        let iconContainer = document.createElement("div");

        iconContainer.style.height = iconHeight + "px";
        iconContainer.style.width = (2*horizontalSpace+iconWidth)*count + "px";
        iconContainer.style.margin = "0 auto";
        iconContainer.style.marginTop = verticalSpace + "px";
        iconContainer.style.marginBottom = verticalSpace + "px";

        for (let i = 0; i < count; i++) {
            let pageURL = items[i].URL;
            let iconURL = checkIfSet(getIconURL(apiUrl, pageURL, iconResolution), object, ["pages", i, "iconURL"]);

            let href = document.createElement("a");
            let icon = document.createElement("img");

            icon.style.height = iconHeight + "px";
            icon.style.width = iconWidth + "px";
            icon.style.borderRadius = borderRadius + "px";
            icon.style.marginLeft = horizontalSpace + "px";
            icon.style.marginRight = horizontalSpace + "px";
            icon.classList.add("icon");
            
            href.href = pageURL;
            icon.src = iconURL;

            href.appendChild(icon);
            iconContainer.appendChild(href);
            innerContainer.appendChild(iconContainer);
        }
    }

    this.addFields = function (object) {
        let items = object.pages;
        let count = items.length;
        
        let iconHeight = checkIfSet(this.defaultSettings.fields.iconHeight, object, ["iconHeight"]);
        let iconWidth = checkIfSet(this.defaultSettings.fields.iconWidth, object, ["iconWidth"]);
        let boxHeight = checkIfSet(this.defaultSettings.fields.boxHeight, object, ["boxHeight"]);
        let boxWidth = checkIfSet(this.defaultSettings.fields.boxWidth, object, ["boxWidth"]);
        let horizontalSpace = checkIfSet(this.defaultSettings.fields.horizontalSpace, object, ["horizontalSpace"]);
        let verticalSpace = checkIfSet(this.defaultSettings.fields.verticalSpace, object, ["verticalSpace"]);
        let borderRadius = checkIfSet(this.defaultSettings.fields.borderRadius, object, ["borderRadius"]);
        let boxColor = checkIfSet(this.defaultSettings.fields.boxColor, object, ["boxColor"]);
        let apiUrl = checkIfSet(this.defaultSettings.apiUrl, object, ["apiURL"]);
        let iconResolution = checkIfSet(this.defaultSettings.iconResolution, object, ["iconResolution"]);

        let boxContainer = document.createElement("div");

        boxContainer.style.height = iconHeight + "px";
        boxContainer.style.width = (2*horizontalSpace+boxWidth)*count + "px";
        boxContainer.style.margin = "0 auto";
        boxContainer.style.marginTop = verticalSpace + "px";
        boxContainer.style.marginBottom = verticalSpace + "px";

        for (let i=0; i < count; i++) {
            let pageURL = items[i].URL;
            let iconURL = checkIfSet(getIconURL(apiUrl, pageURL, iconResolution), object, ["pages", i, "iconURL"]);

            let href = document.createElement("a");
            let icon = document.createElement("img");
            let box = document.createElement("div");

            icon.style.height = iconHeight + "px";
            icon.style.width = iconWidth + "px";
            icon.style.marginTop = (boxHeight-iconHeight)/2 + "px";
            icon.style.marginLeft = (boxWidth-iconWidth)/2 + "px";
            icon.style.borderRadius = borderRadius + "px";
            icon.classList.add("icon");
            
            box.style.height = boxHeight + "px";
            box.style.width = boxWidth + "px";
            box.style.borderRadius = borderRadius + "px";
            box.style.marginLeft = horizontalSpace + "px";
            box.style.marginRight = horizontalSpace + "px";
            box.style.backgroundColor = boxColor;
            box.style.display = "inline-block";
            box.classList.add("box");

            href.href = pageURL;
            icon.src = iconURL;
            
            href.appendChild(icon);
            box.appendChild(href);
            boxContainer.appendChild(box);
            innerContainer.appendChild(boxContainer);
        }
    }

    this.addSearchbar = function (object) {
        let machine = (object.machine in this.defaultSettings.searchbar.machines) ? this.defaultSettings.searchbar.machines[object.machine] : this.defaultSettings.searchbar.defaultMachine;

        let searchbarPlaceholder = checkIfSet(machine.defaultPlaceholder, object, ["searchbarPlaceholder"]);
        let autofocus = checkIfSet(false, object, ["autofocus"]);
        let autocomplete = checkIfSet(false, object, ["autocomplete"]);

        let maxWidth = checkIfSet(false, object, ["maxWidth"]);
        let searchbarHeight = checkIfSet(this.defaultSettings.searchbar.searchbarHeight, object, ["searchbarHeight"]);
        let searchbarWidth = checkIfSet(this.defaultSettings.searchbar.searchbarWidth, object, ["searchbarWidth"]);
        let verticalSpace = checkIfSet(this.defaultSettings.searchbar.verticalSpace, object, ["verticalSpace"]);
        let borderRadius = checkIfSet(this.defaultSettings.searchbar.borderRadius, object, ["borderRadius"]);
        let searchbarColor = checkIfSet(this.defaultSettings.searchbar.searchbarColor, object, ["searchbarColor"]);
        let searchbarFontColor = checkIfSet(this.defaultSettings.searchbar.searchbarFontColor, object, ["searchbarFontColor"]);
        let searchbarBorderColor = checkIfSet(this.defaultSettings.searchbar.searchbarBorderColor, object, ["searchbarBorderColor"]);
        let searchbarBorderWidth = checkIfSet(this.defaultSettings.searchbar.searchbarBorderWidth, object, ["searchbarBorderWidth"]);

        let searchbarForm = document.createElement("form");
        let searchbar = document.createElement("input");

        searchbarForm.method = machine.method;
        searchbarForm.action = machine.url;
        searchbarForm.style.height = searchbarHeight + "px";
        searchbarForm.style.width = searchbarWidth + "px";
        searchbarForm.style.margin = "0 auto";
        searchbarForm.autocomplete = (autocomplete) ? "on" : "off";

        searchbar.style.height = searchbarHeight + "px";
        if (!maxWidth) {
            searchbar.style.width = searchbarWidth + "px";
        } else {
            searchbar.style.width = "100%";
            searchbarForm.style.width = "100%";
        }
        searchbar.style.backgroundColor = searchbarColor;
        searchbar.style.color = searchbarFontColor;
        searchbar.style.borderRadius = borderRadius + "px";
        searchbar.style.borderColor = searchbarBorderColor;
        searchbar.style.borderWidth = searchbarBorderWidth + "px";
        searchbar.style.marginTop = verticalSpace;
        searchbar.style.marginBottom = verticalSpace;
        searchbar.placeholder = searchbarPlaceholder;
        searchbar.type = "text";
        searchbar.name = machine.name;
        searchbar.autofocus = (autofocus) ? "autofocus" : "";
        searchbar.autocomplete = (autocomplete) ? "on" : "off";
        searchbar.classList.add("searchbar");

        searchbarForm.appendChild(searchbar);
        innerContainer.appendChild(searchbarForm);
    }

    this.setBackgroundColor = function (object) {
        let color = checkIfSet("", object, ["backgroundColor"]);
        mainContainer.style.backgroundColor = color;
    }

    this.setBackgroundImage = function (object) {
        let image = checkIfSet("", object, ["backgroundImage"]);
        mainContainer.style.backgroundImage = "url(" + image + ")";
    }

    this.setBackgroundGradient = function (object) {

        let backgroundGradientColors = checkIfSet([], object, ["backgroundGradientColors"]);
        let backgroundGradientAngle = checkIfSet(-45, object, ["backgroundGradientAngle"]);
        let backgroundGradientSpeed = checkIfSet(15, object, ["backgroundGradientSpeed"]);
        let backgroundGradientMultiplier = checkIfSet(4, object, ["backgroundGradientMultiplier"]);

        for (let element of [document.getElementsByTagName("html")[0], document.getElementsByTagName("body")[0]]) {
            element.style.height = "100%";
            element.style.width = "100%";
            element.style.margin = "0px";
            element.style.padding = "0px";
        }

        let style = document.createElement("style");
        style.innerHTML = "@keyframes gradient {0% {background-position: 0% 50%;}50% {background-position: 100% 50%;}100% {background-position: 0% 50%;}}";
        mainContainer.appendChild(style);
        mainContainer.style.background = "linear-gradient(" + backgroundGradientAngle + "deg, " + backgroundGradientColors.join(", ") + ")";
        mainContainer.style.backgroundSize = 100*backgroundGradientMultiplier + "% " + 100*backgroundGradientMultiplier + "%";
        mainContainer.style.animation = "gradient " + backgroundGradientSpeed + "s ease infinite";
    }

    this.getElement = function () {
        return mainContainer;
    }
}