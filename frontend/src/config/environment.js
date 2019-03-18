var environments = {
	staging: {
		FIREBASE_API_KEY: 'XX',
		FIREBASE_AUTH_DOMAIN: 'XX',
		FIREBASE_DATABASE_URL: 'XX',
		FIREBASE_PROJECT_ID: 'XX',
		FIREBASE_STORAGE_BUCKET: 'XX',
		FIREBASE_MESSAGING_SENDER_ID: 'XX',
		GOOGLE_CLOUD_VISION_API_KEY: 'XX'
	},
	production: {
		// Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}
function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
