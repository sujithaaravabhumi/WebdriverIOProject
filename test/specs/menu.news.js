describe('Menu bar Test', () => {
    it(('study news'), () =>{
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        $(".accept-cookies-button").click()
          $("#sitenav-sidenav-toggle>em").click()
          $('em=About Volvo').waitForClickable({timeout: 2000})
           $('em=About Volvo').click()
           $('em=Our news').waitForClickable({timeout: 2000})
           $('em=Our news').click()
           expect(browser).toHaveTitleContaining('latest updates')
      });
    });
