var app = new Vue (
  {
    el:"#root",
    data: {
      movies:[],
      search:"",
      imgPrefix:"https://image.tmdb.org/t/p/w220_and_h330_face",
      defaultPoster:"img/not-available.jpg"

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


},
}
)



// results:{Movie List Result Object}
// poster_path
// overview
// release_date
// genre_ids
// id
// original_title
// original_language
// title
// popularity
// vote_count
// vote_average
