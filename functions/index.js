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
// const cors = require('cors')({
//     origin: true,
//   });
const axios = require('axios');
const logging = require('@google-cloud/logging');
// const stripe = require('stripe')(functions.config().stripe.token);
// const currency = functions.config().stripe.currency || 'USD';

// When a user is created, automatically create an associated Stripe ID, even if not a paying cx
// exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
//     const customer = await stripe.customers.create({email: user.email});
//     return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
// });


exports.linkedinCode = functions.https.onCall((data, context) => {
    console.log('hello from function')
    console.log('data', data)
})


exports.linkedinUser = functions.https.onCall((data, context) => {
    
    console.log('hello logging');
    //data.linkedinUser is the "code"
    console.log('data.linkedinUser', data.linkedinUser);
    // request access token from linkedin
    return axios.get("https://www.linkedin.com/oauth/v2/accessToken", { 
        params: {
            grant_type: "authorization_code",
            code: `${data.linkedinUser}`,
            redirect_uri: "http://localhost:3000/acctsetup",
            client_id: "86pzo1h1r9o6iu",
            client_secret: "RO4LMC5jDR2r4VHM"
        }
      })
        .then((res) => {
            console.log('response data', res.data);
            let response = res.data;
            return response
        })
        .then((response) => {
            // make second request to linkedin for the user info
            // respones.access_token
            console.log('response access token', response.access_token)
            return axios.get('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,email-address,public-profile-url,profilePicture(displayImage~:playableStreams))', {
                headers: {
                    Authorization: `Bearer ${response.access_token}`
                }
            })
            .then((res) => {
                console.log(res.data)
                return res.data
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        }) 
})

//const logging = require('@google-cloud/logging')();
const stripe = require('stripe')(functions.config().stripe.token);
const currency = functions.config().stripe.currency || 'USD';

let db = admin.firestore();

exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
    const customer = await stripe.customers.create({email: user.email});
    return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
});


/*Past this line, code is developed by Patrice Blocker*/


exports.attachPaymentSource = functions.https.onCall(async(data,context) => {
    console.log('attach payment source entry point')
    try{
      const userInfo = await admin.firestore().collection('stripe_customers').doc(context.auth.uid).get();
      const userInfoVal = userInfo.data();
      const stripeId = userInfoVal.customer_id;

      stripe.paymentMethods.attach(data,{customer:stripeId});

     return admin.firestore().collection('stripe_customers').doc(user.uid).collection('tokens').add({token:data});
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
            default_payment_method:data.paymentInfo
           
        }); 
       return userInfoVal;
    } catch (error) {
        return('Something Went Wrong')
        // await context.ref.set({error: userFacingMessage(error)}, { merge: true });
        // return reportError(error, {user: context.params.userId})
    }
});








