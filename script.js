let page = new MainPage();

page.addFields(
    {
        pages: [
            {
                URL: "https://rgtfo-me.digitalesregister.it/v2/login",
                iconURL: "icons/Register-icon.png"
            },
            {
                URL: "https://justlearnit.rgtfo-me.it/moodle/",
                iconURL: "icons/Moodle-icon.svg"
            },
            {
                URL: "https://classroom.google.com/u/0/",
                iconURL: "icons/GoogleClassroom-icon.svg"
            }
        ]
    }
);
page.addIcons(
    {
        pages: [
            {
                URL: "https://mail.google.com/mail/",
                iconURL: "icons/Gmail-icon.png"
            },
            {
                URL: "https://drive.google.com/drive",
                iconURL: "icons/GoogleDrive-icon.png"
            },
            {
                URL: "https://www.deepl.com/de/translator",
                iconURL: "icons/DeepL-icon.png"
            },
            {
                URL: "https://www.macmillaneducationeverywhere.com/",
                iconURL: "icons/Macmillan-icon.png"
            },
            {
                URL: "https://www.youtube.com/",
                iconURL: "icons/YouTube-icon.png"
            },
            {
                URL: "https://www.office.com",
                iconURL: "icons/Office.svg"
            }
        ]
    }
);

page.addIcons({
    pages: [
        {
            URL: "https://github.com/",
            iconURL: "icons/Github.svg"
        },
        {
            URL: "https://web.whatsapp.com/",
            iconURL: "icons/WhatsApp-icon.png"
        },
        {
            URL: "https://chatgpt.com/",
            iconURL:"icons/ChatGPT.svg"
        }, 
        {
            URL: "https://www.netflix.com/browse",
            iconURL: "icons/Netflix-icon.png"
        },
        {
            URL: "https://www.twitch.tv/",
            iconURL: "icons/Twitch-icon.png"
        },
        {
            URL: "https://www.wikipedia.org/",
            iconURL: "icons/Wikipedia-icon.svg"
        },
    ]
});

page.addSearchbar({
    machine: "www.google.com",
    autofocus: true,
    maxWidth: true
});

page.addFields({
    pages: [
        {
            URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            iconURL: "icons/rickroll-roll.gif"
        },
        {
            URL: "https://www.tfo-meran.it/",
            iconURL: "icons/TFO-Meran-icon.png"
        }
    ]
});

page.setBackgroundGradient({
    backgroundGradientColors: ["#26ebfb", "#22acff", "#2561fc"],
    backgroundGradientAngle: -45,
    backgroundGradientSpeed: 10
});

document.body.appendChild(page.getElement());