
import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		csslibs: `${buildFolder}/css/libs/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		video: `${buildFolder}/video/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		js: [`${srcFolder}/js/libs/*.js`, `!${srcFolder}/js/main.js`],

		// Если нуже jquery и нужно объединённые файлы
		js: [`${srcFolder}/js/jquery-3.6.3.min.js`, `${srcFolder}/js/libs/*.js`, `!${srcFolder}/js/main.js`],
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		video: `${srcFolder}/video/**/*`,
		svg: `${srcFolder}/img/**/*.svg`,
		sass: `${srcFolder}/sass/style.sass`,
		css: `${srcFolder}/css/*.css`,
		csslibs: `${srcFolder}/css/libs/*.css`,
		html: `${srcFolder}/*.html`,
		sprite: `${srcFolder}/img/sprite/**/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		sass: `${srcFolder}/sass/**/*.sass`,
		css: `${srcFolder}/css/*.css`,
		csslibs: `${srcFolder}/css/libs/*.css`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		video: `${srcFolder}/img/**/*`,
		svg: `${srcFolder}/img/sprite/**/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}