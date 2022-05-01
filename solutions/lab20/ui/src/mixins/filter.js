export const filter = {
    computed: {
        filterIt: function(){
          var self = this;
          return this.articles.filter(function(a){
            return a.title.indexOf(self.searchDetails) > - 1
          }
          )
        },
      }
}