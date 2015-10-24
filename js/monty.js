$(document).ready(
  function(){
      var clarifai = new Clarifai(
          {
            'clientId': 'WMZrJ33oE9fISVNAPLZNVtnMhXIC9reQ9YGtAuV2',
            'clientSecret': '8lPWDBKJDIDNlnrBEiKjqnfWYlqJ8JEOGH76oseS' 
          }
      );
  }  


  clarifai.positive('http://01271bfede0954168758-da1041207dde8e2d0a75af6fbedebedf.r83.cf1.rackcdn.com/20080405030131.jpg', 'african swallow', callback);
  clarifai.positive('http://ibc.lynxeds.com/files/pictures/IMG_6493.JPG', 'african swallow', callback);
  clarifai.positive('http://1.bp.blogspot.com/-v4qJdn7yIIA/UltdHHWHl6I/AAAAAAAAMl8/PQlj8_To7n0/s1600/19swallow1.jpg', 'african swallow', callback);
  clarifai.positive('http://www.oiseaux.net/photos/thierry.helsens/images/hirondelle.d.ethiopie.thhe.7g.jpg', 'african swallow', callback);

  clarifai.negative('http://www.allaboutbirds.org/guide/PHOTO/LARGE/barn_swallow_1.jpg', 'african swallow', callback)
  clarifai.negative('https://upload.wikimedia.org/wikipedia/commons/3/31/BarnSwallow_cajay.jpg', 'african swallow', callback)
  clarifai.negative('http://www.ontfin.com/Word/wp-content/uploads/2013/07/Barn_Swallow7.jpg', 'african swallow', callback)
  clarifai.negative('http://img13.deviantart.net/a77a/i/2011/039/f/4/barn_swallow_by_charleswb-d394o5h.jpg', 'african swallow', callback)

  clarifai.train('african swallow', callback)

  clarifai.negative('http://01271bfede0954168758-da1041207dde8e2d0a75af6fbedebedf.r83.cf1.rackcdn.com/20080405030131.jpg', 'european swallow', callback);
  clarifai.negative('http://ibc.lynxeds.com/files/pictures/IMG_6493.JPG', 'european swallow', callback);
  clarifai.negative('http://1.bp.blogspot.com/-v4qJdn7yIIA/UltdHHWHl6I/AAAAAAAAMl8/PQlj8_To7n0/s1600/19swallow1.jpg', 'european swallow', callback);
  clarifai.negative('http://www.oiseaux.net/photos/thierry.helsens/images/hirondelle.d.ethiopie.thhe.7g.jpg', 'european swallow', callback);

  clarifai.positive('http://www.allaboutbirds.org/guide/PHOTO/LARGE/barn_swallow_1.jpg', 'european swallow', callback)
  clarifai.positive('https://upload.wikimedia.org/wikipedia/commons/3/31/BarnSwallow_cajay.jpg', 'european swallow', callback)
  clarifai.positive('http://www.ontfin.com/Word/wp-content/uploads/2013/07/Barn_Swallow7.jpg', 'european swallow', callback)
  clarifai.positive('http://img13.deviantart.net/a77a/i/2011/039/f/4/barn_swallow_by_charleswb-d394o5h.jpg', 'european swallow', callback)

  clarifai.train('european swallow', callback)


  //make x an image url variable that is passed from the html file.
  clarifai.predict(x,'european swallow')
  clarifai.predict(x,'african swallow')


  if 
);
