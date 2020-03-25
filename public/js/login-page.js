var loginWindow;

window.addEventListener('message', function(e) {
  if (e.data !== 'popup-done') { return; }
  window.location.replace('/auth/popup-done');
});


document.querySelectorAll('.button__ghost').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var url = link.getAttribute('href');
    var width = 500, height = 370;
    if (url.indexOf('/auth/google') === 0) {
      width = 470; height = 580;
    }
    var w = window.outerWidth - width, h = window.outerHeight - height;
    var left = Math.round(window.screenX + (w / 2));
    var top = Math.round(window.screenY + (h / 2.5));

    loginWindow = window.open(url, 'LogIn', 
      'width='+width+',height='+height+',left='+left+',top='+top+
      ',toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0');
  });
});