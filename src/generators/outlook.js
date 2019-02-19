import Generator from './generator';

export default class OutlookGenerator extends Generator {
    getLink() {
        return encodeURI(
            'data:text/calendar;charset=utf8,' +
                [
                    'BEGIN:VCALENDAR',
                    'VERSION:2.0',
                    'BEGIN:VEVENT',
                    'SUMMARY:' + this.event.getTitle(),
                    'DESCRIPTION:' + this.event.getDescription(),
                    'DTSTART:' + this.event.getStartDate(),
                    'DTEND:' + this.event.getEndDate(),
                    'URL:' + this.event.getUrl(),
                    'LOCATION:' + this.event.getLocation(),
                    'END:VEVENT',
                    'END:VCALENDAR'
                ].join('\n')
        );
    }
}
