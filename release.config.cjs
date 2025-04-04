/* eslint-disable no-template-curly-in-string */
module.exports = {
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    {type: 'feat', release: 'minor'},
                    {type: 'fix', release: 'patch'},
                    {type: 'docs', release: 'patch'},
                    {type: 'style', release: 'patch'},
                    {type: 'refactor', release: 'patch'},
                    {type: 'perf', release: 'patch'},
                    {type: 'test', release: 'patch'},
                    {type: 'build', release: 'patch'},
                    {type: 'ci', release: 'patch'},
                    {type: 'chore', release: 'patch'},
                    {type: 'revert', release: 'patch'},
                    {scope: 'no-release', release: false},
                ],
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    types: [
                        {type: 'feat', section: 'Features'},
                        {type: 'fix', section: 'Bug Fixes'},
                        {type: 'doc', hidden: false, section: 'Documentation'},
                        {type: 'docs', hidden: false, section: 'Documentation'},
                        {type: 'chore', hidden: true, section: 'Chores'},
                    ],
                },
            },
        ],
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: [
                    'README.md',
                    'package.json',
                    'package-lock.json',
                    'npm-shrinkwrap.json',
                ],
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: 'dist/*.js',
            },
        ],
    ],
    preset: 'conventionalcommits',
    branches: [{name: 'main'}],
};
