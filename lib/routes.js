/* global Meteor */
/* global Accounts */
/* global FlowRouter */
/* global BlazeLayout */


if(Meteor.isClient) {

  Accounts.onLogin(function() {
    FlowRouter.go('transactions');
  });

  Accounts.onLogout(function() {
    FlowRouter.go('home');
  });

}

// If no user go to HOME page
FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);


FlowRouter.route('/', {
  name: 'home',
  action() {
    // If user authorised go to TRANSACTIONS
    if(Meteor.userId()) {
      FlowRouter.go('transactions');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/transactions', {
  name: 'transactions',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Transactions'});
  }
});

FlowRouter.route('/transaction/:id', {
  name: 'transaction',
  action() {
    BlazeLayout.render('MainLayout', { main: 'TransactionSingle'});
  }
});


FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});
