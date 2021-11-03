module.exports = {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            useBuiltIns: 'usage',
          },
        },
      ],
    ],
    env: {
        cjs: {
          presets: [
            [
              '@babel/env',
              {
                useBuiltIns: 'usage',
              },
            ],
          ],
        },
    },
  };