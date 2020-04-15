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
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const logging = require('@google-cloud/logging');
const stripe = require('stripe')(functions.config().stripe.token);
const currency = functions.config().stripe.currency || 'USD';

// When a user is created, automatically create an associated Stripe ID, even if not a paying cx
exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
    const customer = await stripe.customers.create({email: user.email});
    return admin.firestore().collection('stripe_customers').doc(user.uid).set({customer_id: customer.id});
});

exports.startSubscription = functions.https.onCall(async(data,context) => {
    const userId = context.auth.uid;
    const userDoc = await db.doc(`users/${userId}`).get();

})

