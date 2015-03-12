module.exports = function(grunt){
    grunt.initConfig({
        uglify: {
            js: {
                files: {
                    'build/js/scripts.min.js': ['content/js/*.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["content/elements/less/", "content/less/"]
                },
                files: {
                    "content/elements/css/elements.css": "content/elements/less/*.less",
                    "content/css/style.css": "content/less/*.less"
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/styles.min.css': ['content/elements/elements.css', 'content/css/style.css' ]
                }
            }
        },
        watch: {
            js: {
                files: ['content/js/*.js'],
                tasks: ['uglify:js']

            },
            less: {
                files: ['content/elements/less/*.less', 'content/less/*.less'],
                tasks: ['less']
            },
            css: {
                files: ['content/css/style.css', 'content/elements/css/elements.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
};
