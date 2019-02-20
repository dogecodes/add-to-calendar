# add-to-calendar
Simple and developer friendly add to calendar button and links

# Example

```html
<ul>
    <li><a id="apple" href="">Apple Calendar</a></li>
    <li><a id="google" href="">Google Calendar</a></li>
    <li><a id="yahoo" href="">Yahoo Calendar</a></li>
    <li><a id="outlook" href="">Outlook Calendar</a></li>
</ul>
<script type="text/javascript" src="./dist/add-to-calendar.js"></script>
<script type="text/javascript">
    var event = new window.calendar.Event({
        'title': 'Meet Doge at dogetalks.com',
        'description': 'This is example event of Doge add-to-calendar. Watch online lectures at dogetalks.com',
        'start_date': new Date('2042-01-01'),
        'end_date': new Date('2042-01-02'),
        'location': 'Internet Ave 5',
        'url': 'https://github.com/dogecodes/add-to-calendar',
    });
    var calendar = new window.calendar.Calendar(event);

    var links = calendar.links();

    for (link in links) {
        document.getElementById(link).href = links[link];
    }
</script>
```
