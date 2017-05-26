var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

gulp.task("compilar-css", function(){
	return gulp.src("./source/scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./dist/css"));
});

gulp.task("minificar-html", function(){
	return gulp.src("./source/*.html")
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest("./dist"));
});

gulp.task("escuta-me", function(){
	gulp.watch("./source/scss/*.scss", ["compilar-css"]);
	gulp.watch("./source/*.html", ["minificar-html"]);
});
