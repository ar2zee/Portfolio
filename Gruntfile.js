module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

			sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css/sass/',
        src: ['**/*.{scss,sass}'],
        dest: 'css',
        ext: '.css'
      }]
    }
  },

  watch: {
    css: {
    files: ['css/sass/**/*.{scss,sass}'],
    tasks: ['sass'],
    options: {
        spawn: false,
        },
    }
}
		    
});

  

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass' , 'watch']);

};