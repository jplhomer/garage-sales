# Waukee Garage Sales

Showcases Garage Sales in Waukee on Garage Sale Day.

## Development

Clone the repository and run `yarn` to install dependencies.

Create a file called `now-secrets.json` and insert the Google Maps and Mapbox keys:

```json
{
  "@google_maps_api_key": "<YOUR_KEY>",
  "@mapbox_key": "<YOUR_KEY>"
}
```

## Firebase Functions

Zeit Now is unable to handle loading Firebase's Cloud Firestore JavaScript SDK. This is a bummer, so we have to use Firebase Functions to interact with the database.

These are located in `functions/index.js`. To make changes, install the `firebase-tools` global NPM package, login, and run `firebase deploy`.

## Deployments

All commits on GitHub are deployed automatically to [Zeit Now](https://zeit.co/now).

To manually deploy, run:

```bash
now
```
