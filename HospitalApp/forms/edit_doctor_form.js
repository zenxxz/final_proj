/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A65CE144-7FAF-4544-B47B-88BE6935962E",variableType:-4}
 */
var dept_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E1DB78C-C3E8-4B8D-AA7D-7DF50DB11E15",variableType:-4}
 */
var lname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A34B13BA-6556-4181-AA7A-FBCA3B13AEC3",variableType:-4}
 */
var fname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FD80003-1FD2-415A-961A-A5FC008DCA31"}
 */
var department_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECA526CD-3992-4387-89A5-37446E20F23B"}
 */
var lastname_regex = new RegExp('^[a-zA-Z\s]*$');;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0042665F-1C96-42E4-98B4-9C68386AD31D"}
 */
var firstname_regex = new RegExp('^[a-zA-Z\s]*$');;


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"94DC0A0B-051E-4731-A452-79DA4507B564"}
 */
function saveEdit(event) {
		databaseManager.saveData();
		plugins.window.cancelFormPopup();
		clearStyle();
		validationDefault();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"78728EF0-0C13-4B8F-A330-9ED04822008A"}
 */
function cancel(event) {
	validationDefault();
	clearStyle();
	databaseManager.revertEditedRecords()
	plugins.window.cancelFormPopup()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4CBB80E0-A1C7-462D-AA2F-8FDBF73B5877"}
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
 * @properties={typeid:24,uuid:"D1285E2D-FBAF-4B4A-B322-629710FFA55B"}
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
 * @properties={typeid:24,uuid:"B21A1490-6094-4AB5-AB9C-C5BC530A031C"}
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
 * @properties={typeid:24,uuid:"E5CF884B-DFFC-474A-B9A8-CEF1CD59FBD3"}
 */
function clearStyle() {
	elements.txtbox_firstname.removeStyleClass('field');
	elements.txtbox_lastname.removeStyleClass('field');
	elements.cbox_department.removeStyleClass('field');
}

/**
 * @properties={typeid:24,uuid:"32C68CD7-1196-48F9-B53E-979ECA10B420"}
 */
function validationDefault() {
	fname_isValid = false;
	lname_isValid = false;
	dept_isValid = false;
}