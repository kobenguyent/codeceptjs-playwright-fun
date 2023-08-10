import userSteps from 'codeceptjs-rest-demo/dist/stepObjects/userSteps';

export = function() {

  return actor({
    ...userSteps
  });
}
