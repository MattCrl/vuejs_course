var myObject = new Vue({
  el: "#app",
  data: {
    h: 'HH',
    m: 'MM',
    s: 'SS',
    city: ''
  },
})

setInterval(function() {
  var myDate = new Date()
  myObject.h = ("0" + myDate.getHours()).slice(-2)
  myObject.m = ("0" + myDate.getMinutes()).slice(-2)
  myObject.s = ("0" + myDate.getSeconds()).slice(-2)
}, 1000)
