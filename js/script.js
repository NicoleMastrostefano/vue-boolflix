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
      genreUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=10a6546780c9082d52c54eb9c07f5d67",
      genreSelected:"all",
      loading: true,
    },

  methods:{
    //  chiamata generi
    filterGenres() {
    axios
      .get(this.genreUrl)
      .then(response => {
        this.genres = response.data.genres;
      })
    },

    // ricerca per nome
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
          this.movies=this.movies.concat(result.data.results)
        })

        axios
        .get("https://api.themoviedb.org/3/search/tv", params)
        .then((result)=> {
          this.movies=this.movies.concat(result.data.results)
        })
        .finally(() => this.loading = false)
      }}

    },

    // Funzione per arrotondare per eccesso all’unità successiva
    getAverage(star) {
      return Math.ceil(star / 2);
    },

    // funzione per generare le bandiere
    getFlag(lang){
      return 'img/'+ lang +'.png';
    },

    getGenre(){}

  },

  created() {
    this.filterGenres();

  },

}
)
