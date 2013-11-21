module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      my_target: {
        files: {
          'angular-scrollto.min.js': ['angular-scrollto.js']
        }
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
//   // Tasks
  grunt.registerTask('build', ['uglify']);
};