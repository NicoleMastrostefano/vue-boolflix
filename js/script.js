var app = new Vue (
  {
    el:"#root",
    data: {
      movies:[],

    },

  methods:{
    FilterMovie(){


      axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key: "adb08e6d46258c873174c3f5773f620a",
          language:"it-IT",
          query:
        }
      })
      .then((result)=> {


      })
    }
  }
}
}


)
