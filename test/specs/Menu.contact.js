describe('Menu bar Test', () => {
    it(('study news'), () =>{
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        $(".accept-cookies-button").click()
          $("#sitenav-sidenav-toggle>em").click()
         $('em=More').waitForClickable({timeout: 2000})
           $('em=More').click()
           $('em=Contact Us').waitForClickable({timeout: 2000})
            $('em=Contact Us').click()
           const address = $('p*=GÃ¶teborg');
           expect(address).toHaveTextContaining("405 31 GÃ¶teborg")
      });
    });