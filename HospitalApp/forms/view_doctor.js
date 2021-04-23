/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C885D3F1-96D4-41CC-93EF-CB270903FFA2"}
 */
var searchText = '';

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ABBD4043-C143-4A7D-9961-9EE7BAF560AF"}
 */
function add(event) {
	foundset.newRecord()
	plugins.window.showFormPopup(null,forms.add_doctor_form,null,'patient')
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E776AAA7-0AB2-4A78-B5BB-1E44FB43BFFD"}
 */
function deleteRecord(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3F33366C-DE47-429F-98BE-F9E27C96D015"}
 */
function edit(event) {
	// TODO Auto-generated method stub
	plugins.window.showFormPopup(null,forms.edit_doctor_form,null,'patient')
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"706655A0-B048-44E6-86B5-76A1A2E5BB4E"}
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
		'lastname',
		'department'
		
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
