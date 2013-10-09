module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.description %>, <%= pkg.version %> <%= pkg.homepage %>\n' +
            'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, <%= pkg.license.type %> license ' +
            '<%= pkg.license.url %>*/\n',

        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                forin:true,
                indent:2,
                latedef:false,
                newcap:true,
                noarg:true,
                noempty:true,
                white:false,
                sub:true,
                undef:true,
                unused:true,
                loopfunc:true,
                expr:true,
                evil:true,
                eqnull:true
            }
        },
        uglify:{
            dist:{
                files: {
                    'dist/rainyday.min.js': ['rainyday.js']
                },
                options: {
                    banner: '<%= banner %>',
                    compress: true,
                    mangle: true,
                    preserveComments: false,
                    report: 'min'
                }
            }
        },
        watch:{
            files:['src/*.js'],
            tasks:'lint'
        }
    });


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);
};
