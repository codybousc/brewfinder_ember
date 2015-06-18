import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPub: function() {
      var newPub = this.store.createRecord('pub', {
        name: this.get('name'),
        body: this.get('body'),
        image: this.get('image')
      });
      newPub.save();
      this.setProperties({
        name: '',
        body: '',
        image: ''
      });
    }
  }
});
