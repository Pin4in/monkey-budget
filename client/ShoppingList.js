/* global Template*/
/* global Transactions*/

Template.ShoppingList.onCreated(function() {
    const self = this;
    self.autorun(function() {
        self.subscribe('transactions');
    });
});

Template.ShoppingList.helpers({
    shoppingList: ()=> {
        return Transactions.find({inMenu: true});
    }
});
