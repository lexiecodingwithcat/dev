// import ical from "ical-generator";
import ical, { ICalAlarmType } from "ical-generator";

export async function GET() {
  const cal = ical({
    name: "Camping Group Calendar",
    timezone: "America/Edmonton"
  });

  // 所有露营活动
  const events = [
    {
      start: "2026-07-04T10:00:00",
      end: "2026-07-05T12:00:00",
      summary: "🏕 Kutony",
      description: "Kutony campsite, Banff National Park",
      location: "Kutony Campground, Banff NP"
    },
    {
      start: "2026-07-06T10:00:00",
      end: "2026-07-07T12:00:00",
      summary: "🏕 Revelstone",
      description: "Revelstone campsite, Jasper National Park",
      location: "Revelstone Campground, Jasper NP"
    },
    {
      start: "2026-07-25T10:00:00",
      end: "2026-07-26T12:00:00",
      summary: "🏕 Kicking Horse",
      description: "Kicking Horse campsite, Yoho National Park",
      location: "Kicking Horse Campground, Yoho NP"
    },
    {
      start: "2026-08-02T10:00:00",
      end: "2026-08-03T12:00:00",
      summary: "🏕 Two Jack Lake",
      description: "Two Jack Lake campsite, Banff National Park",
      location: "Two Jack Lake Campground, Banff NP"
    },
    {
      start: "2026-08-15T10:00:00",
      end: "2026-08-16T12:00:00",
      summary: "🏕 Jasper Whistler",
      description: "Whistler campsite, Jasper National Park",
      location: "Whistler Campground, Jasper NP"
    },
    {
      start: "2026-09-20T10:00:00",
      end: "2026-09-21T12:00:00",
      summary: "🏕 Tunnel Mountain",
      description: "Tunnel Mountain campsite, Banff National Park",
      location: "Tunnel Mountain Campground, Banff NP"
    }
  ];


  events.forEach(event => {
    const start = new Date(event.start);
    const end = new Date(event.end);

    cal.createEvent({
      start,
      end,
      summary: event.summary,
      description: event.description,
      location: event.location,
      alarms: [
        {
          type: ICalAlarmType.display,
          trigger: -24 * 60 * 60 
        }
      ]
    });
  });

  return new Response(cal.toString(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

