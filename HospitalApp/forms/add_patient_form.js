/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85257E5E-6B5A-4C75-9D02-E34B9E7B3E93",variableType:-4}
 */
var email_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9422C1A1-BB74-4665-8DBF-C88D747F41A3",variableType:-4}
 */
var contact_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC4A35CA-B7E1-43AF-A98D-2B59EACA02D4",variableType:-4}
 */
var doctorid_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6833B01F-264B-4BAD-9B10-DE18B186A031",variableType:-4}
 */
var diagnosis_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64807D7B-0BE4-4FD4-9C6D-8D532604B08F",variableType:-4}
 */
var consultdate_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"583CCF4F-3BBB-4DB3-A166-DE5B70BD310A",variableType:-4}
 */
var province_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5041CA08-C1A7-41CE-83AA-E52AFB9FD15A",variableType:-4}
 */
var city_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA4048DA-8772-406F-B509-6DF563262D1B",variableType:-4}
 */
var address_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFD461BB-8352-4DA7-906C-8BFEF4D9CEC6",variableType:-4}
 */
var gender_isNotEmpty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B16BC44E-B785-4C88-9C54-11C33A3B1E54",variableType:-4}
 */
var zip_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6804E131-E8D5-4B8A-9FFE-AEC8CEBD394A",variableType:-4}
 */
var country_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1960DA09-B0CD-4274-8787-BBBB6ED5BB08",variableType:-4}
 */
var age_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88BE861A-A4A0-4F9F-950C-638C03495F1C",variableType:-4}
 */
var lname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3C4CBF8-7AFE-424B-8757-40E964A3851F",variableType:-4}
 */
var fname_isValid = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C42404FF-FB8E-43C3-A97F-F681655694DD"}
 */
var email_regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6CCCE8AF-672E-4DC5-A16E-F7288EB95C6A"}
 */
var contact_regex = new RegExp('^[0-9]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9FAF74A8-9650-4EED-807A-7600A8D7FD0A"}
 */
var zip_regex = new RegExp('^[0-9]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9715F32-5BC4-4DB6-AF5D-ABCDDFF79B23"}
 */
var country_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6C6CA66-8173-47A6-8C89-5D7698F824F5"}
 */
var age_regex = new RegExp('^[0-9]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"770F903F-2FB7-42CD-8AAD-D3E3540F3035"}
 */
var lname_regex = new RegExp('^[a-zA-Z\s]*$');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AA0A0460-0514-4067-A841-05B957BE70E2"}
 */
var fname_regex = new RegExp('^[a-zA-Z\s]*$');


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"26D54131-4CBE-470F-A8BC-E233EDE0024B"}
 */
function cancel(event) {
	// TODO Auto-generated method stub
	validationDefault();
	clearStyle();
	plugins.window.cancelFormPopup();
	foundset.deleteRecord();
}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"122F16C9-5F5E-40BC-9FAD-0830B148A3B7"}
 */
function saveRecord(event) {
	if(fname_isValid && lname_isValid && age_isValid && country_isValid && zip_isValid && contact_isValid &&
	email_isValid && gender_isNotEmpty && address_isNotEmpty && city_isNotEmpty && province_isNotEmpty && diagnosis_isNotEmpty && doctorid_isNotEmpty){
		foundset.firstname = firstname;
		foundset.surname = surname;
		foundset.gender = gender;
		foundset.age = age;
		foundset.address = address;
		foundset.city = city;
		foundset.province = province;
		foundset.country = country;
		foundset.zipcode = zipcode;
		foundset.contactnumber = contactnumber;
		foundset.emailaddress = emailaddress;
		foundset.consultationdate = application.getTimeStamp();
		foundset.diagnosis = diagnosis;
		databaseManager.saveData();
		plugins.window.cancelFormPopup();
		validationDefault();
		clearStyle();
	}
	else{
		plugins.dialogs.showErrorDialog("Message","Please complete all the input fields.");
	}
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"290C7E5D-39C0-4DB9-85AF-38B3714998EB"}
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
 * @properties={typeid:24,uuid:"2E2624BE-8616-4058-9FEB-69686036F57B"}
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
 * @properties={typeid:24,uuid:"D17C3338-76E4-4524-AF8E-93D3B9950D79"}
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
 * @properties={typeid:24,uuid:"56D648B3-12F6-4F48-94E5-19B8B1059C1F"}
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
 * @properties={typeid:24,uuid:"CABCF0A5-9608-4D2C-A853-25D3740FAF80"}
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
 * @properties={typeid:24,uuid:"A72DF057-A0B2-4A35-ADBC-EA0D13D70444"}
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
 * @properties={typeid:24,uuid:"155FF4AB-F449-49E6-B082-0F8E50844BDF"}
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
 * @properties={typeid:24,uuid:"29D05BDE-D9BE-4140-AA2B-1DB71DA9807D"}
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
 * @properties={typeid:24,uuid:"E7C0779D-9E27-4A0A-8C93-55ABA1C0D000"}
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
 * @properties={typeid:24,uuid:"61A1F4B7-EC7F-42AA-867C-E969613EAA9C"}
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
 * @properties={typeid:24,uuid:"7B094A7C-6793-4A9D-A925-60F3410AAD89"}
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
 * @properties={typeid:24,uuid:"EB7848DE-12A9-4F8A-91EB-02069762A1E5"}
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
 * @properties={typeid:24,uuid:"C0C8131D-931F-43A1-84E4-647FB6027B11"}
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
 * @properties={typeid:24,uuid:"ADBE76C2-C21C-4B2C-89B1-6DBD4D80FAB4"}
 */
function doctorid_onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if(doctorid != null){
		doctorid_isNotEmpty = true;
	}
	return false;
}

/**
 * @properties={typeid:24,uuid:"59398876-38ED-4623-AD6C-D2523BEDDE96"}
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
 * @properties={typeid:24,uuid:"CF2B8DAC-54FD-47CB-B02C-8F08065B5EA6"}
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
