// Meteor.subscribe('transactions');

Template.Transactions.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('transactions');
    });
});

Template.Transactions.helpers({
    transactions: ()=> {
        return Transactions.find({});
    }
});
