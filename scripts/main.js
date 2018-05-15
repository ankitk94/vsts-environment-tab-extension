
VSS.ready(function () {
    console.log(JSON.stringify(VSS.getConfiguration()));
});

VSS.register("registeredEnvironmentObject", {
    pageTitle: function(state) {
        return "Hello Tab";
    },
    updateContext: function(tabContext) { 
       /* tabContext will follow the contract for the extension, this function will be called on any update in context.*/
       console.log("Updating");
        console.log(JSON.stringify(tabContext));
    },
    isInvisible: function(state) {
        return false;
    },
    isDisabled: function(state) {
        return false;
    },
    getActionContext: function() {
        return "extension's context, for commands related to this extension.";
    }
});
