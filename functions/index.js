const functions = require('firebase-functions');
'use strict';

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Only the first function is copyrighted. 
 */

const admin = require('firebase-admin');
admin.initializeApp();
//const logging = require('@google-cloud/logging')();
const stripe = require('stripe')(functions.config().stripe.token);
const currency = functions.config().stripe.currency || 'USD';

let db = admin.firestore();

exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
    const customer = await stripe.customers.create({email: user.email});
    return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
});

exports.attachPaymentSource = functions.https.onCall(async(data,context) => {
    console.log('attach payment source entry point')
    try{
      const userInfo = await admin.firestore().collection('stripe_customers').doc(context.auth.uid).get();
      const userInfoVal = userInfo.data();
      const stripeId = userInfoVal.customer_id;

      const paymentMethodAttach = await stripe.paymentMethods.attach(
        data,
        {
          customer:stripeId,
        }
      );
      return admin.firestore().collection('stripe_customers').doc(user.uid).collection('tokens').add({token:data});
    } catch (error) {
        return('Something Went Wrong')
    }
});

exports.createPaymentIntent = functions.https.onCall(async(data,context) => {
    try {
      const userInfo = await admin.firestore().collection('stripe_customers').doc(context.auth.uid).get();
      const userInfoVal = userInfo.data();
      const stripeId = userInfoVal.customer_id;

      //idempotencyKey to protect against double charges
      const idempotencyKey = context.auth.uid;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: data === "quarterly" ? 600 : 1800,
        currency: 'usd',
        customer: stripeId,
        setup_future_usage:on_session,
      });

      //return userInfoVal;
      return admin.firestore().collection('stripe_customers').doc(context.params.userId).collection("sources").doc(response.fingerprint).set(response, {merge: true});
    } catch (error) {
      return('Something Went Wrong')
    }
});

exports.createStripeSubscription = functions.https.onCall(async(data,context) => {
    try{
        const userInfo = await admin.firestore().collection('stripe_customers').doc(context.auth.uid).get();
        const userInfoVal = userInfo.data();
        const stripeId = userInfoVal.customer_id;
        const sub = await stripe.subscriptions.create({
            customer:stripeId,
            items:[{
                plan: (data.plan === 'quarterly' ? 'plan_HAvh1sTIRb3vb7' : 'plan_HDdF4APRmXog7H') 
              
            }],
            coupon:data.coupon,
           // default_payment_method:data.paymentInfo
           
        }); 
       return userInfoVal;
    } catch (error) {
        return('Something Went Wrong')
        // await context.ref.set({error: userFacingMessage(error)}, { merge: true });
        // return reportError(error, {user: context.params.userId})
    }
});








