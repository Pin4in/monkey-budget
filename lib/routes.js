FlowRouter.route('/', {
    name: 'home',
    action() {
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
