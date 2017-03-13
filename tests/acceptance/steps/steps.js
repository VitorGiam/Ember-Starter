import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .given('I type visit the page foods', function(next) {
      visit('/foods');
      assert.ok(true, this.step);
      andThen(() => next());
    })
    .when('I look in the folder', function(next) {
      assert.ok(true, this.step);
      next();
    });
}
