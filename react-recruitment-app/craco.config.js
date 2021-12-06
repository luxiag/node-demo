
module.exports = {
    style:{
        postcss:{
            mode: "extends" /* (default value) */ || "file",
            plugins: [], // Additional plugins given in an array are appended to existing config.
            env: {
                autoprefixer: { /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */ },
                stage: 3, /* Any valid stages: https://cssdb.org/#staging-process. */
                features: { /* Any CSS features: https://preset-env.cssdb.org/features. */ }
            },

        }
    }
}
