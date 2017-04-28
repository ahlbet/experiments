var buttonTest = {
  god1: '.shards',
  drifting2: '.tragedy',
  bleeds3: '.falling',
  me4: '.nevergreen',
  deep5: '.fire',
  burning6: '.forgot',
  ash7: '.sorrow',
  remembering8: '.numb',
  forgiveness9: '.someone',
  will10: '.usual',
  empty11: '.hear',
  me12: '.true',
  over13: '.pixel',
  the14: '.pale',
  raft15: '.dusk'
}

$('button').click(function() {
  var activeID = this.id;
  $(buttonTest[activeID]).toggle();
});
