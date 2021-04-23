/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9AB195D5-4343-420A-81D9-6D1C98546428"}
 */
var searchText = '';


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3A940541-4AEE-4D2B-8B8E-DDB1D5A09580"}
 */
function add(event) {
	foundset.newRecord()
	plugins.window.showFormPopup(null,forms.add_patient_form,null,'patient')
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C9D2BB47-E503-47C4-A347-D92A477ADCE1"}
 */
function deleteRecord(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord()
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"0368335E-4258-4354-A6D9-3FF1FD045CE6"}
 */
function view_patient_details(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	plugins.window.showFormPopup(null,forms.view_patient_full,null,'patient')
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4DDE9F8D-1596-400C-B43F-2D9A1F531908"}
 */
function edit(event) {
	// TODO Auto-generated method stub
	plugins.window.showFormPopup(null,forms.edit_patient_form,null,'patient')
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EA2AB219-2F81-404B-A945-474EDCFB8F55"}
 */
function onSearch(event) {
	//	 load all records when search is cleared
	if(!searchText){
		foundset.loadAllRecords();
		return;
	}
	
	//	create search object and add search providers
	var search = scopes.svySearch.createSimpleSearch(foundset);
	
	// set the search text
	search.setSearchText(searchText);
	
	//	list of data providers to include in search
	var searchProviders = [
		'firstname',
		'surname',
		'age',
		'gender',
		
		// related data providers
		'doctor.fullname'
	];
	
	// add search providers
	for(var i in searchProviders){
		search.addSearchProvider(searchProviders[i]);
	}
	
	
	//	execute search
	search.loadRecords(foundset);
	application.output(databaseManager.getSQL(foundset));
	application.output(databaseManager.getSQLParameters(foundset));
	

}
