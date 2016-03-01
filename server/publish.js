Meteor.publish('transactions', function() {
    return Transactions.find({ author: this.userId});
});
