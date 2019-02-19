import AppleGenerator from './generators/apple';
import GoogleGenerator from './generators/google';
import OutlookGenerator from './generators/outlook';
import YahooGenerator from './generators/yahoo';

class Calendar {
    constructor(event) {
        this.event = event;

        this.generators = {
            'apple': new AppleGenerator(event),
            'google': new GoogleGenerator(event),
            'outlook': new OutlookGenerator(event),
            'yahoo': new YahooGenerator(event),
        };
    }

    links() {
        return {
            apple: this.generators.apple.getLink(),
            google: this.generators.google.getLink(),
            outlook: this.generators.outlook.getLink(),
            yahoo: this.generators.yahoo.getLink(),
        };
    }
}

export default Calendar;