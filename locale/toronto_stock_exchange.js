//! moment-holiday.js locale configuration
//! locale : toronto_stock_exchange
//! author : Matthew Rowlandson : https://github.com/Treeless
//! https://www.stockmarketclock.com/exchanges/tsx/market-holidays/2019
//! Note, might need updating next year in 2020 but these shouldn't change often

(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;
  moment.holidays.toronto_stock_exchange = {
    "New Year's Day": {
      date: '1/1', //Jan 1st
    },
    "Family Day": {
      date: "2/18" //feb 18th
    },
    "Good Friday": {
      date: "4/19" //apr 19th
    },
    "Victoria Day": {
      date: "5/10" //may 20th
    },
    "Canada Day": {
      date: "7/1" //jul 1st
    },
    "Civic Holiday": {
      date: "8/5" //aug 5th
    },
    "Labour day": {
      date: "9/2" //sept 2nd
    },
    "Thanksgiving Day": {
      date: "10/14" //oct 14th
    },
    "Christmas Eve Day": {
      date: "12/24" //dec 24th (open 9:30-1pm) but im just going to put this here
    },
    "Christmas Day": {
      date: "12/25" //dec 25th
    },
    "Boxing Day": {
      date: "12/26" //dec 26th
    }
  };

  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) { module.exports = moment; }
}).call(this);