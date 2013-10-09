module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.description %>, <%= pkg.version %> <%= pkg.homepage %>\n' +
            'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, <%= pkg.license.type %> license ' +
            '<%= pkg.license.url %>*/\n',

        jshint:{
            files: ['*.js'],
            options:{
                'browser': true,
                'node': true,
                /*'camelcase': true,*/
                'curly': true,
                'eqeqeq': true,
                'eqnull': true,
                'forin': true,
                'immed': true,
                'indent': 4,
                /*'latedef': true,*/
                'laxbreak': true,
                'laxcomma': true,
                'lastsemic': true,
                'loopfunc': true,
                'noarg': true,
                'newcap': true,
                'plusplus': false,
                'quotmark': 'single',
                'regexp': true,
                'shadow': true,
                'smarttabs': false,
                'strict': false,
                'sub': true,
                'trailing': true,
                'undef': true,
                'unused': true,
                ignores: ['bower_components', 'node_modules']
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

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('test', ['jshint']);
};
