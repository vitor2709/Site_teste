module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
            dist:{
                options:{
                    style: 'compressed'
                },
                files:{
                    'dist/styles/main.css': 'src/styles/main.scss'
                }
            }
        },
        watch:{
            sass:{
                files:'src/styles/**/*.scss',
                tasks:['sass']
            }
        }
    })
}