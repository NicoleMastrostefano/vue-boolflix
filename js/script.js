var app = new Vue (
  {
    el:"#root",
    data: {
      movies:[],
      search:"",
      imgPrefix:"https://image.tmdb.org/t/p/w220_and_h330_face",
      defaultPoster:"img/images.png",
      flags:["it","en","fr"]
    },

  methods:{

    FilterMovie(){
      console.log(app.search);
      {

      axios

      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key: "adb08e6d46258c873174c3f5773f620a",
          language:"it-IT",
          query:this.search
        }
      })

      .then((result)=> {
        console.log(result.data.results);
        this.movies=result.data.results
      })
    }
  },

  // Funzione per arrotondare per eccesso all’unità successiva
    getAverage(star) {
      return Math.ceil(star / 2);
    },

  // funzione per generare le bandiere
    getFlag(lang){
      return 'img/'+ lang +'.png';
    }
  },

  }
)
