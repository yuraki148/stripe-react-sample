// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KOzxCCFtXuJjyl66Ek7Bq8oQ27XAqwGVMbsWFq4tFEaiYNIG1ya4Lg1cdmdtSo3SvEzVu8wIURcGivGkpNjqNdR00pyJ4Y0aB');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// const YOUR_DOMAIN = 'http://localhost:4242';


app.post('/create-customer', async (req, res) => {
  const {lastName, firstName, email} = req.body
  const customer = await stripe.customers.create({
    name: lastName + " " + firstName,
    email: email,
  });
});

app.listen(4242, () => console.log('Running on port 4242'));