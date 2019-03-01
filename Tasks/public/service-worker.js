workbox.precaching.precache(__precacheManifest);

workbox.precaching.precache([
  "https://code.jquery.com/jquery-3.3.1.slim.min.js",
  "https://getbootstrap.com/docs/4.2/dist/js/bootstrap.bundle.min.js",
  "https://use.fontawesome.com/releases/v5.7.1/js/solid.js",
  "https://use.fontawesome.com/releases/v5.7.1/js/fontawesome.js"
]);

workbox.precaching.addRoute();

workbox.routing.registerRoute(
  /data.json/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(/events[$\?]/, ({ url }) => {
  const searchParams = new URL(url).searchParams;
  const descr = JSON.parse(searchParams.get("descr"));
  const createdDateTime = formatDate(new Date());
  const content = generateEvents(descr, createdDateTime);
  const filename = `events_${createdDateTime}.ics`;
  return new Response(content, {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "text/calendar",
      "Content-Disposition": `attachment; filename="${filename}"`
    }
  });
});

function generateEvents(descr, createdDateTime) {
  const lines = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push("CALSCALE:GREGORIAN");
  lines.push("PRODID:-//TaskGenerator//TaskGenerator//EN");
  descr.forEach(function(item) {
    appendEvent(lines, item, createdDateTime);
  });
  lines.push("END:VCALENDAR");

  const result = lines.join("\r\n");

  return result;
}

function appendEvent(lines, descr, createdDateTime) {
  const dueDatetime = descr.due
    ? formatDate(new Date(descr.due))
    : createdDateTime;
  const uid = createUID();
  lines.push("BEGIN:VTODO");
  lines.push("CREATED:" + createdDateTime);
  lines.push("DTSTAMP:" + createdDateTime);
  lines.push("LAST-MODIFIED:" + createdDateTime);
  lines.push("DUE:" + dueDatetime);
  lines.push("UID:" + uid);
  lines.push("SUMMARY:" + descr.label);
  lines.push("STATUS:NEEDS-ACTION");
  lines.push("PERCENT-COMPLETE:0");
  lines.push("PRIORITY:0");
  lines.push("END:VTODO");
}

function createUID() {
  let dt = new Date().getTime();
  const result = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function(c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );

  return result;
}

function formatDate(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const result = [year, month, day, "T", hour, minutes, seconds, "Z"].join("");

  return result;
}
