/**
 * Simple google search test
 */

test.describe('Google Search (advanced)', function() {
  var driver;

  test.before(function() {
    driver = new Driver();
  });

  test.it('should contain "google" in title', function() {
    driver.get('http://www.google.com');
    assert(driver.getTitle()).contains('Google');
  });

  test.it('should append query to title', function() {
    driver.get('http://www.google.com');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.sleep(1000);
    driver.findElement(By.name('q')).sendKeys(Key.ENTER);
    driver.wait(until.titleContains('webdriver'), 2000);
  });

  test.after(function() {
    driver.quit();
  });
});