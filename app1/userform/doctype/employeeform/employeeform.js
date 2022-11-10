// Copyright (c) 2022, Sunil BHave and contributors
// For license information, please see license.txt

frappe.ui.form.on('EmployeeForm', {


// //*--------------Client Side Events-------------------*//

// refresh: function(frm){
// 	frappe.msgprint('Hello User, Its an "Refresh" event')
// }

// before_load: function(frm){
// 	frappe.msgprint('Hello User, Its an "Before" event')
// },

// onload: function(frm){
// 	frappe.msgprint('Hello User, Its an "Onload" event')
// }

// validate:function(frm){
// 	frappe.throw('Hello User, Its an "Onload" event,Its run after validate the form')
// }

// before_save: function(frm){
// 	frappe.throw('Hello User, Its Before Save event')
// }

// after_save: function(frm){
// 	frappe.msgprint('Hello User, Its After Save event')
// }

// before_submit: function(frm){
// 	frappe.msgprint('Hello User, Its Before Submit event')
// },

// on_submit: function(frm){
// 	frappe.msgprint('Hello User, Its Before Submit event')
// },

// after_cancle: function(frm){
// 	frappe.msgprint('Hello User, Its After Cancel event')
// },

// before_cancel: function(frm){
// 	frappe.msgprint('Hello User, Its Before Cancle event')
// },

// enable: function(frm){
// 	frappe.msgprint('Hello User, Its a enable event')
// },

// city_on_form_rendered: function(frm){
// 	frappe.msgprint('PLease Check enable')
// },




//**-----------------------**------------------------------ */

//*--------------Print Value from the Doc Field-----------------*//
// 	after_save:function(frm){
	// 		frappe.msgprint(__('Full name is : {0}',[frm.doc.fname+' '+ frm.doc.last_name]))
	
	// 		for(let row of frm.doc.contactlist){
		// 			frappe.msgprint(__('{0}. Personal Number is : {1} and Professional Number is  : {2}',[row.idx,row.personal,row.professional]))
		// 		}
		
		
		// }
		
//**-----------------------**------------------------------ */

//*------------Intro of the docTpye-------------*//
// Intro For The form 
// refresh :function(frm){
	
	// for every form
	//frm.set_intro("Welcome to Employee Detail Form")
	
	// 	// for each new form
	// 	if(frm.is_new()){
		// 	frm.set_intro("Welcome to Employee Detail Form")
		// }
		
		// }
		
		
//**-----------------------**------------------------------ */


//*--------Create a Dialouge Box Form-----------------*//

// refresh: function(frm){
// 	if(frm.is_new()){
// 		let d = new frappe.ui.Dialog({
// 			title : 'User Detail Form',
// 			fields : [{
// 				label : 'First Name',
// 				fieldname : 'fname',
// 				fieldtype: 'Data',

// 			},
// 			{
// 				label : 'Last Name',
// 				fieldname : 'last_name',
// 				fieldtype: 'Data',

// 			},
// 			{
// 				label : 'City',
// 				fieldname : 'city',
// 				fieldtype: 'Data',

// 			},
// 		],
// 		primary_action_lable: 'Submit',
// 		primary_action(values){
// 			frm.set_value('fname',values.fname)
// 			frm.set_value('last_name',values.last_name)
// 			frm.set_value('city',values.city)
// 		d.hide()},

// 		})
// 		d.show()
// 	}
// }

//**-----------------------**------------------------------ */

//*--------To Check if form is Saved or not----------------*//

// enable:function(frm){
// 	if(frm.is_dirty){
// 		frappe.throw('Please Save the form')
// 	}
// }

//**-----------------------**------------------------------ */

//*--------Form Trigge Event----------------*//

// refresh: function(frm){
// 	if(!frm.is_new()){
// 		frm.trigger('test_fun');
// 	}
// },
// test_fun(frm){
// 	frappe.msgprint(__('The Test_Function is Triggered'))
// }

//**-----------------------**------------------------------ */


//*--------Set Value in the field-----------------*//

// To Set Field in the form after Save

// validate:function(frm){
//   frm.set_value('city','GhatKopar')

// }

//*---------Set the Value in Child Table------------*//

// enable:function(frm){
// let row = frm.add_child('contactlist',{
// 	personal : 859566,
// 	professional : 9562266,
// 	ecompany : 'Atrina Technology',
// 	edesignation : 'Frappe Developer'
// })
// frm.refresh_field('contactlist') //  It is used to refresh the table(child)
// }


//**-----------------------**------------------------------ */


//*---------Create a Coustom Button-----------------*//

// refresh: function(frm){
// 	frm.add_custom_button('Click Me',()=>{
// 		frappe.msgprint('You Clicked Click Me')
// 	})
// }

// Drop Down Button

refresh: function(frm){
	frm.add_custom_button('Click Me 1',()=>{
		frappe.msgprint('You Clicked Click Me 1')
	},'Click Me')

	frm.add_custom_button('Click Me 2',()=>{
		frappe.msgprint('You Clicked Click Me 2')
	},'Click Me')
},

//**-----------------------**------------------------------ */


//*---------Fetch Property (and Change the Field Settings)-----------------*//

// refresh:function(frm){
// 	frm.set_df_property('city','read_only', !frm.is_new())
// },

//**-----------------------**------------------------------ */


//*---------Frappe Cache-----------------*//

validate:function(frm)
{
frappe.cache().set_value('ECity','frm.city')

// let dc = frapp.cache().get_value('ECity')

frappe.msgprint(__('Value is {0}',[frapp.cache().get_value('ECity')]))
}



//**-----------------------**------------------------------ */
});



