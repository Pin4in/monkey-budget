/* global Meteor */
/* global check */
/* global Transactions */

Meteor.publish('transactions', function() {
    return Transactions.find({ author: this.userId});
});


Meteor.publish('singleTransaction', function(id) {
    check(id, String);
    return Transactions.find({_id: id});
});
