Transactions = new Mongo.Collection('transactions');

Transactions.allow({
    insert: function(userId, Doc){
        return !!userId;
    }
});

Category = new SimpleSchema({
    name: {
        type: String,
    }
})

TransactionSchema = new SimpleSchema({

    title: {
        type: String,
        label: "Title"
    },
    price: {
        type: Number,
        label: "Price"
    },
    category: {
        type: [Category]
    },
    desc: {
        type: String,
        label: "Description"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }

});


Transactions.attachSchema(TransactionSchema);
