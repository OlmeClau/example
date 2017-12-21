'use strict';
class CollegeSearchPage{
	contructor(){
		this.leftMenuElements = browser.driver.findElements(by.css('h3[class^="ui-accordion-header"']));
		this.locationList = browser.driver.findElements(by.css('h3[class^="ui-accordion-header"']));
		this.degreeTypeRadioOptions = browser.driver.findElements(by.css('input[id^="degreeTypeRadio"]']));
	}

	getComponentContaining(optionName){
		return this.leftMenuElements.filter(component => {
			return component.findElement(by.cssContainingText('a',optionName)).isPresent()
				.then(value => {
					return value === true;
				});
				
		}).first();
	}
	getElementFromLeftMenu(optionName, componentType){
		let parent = this.getComponentContaining(optionName);
		return parent.findElement(by.tagName(componentType));
	}
	getStateFromLocation(stateName){
		return this.locationList.filter(state => {
			return state.getText()
				.then(text => {
					return text === stateName;
				});
				
		}).first();
	}
	getMatchPer(){
		
	}

}
module.exports = CollegeSearchPage;