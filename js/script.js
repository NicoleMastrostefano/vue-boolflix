var app = new Vue (
  {
    el:"#root",
    data: {
      movies:[],
      search:"",
      imgPrefix:"https://image.tmdb.org/t/p/w220_and_h330_face",
      defaultPoster:"img/images.png",
      flags:["it","en","fr"],
      genres: [],
      genreUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=adb08e6d46258c873174c3f5773f620a",
    },

  methods:{

    //  chiamata generi
    filterGenres() {
    axios
      .get(this.genreUrl)
      .then(result => {
        this.genres = result.data.genres;
      })
    },

    // ricerca per titolo
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

        //chiamata serie tv
        axios
        .get("https://api.themoviedb.org/3/search/movie", params)
        .then((result)=> {
          this.movies=this.movies.concat(result.data.results)
        })

        //chiamata film
        axios
        .get("https://api.themoviedb.org/3/search/tv", params)
        .then((result)=> {
          this.movies=this.movies.concat(result.data.results)
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
    },

    //funzione per ottenere i generi
    getGenres(genre_ids) {
      let genres = [];
      genre_ids.forEach(id => {
        this.genres.forEach(genre => {
          if (genre.id == id) {
             genres=genres+genre.name +', '
          }
        })
      })
      return genres.slice(0,-2)
    },

  },


  created() {
    this.filterGenres();
  },


}
)
