let iconSize = 64; //px
let apiUrl = "https://www.google.com/s2/favicons?sz={size}&domain_url={url}"; //{size} = size; {url} = url

function addIcons(url, body){
    let count = url.length;
    let height = 50;
    let width = height;
    let iconspace = 40;
    let containerspace = 60;
    let borderradius = 5;
    container = document.createElement("div");
    container.style = "width: " + (iconspace+width)*count + "px; height: " + height + "px; margin:0 auto; margin-top: " + containerspace/2 + "px; margin-bottom: " + containerspace/2 + "px;";
    for (let i = 0; i < count; i++){
        let href = document.createElement("a");
        let icon = document.createElement("img");
        icon.style = "border-radius: " + borderradius + "px; height: " + height + "px; width: " + width + "px; margin-left: " + iconspace/2 + "px; margin-right: " + iconspace/2 + "px";
        icon.className = "icon";
        if (typeof url[i] !== "string"){
            icon.src = url[i][1];
            href.href = url[i][0];
        } else {
            icon.src = apiUrl.replace("{url}", url[i]).replace("{size}", iconSize);
            href.href = url[i];
        }
        href.appendChild(icon);
        container.appendChild(href);
        body.appendChild(container);
    }
}
function addBigFields(url, body){
    let count = url.length;
    let height = 60;
    let boxheight = 70;
    let boxwidth = 120;
    let width = height;
    let iconspace = 40;
    let containerspace = 80;
    let borderradius = 5;
    container = document.createElement("div");
    container.style = "width: " + (iconspace+boxwidth)*count + "px; height: " + height + "px; margin:0 auto; margin-top: " + containerspace/2 + "px; margin-bottom: " + containerspace/2 + "px;";
    for (let i = 0; i < count; i++){
        iconbox = document.createElement("span");
        iconbox.style = "border-radius: " + borderradius + "px; background-color: #383838; float:left; width: " + boxwidth + "px; height: " + boxheight + "px;  margin-left: " + iconspace/2 + "px; margin-right: " + iconspace/2 + "px;";
        let href = document.createElement("a");
        let icon = document.createElement("img");
        icon.style = "border-radius: " + borderradius + "px; margin-left: " + (boxwidth-width)/2 + "px; margin-top: " + (boxheight-height)/2 + "px; width: " + width + "px; height: " + height + "px;";
        if (typeof url[i] !== "string"){
            icon.src = url[i][1];
            href.href = url[i][0];
        } else {
            icon.src = apiUrl.replace("{url}", url[i]).replace("{size}", iconSize);
            href.href = url[i];
        }
        icon.className = "iconBigField";
        iconbox.className = "boxBigField";
        iconbox.appendChild(icon);
        href.appendChild(iconbox);
        container.appendChild(href);
        body.appendChild(container);
    }
}
function addSearchbar(machine, body) {
    let url = "https://" + machine + ((machine!=='www.duckduckgo.com') ? ((machine!=='de.wikipedia.org') ? '/search' : '/wiki/Spezial:Suche') : '');
    let height = 30;
    let width = 600;
    let containerspace = 20;
    let borderradius = 5;
    let searchbar = document.createElement("input");
    let searchform = document.createElement("form");
    if (machine !== "de.wikipedia.org"){
        searchform.method= "get";
        searchform.onsubmit = "this.q.value";
        searchbar.name = "q";
    }
    else {
        searchbar.name = "search";
    }
    searchform.action = url;
    searchform.style = "text-align: center;";
    searchbar.type = "text";
    searchbar.placeholder = "Websuche mit " + machine;
    searchbar.accessKey ="q";
    searchbar.className = "searchbar";
    searchbar.style = "border-radius: " + borderradius + "px; width: " + width + "px; height: " + height + "px; margin: 0 auto; margin-top: "+ containerspace/2 + "px; margin-bottom: "+ containerspace/2 + "px;";
    searchform.appendChild(searchbar);
    body.appendChild(searchform);
}
function backgroundColor(color, body){
    body.style = "background-color: " + color + ";"
    body.className = "body";
}
function backgroundImage(url, body){
    body.style = "background-image: url('" + url + "'); background-repeat: no-repeat; background-size: cover;";
    body.className = "body";
}
function backgroundGradient(colors, body, speed=15, angle=-45){
    let colorlist = "";
    for (let i = 0; i < colors.length; i++){
        colorlist += colors[i];
        if(i+1 < colors.length){
            colorlist += ",";
        }
    }
    let style = document.createElement("style");
    style.innerHTML = "@keyframes gradient {0% {background-position: 0% 50%;}50% {background-position: 100% 50%;}100% {background-position: 0% 50%;}}";
    body.appendChild(style);
    body.className = "body";
    body.style = "background: linear-gradient(" + angle + "deg, " + colorlist + "); background-size: 400% 400%; animation: gradient " + speed + "s ease infinite;";
}
function space(space, body){
    let spacediv = document.createElement("div");
    spacediv.style = "height: " + space + "px;";
    body.appendChild(spacediv);
}
function customIcon(pageUrl, imageUrl){
    return [pageUrl, imageUrl]
}
function changeApi(api){
    apiUrl = api;
}
function changeIconResolution(size){
    iconSize = size;
}