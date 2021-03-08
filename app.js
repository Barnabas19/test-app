var MongoClient = require('mongodb').MongoClient;

var connectionUrl = 'mongodb://localhost:27017/upland-primary-school';

var collection1 = 'class1';
var collection2 = 'class2';
var collection3 = 'class3';
var collection4 = 'class4';
var collection5 = 'class5';


var class1 = [
    {
        'Name': 'Babatunde Barnabas',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'Aje cole',
        'Gender': 'female',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'tunde Badmus',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'fola tola',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    }
];

var class2 = [
    {
        'Name': 'Babatunde Barnabas',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'Aje cole',
        'Gender': 'female',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'tunde Badmus',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'fola tola',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    }
];

var class3 = [
    {
        'Name': 'Babatunde Barnabas',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'Aje cole',
        'Gender': 'female',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'tunde Badmus',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'fola tola',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    }
];

var class4 = [
    {
        'Name': 'Babatunde Barnabas',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'Aje cole',
        'Gender': 'female',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'tunde Badmus',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'fola tola',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    }
];

var class5 = [
    {
        'Name': 'Babatunde Barnabas',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'Aje cole',
        'Gender': 'female',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'tunde Badmus',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    },
    {
        'Name': 'fola tola',
        'Gender': 'male',
        'Age': '3',
        'Height': '1foot',
        'Weight': '5kg'
    }
];

MongoClient.connect(connectionUrl, function(error, client){
    if(!error){
        console.log("connection to the server was successful");
        var db = client.db('upland-primary-school');
        
        var collectionObj1 = db.collection(collection1);
        var collectionObj2 = db.collection(collection2);
        var collectionObj3 = db.collection(collection3);
        var collectionObj4 = db.collection(collection4);
        var collectionObj5 = db.collection(collection5);

        collectionObj1.insert(class1, function(error, result){
            if(!error){
                console.log(`Success! ${result.ops.length} chapters have been inserted into the database`);
            }else{
                console.log("An error was encountered oops!");
            }
        });
        collectionObj2.insert(class2, function(error, result){
            if(!error){
                console.log(`Success! ${result.ops.length} chapters have been inserted into the database`);
            }else{
                console.log("An error was encountered oops!");
            }
        });
        collectionObj3.insert(class3, function(error, result){
            if(!error){
                console.log(`Success! ${result.ops.length} chapters have been inserted into the database`);
            }else{
                console.log("An error was encountered oops!");
            }
        });
        collectionObj4.insert(class4, function(error, result){
            if(!error){
                console.log(`Success! ${result.ops.length} chapters have been inserted into the database`);
            }else{
                console.log("An error was encountered oops!");
            }
        });
        collectionObj5.insert(class5, function(error, result){
            if(!error){
                console.log(`Success! ${result.ops.length} chapters have been inserted into the database`);
            }else{
                console.log("An error was encountered oops!");
            }
        });
        client.close()
    }else{
        console.log("connection was not successful");
    }
});