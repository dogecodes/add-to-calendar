import Generator from './generator';

export default class GoogleGenerator extends Generator {
    getLink() {
        return encodeURI(
            [
                'https://www.google.com/calendar/render',
                '?action=TEMPLATE',
                '&text=' + this.event.getTitle(),
                '&details=' + this.event.getDescription(),
                '&dates=' + this.event.getStartDate(),
                '/' + this.event.getEndDate(),
                '&location=' + this.event.getLocation(),
                '&sprop=&sprop=name:'
            ].join('')
        );
    }
}
