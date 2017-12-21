'use strict';

class IndexPage{
	contructor(){
		this.searchButton = browser.driver.findElement(by.css('div[class="imageLink wrapper"]>a'));
	}

}
module.exports = IndexPage;