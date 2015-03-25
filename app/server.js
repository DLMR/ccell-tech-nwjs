(function(){
  var i = 0;
  exports.callback = function () {
    console.log(i + ": " + window.location);
    return i++;
  }
})();
