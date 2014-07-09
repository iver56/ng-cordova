angular.module('ngCordova.plugins.globalization', [])

.factory('$cordovaGlobalization', ['$q', function ($q) {

  return {
    getPreferredLanguage: function () {
      var q = $q.defer();

      navigator.globalization.getPreferredLanguage(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    getLocaleName: function () {
      var q = $q.defer();

      navigator.globalization.getLocaleName(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    getFirstDayOfWeek: function () {
      var q = $q.defer();

      navigator.globalization.getFirstDayOfWeek(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    // "date" parameter must be a JavaScript Date Object.
    dateToString: function(date, options) {
      var q = $q.defer();

      navigator.globalization.dateToString(
        date,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    stringToDate: function(dateString, options) {
      var q = $q.defer();

      navigator.globalization.stringToDate(
        dateString,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    getDatePattern: function(options) {
      var q = $q.defer();

      navigator.globalization.getDatePattern(
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    getDateNames: function(options) {
      var q = $q.defer();

      navigator.globalization.getDateNames(
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    }

    // TODO
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern
  }

}]);
