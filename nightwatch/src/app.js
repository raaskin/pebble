/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');

var main = new UI.Card({
  title: 'NightWatch',
  icon: 'images/menu_icon.png',
  subtitle: 'Are you awake?',
  body: 'Press any button if yes.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'NightWatch',
        icon: 'images/menu_icon.png',
        subtitle: 'Ok, so you are awake'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
  var connection = new WebSocket('93.56.96.161:10000', ['soap', 'xmpp']);
  connection.emit('AWAKE');
});

main.on('click', 'select', function(e) {
    var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'NightWatch',
        icon: 'images/menu_icon.png',
        subtitle: 'Ok, so you are awake'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
  var connection = new WebSocket('93.56.96.161:10000', ['soap', 'xmpp']);
  connection.emit('AWAKE');
});

main.on('click', 'down', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'NightWatch',
        icon: 'images/menu_icon.png',
        subtitle: 'Ok, so you are awake'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
  var connection = new WebSocket('93.56.96.161:10000', ['soap', 'xmpp']);
  connection.emit('AWAKE');
});
