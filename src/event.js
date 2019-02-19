export default class Event {
    constructor(event) {
        if (null == event) {
            var event = {};
        }

        this.title = event.title || 'Meet Doge at dogetalks.com';
        this.description = event.description || 'This is example event of Doge add-to-calendar. Watch online lectures at dogetalks.com';
        this.start_date = event.start_date || new Date();
        this.end_date = event.end_date || new Date();
        this.location = event.location || '';
        this.url = event.url ? event.url.replace('#', '') : 'https://github.com/dogecodes/add-to-calendar';
    }

    getStartDate() {
        return (this.start_date.toISOString().replace(/-|:|\.\d+/g, '') || '');
    }

    getEndDate() {
        return (this.end_date.toISOString().replace(/-|:|\.\d+/g, '') || '');
    }

    getTitle() {
        return (this.title || '');
    }

    getUrl() {
        return (this.url || '');
    }

    getDescription() {
        return (this.description || '');
    }

    getLocation() {
        return (this.location || '');
    }
}