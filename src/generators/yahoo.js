import Generator from './generator';

export default class YahooGenerator extends Generator {
    getLink() {
        return encodeURI(
                [
                    'https://calendar.yahoo.com/?v=60&view=d&type=20',
                    '&title=' + this.event.getTitle(),
                    '&desc=' + this.event.getDescription(),
                    '&st=' + this.event.getStartDate(),
                    '&et=' + this.event.getEndDate(),
                    '&in_loc=' + this.event.getLocation()
                ].join('')
        );
    }
}
