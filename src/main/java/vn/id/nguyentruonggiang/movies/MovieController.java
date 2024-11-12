package vn.id.nguyentruonggiang.movies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
  @Autowired
  private MovieService movieService;

  @GetMapping
  public ResponseEntity<List<Movie>> allMovies() {
    return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
  }

  @GetMapping("/{imdbid}")
  public ResponseEntity<Movie> getMovieById(@PathVariable String imdbid) {
    return movieService.getMovieById(imdbid)
        .map(movie -> new ResponseEntity<>(movie, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}
