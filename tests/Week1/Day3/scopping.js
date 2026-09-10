const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion === "Chrome") {
        let browserVersion = "Safari";
        console.log("Inside Block:", browserVersion);
    }

    console.log("Outside Block, Inside Function:", browserVersion);
}

getBrowserVersion();

