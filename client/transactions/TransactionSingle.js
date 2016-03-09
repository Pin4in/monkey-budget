Template.TransactionSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleTransaction', id);
    });
});

Template.TransactionSingle.helpers({
    transaction: ()=> {
        var id = FlowRouter.getParam('id');
        return Transactions.findOne({_id: id});
    }
});
