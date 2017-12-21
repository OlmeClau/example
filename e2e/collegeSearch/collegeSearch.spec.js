'use strict'
import CollegeSearchPage from './collegeSearch.po'
import IndexUtils from '../../utils/indexPage/indexPage'

let collegeSearch, indexUtils;

describe('Search College Page', function(){

	before(function(){
		collegeSearch = new CollegeSearchPage();
		indexUtils = new IndexUtils();

	});
	beforeEach(function() {
   		return browser.ignoreSynchronization = true; //this is necessary because it is a non angular page 
	});
	describe('Search For Computer Software Engineering Opportunities in Ohio for Bachelors', function(){
		it('should list Miami University-Oxford as a 100 percent match', function(){
			indexUtils.goToCollegeSearch();
			collegeSearch.getElementFromLeftMenu('Location', 'a').click();
			collegeSearch.getStateFromLocation('Ohio').click();
			collegeSearch.getElementFromLeftMenu('Majors', 'a').click();
			collegeSearch.degreeTypeRadioOptions.get(0).click(); //this should be improved, because the get() is not a good practice
			collegeSearch.getElementFromLeftMenu('Majors', 'input').sendKeys('Computer Software Engineering');
			//steps and spec are missing

		});

	});
});

