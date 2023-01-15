import fileInclude from "gulp-file-include";
import concat from "gulp-concat";
import uglify from "gulp-uglify";


export const js = () => {
	app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fileInclude())

		// Закомментировать если не надо объединять файлы 
		.pipe(concat('vendors.js'))

		.pipe(uglify())
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
	return app.gulp.src(['src/js/main.js'])
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS Main",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fileInclude())
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());

}