module.exports = {
  autoClose: 0,
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    ? process.env.PUPPETEER_EXECUTABLE_PATH
    : false,
  browserArgs: [
    "--disable-web-security",
    "--no-sandbox",
    "--disable-web-security",
    "--aggressive-cache-discard",
    "--disable-cache",
    "--disable-application-cache",
    "--disable-offline-load-stale-cache",
    "--disk-cache-size=0",
    "--disable-background-networking",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-sync",
    "--disable-translate",
    "--hide-scrollbars",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-first-run",
    "--safebrowsing-disable-auto-update",
    "--ignore-certificate-errors",
    "--ignore-ssl-errors",
    "--ignore-certificate-errors-spki-list",
  ],
};
