var Friends = {

  $friends: $('#friends'),

  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
    Friends.render();
  },

  render: function() {
    Friends.$friends.html('');
    Friends._data.forEach(friend => Friends.renderFriend(friend));
  },

  renderFriend: function(name) {
    console.log(name);
    var friend = {name: name};
    var $friend = FriendView.render(friend);
    Friends.$friends.append($friend);
  }

};