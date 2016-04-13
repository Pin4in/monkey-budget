
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
