const gulp = require('gulp')
const series = gulp.series




function copiar(cb){
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']).pipe(gulp.dest('pastaB'))
  return cb()
}


module.exports.default = series(copiar)