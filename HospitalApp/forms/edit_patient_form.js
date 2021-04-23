/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A3C0E2C-7F68-4CBF-B859-ED2E21A0216B",variableType:-4}
 */
var email_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"253C3DB2-17F9-4696-AB91-CA9832952650",variableType:-4}
 */
var contact_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF993522-4E95-45DA-A38E-4B6A7D2573F7",variableType:-4}
 */
var doctorid_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FABD480-6867-46F5-9A2D-A41E91335C78",variableType:-4}
 */
var diagnosis_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C86E200-6F4E-438A-9A96-7EB498EB1DD4",variableType:-4}
 */
var consultdate_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4507350E-1935-47A2-BF38-6C202D9B3931",variableType:-4}
 */
var province_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F631F27B-5AB9-44BF-9F43-3BBF858F4E75",variableType:-4}
 */
var city_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CBEA7B9F-A44E-46CB-95D1-A4A27A30C68A",variableType:-4}
 */
var address_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D40BF23B-0420-4DD6-B672-F06774D2466E",variableType:-4}
 */
var gender_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F5DEE63D-E4F8-48FB-94DB-802913E94920",variableType:-4}
 */
var zip_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E08FF29C-C1C2-4F46-9EC7-D5B45AA34C48",variableType:-4}
 */
var country_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27963C83-7174-4051-9E9B-EAE6172D3592",variableType:-4}
 */
var age_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1B0CBEBD-7EAD-4A62-B8CB-E6C931BE3C28",variableType:-4}
 */
var lname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA52D933-8002-4420-B160-23A6BF93789F",variableType:-4}
 */
var fname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"642767A5-72A7-4B31-975F-A2050496C184"}
 */
var email_regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC434E13-967F-430A-8937-C8CC8B0FD034"}
 */
var contact_regex = new RegExp('^[0-9]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AA24AAED-B2AC-4413-A40B-41CCAEC77594"}
 */
var zip_regex = new RegExp('^[0-9]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"584D1BC5-9EF1-4A5E-90C5-EA2A32438F3D"}
 */
var country_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A77F757B-0CCD-48DA-8544-961A2655294B"}
 */
var age_regex = new RegExp('^[0-9]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB99D6C5-DD9C-4F68-B636-1DA87451CD63"}
 */
var lname_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32A4F052-E466-4801-86E1-2A11A140A48C"}
 */
var fname_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E8EBAD0E-E477-47BE-BECC-165D2A432B5D"}
 */
function cancel(event) {
	// TODO Auto-generated method stub
	validationDefault();
	clearStyle();
	databaseManager.revertEditedRecords()
	plugins.window.cancelFormPopup()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CBC0ECC0-70E7-48FC-82AF-F9E70A57EF1F"}
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
 * @properties={typeid:24,uuid:"870F2978-B415-4CF3-A19E-359389B7E558"}
 */
function firstname_validation(event) {
	// TODO Auto-generated method stub
	if(firstname){
		var fname_validate = fname_regex.test(firstname);
		
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
 * @properties={typeid:24,uuid:"1064C864-15FD-4C18-B1E2-64546C472E1E"}
 */
function lastname_validation(event) {
	// TODO Auto-generated method stub
	if(surname){
		var lname_validate = lname_regex.test(surname);
		
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
 * @properties={typeid:24,uuid:"5D796B1B-7369-4E43-8569-3EE098A91AF2"}
 */
function age_validation(event) {
	// TODO Auto-generated method stub
	if(age){
		var age_validate = age_regex.test(age);
		
		if(age_validate){
			elements.txtbox_age.removeStyleClass('field');
			age_isValid = true;
			
		}
		else{
			elements.txtbox_age.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","Age must be numbers.");
		}
	}

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"84484514-0994-4A16-ABC9-D564EED1462F"}
 */
function country_validation(event) {
	// TODO Auto-generated method stub
	if(country){
		var country_validate = country_regex.test(country);
		
		if(country_validate){
			elements.txtbox_country.removeStyleClass('field');
			country_isValid = true;
			
		}
		else{
			elements.txtbox_country.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","Country must be letters.");
		}
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A7DC8061-528B-4849-ADCD-E550DC9CD2BA"}
 */
function zip_validation(event) {
	// TODO Auto-generated method stub
	if(zipcode){
		var zip_validate = zip_regex.test(zipcode);
		
		if(zip_validate){
			elements.txtbox_zipcode.removeStyleClass('field');
			zip_isValid = true;
			
		}
		else{
			elements.txtbox_zipcode.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","Zipcode must be numbers");
		}
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"390C072A-D6B7-4A98-8265-E7A5D74715AB"}
 */
function contact_validation(event) {
	// TODO Auto-generated method stub
	if(contactnumber){
		var contact_validate = contact_regex.test(contactnumber);
		
		if(contact_validate){
			elements.txtbox_contactno.removeStyleClass('field');
			contact_isValid = true;
			
		}
		else{
			elements.txtbox_contactno.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","Invalid Contact number");
		}
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F9F7894B-9F32-44AC-93FC-E1BBD1383EB5"}
 */
function email_validation(event) {
	// TODO Auto-generated method stub
	if(emailaddress){
		var email_validate = email_regex.test(emailaddress);
		
		if(email_validate){
			elements.txtbox_email.removeStyleClass('field');
			email_isValid = true;
			
		}
		else{
			elements.txtbox_email.addStyleClass('field');
			plugins.dialogs.showErrorDialog("Invalid Input","Not an email address");
		}
	}
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"1FB995AD-CD47-40B7-91EF-F888A074AD9F"}
 */
function gender_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(gender != null){
		gender_isNotEmpty = true;
	}
	return true
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"F56AA60C-642B-49B2-A470-AA476087398E"}
 */
function address_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(address != null){
		address_isNotEmpty = true;
		application.output('address changed')
	}
	return true
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"339EBA9E-81C2-4929-9F6B-82E7B84B589B"}
 */
function city_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(city != null){
		city_isNotEmpty = true;
	}
	return true
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"AD61A857-061F-46CC-8CF4-CE212AC3F1FD"}
 */
function province_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(province != null){
		province_isNotEmpty = true;
	}
	return true
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"D0097590-2D71-4E7C-A6F6-356B37AA11BD"}
 */
function consultdate_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(consultationdate != null){
		consultdate_isNotEmpty = true;
	}
	return true
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"F9345A95-542E-4D14-BC4F-8E2EB92BE483"}
 */
function diagnosis_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(diagnosis != null){
		diagnosis_isNotEmpty = true;
	}
	return true
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"C4E59DF7-0A13-4B76-80E6-CF84B622052F"}
 */
function doctorid_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(doctorid != null){
		doctorid_isNotEmpty = true;
	}
	return false;
}

/**
 * @properties={typeid:24,uuid:"7B90BE25-11C5-409F-B62F-240CABED097E"}
 */
function clearStyle() {
	// TODO Auto-generated method stub
	elements.txtbox_firstname.removeStyleClass('field');
	elements.txtbox_lastname.removeStyleClass('field');
	elements.txtbox_age.removeStyleClass('field');
	elements.textarea_address.removeStyleClass('field');
	elements.txtbox_city.removeStyleClass('field');
	elements.txtbox_province.removeStyleClass('field');
	elements.txtbox_country.removeStyleClass('field');
	elements.txtbox_zipcode.removeStyleClass('field');
	elements.txtbox_contactno.removeStyleClass('field');
	elements.txtbox_email.removeStyleClass('field');
	elements.calendar_consult.removeStyleClass('field');
	elements.textarea_diagnosis.removeStyleClass('field');
	elements.cbox_doctor.removeStyleClass('field');
	
}

/**
 * @properties={typeid:24,uuid:"B99AC3E5-7ED5-4BCC-A408-FBFC0D607FA1"}
 */
function validationDefault() {
	// TODO Auto-generated method stub
	fname_isValid = false;
	lname_isValid = false;
	age_isValid = false;
	country_isValid = false;
	zip_isValid = false;
	contact_isValid = false;
	email_isValid = false;
	gender_isNotEmpty = false;
	address_isNotEmpty = false;
	city_isNotEmpty = false;
	province_isNotEmpty = false;
	consultdate_isNotEmpty = false;
	diagnosis_isNotEmpty = false;
	doctorid_isNotEmpty = false;
}
