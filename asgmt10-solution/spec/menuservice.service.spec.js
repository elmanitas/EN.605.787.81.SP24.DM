describe('menuservice', function () {

    var menuservice;
    var $httpBackend;
    var ApiPath;
  
    beforeEach(function () {
        module('restaurant');
  
        inject(function ($injector) {
            menuservice = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });
    it('should return a menu item', function() {
        var category = "L";
        $httpBackend.whenGET(ApiPath + '/menu_items/' + category + '.json').respond({'category':{'id':81,'name':'Lunch','short_name':'L','special_instructions':'Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.'},'menu_items':[{'description':'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra','name':'Orange Chicken','price_large':9.75,'short_name':'L1'}]});
        menuservice.getMenuItem("L1").then(function(response) {
            expect(response).toEqual({'description':'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra','name':'Orange Chicken','price_large':9.75,'short_name':'L1'});
        });
        $httpBackend.flush();
    });
  
  });
  