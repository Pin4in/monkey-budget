/* global Template*/
/* global Transactions*/

Template.Menu.onCreated(function() {
    const self = this;
    self.autorun(function() {
        self.subscribe('transactions');
    });
});

Template.Menu.helpers({
    transactions: ()=> {
        return Transactions.find({inMenu: true});
    }
});
