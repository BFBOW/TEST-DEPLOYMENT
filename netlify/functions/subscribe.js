const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    const petSummary = Object.entries(data.pets)
      .filter(([_, qty]) => qty > 0)
      .map(([name, qty]) => `${name}: ${qty}`)
      .join(', ');

    const payload = {
      email: data.email,
      attributes: {
        FIRSTNAME: data.firstName,
        LASTNAME: data.lastName,
        SMS: data.phone,
        POSTAL_CODE: data.postalCode,
        AGE_RANGES: data.ageRanges.join(', '),
        HOUSEHOLD_COUNT: Number(data.householdSize),
        PICKUP_OTHERS: data.pickingUpForOthers,
        DIETARY_NOTES: data.dietaryRestrictions.join(', '),
        ADDITIONAL_INFO: data.additionalPreferences,
        HYGIENE_NEEDS: data.hygieneProducts.join(', '),
        HYGIENE_PREFS: data.hygienePreferences,
        PET_DETAILS: petSummary || "None"
      },
      listIds: [2],
      updateEnabled: true
    };

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ message: 'Success' }) };
    } else {
      return { statusCode: response.status, body: JSON.stringify(result) };
    }

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
