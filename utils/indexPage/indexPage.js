'use strict'
import IndexPage from '../../indexPage/indexPage'
let indexPage;
class IndexPageUtils {
	contructor(){
		indexPage = new IndexPage();
	}
	goToCollegeSearch(){
		indexPage.searchButton.click();
	}

}
module.exports = IndexPageUtils;