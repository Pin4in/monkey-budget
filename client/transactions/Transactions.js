/* global Template*/
/* global Transactions*/

Template.Transactions.onCreated(function() {
    const self = this;
    self.autorun(function() {
        self.subscribe('transactions');
    });
});

Template.Transactions.helpers({
    transactions: ()=> {
        return Transactions.find({});
    }
});

Template.Transactions.events({
    'click .new-recipe': () => {
        Session.set('NewRecipe', true);
    }
})
