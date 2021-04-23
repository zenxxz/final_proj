/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"570D599C-E13C-4C0E-99B8-3192C37C429D",variableType:-4}
 */
var dept_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C26A7EF0-8478-4778-A111-23FED88EBCC5",variableType:-4}
 */
var lname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"392125BB-0280-4B9F-BDD1-7B7917EFC511",variableType:-4}
 */
var fname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09C82C3B-96C7-4782-8436-96C415B3AB12"}
 */
var department_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41A78FD0-89FB-4991-876F-D03DB3DF81B3"}
 */
var lastname_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3798FBFE-3DC6-4C1D-82BF-81EFA7FAA40C"}
 */
var firstname_regex = new RegExp('^[a-zA-Z\s]*$');


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1A3C8A49-D90E-4718-95B0-4138E5B8FF6C"}
 */
function save(event) {
	
		foundset.firstname = firstname;
		foundset.lastname = lastname;
		foundset.department = department;
		foundset.fullname = 'Dr. ' + firstname + ' '+ lastname;
		databaseManager.saveData();
		plugins.window.cancelFormPopup();
		clearStyle();
		validationDefault();
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E982313A-F8CE-41AB-AD11-05FBB895D325"}
 */
function cancel(event) {
	plugins.window.cancelFormPopup();
	foundset.deleteRecord();
	validationDefault();
	clearStyle();

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"80C25208-5117-4177-BD9F-E2899766D309"}
 */
function firstname_validation(event) {
	if(firstname){
		var fname_validate = firstname_regex.test(firstname);
		
		if(fname_validate){
			elements.txtbox_firstname.removeStyleClass('field');
			fname_isValid = true;
			
		}
		else{
			elements.txtbox_firstname.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","First Name must be letters.");
		}
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C13F1447-E706-4CAB-AD53-E10EB689CCA0"}
 */
function lastname_validation(event) {
	// TODO Auto-generated method stub
	if(lastname){
		var lname_validate = lastname_regex.test(lastname);
		
		if(lname_validate){
			elements.txtbox_lastname.removeStyleClass('field');
			lname_isValid = true;
			
		}
		else{
			elements.txtbox_lastname.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","Last Name must be letters.");
		}
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"42122B5E-2559-4ECD-B97A-697F2F7CB7FE"}
 */
function department_validation(event) {
	if(department != null){
		elements.cbox_department.removeStyleClass('field');
		dept_isValid = true;
	}
	else{
		elements.cbox_department.addStyleClass('field');
		plugins.dialogs.showErrorDialog("Invalid Input","Department must not be empty.");
	}
}

/**
 * @properties={typeid:24,uuid:"4FBE77C8-FD6E-4D10-A1E4-483B7F99C344"}
 */
function clearStyle() {
	elements.txtbox_firstname.removeStyleClass('field');
	elements.txtbox_lastname.removeStyleClass('field');
	elements.cbox_department.removeStyleClass('field');
}

/**
 * @properties={typeid:24,uuid:"88819672-215A-4046-863B-30EDB827EBBC"}
 */
function validationDefault() {
	fname_isValid = false;
	lname_isValid = false;
	dept_isValid = false;
}
