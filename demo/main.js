var url = "http://digitalent.cc:8080/v1";

var getJSON = function(endpoint, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + endpoint, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
