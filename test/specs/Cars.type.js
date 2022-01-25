describe('Volvocars website', () => {
    it('get title', () => {
       browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
       const title = browser.getTitle(); 
       console.log(title);
      expect(browser).toHaveTitleContaining("A million more");
             
    });

    it('Our cars', () => {
      browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
      $(".accept-cookies-button").click()
        $("//*[@id='nav:topNavCarMenu']/em").click()
        const carType = $("//*[@id='site-nav-cars-menu-section-tab-2']/h2")
      expect(carType).toHaveTextContaining("Mild hybrids")
         
    });
  });

