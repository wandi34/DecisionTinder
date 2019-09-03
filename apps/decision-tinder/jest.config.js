module.exports = {
  name: 'decision-tinder',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/decision-tinder',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
