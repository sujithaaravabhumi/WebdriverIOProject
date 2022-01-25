describe('Menu bar Test', () => {
    it(('Menu bar'), () =>{
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        $(".accept-cookies-button").click()
          $("#sitenav-sidenav-toggle>em").click()
          $('em=Own').waitForClickable({timeout: 2000})
           $('em=Own').click()
           $('em=Accessories').waitForClickable({timeout: 3000})//wait for Accessories
            $('em=Accessories').click()
            $('=Child seats').click()
             expect(browser).toHaveTitleContaining('child seats')
     });
    });
    