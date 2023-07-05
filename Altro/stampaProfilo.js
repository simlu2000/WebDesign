/*SCRIPT STAMPA DATI DB*/

/*Esecuzione script:
    Installare da terminale:
        npm install airtable  
        npm install -g nodemon

    Compilare:
        nodemon prova.js
*/
function signin(){
    
    const Airtable = require('airtable');
    const { Console } = require('console');
    const base = new Airtable({ apiKey: 'keyHVYUoWHRcDuDRx' }).base('appQykezH9MJPc0cf');

    /*
    Per ogni tupla stampa il nome e lo stato
    base('Projects').select().all(function(err, records) {
        if (err) { 
            console.error(err); return;
        }
        records.forEach(function(record) {
            console.log(record.get('Name'), "\t", record.get('Status'));
        });
    });*/


    //Per ogni record stampa il nome
    base('Users').select({
        // Selecting the first 3 records in Grid view:
        //maxRecords: 3,
        view: "Users"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            console.log('PAGINA DI', record.get('Name'));
                console.log('Nome: ', record.get('Name'));
                console.log('Cognome: ', record.get('Surname'));
                console.log('Cellulare: ', record.get('Telephone'));
                console.log('Email: ', record.get('Email'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}