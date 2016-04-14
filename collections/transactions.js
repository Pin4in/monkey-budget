Transactions = new Mongo.Collection('transactions');

Transactions.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});


Category = new SimpleSchema({
  name: {
    type: String
  }
});

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
    },
    inMenu: {
      type: Boolean,
      defaultValue: false,
      optional: true,
      autoform: {
        type: "hidden"
      }
    }

});

// Add new method to update inMenu state
Meteor.methods({
  toggleMenuItem: function(id, currentState) {
    Transactions.update(id, {
      $set: {
        inMenu: !currentState
      }
    });
  },
  deleteRecipe: function(id) {
      Transactions.remove(id);
  }

});


Transactions.attachSchema(TransactionSchema);
