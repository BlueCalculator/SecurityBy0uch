var os = navigator.platform;

console.log(document.cookie)

console.log(os)
document.getElementById("stuffin").style.display = "none";



var safe = "YOU ARE GOOD"

function DetectOS()
{    
    if (os == "Win32") {
        var safe = "NOT GOOD"
    }
}

if (os == "Win32") {
    var safe = "NOT GOOD"
}

function ComeIN() {
    document.getElementById("stuffin").style.display = "none";
}

function getOUT() {
    const links = ["https://www.todayifoundout.com/wp-content/uploads/2019/04/flipping-the-bird.png", "https://www.google.com/search?q=is+it+illegal+to+lie+on+resume&rlz=1C1RXQR_enUS1088US1088&oq=Is+it+illegal+to+lie+on+re&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBggCEEUYOTIHCAMQABiABDIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIGCAcQRRg80gEJMTEzOTRqMWo5qAIAsAIA&sourceid=chrome&ie=UTF-8#:~:text=People%20also%20ask-,What%20happens%20if%20I%20lie%20on%20my%20resume%3F,Jul%2029%2C%202023,-Lying%20on%20Your", "https://www.google.com/search?q=networking+for+dummies&rlz=1C1RXQR_enUS1088US1088&oq=networking+for+dummies&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyCggBEC4Y1AIYgAQyCggCEC4Y1AIYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyDQgIEAAYhgMYgAQYigXSAQg2NTg1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=Better+jobs+than+it+for+a+school&rlz=1C1RXQR_enUS1088US1088&oq=Better+jobs+than+it+for+a+school&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDY4MDZqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=autism+test&rlz=1C1RXQR_enUS1088US1088&oq=autism+test&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBwgBEAAYgAQyBwgCEAAYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyDQgHEAAYgwEYsQMYgAQyBwgIEAAYgAQyCggJEAAYsQMYgATSAQgyNTQ2ajBqOagCALACAA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=iq+test&rlz=1C1RXQR_enUS1088US1088&oq=iq+test&gs_lcrp=EgZjaHJvbWUqDwgAEAAYFBiHAhixAxiABDIPCAAQABgUGIcCGLEDGIAEMg8IARAAGBQYhwIYsQMYgAQyBwgCEAAYgAQyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBwgFEAAYgAQyCggGEAAYsQMYgAQyBggHEAUYQNIBCDM3MjdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=slow+mined&rlz=1C1RXQR_enUS1088US1088&oq=slow+mined&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQyCAgJEAAYDRge0gEIMTkzOWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8"];
    const random = Math.floor(Math.random() * links.length);
    console.log(links[random]);
    window.location.href = links[random];
}

function GoodW() {
    let Ltext = "<p>" + safe + "</p>";
    var loadupLt = document.getElementById("loadupLt")
    loadupLt.innerHTML = Ltext;

    if (os == "Win32") {
        loadupLt.style.color = "red";
        setTimeout(getOUT, 1500);
        document.cookie = "BADIE"
    }
    else {
        loadupLt.style.color = "green";
        setTimeout(ComeIN, 1500);
        document.cookie = "OKAY"
    }
}
// DetectOS()

function securityBy0uch() {
    document.getElementById("stuffin").style.display = "block";
    DetectOS();
    let text = "<p>YOUR OS = " + os + "</p>";
    const myTimeout = setTimeout(GoodW, 3500);
    console.log(text)
    document.getElementById("loadupt").innerHTML = text;
}


function Ouchd() {
    if (document.cookie == "BADIE" ) {
        const links = ["https://www.todayifoundout.com/wp-content/uploads/2019/04/flipping-the-bird.png", "https://www.google.com/search?q=is+it+illegal+to+lie+on+resume&rlz=1C1RXQR_enUS1088US1088&oq=Is+it+illegal+to+lie+on+re&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBggCEEUYOTIHCAMQABiABDIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIGCAcQRRg80gEJMTEzOTRqMWo5qAIAsAIA&sourceid=chrome&ie=UTF-8#:~:text=People%20also%20ask-,What%20happens%20if%20I%20lie%20on%20my%20resume%3F,Jul%2029%2C%202023,-Lying%20on%20Your", "https://www.google.com/search?q=networking+for+dummies&rlz=1C1RXQR_enUS1088US1088&oq=networking+for+dummies&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyCggBEC4Y1AIYgAQyCggCEC4Y1AIYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyDQgIEAAYhgMYgAQYigXSAQg2NTg1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=Better+jobs+than+it+for+a+school&rlz=1C1RXQR_enUS1088US1088&oq=Better+jobs+than+it+for+a+school&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDY4MDZqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=autism+test&rlz=1C1RXQR_enUS1088US1088&oq=autism+test&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBwgBEAAYgAQyBwgCEAAYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyDQgHEAAYgwEYsQMYgAQyBwgIEAAYgAQyCggJEAAYsQMYgATSAQgyNTQ2ajBqOagCALACAA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=iq+test&rlz=1C1RXQR_enUS1088US1088&oq=iq+test&gs_lcrp=EgZjaHJvbWUqDwgAEAAYFBiHAhixAxiABDIPCAAQABgUGIcCGLEDGIAEMg8IARAAGBQYhwIYsQMYgAQyBwgCEAAYgAQyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBwgFEAAYgAQyCggGEAAYsQMYgAQyBggHEAUYQNIBCDM3MjdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8", "https://www.google.com/search?q=slow+mined&rlz=1C1RXQR_enUS1088US1088&oq=slow+mined&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMgkICBAAGA0YgAQyCAgJEAAYDRge0gEIMTkzOWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8"];
       const random = Math.floor(Math.random() * links.length);
       console.log(links[random]);
       window.location.href = links[random];
    }
    if (document.cookie == "OKAY") {
        setTimeout(ComeIN, 1);
    }
    else {
        securityBy0uch()
    }
}
