var app = new Vue (
  {
    el:"#root",
    data: {
      movies:[],
      search:"",
      imgPrefix:"https://image.tmdb.org/t/p/w220_and_h330_face",
      defaultPoster:"img/images.png",
      flags:["it","en","fr"],
    },

  methods:{

    FilterMovie(){
      console.log(app.search);
      {if (this.search!= '') {
        this.movies = [];


        const params = {
          params: {
            api_key: "adb08e6d46258c873174c3f5773f620a",
            language:"it-IT",
            query:this.search
          }
        }

        axios

        .get("https://api.themoviedb.org/3/search/movie", params)
        .then((result)=> {
          this.movies=result.data.results
        })

      }
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

// provare a fare un concat per le serie tv
// var hege = ["Cecilie", "Lone"];
// var stale = ["Emil", "Tobias", "Linus"];
// var children = hege.concat(stale);
