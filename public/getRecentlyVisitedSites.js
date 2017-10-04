
getRecentlyVisitedSites = () => {
  const microsecondsPerDay = 1000 * 60 * 60 * 24;
  const oneDayAgo = (new Date).getTime() - microsecondsPerDay;
  const siteNumber = 8;

  const urlPart = "https://plus.google.com/_/favicon?domain_url=";

  const processVisitsWithUrl = (url) => {
          return (visitItems) => { processVisits(url, visitItems);};
        };

  let siteboxItemsParams = new Map;

  chrome.history.search({
      'text': '',
      'startTime': oneDayAgo,
      'maxResults': siteNumber,
    },
    (historyItems) => {
      let i = siteNumber;
      for (i;i--;) {
        console.log(historyItems[i].url);
        console.log(historyItems[i].title);

        siteboxItemsParams
          .set('url', historyItems[i].url)
          .set('title', historyItems[i].title);
      }
    });
}

getRecentlyVisitedSites();