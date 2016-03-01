FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/new-transaction', {
    name: 'add-transaction',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Transactions'});
    }
});
