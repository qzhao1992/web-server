const stripe = require('stripe')('sk_test_azOy3zWq4yq6Oe5YxHF7YIAb');

async function customer (){
  const customer = await stripe.customers.create({
    email: 'qzhao@uco.edu'
  });
}


module.exports.customer = customer;



