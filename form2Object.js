
const form2Object = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
//usage
 var obj=form2Object(document.querySelector('#formId')); 
 console.log(obj);
//output
// { email: 'test@email.com', name: 'Test Name' }
