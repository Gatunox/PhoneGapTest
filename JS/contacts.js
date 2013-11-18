/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var contact = {
    // Application Constructor
    initialize: function() {
    	alert('LLAMADO CONTACTO');
    	this.setContact();
        this.getContact();
    },
    
    setContact: function onDeviceReady() {
        var myContact = navigator.contacts.create({"displayName": "Test User"});
        myContact.note = "This contact has a note.";
        console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
    },
    
    getContact: function() {
         // find all contacts with 'Gaston' in any name field
        var options = new ContactFindOptions();
        options.filter = "gaston";
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, this.onSuccess, this.onError, options);
        alert('BUSCANDO CONTACTO');
    }, 
    
     onSuccess: function onSuccess(contacts) {
     	alert('SUCCESS');
     	for (var i = 0; i < contacts.length; i++) {
     		alert("Display Name = " + contacts[i].displayName);
            console.log("Display Name = " + contacts[i].displayName);
        }
   	},

     // onError: Failed to get the contacts
     onError: function onError(contactError) {
     	alert('onError!');
    },
};
