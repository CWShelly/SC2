
$(document).ready(function(){


  SC.initialize({
    client_id: '36c6f563761f4dfaee54eabf1dce900a',
    redirect_uri: 'http://localhost:8080/callback.html'
  });


//for some reason, this works even when the following commented-out code is commented out.

  // SC.get('users/djangodjango').then(function(user){console.log('Forss', user);});
  //
  // SC.get('tracks/django-django-default').then(function(user){console.log('It\'s a deep Soulhack', user);}).catch();
  // SC.get('tracks/django-django-default').then(function(user){console.log('It\'s a deeper Soulhack', user);}).catch(function(error){
  //   console.log('catch', error);
  // });


  var connect = function(){
    SC.connect().then(function(options){console.log('success', options);}).catch(function(op){console.log('error', op);})
  };

  $('#connect').on('click', connect);

  SC.oEmbed('https://soundcloud.com/djangodjango/django-django-default', {element: oembed}).then(function(result){
    console.log('oembed', result);
  }).catch(function(err){
    console.log('oembed err', err);
  });


  SC.resolve('https://soundcloud.com/forss/soulhack').then(function(track){
    console.log('resolve', track);
  });

  });
